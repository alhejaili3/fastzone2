import type {SocialId} from '@/lib/contact-page';
export function SocialMark({id}:{id:SocialId}) {
  const paths:Record<SocialId,React.ReactNode>={
    instagram:<><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.6" cy="6.5" r="1"/></>,
    snapchat:<path d="M8 7c0-6 8-6 8 0v3c1 1 2-1 2 1 0 1-2 1-2 2 1 3 3 4 4 4 0 1-2 1-3 1l-1 2-2-1h-4l-2 1-1-2c-1 0-3 0-3-1 1 0 3-1 4-4 0-1-2-1-2-2 0-2 1 0 2-1V7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>,
    tiktok:<path d="M15 2h3c.2 2.3 1.7 4 4 4.3v3a9 9 0 0 1-4-1.2v7.4a6.5 6.5 0 1 1-6.5-6.5H13v3.2h-1.5a3.3 3.3 0 1 0 3.5 3.3V2Z"/>,
    x:<path d="M18.9 2H22l-6.8 7.8L23.2 22H17l-4.9-7.4L5.6 22H2.4l8.2-9.4L2 2h6.4l4.5 6.8L18.9 2ZM17.9 20h1.7L7.5 4H5.7l12.2 16Z"/>,
    youtube:<><rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 6 3-6 3V9Z" fill="var(--social-cutout,#141416)"/></>,
    facebook:<path d="M14 22v-9h3l.5-3H14V8c0-1 .5-1.5 1.7-1.5H18V3h-3c-3 0-5 1.8-5 5v2H7v3h3v9h4Z"/>,
    telegram:<path d="m2 11 19-8c1-.4 1.4.2 1.1 1.6L19 21c-.2 1-1 1.2-1.8.6L12 17.7l-2.5 2.4c-.3.3-.6.6-1 .6l.4-5.3L18.4 7c.4-.4-.1-.6-.6-.3L6 14l-3.7-1.2C1.5 12.5 1.5 11.5 2 11Z"/>,
    linkedin:<><rect x="3" y="8" width="4" height="13"/><circle cx="5" cy="4.5" r="2.2"/><path d="M10 8h4v2c1-2 7-4 7 4v7h-4v-7c0-3-3-3-3 0v7h-4V8Z"/></>,
  };
  return <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">{paths[id]}</svg>;
}
