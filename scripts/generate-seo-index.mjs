import fs from 'node:fs';
import path from 'node:path';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const OUTPUT_DIR = path.join(process.cwd(), 'docs', 'seo');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'registro-publicaciones.csv');

/**
 * Basic YAML frontmatter parser for key: "value" or key: value lines.
 */
function parseFrontmatter(rawContent) {
  const match = rawContent.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  if (!match) return {};
  const header = match[1];
  const meta = {};
  for (const rawLine of header.split('\n')) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    meta[key] = val;
  }
  return meta;
}

function escapeCsvField(val) {
  if (val === undefined || val === null) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

function generateIndex() {
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Error: Blog directory not found at ${BLOG_DIR}`);
    process.exit(1);
  }

  const files = fs.readdirSync(BLOG_DIR).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
  const records = [];
  const slugsSeen = new Map();
  const idsSeen = new Map();
  let hasErrors = false;

  for (const file of files.sort()) {
    const filePath = path.join(BLOG_DIR, file);
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    
    if (!fs.existsSync(filePath)) {
      console.error(`ERROR: File does not exist: ${relativePath}`);
      hasErrors = true;
      continue;
    }

    const raw = fs.readFileSync(filePath, 'utf8');
    const meta = parseFrontmatter(raw);

    const slug = meta.slug?.trim() || file.replace(/\.(md|mdx)$/, '');
    const id = meta.id?.trim() || slug;
    const title = meta.title?.trim() || '';
    const description = meta.description?.trim() || '';
    const keyword = meta.keyword_principal?.trim() || meta.keyword?.trim() || '';
    const cluster = meta.cluster?.trim() || meta.category?.trim() || '';
    const paginaPilar = meta.pagina_pilar?.trim() || meta.pillar_page?.trim() || '';
    const status = meta.status?.trim() || 'publicado';
    const fechaPub = meta.date?.trim() || meta.fecha_publicacion?.trim() || '';
    const fechaAct = meta.updated_at?.trim() || meta.fecha_actualizacion?.trim() || fechaPub;
    const url = `/blog/${slug}`;

    // Duplicate checks
    if (slugsSeen.has(slug)) {
      console.error(`ERROR: Duplicate slug '${slug}' found in ${relativePath} and ${slugsSeen.get(slug)}`);
      hasErrors = true;
    } else {
      slugsSeen.set(slug, relativePath);
    }

    if (idsSeen.has(id)) {
      console.error(`ERROR: Duplicate ID '${id}' found in ${relativePath} and ${idsSeen.get(id)}`);
      hasErrors = true;
    } else {
      idsSeen.set(id, relativePath);
    }

    records.push({
      id,
      titulo: title,
      slug,
      url,
      descripcion: description,
      keyword_principal: keyword,
      cluster,
      pagina_pilar: paginaPilar,
      status,
      fecha_publicacion: fechaPub,
      fecha_actualizacion: fechaAct,
      ruta_archivo: relativePath
    });
  }

  if (hasErrors) {
    console.error('Index generation failed due to validation errors.');
    process.exit(1);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const headers = [
    'id',
    'titulo',
    'slug',
    'url',
    'descripcion',
    'keyword_principal',
    'cluster',
    'pagina_pilar',
    'status',
    'fecha_publicacion',
    'fecha_actualizacion',
    'ruta_archivo'
  ];

  const csvRows = [
    headers.join(','),
    ...records.map(r => headers.map(h => escapeCsvField(r[h])).join(','))
  ];

  fs.writeFileSync(OUTPUT_FILE, csvRows.join('\n') + '\n', 'utf8');
  console.log(`Successfully indexed ${records.length} posts into ${OUTPUT_FILE}`);
}

generateIndex();
