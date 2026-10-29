export function ContactActionIcon({kind}:{kind:'phone'|'whatsapp'|'website'|'location'}){
 const artwork={
  phone:<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.4 1.8.6 2.8.7a2 2 0 0 1 1.8 2.1Z"/>,
  whatsapp:<><path d="M20.5 3.5A11.8 11.8 0 0 0 3.2 17.7L1.6 23l5.4-1.6A11.8 11.8 0 0 0 20.5 3.5Z"/><path d="m8.1 6.8 1.4 3-1 1.2c1 2 2.5 3.5 4.6 4.4l1.3-1.4 2.9 1.4c.1 1.5-1 2.7-2.5 2.5-4.9-.8-8.6-4.4-9.3-8.3-.3-1.4.7-2.6 2.6-2.8Z"/></>,
  website:<><circle cx="12" cy="12" r="9.5"/><ellipse cx="12" cy="12" rx="4.2" ry="9.5"/><path d="M3 8.5h18M3 15.5h18"/></>,
  location:<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.8"/></>,
 };
 return <span className={'contact-action-icon contact-action-icon-'+kind} aria-hidden="true"><svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth={kind==='whatsapp'?1.6:1.8} strokeLinecap="round" strokeLinejoin="round" focusable="false">{artwork[kind]}</svg></span>;
}
