import { SectionBackdrop } from "@/components/SectionBackdrop";
import { media } from "@/lib/media";
import Image from "next/image";

const staff = [
  {
    name: "Master barbers",
    role: "Precision cuts, shaves & color",
    image: media.shopWide,
    imageAlt: "Pretty Dapper interior and chairs",
    imgClass: "object-cover object-center",
    bio: "Years of experience on every fade, line-up, straight razor shave, and color service—so you leave looking intentional, not rushed.",
  },
  {
    name: "Junior barbers",
    role: "Quality at a lower price point",
    image: media.download1,
    imageAlt: "Barber work in progress",
    imgClass: "object-cover object-[50%_38%]",
    bio: "Skilled barbers building their craft under the Pretty Dapper standard—great style and sharp details, with pricing that stays accessible.",
  },
  {
    name: "The room",
    role: "Hell's Kitchen · 10th Ave",
    image: media.download2,
    imageAlt: "Another moment in the shop",
    imgClass: "object-cover object-[55%_center]",
    bio: "A relaxed, respectful chair for everyone—whether it is your first buzz cut, a color refresh, or a standing two-week appointment.",
  },
];

export function Staff() {
  return (
    <section
      id="staff"
      className="relative scroll-mt-32 overflow-hidden border-t border-gold/15 py-20 sm:py-28"
    >
      <SectionBackdrop
        src={media.imagesDefault}
        alt=""
        imageOpacityClass="opacity-[0.12]"
        washClassName="bg-gradient-to-br from-background/96 via-background/92 to-card/90"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Team
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Master & Junior barbers, one standard
          </h2>
          <p className="mt-4 text-lg text-muted-fg">
            Same respect for every client—trans, non-binary, queer, straight,
            long hair or fade—we listen first, then cut.
          </p>
        </div>

        <ul className="mt-14 grid gap-8 md:grid-cols-3">
          {staff.map((s) => (
            <li key={s.name} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden border border-border-subtle bg-card shadow-sm">
                <Image
                  src={s.image}
                  alt={s.imageAlt}
                  fill
                  quality={90}
                  className={`transition-transform duration-500 hover:scale-[1.03] ${s.imgClass}`}
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-cream">
                {s.name}
              </h3>
              <p className="text-sm font-medium text-gold">{s.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-fg">{s.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
