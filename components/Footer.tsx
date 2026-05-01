import { instagram } from "@/lib/instagram";
import { site, workingHoursSummary } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-card py-16 shadow-[0_-1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-serif text-xl font-semibold tracking-tight text-cream">
            Pretty<span className="text-gold"> Dapper</span>
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-fg">
            LGBTQ+ friendly barbershop—cuts, color, beard care, and straight
            razor shaves on 10th Ave.
          </p>
          <p className="mt-4 text-xs text-muted-fg">
            Booking powered by{" "}
            <span className="font-medium text-cream">Square</span>.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Explore
          </p>
          <nav
            className="mt-4 flex flex-col gap-2 text-sm text-muted-fg"
            aria-label="Footer"
          >
            <Link href="#about" className="hover:text-gold">
              About
            </Link>
            <Link href="#pricing" className="hover:text-gold">
              Pricing
            </Link>
            <Link href="#staff" className="hover:text-gold">
              Team
            </Link>
            <Link href="#gallery" className="hover:text-gold">
              Gallery
            </Link>
            <Link href="#instagram" className="hover:text-gold">
              Reels
            </Link>
            <Link href="#book" className="hover:text-gold">
              Book
            </Link>
          </nav>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Hours
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-fg">
            {workingHoursSummary.map((row) => (
              <li key={row.label} className="flex justify-between gap-4">
                <span>{row.label}</span>
                <span className="text-right text-cream">{row.range}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <p className="mt-4 text-sm text-muted-fg">
            {site.addressLine1}
            <br />
            {site.addressLine2}
          </p>
          <p className="mt-3 text-sm">
            <a
              href={`tel:${site.phoneTel}`}
              className="text-cream hover:text-gold"
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="text-muted-fg hover:text-gold"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-4 text-sm">
            <a
              href={instagram.reelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:text-gold-hover"
            >
              Instagram · {instagram.handle}
            </a>
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-border-subtle px-5 pt-8 text-center text-xs text-muted-fg sm:px-8 sm:text-left">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
