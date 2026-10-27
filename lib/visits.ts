import 'server-only';
import {createHmac, timingSafeEqual} from 'node:crypto';
import {d1Request} from '@/lib/d1-rest';

export const visitCookie = 'fz_visit_v1';
export const visitWindow = 30 * 60;
let ready: Promise<void> | undefined;
function ensureVisits() {
  return ready ??= (async () => {
    await d1Request('CREATE TABLE IF NOT EXISTS site_visit_days (day TEXT PRIMARY KEY, visits INTEGER NOT NULL DEFAULT 0)');
    await d1Request('CREATE TABLE IF NOT EXISTS site_page_days (day TEXT PRIMARY KEY, views INTEGER NOT NULL DEFAULT 0)');
    await d1Request('CREATE TABLE IF NOT EXISTS site_page_events (id TEXT PRIMARY KEY, day TEXT NOT NULL, new_session INTEGER NOT NULL)');
    await d1Request('CREATE INDEX IF NOT EXISTS site_page_events_day ON site_page_events(day)');
    // The insert and totals update share one SQLite transaction. Duplicate retries do nothing.
    await d1Request(`CREATE TRIGGER IF NOT EXISTS site_page_event_count AFTER INSERT ON site_page_events BEGIN
      INSERT INTO site_page_days(day, views) VALUES (NEW.day, 1) ON CONFLICT(day) DO UPDATE SET views = views + 1;
      INSERT INTO site_visit_days(day, visits) SELECT NEW.day, 1 WHERE NEW.new_session = 1 ON CONFLICT(day) DO UPDATE SET visits = visits + 1;
      DELETE FROM site_page_events WHERE day < date('now', '+3 hours', '-2 days');
    END`);
  })().catch(error => { ready = undefined; throw error; });
}
export function visitDay(now = new Date()) {
  return new Date(now.getTime() + 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
}
function signature(value: string) {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret || secret.length < 32) throw Error('Session secret unavailable');
  return createHmac('sha256', secret).update('visit:' + value).digest('base64url');
}
export function visitToken(now = Date.now()) {
  const value = String(now);
  return value + '.' + signature(value);
}
export function recentVisit(token: string, now = Date.now()) {
  try {
    const [value, signed, extra] = token.split('.');
    if (!value || !signed || extra !== undefined || !/^\d+$/.test(value)) return false;
    const age = now - Number(value);
    const expected = Buffer.from(signature(value));
    const actual = Buffer.from(signed);
    return age >= 0 && age < visitWindow * 1000 && actual.length === expected.length && timingSafeEqual(actual, expected);
  } catch { return false; }
}
export async function recordPageView(eventId: string, newSession: boolean) {
  await ensureVisits();
  await d1Request('INSERT OR IGNORE INTO site_page_events (id, day, new_session) VALUES (?, ?, ?)', [eventId, visitDay(), newSession ? 1 : 0]);
}
export async function visitStats() {
  await ensureVisits();
  const result = await d1Request(`SELECT
    (SELECT COALESCE(SUM(visits), 0) FROM site_visit_days) AS total,
    (SELECT COALESCE(SUM(visits), 0) FROM site_visit_days WHERE day = ?) AS today,
    (SELECT MIN(day) FROM site_visit_days) AS since,
    (SELECT COALESCE(SUM(views), 0) FROM site_page_days) AS pageViews,
    (SELECT COALESCE(SUM(views), 0) FROM site_page_days WHERE day = ?) AS pageViewsToday,
    (SELECT MIN(day) FROM site_page_days) AS pageViewsSince`, [visitDay(), visitDay()]);
  return result.results[0] as {total: number; today: number; since: string | null; pageViews: number; pageViewsToday: number; pageViewsSince: string | null};
}
