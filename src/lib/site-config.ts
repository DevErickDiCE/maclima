export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://maclimasolucionesenergeticas.com";

export const OG_IMAGE_PATH = "/og-image.jpg";
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

export const DEFAULT_OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 1200,
  height: 630,
  alt: "Maclima Soluciones Energéticas",
  type: "image/jpeg",
} as const;
