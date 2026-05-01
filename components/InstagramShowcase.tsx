import { BookModalTrigger } from "@/components/booking/BookingModal";
import Image from "next/image";
import Link from "next/link";
import { instagram } from "@/lib/instagram";
import { bookingHref } from "@/lib/site";
import { media } from "@/lib/media";

function PlayCard({
  href,
  title,
  blurb,
  imageSrc,
  imageAlt,
  badge,
}: {
  href: string;
  title: string;
  blurb: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-xl border border-border-subtle bg-card shadow-md sm:min-h-[480px]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        sizes="(min-width: 1024px) 40vw, 100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
        aria-hidden
      />
      <div className="relative mt-auto p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
          {title}
        </p>
        <p className="mt-2 max-w-md text-sm text-white/90">{blurb}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-4 py-2.5 text-sm font-bold text-cream shadow-sm backdrop-blur-sm transition group-hover:border-gold group-hover:bg-gold group-hover:text-white">
          <svg
            className="h-5 w-5 shrink-0 text-gold transition group-hover:text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7L8 5z" />
          </svg>
          {badge}
        </div>
      </div>
    </Link>
  );
}

export function InstagramShowcase() {
  const book = bookingHref();
  return (
    <section
      id="instagram"
      className="relative scroll-mt-32 overflow-hidden border-t border-border-subtle bg-card/50 py-20 sm:py-28"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Instagram
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Reels &amp; feed—open in the app for video
          </h2>
          <p className="mt-4 text-muted-fg">
            Embedded Instagram players often look empty in a normal browser. Tap
            a card below to watch on Instagram, or go straight to all reels.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <BookModalTrigger variant="primary" className="!px-6">
              Book a cut
            </BookModalTrigger>
            <Link
              href={instagram.reelsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border-2 border-gold bg-gold px-6 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:border-gold-hover hover:bg-gold-hover"
            >
              All reels
            </Link>
            <Link
              href={instagram.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center border border-border-subtle bg-card px-6 text-xs font-bold uppercase tracking-[0.12em] text-cream shadow-sm transition-colors hover:border-gold/40"
            >
              Profile
            </Link>
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <PlayCard
            href={instagram.featuredReelUrl}
            title="From the reels"
            blurb="Anniversary reel—story behind the chair, fades, and the Pretty Dapper vibe."
            imageSrc={media.download2}
            imageAlt="Inside Pretty Dapper barbershop"
            badge="Play reel on Instagram"
          />
          <PlayCard
            href={instagram.featuredPostUrl}
            title="On the feed"
            blurb="Cuts and moments from the floor—opens the original post on Instagram."
            imageSrc={media.imagesDefault}
            imageAlt="Pretty Dapper shop detail"
            badge="View post on Instagram"
          />
        </div>
      </div>
    </section>
  );
}
