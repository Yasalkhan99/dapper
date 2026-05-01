/**
 * Shared business details.
 * Optional: set env `NEXT_PUBLIC_SQUARE_BOOKING_URL` to your Square Appointments
 * URL so every “Book” button opens scheduling in one tap.
 */
export const site = {
  name: "Pretty Dapper Barbers",
  shortName: "Pretty Dapper",
  addressLine1: "695 10th Ave",
  addressLine2: "New York, NY 10036",
  neighborhood: "Hell's Kitchen · Manhattan",
  phoneDisplay: "(646) 669-7000",
  phoneTel: "+16466697000",
  email: "prettydapperhk@gmail.com",
  openAtLabel: "Opens daily at 11:00 a.m.",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=695+10th+Ave+New+York+NY+10036",
  squareBookingUrl: process.env.NEXT_PUBLIC_SQUARE_BOOKING_URL ?? "",
} as const;

/** Full schedule (location, footer) */
export const workingHours = [
  { day: "Monday", range: "11:00 a.m. – 8:00 p.m." },
  { day: "Tuesday", range: "11:00 a.m. – 8:00 p.m." },
  { day: "Wednesday", range: "11:00 a.m. – 8:00 p.m." },
  { day: "Thursday", range: "11:00 a.m. – 8:00 p.m." },
  { day: "Friday", range: "11:00 a.m. – 8:00 p.m." },
  { day: "Saturday", range: "11:00 a.m. – 5:00 p.m." },
  { day: "Sunday", range: "11:00 a.m. – 5:00 p.m." },
] as const;

/** Condensed lines for hero “Working hours” card */
export const workingHoursSummary = [
  { label: "Mon – Fri", range: "11:00 a.m. – 8:00 p.m." },
  { label: "Saturday", range: "11:00 a.m. – 5:00 p.m." },
  { label: "Sunday", range: "11:00 a.m. – 5:00 p.m." },
] as const;

export function bookingHref(): string {
  const u = site.squareBookingUrl.trim();
  return u.length > 0 ? u : "#book";
}
