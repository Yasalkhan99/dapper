import { BookModalTrigger } from "@/components/booking/BookingModal";
import Image from "next/image";
import Link from "next/link";
import { SectionBackdrop } from "@/components/SectionBackdrop";
import { bookingHref, site } from "@/lib/site";
import { media } from "@/lib/media";

export function About() {
  const book = bookingHref();
  return (
    <section
      id="about"
      className="relative scroll-mt-32 overflow-hidden border-t border-border-subtle py-20 sm:py-28"
    >
      <SectionBackdrop
        src={media.shopWide}
        alt=""
        imageOpacityClass="opacity-[0.1]"
        washClassName="bg-gradient-to-r from-background/97 via-background/94 to-background/96"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="relative order-2 aspect-[4/5] overflow-hidden border border-gold/30 bg-card shadow-md lg:order-1 lg:aspect-[3/4]">
          <Image
            src={media.download1}
            alt="Cut and style at Pretty Dapper"
            fill
            className="object-cover object-center"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Our story
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Hell&apos;s Kitchen, done the Pretty Dapper way
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-fg">
            We built {site.shortName} around respect—for your time, your hair,
            and who you are. Skin fades, long hair, color to blend greys, or
            your first barbershop visit in years: same chair, same standard.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-fg">
            Our space is queer- and trans-affirming. Booking runs on{" "}
            <span className="font-medium text-cream">Square</span> so you can
            pick services and add-ons in one flow.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="#pricing"
              className="inline-flex w-fit border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold-hover hover:text-gold-hover"
            >
              More about services
            </Link>
            <BookModalTrigger variant="compact">Book now</BookModalTrigger>
            {book.startsWith("http") ? (
              <Link
                href={book}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold uppercase tracking-wider text-muted-fg underline-offset-2 hover:text-gold hover:underline"
              >
                Square ↗
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
