import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;       // H1 visible
  seoTitle?: string;   // <title> SEO si difiere del H1 visible
  description: string;
  date: string;        // ISO YYYY-MM-DD
  category: string;
  image?: string;
  contentMd: string;   // body markdown sin frontmatter
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/**
 * Mini parser de frontmatter YAML (solo claves planas en formato `key: "value"` o `key: value`).
 * Suficiente para nuestro frontmatter — evita añadir gray-matter como dependencia.
 */
function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) {
    return { meta: {}, body: raw };
  }
  const [, header, body] = match;
  const meta: Record<string, string> = {};
  for (const rawLine of header.split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body };
}

function readPost(filename: string): BlogPost | null {
  const fullPath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { meta, body } = parseFrontmatter(raw);
  const slug = meta.slug?.trim() || filename.replace(/\.md$/, "");
  if (!meta.title || !meta.date) return null;
  return {
    slug,
    title: meta.title,
    seoTitle: meta.seoTitle && meta.seoTitle.length > 0 ? meta.seoTitle : undefined,
    description: meta.description ?? "",
    date: meta.date,
    category: meta.category ?? "Maclima",
    image: meta.image && meta.image.length > 0 ? meta.image : undefined,
    contentMd: body.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"));
  const posts = files
    .map(readPost)
    .filter((p): p is BlogPost => p !== null);
  // Más reciente primero.
  posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR);
  for (const file of files) {
    if (!file.endsWith(".md")) continue;
    const post = readPost(file);
    if (post && post.slug === slug) return post;
  }
  return null;
}

/**
 * Render Markdown a HTML estático mínimo: H1/H2/H3, párrafos, listas no
 * ordenadas, **negrita**, *cursiva*, [texto](enlace).
 * Suficiente para el blog actual. Si crecemos a tablas/código/imagenes
 * embebidas migrar a remark/rehype.
 */
