import fs from "node:fs";
import path from "node:path";

export type BlogPost = {
  slug: string;
  title: string;
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
