// Missing values keep existing installations enabled. Only an explicit false disables bookings.
export function bookingsEnabled(settings: Record<string, string>) {
  return settings.bookingEnabled !== 'false';
}
