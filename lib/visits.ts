import 'server-only';
import {createHmac, timingSafeEqual} from 'node:crypto';
import {d1Request} from '@/lib/d1-rest';

export const visitCookie = 'fz_visit_v1';
export const visitWindow = 30 * 60;
let ready: Promise<void> | undefined;
function ensureVisits() {
  return ready ??= d1Request('CREATE TABLE IF NOT EXISTS site_visit_days (day TEXT PRIMARY KEY, visits INTEGER NOT NULL DEFAULT 0)').then(() => {}).catch(error => { ready = undefined; throw error; });
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
export async function recordVisit() {
  await ensureVisits();
  await d1Request('INSERT INTO site_visit_days (day, visits) VALUES (?, 1) ON CONFLICT(day) DO UPDATE SET visits = visits + 1', [visitDay()]);
}
export async function visitStats() {
  await ensureVisits();
  const result = await d1Request('SELECT COALESCE(SUM(visits), 0) AS total, COALESCE(SUM(CASE WHEN day = ? THEN visits ELSE 0 END), 0) AS today, MIN(day) AS since FROM site_visit_days', [visitDay()]);
  return result.results[0] as {total: number; today: number; since: string | null};
}
