import { BookModalTrigger } from "@/components/booking/BookingModal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { media } from "@/lib/media";
import { bookingHref, site } from "@/lib/site";
import Link from "next/link";

export function BookBanner() {
  const book = bookingHref();
  return (
    <section className="relative overflow-hidden border-y border-gold/25 py-16 sm:py-20">
      <SectionBackdrop
        src={media.download}
        alt=""
        imageOpacityClass="opacity-[0.16]"
        washClassName="bg-gradient-to-r from-background/96 via-card/94 to-gold-dim/50"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl md:text-5xl">
          Book your favourite barber today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-fg">
          Same-day spots sometimes open after 11:00 a.m.—reserve through Square,
          or call {site.phoneDisplay} and we will find you a chair.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
          <BookModalTrigger
            variant="primary"
            className="!min-w-[200px] !px-10 !tracking-[0.2em]"
          >
            Book your spot
          </BookModalTrigger>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex h-12 min-w-[200px] items-center justify-center border border-border-subtle bg-card/90 px-10 text-xs font-bold uppercase tracking-[0.15em] text-cream shadow-sm transition-colors hover:border-gold/50"
          >
            Call the shop
          </a>
          {book.startsWith("http") ? (
            <Link
              href={book}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-wider text-gold underline-offset-2 hover:text-gold-hover hover:underline"
            >
              Square ↗
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
