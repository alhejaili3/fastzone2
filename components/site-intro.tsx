'use client';

import {useEffect, useState} from 'react';

export function SiteIntro({settings}:{settings:Record<string,string>}) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const internalNavigation = document.referrer.startsWith(location.origin) && (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming|undefined)?.type !== 'reload';
    if (location.pathname.startsWith('/admin') || reducedMotion || internalNavigation) {
      root.classList.remove('fz-intro-pending');
      return;
    }

    setVisible(true);
    const startExit = window.setTimeout(() => setLeaving(true), 2650);
    const finish = window.setTimeout(close, 3100);

    function close() {
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
      root.classList.remove('fz-intro-pending');
      setLeaving(true);
      setVisible(false);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') close();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.clearTimeout(startExit);
      window.clearTimeout(finish);
      window.removeEventListener('keydown', onKeyDown);
      root.classList.remove('fz-intro-pending');
    };
  }, []);

  if (!visible) return null;

  return <div className={'fz-intro' + (leaving ? ' fz-intro-out' : '')} role="dialog" aria-modal="true" aria-label="مقدمة فاست زون">
    <button className="fz-intro-skip" type="button" autoFocus onClick={() => {
      document.documentElement.classList.remove('fz-intro-pending');
      setLeaving(true);
      window.setTimeout(() => setVisible(false), 350);
    }}>تخطي المقدمة</button>
    <div className="fz-intro-stage">
      <img className="fz-intro-emblem" src={settings.logo||"/fast-zone-emblem-transparent.png"} alt="شعار فاست زون" width="1254" height="1254" />
      <div className="fz-intro-name" dir="ltr"><span>FAST</span> ZONE</div>
      <div className="fz-intro-caption">AUTO SERVICE <span>•</span> {settings.introCaption}</div>
      <div className="fz-intro-rule" />
      <div className="fz-intro-services">{(settings.introServices||'').split('|').filter(Boolean).map((piece,i)=><span key={i} style={{display:'inline-flex',alignItems:'center',gap:15}}>{i>0&&<i/>}{piece}</span>)}</div>
    </div>
  </div>;
}
