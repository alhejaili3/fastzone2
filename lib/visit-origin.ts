// The old public production address still has shared links. Keep this exception
// limited to its own origin; administrator endpoints retain their stricter check.
export function legacyVisitOrigin(origin: string | null, requestUrl: string) {
  try {
    const source = new URL(origin || '');
    return source.origin === 'https://fastzone2.vercel.app' && source.origin === new URL(requestUrl).origin;
  } catch { return false; }
}
