"use client";

import { BookModalTrigger } from "@/components/booking/BookingModal";
import { bookingHref, site } from "@/lib/site";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#pricing", label: "Pricing" },
  { href: "#staff", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#instagram", label: "Reels" },
  { href: "#visit", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const book = bookingHref();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-stone-900/10" : ""
      }`}
    >
      <div className="border-b border-border-subtle bg-card/90 text-xs backdrop-blur-md sm:text-sm">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-2 text-muted-fg sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4 sm:px-8">
          <p className="text-center sm:text-left">
            <span className="text-foreground">{site.addressLine1}</span>
            {", "}
            {site.addressLine2}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 sm:justify-end">
            <Link
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold uppercase tracking-wider text-gold transition-colors hover:text-gold-hover"
            >
              Get directions
            </Link>
            <span className="hidden text-border-subtle sm:inline" aria-hidden>
              |
            </span>
            <a
              href={`tel:${site.phoneTel}`}
              className="font-medium text-foreground underline-offset-2 hover:underline"
            >
              {site.phoneDisplay}
            </a>
            <span className="hidden text-border-subtle sm:inline" aria-hidden>
              |
            </span>
            <BookModalTrigger variant="link" className="!text-xs !font-bold !uppercase !tracking-wider">
              Book
            </BookModalTrigger>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-border-subtle transition-[background-color] duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md"
            : "bg-background/90 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
          <Link
            href="#top"
            className="font-serif text-lg font-semibold tracking-tight text-cream sm:text-xl"
          >
            Pretty<span className="text-gold"> Dapper</span>
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-fg transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <BookModalTrigger
              variant="primary"
              className="hidden !px-4 !py-2 sm:inline-flex"
            >
              Book
            </BookModalTrigger>
            {book.startsWith("http") ? (
              <Link
                href={book}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden text-[10px] font-semibold uppercase tracking-wider text-muted-fg underline-offset-2 hover:text-gold hover:underline lg:inline"
              >
                Square
              </Link>
            ) : null}

            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center border border-border-subtle text-cream lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                {open ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          id="mobile-nav"
          className={`border-t border-border-subtle bg-background/98 lg:hidden ${
            open ? "block" : "hidden"
          }`}
        >
          <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-border-subtle/60 py-3 text-sm font-semibold uppercase tracking-wider text-muted-fg hover:text-gold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <BookModalTrigger
              variant="primary"
              className="mt-4 !w-full !py-3"
              onOpen={() => setOpen(false)}
            >
              Book
            </BookModalTrigger>
          </nav>
        </div>
      </div>
    </header>
  );
}