export function renderMarkdown(markdown: string): string {
  const escapeHtml = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

  const inline = (s: string) =>
    escapeHtml(s)
      // [texto](url) — interno vs externo
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, text: string, href: string) => {
        const isExternal = /^https?:\/\//.test(href);
        const rel = isExternal ? ' target="_blank" rel="noopener noreferrer"' : "";
        return `<a href="${href}" class="text-[#9512A0] font-semibold underline-offset-4 hover:underline"${rel}>${text}</a>`;
      })
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-[#17111A]">$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em class="text-[#4A4552]">$1</em>');

  const lines = markdown.split("\n");
  const out: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Separador horizontal (puede aparecer tras frontmatter en algunos archivos)
    if (/^---+\s*$/.test(line.trim())) {
      i += 1;
      continue;
    }

    // Bloque promo (callout premium): :::promo … :::
    // Estructura por pares clave: valor. Claves soportadas:
    //   title, eyebrow, price, body, cta_text, cta_href, disclaimer
    if (line.trim() === ":::promo") {
      const fields: Record<string, string> = {};
      i += 1;
      while (i < lines.length && lines[i].trim() !== ":::") {
        const raw = lines[i];
        const colonIdx = raw.indexOf(":");
        if (colonIdx > 0) {
          const key = raw.slice(0, colonIdx).trim();
          const value = raw.slice(colonIdx + 1).trim();
          if (key && value) fields[key] = value;
        }
        i += 1;
      }
      // Saltar el cierre ":::"
      if (i < lines.length) i += 1;

      const eyebrow = fields.eyebrow || "Oferta de lanzamiento";
      const title = fields.title || "";
      const price = fields.price || "";
      const body = fields.body || "";
      const ctaText = fields.cta_text || "";
      const ctaHref = fields.cta_href || "";
      const disclaimer = fields.disclaimer || "";

      const isExternalCta = /^https?:\/\//.test(ctaHref);
      const ctaRel = isExternalCta ? ' target="_blank" rel="noopener noreferrer"' : "";

      const parts: string[] = [];
      parts.push(
        `<p class="text-[11px] font-black uppercase tracking-[0.16em] text-[#9512A0]">${escapeHtml(eyebrow)}</p>`,
      );
      if (title) {
        parts.push(
          `<p class="mt-2 text-2xl font-bold leading-tight text-[#17111A] sm:text-3xl">${escapeHtml(title)}</p>`,
        );
      }
      if (price) {
        parts.push(
          `<p class="mt-4 text-lg font-bold text-[#17111A] sm:text-xl">${inline(price)}</p>`,
        );
      }
      if (body) {
        parts.push(
          `<p class="mt-3 text-sm leading-6 text-[#4A4552] sm:text-base">${inline(body)}</p>`,
        );
      }
      if (ctaText && ctaHref) {
        parts.push(
          `<div class="mt-6"><a href="${ctaHref}" class="inline-flex items-center gap-2 rounded-xl bg-[#9512A0] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_34px_rgba(149,18,160,0.26)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#7B0C81]"${ctaRel}>${escapeHtml(ctaText)}<span aria-hidden="true">→</span></a></div>`,
        );
      }
      if (disclaimer) {
        parts.push(
          `<p class="mt-5 text-xs italic leading-5 text-[#6B6275]">${escapeHtml(disclaimer)}</p>`,
        );
      }

      out.push(
        `<aside class="not-prose my-8 overflow-hidden rounded-2xl border border-[#D3C5E5] bg-gradient-to-br from-[#FAF5FF] via-[#F7F5FB] to-white shadow-[0_18px_44px_rgba(149,18,160,0.10)]"><div class="border-l-4 border-[#9512A0] p-6 sm:p-8">${parts.join("")}</div></aside>`,
      );
      continue;
    }

    // Bloque stats: tarjetas con cifras clave en grid.
    //   :::stats
    //   stat: Valor | Etiqueta
    //   ...
    //   :::
    if (line.trim() === ":::stats") {
      const items: { value: string; label: string }[] = [];
      i += 1;
      while (i < lines.length && lines[i].trim() !== ":::") {
        const raw = lines[i].trim();
        const m = raw.match(/^stat\s*:\s*(.+)$/);
        if (m) {
          const [value, ...rest] = m[1].split("|").map((s) => s.trim());
          items.push({ value, label: rest.join(" | ") });
        }
        i += 1;
      }
      if (i < lines.length) i += 1;

      if (items.length > 0) {
        const cards = items
          .map(
            ({ value, label }) =>
              `<div class="rounded-xl border border-[#E6E0F5] bg-white p-4 text-center shadow-[0_8px_24px_rgba(23,17,26,0.04)] sm:p-5"><p class="text-2xl font-black leading-tight text-[#9512A0] sm:text-3xl">${escapeHtml(value)}</p><p class="mt-2 text-xs font-semibold leading-5 text-[#4A4552] sm:text-sm">${escapeHtml(label)}</p></div>`,
          )
          .join("");
        const cols = items.length >= 4 ? "sm:grid-cols-4" : items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2";
        out.push(
          `<div class="not-prose my-8 grid grid-cols-2 gap-3 ${cols} sm:gap-4">${cards}</div>`,
        );
      }
      continue;
    }

    // Imagen como figura: ![alt](src) o ![alt](src "caption")
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)\s*$/);
    if (imgMatch) {
      const [, alt, src, caption] = imgMatch;
      const safeAlt = escapeHtml(alt);
      const safeSrc = encodeURI(src);
      const captionHtml = caption
        ? `<figcaption class="mt-3 text-center text-xs italic leading-5 text-[#6B6275] sm:text-sm">${escapeHtml(caption)}</figcaption>`
        : "";
      out.push(
        `<figure class="not-prose my-10"><div class="relative overflow-hidden rounded-2xl border border-[#E6E0F5] bg-[#F7F5FB] shadow-[0_14px_40px_rgba(23,17,26,0.07)]"><img src="${safeSrc}" alt="${safeAlt}" loading="lazy" decoding="async" class="block h-auto w-full object-cover" /></div>${captionHtml}</figure>`,
      );
      i += 1;
      continue;
    }

    // Headings
    const h1 = line.match(/^#\s+(.*)$/);
    if (h1) {
      out.push(`<h1 class="mt-8 mb-6 text-3xl font-bold text-[#17111A] sm:text-4xl">${inline(h1[1])}</h1>`);
      i += 1;
      continue;
    }
    const h2 = line.match(/^##\s+(.*)$/);
    if (h2) {
      out.push(`<h2 class="mt-10 mb-4 text-2xl font-bold text-[#17111A] sm:text-3xl">${inline(h2[1])}</h2>`);
      i += 1;
      continue;
    }
    const h3 = line.match(/^###\s+(.*)$/);
    if (h3) {
      out.push(`<h3 class="mt-6 mb-3 text-xl font-bold text-[#17111A]">${inline(h3[1])}</h3>`);
      i += 1;
      continue;
    }

    // Listas (no anidadas)
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) {
        const item = lines[i].replace(/^[-*]\s+/, "");
        items.push(`<li class="leading-relaxed">${inline(item)}</li>`);
        i += 1;
      }
      out.push(
        `<ul class="my-4 list-disc space-y-2 pl-6 text-[#4A4552]">${items.join("")}</ul>`,
      );
      continue;
    }

    // Línea en blanco → separador entre párrafos
    if (line.trim() === "") {
      i += 1;
      continue;
    }

    // Párrafo: acumular líneas hasta blanco/heading/lista
    const buf: string[] = [line];
    i += 1;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^#{1,6}\s/.test(lines[i]) &&
      !/^[-*]\s+/.test(lines[i]) &&
      !/^---+\s*$/.test(lines[i].trim())
    ) {
      buf.push(lines[i]);
      i += 1;
    }
    out.push(
      `<p class="my-4 leading-relaxed text-[#4A4552]">${inline(buf.join(" "))}</p>`,
    );
  }

  return out.join("\n");
}

export function formatDateEs(iso: string): string {
  // YYYY-MM-DD → "28 de mayo de 2026"
  const [y, m, d] = iso.split("-").map((p) => parseInt(p, 10));
  if (!y || !m || !d) return iso;
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${d} de ${months[m - 1]} de ${y}`;
}
