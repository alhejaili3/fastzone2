// A queue preserves page openings during navigation and reuses event IDs on retry.
export type ViewEvent = {eventId: string};
export function createViewQueue(send: (event: ViewEvent) => Promise<boolean>, schedule: (callback: () => void, delay: number) => unknown) {
  const events: ViewEvent[] = [];
  let running = false;
  let retryScheduled = false;
  let retryDelay = 1000;
  async function flush() {
    if (running || !events.length) return;
    running = true;
    try {
      while (events.length) {
        let sent = false;
        try { sent = await send(events[0]); } catch { /* Retry on reconnect. */ }
        if (!sent) {
          if (!retryScheduled) {
            retryScheduled = true;
            schedule(() => { retryScheduled = false; void flush(); }, retryDelay);
            retryDelay = Math.min(retryDelay * 2, 60000);
          }
          break;
        }
        events.shift();
        retryDelay = 1000;
      }
    } finally { running = false; }
  }
  return {enqueue(event: ViewEvent) { events.push(event); void flush(); }, flush};
}
