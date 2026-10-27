'use client';
import {useEffect, useRef} from 'react';
import {usePathname} from 'next/navigation';
import {createViewQueue} from '@/lib/visit-tracking';

const queue = createViewQueue(async event => {
  const response = await fetch('/api/visits', {
    method: 'POST', credentials: 'same-origin', cache: 'no-store', keepalive: true,
    headers: {'Content-Type': 'application/json'}, body: JSON.stringify(event),
    signal: AbortSignal.timeout(15000),
  });
  return response.ok;
}, (callback, delay) => setTimeout(callback, delay));

export function VisitTracker() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);
  useEffect(() => {
    if (!pathname || pathname === '/admin' || pathname.startsWith('/admin/')) {
      lastPath.current = null;
      return;
    }
    const track = () => {
      if (document.visibilityState !== 'visible') return;
      if (lastPath.current !== pathname) {
        lastPath.current = pathname;
        queue.enqueue({eventId: crypto.randomUUID()});
      } else { void queue.flush(); }
    };
    track();
    document.addEventListener('visibilitychange', track);
    window.addEventListener('online', track);
    return () => {
      document.removeEventListener('visibilitychange', track);
      window.removeEventListener('online', track);
    };
  }, [pathname]);
  return null;
}
