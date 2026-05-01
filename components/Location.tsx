import { BookModalTrigger } from "@/components/booking/BookingModal";
import { bookingHref, site, workingHours } from "@/lib/site";
import Link from "next/link";

export function Location() {
  const book = bookingHref();
  const hasSquareLink = book.startsWith("http");

  return (
    <section
      id="visit"
      className="scroll-mt-32 border-t border-border-subtle bg-background py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Location & hours
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
              Visit us on 10th Ave
            </h2>
            <address className="mt-8 not-italic text-lg leading-relaxed text-muted-fg">
              <span className="block font-medium text-cream">{site.name}</span>
              {site.addressLine1}
              <br />
              {site.addressLine2}
            </address>

            <div className="mt-8 flex flex-col gap-3 text-base">
              <a
                href={`tel:${site.phoneTel}`}
                className="w-fit font-semibold text-cream underline-offset-4 hover:text-gold hover:underline"
              >
                {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="w-fit text-muted-fg underline-offset-4 hover:text-cream hover:underline"
              >
                {site.email}
              </a>
            </div>

            <dl className="mt-10">
              <dt className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
                Hours
              </dt>
              <dd className="mt-3 space-y-0 text-muted-fg">
                {workingHours.map((row) => (
                  <div
                    key={row.day}
                    className="flex max-w-sm flex-wrap justify-between gap-x-4 gap-y-1 border-b border-border-subtle/60 py-2.5 last:border-0"
                  >
                    <span className="text-cream">{row.day}</span>
                    <span>{row.range}</span>
                  </div>
                ))}
              </dd>
            </dl>

            <Link
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:text-gold-hover"
            >
              Get directions
              <span aria-hidden>↗</span>
            </Link>
          </div>

          <div
            id="book"
            className="scroll-mt-32 border border-border-subtle bg-card p-8 shadow-md sm:p-10"
          >
            <h3 className="font-serif text-2xl font-semibold text-cream sm:text-3xl">
              Book your appointment
            </h3>
            <p className="mt-3 text-muted-fg">
              {site.openAtLabel}. Choose your service, barber if available, and
              add-ons—shampoo and beard trim add-ons appear on the next step
              when you book a haircut.
            </p>
            <p className="mt-4 text-sm text-muted-fg">
              <span className="font-medium text-cream">Powered by Square.</span>
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <BookModalTrigger variant="primary" className="!h-12 !text-sm">
                Request a spot
              </BookModalTrigger>
              {hasSquareLink ? (
                <Link
                  href={book}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center border-2 border-gold/50 bg-transparent text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:border-gold hover:bg-gold/10"
                >
                  Book on Square ↗
                </Link>
              ) : (
                <p className="border border-border-subtle bg-background/50 px-4 py-3 text-sm leading-relaxed text-muted-fg">
                  Online booking opens in Square—call or email for now and we
                  will get you on the books.
                </p>
              )}
              <a
                href={`tel:${site.phoneTel}`}
                className="inline-flex h-12 items-center justify-center border border-border-subtle bg-card text-sm font-bold uppercase tracking-wider text-cream shadow-sm transition-colors hover:border-gold/50"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href={`mailto:${site.email}?subject=Appointment%20request`}
                className="inline-flex h-12 items-center justify-center border border-border-subtle bg-card text-sm font-semibold text-muted-fg shadow-sm transition-colors hover:border-gold/50 hover:text-cream"
              >
                Email to book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
