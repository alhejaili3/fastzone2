'use client';
import {useEffect} from 'react';
import {usePathname} from 'next/navigation';
let pending: Promise<unknown> | undefined;
let countedAt = 0;
export function VisitTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (!pathname || pathname === '/admin' || pathname.startsWith('/admin/') || document.visibilityState !== 'visible') return;
    const track = () => {
      if (pending || Date.now() - countedAt < 30 * 60 * 1000) return;
      pending = fetch('/api/visits', {method: 'POST', credentials: 'same-origin', cache: 'no-store'})
        .then(response => { if (response.ok) countedAt = Date.now(); })
        .catch(() => {}).finally(() => { pending = undefined; });
    };
    track();
  }, [pathname]);
  return null;
}
