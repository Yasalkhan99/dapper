import { BookModalTrigger } from "@/components/booking/BookingModal";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { bookingHref } from "@/lib/site";
import { media } from "@/lib/media";
import Link from "next/link";

const highlights = [
  {
    title: "Best haircut",
    body: "Fades, tapers, long hair, buzz cuts, and back & sides—cut to your vibe with Master or Junior barbers on the chair.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M8 26V10l4-4h8l4 4v16M8 26h16M12 6V4m8 2V4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Hair colouring",
    body: "Grey coverage or a full refresh—short, medium, and long formulas timed so toner and tone land exactly right.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M16 4v20M10 10c0 4 2 8 6 10m6-10c0 4-2 8-6 10M8 28h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Beard & care",
    body: "Beard trims, straight razor shaves with hot towel, and add-ons—shampoo and beard finish available when you book.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" aria-hidden>
        <path
          d="M10 8h12v6c0 6-3 10-6 12-3-2-6-6-6-12V8zM14 14h4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function CareHighlights() {
  const book = bookingHref();
  return (
    <section className="relative overflow-hidden border-t border-gold/20 bg-grain py-20 sm:py-28">
      <SectionBackdrop
        src={media.imagesDefault}
        alt=""
        imageOpacityClass="opacity-[0.22]"
        washClassName="bg-gradient-to-b from-background/92 via-background/88 to-background/95"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-gold">
          Our craft
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-center font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
          Your perfect hair care
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-fg">
          We listen first, then shape—so you leave with a cut that fits your
          life, not a template from a poster.
        </p>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {highlights.map((h) => (
            <li
              key={h.title}
              className="border border-border-subtle bg-card/85 p-8 text-center shadow-sm backdrop-blur-[2px] transition-colors hover:border-gold/40"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center border border-gold/40 text-gold">
                {h.icon}
              </div>
              <h3 className="mt-6 font-serif text-xl font-semibold text-cream">
                {h.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-fg">
                {h.body}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <BookModalTrigger variant="primary">Book with us</BookModalTrigger>
          <BookModalTrigger variant="outline">Send a request</BookModalTrigger>
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
