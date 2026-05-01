import type { Metadata } from "next";
import { BookingModalProvider } from "@/components/booking/BookingModal";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Hell's Kitchen NYC`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — LGBTQ+ friendly barbershop at ${site.addressLine1}, ${site.addressLine2}. Haircuts, color, beard care, straight razor shaves. ${site.openAtLabel}. Book on Square.`,
  keywords: [
    "barbershop",
    "Hell's Kitchen",
    "Manhattan",
    "10th Ave",
    "LGBTQ friendly barbershop",
    "trans friendly barber",
    "haircut NYC",
    "beard trim",
    "straight razor shave",
    "hair color",
  ],
  openGraph: {
    title: `${site.name} | NYC`,
    description: `Cuts, color, beard care & shaves on 10th Ave. ${site.openAtLabel}.`,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <BookingModalProvider>{children}</BookingModalProvider>
      </body>
    </html>
  );
}
