/**
 * Sab assets `public/` se. Spaces / brackets wale naam ke liye encode zaroori hai.
 */
export const PROMO_VIDEO_FILE =
  "Fresh and faded. That\u2019s the way we like it. \uD83D\uDCCD 695 10th Ave NY, NY 10036\u2728 Link to book in bio#ba.mp4";

function publicFile(name: string): string {
  return `/${encodeURIComponent(name)}`;
}

export const media = {
  /** Bari shop / interior shot */
  shopWide: publicFile("00barbershops4-mediumSquareAt3X.jpg"),
  /** Downloaded cuts / chair shots */
  download1: publicFile("download (1).jpg"),
  download2: publicFile("download (2).jpg"),
  download: publicFile("download.jpg"),
  /** Detail / secondary stills */
  imagesDefault: publicFile("images.jpg"),
  imagesAlt: publicFile("images (1).jpg"),
  promoVideo: publicFile(PROMO_VIDEO_FILE),
} as const;
