import { SectionBackdrop } from "@/components/SectionBackdrop";
import { media } from "@/lib/media";

const slides = [
  {
    headline: "Where everyone leaves looking their best",
    body: "Respectful chair time, sharp lines, and barbers who listen—whether it is your weekly fade or a whole new silhouette.",
  },
  {
    headline: "It is not just a haircut—it is an experience",
    body: "Hot towels on shaves, thoughtful color timing, and a room that feels calm in the middle of Midtown.",
  },
  {
    headline: "We respect classic barbering—and your story",
    body: "LGBTQ+ affirming, trans-friendly, and focused on how you want to show up in the world.",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-border-subtle py-20 sm:py-28">
      <SectionBackdrop
        src={media.imagesAlt}
        alt=""
        imageOpacityClass="opacity-[0.1]"
        washClassName="bg-gradient-to-b from-card/92 via-background/95 to-background/98"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
          Client love
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
          Testimonials
        </h2>
        <p className="mt-3 max-w-xl text-sm text-muted-fg">
          Placeholder lines for layout—swap in real Google or Square reviews
          anytime.
        </p>

        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:mx-0 sm:gap-8 sm:px-0 sm:pb-0 lg:grid lg:snap-none lg:grid-cols-3 lg:overflow-visible">
          {slides.map((s) => (
            <article
              key={s.headline}
              className="min-w-[85vw] shrink-0 snap-center border border-border-subtle bg-card/95 p-8 shadow-sm sm:min-w-[360px] lg:min-w-0"
            >
              <h3 className="font-serif text-2xl font-semibold leading-snug text-cream sm:text-3xl">
                {s.headline}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-fg sm:text-base">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
