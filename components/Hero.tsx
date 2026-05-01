import Link from "next/link";
import { bookingHref, site, workingHoursSummary } from "@/lib/site";
import { media } from "@/lib/media";

export function Hero() {
  const book = bookingHref();
  return (
    <section id="top" className="relative min-h-[min(100dvh,920px)] overflow-hidden lg:min-h-[100dvh]">
      <div className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          poster={media.shopWide}
        >
          <source src={media.promoVideo} type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/55"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/70"
          aria-hidden
        />
        <div className="bg-grain pointer-events-none absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(100dvh,920px)] max-w-6xl flex-col justify-end gap-10 px-5 py-16 sm:px-8 lg:min-h-[100dvh] lg:flex-row lg:items-end lg:justify-between lg:gap-12 lg:py-24">
        <div className="max-w-xl lg:max-w-2xl">
          <p className="mb-2 font-serif text-3xl italic text-gold sm:text-4xl md:text-5xl">
            Stylish
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Pretty sharp.
            <span className="mt-2 block font-serif text-2xl font-normal italic text-muted-fg sm:text-3xl md:text-4xl">
              Wildly welcoming.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-fg sm:text-lg">
            {site.name} on 10th Ave—LGBTQ+ friendly cuts, color, beard care, and
            straight razor shaves. Master & Junior barbers, one standard.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href={book}
              className="inline-flex h-12 items-center justify-center border-2 border-gold bg-gold px-8 text-xs font-bold uppercase tracking-[0.2em] text-white transition-colors hover:border-gold-hover hover:bg-gold-hover"
              {...(book.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              Book your spot
            </Link>
            <Link
              href="#pricing"
              className="inline-flex h-12 items-center justify-center border border-border-subtle bg-card/90 px-8 text-xs font-bold uppercase tracking-[0.15em] text-cream shadow-sm backdrop-blur-sm transition-colors hover:border-gold/50"
            >
              View pricing
            </Link>
          </div>
        </div>

        <aside className="w-full border border-border-subtle bg-card/95 p-6 shadow-lg shadow-stone-900/10 backdrop-blur-md sm:p-8 lg:max-w-[340px] lg:shrink-0">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Working hours
          </p>
          <ul className="mt-4 space-y-0 border-t border-gold/20 pt-4 text-sm">
            {workingHoursSummary.map((row, i) => (
              <li
                key={row.label}
                className={`flex justify-between gap-4 py-3 ${
                  i < workingHoursSummary.length - 1
                    ? "border-b border-border-subtle"
                    : ""
                }`}
              >
                <span className="text-muted-fg">{row.label}</span>
                <span className="text-right font-medium text-cream">
                  {row.range}
                </span>
              </li>
            ))}
          </ul>
          <Link
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover"
          >
            Get direction →
          </Link>
        </aside>
      </div>
    </section>
  );
}
