import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/site-config";

/**
 * El sitemap se genera desde las rutas y el frontmatter.
 *
 * Antes era un XML estático en `public/`: cada publicación obligaba a editarlo
 * a mano y el primer despiste dejó fuera un artículo recién publicado. Con dos
 * entradas por semana ese fallo se repite solo.
 *
 * Fuera quedan, a propósito:
 * - Las páginas legales, que llevan `noindex`; anunciarlas aquí sería la señal
 *   contraria y `scripts/seo-check.mjs` lo comprueba.
 * - `/consultoria`, que es un alias cuyo canonical apunta a
 *   `/consultoria-gratuita`. En el sitemap va la URL canónica, no el alias.
 */

/** Fecha de la última revisión de las páginas comerciales. */
const PAGINAS_LASTMOD = "2026-05-12";

const PAGINAS: MetadataRoute.Sitemap = [
  { url: "/", lastModified: PAGINAS_LASTMOD, changeFrequency: "weekly", priority: 1 },
  { url: "/catalogo", lastModified: PAGINAS_LASTMOD, changeFrequency: "weekly", priority: 0.9 },
  { url: "/catalogo/ben-dual-air", lastModified: PAGINAS_LASTMOD, changeFrequency: "monthly", priority: 0.8 },
  { url: "/aerotermia", lastModified: PAGINAS_LASTMOD, changeFrequency: "monthly", priority: 0.8 },
  { url: "/fotovoltaica", lastModified: PAGINAS_LASTMOD, changeFrequency: "monthly", priority: 0.8 },
  { url: "/consultoria-gratuita", lastModified: PAGINAS_LASTMOD, changeFrequency: "monthly", priority: 0.7 },
  { url: "/contacto", lastModified: PAGINAS_LASTMOD, changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  // `getAllPosts` ya ordena de más reciente a más antiguo.
  const ultimaPublicacion = posts[0]?.date ?? PAGINAS_LASTMOD;

  const rutas: MetadataRoute.Sitemap = [
    ...PAGINAS,
    {
      url: "/blog",
      lastModified: ultimaPublicacion,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `/blog/${post.slug}`,
      // Si el artículo se ha revisado, esa es la fecha que importa a Google.
      lastModified: post.updatedAt ?? post.date,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return rutas.map((entrada) => ({
    ...entrada,
    url: `${SITE_URL}${entrada.url}`,
  }));
}
