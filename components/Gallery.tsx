import Image from "next/image";
import { media } from "@/lib/media";

/** Har tile alag `public/` file — tumhari nayi photos. */
const shots = [
  {
    src: media.shopWide,
    alt: "Pretty Dapper shop interior",
    className: "object-cover object-[52%_center]",
  },
  {
    src: media.download1,
    alt: "Haircut at Pretty Dapper",
    className: "object-cover object-[48%_35%]",
  },
  {
    src: media.download2,
    alt: "In the chair",
    className: "object-cover object-[55%_45%]",
  },
  {
    src: media.imagesAlt,
    alt: "Shop detail",
    className: "object-cover object-[40%_30%]",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="scroll-mt-32 border-t border-border-subtle bg-card/40 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
              The room, the ritual, the result
            </h2>
          </div>
          <p className="max-w-sm text-muted-fg">
            Abhi sab tiles ek hi hi-res shop photo se crop hain taake zoom par
            pixels na phatain—nayi photos {`public/`} mein add karke{" "}
            {`lib/media.ts`} update karo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {shots.map((shot, i) => (
            <figure
              key={`gallery-${i}`}
              className="relative aspect-[3/4] overflow-hidden border border-border-subtle bg-card shadow-sm"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                quality={90}
                className={`transition-transform duration-700 hover:scale-105 ${shot.className}`}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
