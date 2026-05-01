import Image from "next/image";

type SectionBackdropProps = {
  src: string;
  /** Image alt for accessibility (use "" only if decorative). */
  alt?: string;
  /** Tailwind opacity class for the photo layer, e.g. opacity-20 */
  imageOpacityClass?: string;
  /** Extra wash over the image (light theme defaults). */
  washClassName?: string;
};

/**
 * Full-bleed background image for a section. Parent must be `relative overflow-hidden`.
 */
export function SectionBackdrop({
  src,
  alt = "",
  imageOpacityClass = "opacity-[0.14]",
  washClassName = "bg-gradient-to-br from-background/95 via-background/88 to-background/80",
}: SectionBackdropProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10"
      aria-hidden={alt === ""}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-center ${imageOpacityClass}`}
        sizes="100vw"
        quality={88}
      />
      <div className={`absolute inset-0 ${washClassName}`} />
    </div>
  );
}
