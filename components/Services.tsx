import { SectionBackdrop } from "@/components/SectionBackdrop";
import { media } from "@/lib/media";

type ServiceItem = {
  name: string;
  price: string;
  duration: string;
  description: string;
  footnote?: string;
};

type ServiceCategory = {
  id: string;
  title: string;
  intro?: string;
  items: ServiceItem[];
};

const categories: ServiceCategory[] = [
  {
    id: "haircuts",
    title: "Haircut services",
    intro:
      "Master Barbers bring precision to every cut; Junior Barbers meet the same standard at a lower price. Shampoo and beard trim add-ons appear on the next step when you book.",
    items: [
      {
        name: "Haircut",
        price: "$55+",
        duration: "40 mins",
        description:
          "Classic, trendy, or in between—tailored to you. Add shampoo or beard trim on the next booking step.",
      },
      {
        name: "Haircut & beard trim",
        price: "$75",
        duration: "1 hr",
        description: "Full haircut plus beard trim.",
      },
      {
        name: "Haircut — long hair",
        price: "$75+",
        duration: "1 hr",
        description:
          "Rough dry and light styling for shoulder length or below. Master and Junior pricing available.",
      },
      {
        name: "Buzzcut",
        price: "$40",
        duration: "30 mins",
        description:
          "One-length clipper cut with tapered or shaped neckline.",
      },
      {
        name: "Back & sides",
        price: "$40",
        duration: "30 mins",
        description:
          "Clipper sides, top untouched—add shampoo or beard trim to finish.",
      },
      {
        name: "Blowout",
        price: "$55",
        duration: "45 mins",
        description: "Volume, shape, and polish.",
      },
    ],
  },
  {
    id: "beard",
    title: "Beard care services",
    intro:
      "Line-ups, trims, and full straight-razor shaves with hot towel comfort.",
    items: [
      {
        name: "Beard trim",
        price: "$25",
        duration: "15 mins",
        description:
          "Shape and refresh—straight razor cheek line available if you want it.",
      },
      {
        name: "Straight razor shave",
        price: "$55",
        duration: "30 mins",
        description:
          "Warm cream, hot towel, straight razor finish—classic ritual.",
      },
    ],
  },
  {
    id: "color",
    title: "Hair color services",
    intro: "Grey coverage or a bigger change—we have you covered.",
    items: [
      {
        name: "Color — short hair",
        price: "$80+",
        duration: "45 mins+",
        description: "Above the ear.",
      },
      {
        name: "Color — medium length",
        price: "$115+",
        duration: "1 hr+",
        description: "Above the shoulder.",
      },
      {
        name: "Color — long hair",
        price: "$150+",
        duration: "1 hr 15+",
        description: "Below the shoulder.",
      },
    ],
  },
  {
    id: "addons",
    title: "Add-on services",
    items: [
      {
        name: "Beard trim add-on",
        price: "$22",
        duration: "15 mins",
        description: "With a haircut—sharp lines and tidy shape.",
        footnote:
          "Discounted only with a haircut. Booked alone, beard trim is $25.",
      },
      {
        name: "Shampoo add-on",
        price: "$5",
        duration: "5 mins",
        description: "Cleanse, refresh, prep for the cut—plus scalp massage.",
      },
    ],
  },
];

function PricingRow({ item }: { item: ServiceItem }) {
  return (
    <li className="grid gap-6 rounded-xl border border-border-subtle bg-card/85 px-5 py-6 shadow-sm sm:grid-cols-[1fr_auto] sm:items-start sm:gap-10">
      <div>
        <div className="flex flex-wrap items-baseline gap-3">
          <h3 className="font-serif text-xl font-semibold text-cream sm:text-2xl">
            {item.name}
          </h3>
          <span className="text-xs font-bold uppercase tracking-wider text-gold/90">
            {item.duration}
          </span>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-fg sm:text-base">
          {item.description}
        </p>
        {item.footnote ? (
          <p className="mt-3 text-xs leading-relaxed text-muted-fg/90">
            {item.footnote}
          </p>
        ) : null}
      </div>
      <p className="font-serif text-4xl font-semibold leading-none text-gold sm:text-right sm:text-5xl">
        {item.price}
      </p>
    </li>
  );
}

export function Services() {
  return (
    <section
      id="pricing"
      className="relative scroll-mt-32 overflow-hidden border-t border-gold/20 py-20 sm:py-28"
    >
      <SectionBackdrop
        src={media.shopWide}
        alt=""
        imageOpacityClass="opacity-[0.12]"
        washClassName="bg-gradient-to-b from-background/96 via-card/90 to-background/96"
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-gold">
            Pricing
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl">
            Understanding your look drives everything we do
          </h2>
          <p className="mt-4 text-lg text-muted-fg">
            Clear timing, clear pricing—book on Square and layer add-ons on the
            next screen.
          </p>
        </div>

        <div className="mt-12 space-y-16 sm:mt-20">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h3 className="border-b border-gold/30 pb-4 font-serif text-2xl font-semibold text-cream sm:text-3xl">
                {cat.title}
              </h3>
              {cat.intro ? (
                <p className="mt-4 max-w-3xl text-sm text-muted-fg sm:text-base">
                  {cat.intro}
                </p>
              ) : null}
              <ul className="mt-4 space-y-4">
                {cat.items.map((item) => (
                  <PricingRow key={item.name} item={item} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
