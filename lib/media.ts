/**
 * Sab assets `public/` se. Spaces / brackets wale naam ke liye encode zaroori hai.
 */
export const PROMO_VIDEO_FILE =
  "Fresh and faded. That\u2019s the way we like it. \uD83D\uDCCD 695 10th Ave NY, NY 10036\u2728 Link to book in bio#ba.mp4";

/** Hi-res interior — baqi choti thumbs (~6–10KB) fill + scale par pixelate ho jati thin. */
const SHOP_HI_RES = "00barbershops4-mediumSquareAt3X.jpg";

function publicFile(name: string): string {
  return `/${encodeURIComponent(name)}`;
}

export const media = {
  /** Bari shop / interior shot (full resolution) */
  shopWide: publicFile(SHOP_HI_RES),
  /** Same hi-res file — use `object-position` in components for variety */
  download1: publicFile(SHOP_HI_RES),
  download2: publicFile(SHOP_HI_RES),
  download: publicFile(SHOP_HI_RES),
  imagesDefault: publicFile(SHOP_HI_RES),
  imagesAlt: publicFile(SHOP_HI_RES),
  promoVideo: publicFile(PROMO_VIDEO_FILE),
} as const;
