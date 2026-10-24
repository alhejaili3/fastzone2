// Run with: node scripts/test-visits.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
const {DatabaseSync} = require('node:sqlite');
const database = new DatabaseSync(':memory:');
let calls = 0;
const d1 = {async d1Request(sql, params = []) {
  calls++;
  const statement = database.prepare(sql);
  return {results: /^SELECT/.test(sql) ? statement.all(...params) : (statement.run(...params), [])};
}};
function load(file, mocks) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022}}).outputText;
  vm.runInNewContext(code, {exports, require: name => name in mocks ? mocks[name] : require(name), process, Buffer, Date, Response, URL, console}, {filename: file});
  return exports;
}
process.env.ADMIN_SESSION_SECRET = 'test-only-secret-with-at-least-32-characters';
const visits = load('lib/visits.ts', {'server-only': {}, '@/lib/d1-rest': d1});
let jar = {}, admin = false, lastCookie;
class NextResponse extends Response {
  cookies = {set(name, value, options) {lastCookie = {name, value, options};}};
}
const adminModule = {adminCookie: 'admin', trustedOrigin: value => value === 'https://www.fastzone.sa', validSession: value => value === 'valid', allowedAdmin: async () => admin};
const route = load('app/api/visits/route.ts', {'next/headers': {cookies: async () => ({get: name => jar[name] ? {value: jar[name]} : undefined})}, 'next/server': {NextResponse}, '@/lib/admin': adminModule, '@/lib/visits': visits});
const statsRoute = load('app/api/admin/visits/route.ts', {'@/lib/admin': adminModule, '@/lib/visits': visits});
const request = (origin = 'https://www.fastzone.sa', agent = 'Mozilla/5.0') => new Request('https://www.fastzone.sa/api/visits', {method: 'POST', headers: {origin, 'user-agent': agent}});
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
  assert.equal((await route.POST(request())).status, 204);
  assert.equal(lastCookie.options.httpOnly, true);
  assert.equal(lastCookie.options.secure, true);
  jar[visits.visitCookie] = lastCookie.value;
  await route.POST(request());
  assert.equal((await visits.visitStats()).total, 1, 'Reloads do not add a visit');
  jar[visits.visitCookie] = visits.visitToken(now - 1800001);
  await route.POST(request());
  assert.equal((await visits.visitStats()).total, 2, 'Expired visit starts a new session');
  await Promise.all(Array.from({length: 25}, () => visits.recordVisit()));
  assert.equal((await visits.visitStats()).total, 27, 'Atomic increments preserve concurrent visits');
  database.prepare('INSERT INTO site_visit_days VALUES (?, ?)').run('2020-01-01', 10);
  admin = true;
  const response = await statsRoute.GET();
  const stats = await response.json();
  assert.equal(stats.total, 37);
  assert.equal(stats.today, 27);
  assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
  assert.equal((await route.POST(request())).status, 204);
  console.log('PASS: visit deduplication, signed cookies, admin access, bot exclusion, Riyadh dates, atomic totals and private statistics');
})().catch(error => {console.error(error); process.exitCode = 1;});
