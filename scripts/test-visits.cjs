// Run with: node scripts/test-visits.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const {randomUUID} = require('node:crypto');
const ts = require('typescript');
const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync(':memory:');
let calls = 0;
const d1 = {async d1Request(sql, params = []) {
  calls++;
  const statement = database.prepare(sql);
  return {results: /^SELECT/.test(sql) ? statement.all(...params) : (statement.run(...params), [])};
}};
function load(file, mocks, globals = {}) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
  vm.runInNewContext(code, {exports, require: name => name in mocks ? mocks[name] : require(name), process, Buffer, Date, Response, URL, console, ...globals}, {filename: file});
  return exports;
}
process.env.ADMIN_SESSION_SECRET = 'test-only-secret-with-at-least-32-characters';
const originModule = load('lib/visit-origin.ts', {});
assert.equal(originModule.legacyVisitOrigin('https://fastzone2.vercel.app', 'https://fastzone2.vercel.app/api/visits'), true);
assert.equal(originModule.legacyVisitOrigin('https://attacker.example', 'https://fastzone2.vercel.app/api/visits'), false);
assert.equal(originModule.legacyVisitOrigin('https://fastzone2.vercel.app', 'https://www.fastzone.sa/api/visits'), false);
const visits = load('lib/visits.ts', {'server-only': {}, '@/lib/d1-rest': d1});
let jar = {}, admin = false, lastCookie;
class NextResponse extends Response {
  cookies = {set(name, value, options) {lastCookie = {name, value, options};}};
}
const adminModule = {adminCookie: 'admin', trustedOrigin: value => value === 'https://www.fastzone.sa', validSession: value => value === 'valid', allowedAdmin: async () => admin};
const route = load('app/api/visits/route.ts', {'next/headers': {cookies: async () => ({get: name => jar[name] ? {value: jar[name]} : undefined})}, 'next/server': {NextResponse}, '@/lib/admin': adminModule, '@/lib/visits': visits, '@/lib/visit-origin': originModule});
const statsRoute = load('app/api/admin/visits/route.ts', {'@/lib/admin': adminModule, '@/lib/visits': visits, '@/lib/visit-origin': originModule});
const request = (origin = 'https://www.fastzone.sa', agent = 'Mozilla/5.0', eventId = randomUUID()) => new Request('https://www.fastzone.sa/api/visits', {method: 'POST', headers: {origin, 'user-agent': agent}, body: JSON.stringify({eventId})});
(async () => {
  const now = Date.now(), token = visits.visitToken(now);
  assert.equal(visits.recentVisit(token, now + 100), true);
  assert.equal(visits.recentVisit(token, now + 1800000), false);
  assert.equal(visits.recentVisit(token + '.extra'), false);
  assert.equal(visits.recentVisit(token.replace(/.$/, '!')), false);
  assert.equal(visits.recentVisit(visits.visitToken(now + 10000), now), false);
  assert.equal(visits.visitDay(new Date('2026-10-24T20:59:59Z')), '2026-10-24');
  assert.equal(visits.visitDay(new Date('2026-10-24T21:00:00Z')), '2026-10-25');
  assert.equal((await statsRoute.GET()).status, 403);
  assert.equal(calls, 0, 'Unauthorized statistics never query the database');
  assert.equal((await route.POST(request('https://other.example'))).status, 403);
  assert.equal((await route.POST(request(undefined, 'Googlebot'))).status, 204);
  jar.admin = 'valid';
  await route.POST(request());
  assert.equal(calls, 0, 'Bots and signed-in administrators are excluded');
  jar = {};
  const firstEvent = randomUUID();
  assert.equal((await route.POST(request(undefined, undefined, firstEvent))).status, 204);
  assert.equal(lastCookie.options.httpOnly, true);
  assert.equal(lastCookie.options.secure, true);
  // A lost response is retried with no cookie: it must not count twice.
  await route.POST(request(undefined, undefined, firstEvent));
  assert.equal((await visits.visitStats()).pageViews, 1);
  assert.equal((await visits.visitStats()).total, 1);
  jar[visits.visitCookie] = lastCookie.value;
  await route.POST(request());
  assert.equal((await visits.visitStats()).total, 1, 'Reloads stay in the same session');
  assert.equal((await visits.visitStats()).pageViews, 2, 'Reloads add a page view');
  jar[visits.visitCookie] = visits.visitToken(now - 1800001);
  await route.POST(request());
  assert.equal((await visits.visitStats()).total, 2, 'Expired visit starts a new session');
  await Promise.all(Array.from({length: 25}, () => visits.recordPageView(randomUUID(), false)));
  assert.equal((await visits.visitStats()).pageViews, 28, 'Atomic increments preserve concurrent page views');
  const repeated = randomUUID();
  await Promise.all(Array.from({length: 10}, () => visits.recordPageView(repeated, true)));
  assert.equal((await visits.visitStats()).pageViews, 29, 'Concurrent retries count once');
  assert.equal((await visits.visitStats()).total, 3, 'Concurrent retries create just one session');
  database.prepare('INSERT INTO site_visit_days VALUES (?, ?)').run('2020-01-01', 10);
  admin = true;
  const response = await statsRoute.GET();
  const stats = await response.json();
  assert.equal(stats.total, 13, 'Historical sessions are preserved');
  assert.equal(stats.today, 3);
  assert.equal(stats.pageViews, 29);
  assert.equal(stats.pageViewsToday, 29);
  assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
  const beforeInvalid = calls;
  assert.equal((await route.POST(request(undefined, undefined, 'bad-id'))).status, 400);
  assert.equal(calls, beforeInvalid, 'Invalid events never reach the database');
  // Inject a failed aggregate write: SQLite rolls back the event and other totals.
  database.exec("CREATE TRIGGER fail_test BEFORE UPDATE ON site_visit_days BEGIN SELECT RAISE(ABORT, 'failure'); END");
  const failedEvent = randomUUID();
  await assert.rejects(() => visits.recordPageView(failedEvent, true));
  assert.equal(database.prepare('SELECT COUNT(*) AS n FROM site_page_events WHERE id=?').get(failedEvent).n, 0);
  assert.equal((await visits.visitStats()).pageViews, 29, 'Failed session write also rolls back page view');
  database.exec('DROP TRIGGER fail_test');
  await visits.recordPageView(failedEvent, true);
  assert.equal((await visits.visitStats()).pageViews, 30, 'A retry succeeds without data loss');
  // Temporary event IDs expire; the daily aggregate remains untouched.
  database.prepare('INSERT INTO site_page_events VALUES (?, ?, ?)').run(randomUUID(), '2020-01-02', 0);
  assert.equal(database.prepare("SELECT COUNT(*) AS n FROM site_page_events WHERE day='2020-01-02'").get().n, 0);
  assert.equal(database.prepare("SELECT views FROM site_page_days WHERE day='2020-01-02'").get().views, 1);
  const {createViewQueue} = load('lib/visit-tracking.ts', {});
  const attempts = [], timers = [];
  let fail = true;
  const queue = createViewQueue(async event => {attempts.push(event.eventId); return !fail;}, callback => timers.push(callback));
  const tick = () => new Promise(resolve => setImmediate(resolve));
  queue.enqueue({eventId: 'A'});
  queue.enqueue({eventId: 'B'});
  await tick();
  assert.deepEqual(attempts, ['A']);
  fail = false;
  timers.shift()();
  await tick();
  assert.deepEqual(attempts, ['A', 'A', 'B'], 'Retry reuses the ID and retains intervening navigation');
  // Exercise the real tracker effect with browser lifecycle events, including StrictMode replay.
  const document = new EventTarget(), window = new EventTarget();
  document.visibilityState = 'hidden';
  let pathname = '/', effect, cleanup;
  const ref = {current: null}, clientEvents = [], retryTimers = [];
  let failRequest = false;
  const tracker = load('components/visit-tracker.tsx', {
    'react': {useEffect: callback => {effect = callback;}, useRef: () => ref},
    'next/navigation': {usePathname: () => pathname},
    '@/lib/visit-tracking': {createViewQueue},
  }, {document, window, crypto: {randomUUID}, AbortSignal, AbortController, setTimeout: callback => retryTimers.push(callback), clearTimeout: () => {}, fetch: async (_url, options) => {
    clientEvents.push(JSON.parse(options.body).eventId);
    return {ok: !failRequest};
  }});
  function mount() {tracker.VisitTracker(); cleanup = effect();}
  function navigate(path) {cleanup?.(); pathname = path; mount();}
  mount();
  await tick();
  assert.equal(clientEvents.length, 0, 'Hidden page waits until viewed');
  document.visibilityState = 'visible';
  document.dispatchEvent(new Event('visibilitychange'));
  await tick();
  assert.equal(clientEvents.length, 1, 'Background tab is counted when activated');
  cleanup?.(); mount();
  document.dispatchEvent(new Event('visibilitychange'));
  window.dispatchEvent(new Event('online'));
  await tick();
  assert.equal(clientEvents.length, 1, 'StrictMode and focus changes do not duplicate page views');
  failRequest = true;
  navigate('/services');
  await tick();
  assert.equal(clientEvents.length, 2);
  failRequest = false;
  window.dispatchEvent(new Event('online'));
  await tick();
  assert.equal(clientEvents[1], clientEvents[2], 'Reconnection retries the same event');
  navigate('/articles');
  await tick();
  assert.equal(clientEvents.length, 4, 'Navigation adds a page view within the same session');
  navigate('/admin');
  await tick();
  assert.equal(clientEvents.length, 4, 'Admin path never records a view');
  navigate('/');
  await tick();
  assert.equal(clientEvents.length, 5, 'Return from admin to public page is a new page view');
  cleanup?.();
  console.log('PASS: page views vs sessions, idempotent retries, rollback/recovery, retained history, Riyadh dates, authentication, event retention client retry queue and tracker lifecycle');
})().catch(error => {console.error(error); process.exitCode = 1;});
