# Auditoría SEO inicial — Maclima

Fecha de revisión: 17 de agosto de 2026.

Alcance: repositorio `DevErickDiCE/maclima` y comprobación de la web pública. No incluye datos privados de Search Console, Analytics, Perfil de Empresa de Google ni CRM.

## Correcto

- Dominio primario y canonicals coherentes con `https://maclimasolucionesenergeticas.com`.
- Metadatos, Open Graph y Twitter Cards configurados en las páginas principales.
- `robots.txt` permite rastreo y declara el sitemap.
- Existe sitemap con páginas comerciales, blog y tres artículos actuales.
- El blog es indexable y cada artículo genera canonical, Open Graph y `BlogPosting` en JSON-LD.
- Existe una arquitectura de contenidos Markdown con frontmatter.
- Existe un índice determinista mediante `npm run seo:index`.
- Las páginas y artículos incluyen llamadas a consultoría y WhatsApp.
- La web comunica dirección, teléfono, email, CIF y razón social.

## Bloqueante / prioridad P0

1. **La ruta `/geotermia` no existe en el repositorio**, aunque aparece enlazada desde navegación y contenido. Debe crearse o retirarse el enlace hasta que esté disponible.
2. **El sitemap es estático**. Con dos artículos semanales quedará desactualizado si no se modifica manualmente. Debe generarse desde las rutas y el frontmatter.
3. **No hay medición orgánica y de conversiones visible en el código**. Antes de evaluar resultados deben verificarse Search Console y una analítica respetuosa con el consentimiento.

## Mejorable / prioridad P1

- Las páginas `/aerotermia` y `/fotovoltaica` usan una estructura de contenido base y todavía son demasiado genéricas para competir por intención comercial local.
- No existe una página pilar propia para BESS; por ahora el clúster debe enlazar a Fotovoltaica o Consultoría.
- Los artículos no muestran breadcrumbs ni un bloque de artículos relacionados.
- `dateModified` de `BlogPosting` replica la fecha inicial y no usa una fecha real de actualización.
- El registro actual tenía vacíos `keyword_principal` y `pagina_pilar`; se corrige dentro de este setup.
- La entidad estructurada usa `ProfessionalService`, pero debe revisarse dirección, área servida, coordenadas, horario y perfiles oficiales antes de completar el marcado local.
- No existe un sistema documentado para registrar clics en formulario, WhatsApp, teléfono y CTA desde artículos.
- Las páginas comerciales necesitan más evidencia: proceso, credenciales, casos, fotografías reales, marcas, preguntas frecuentes y criterios técnicos.
- No hay RSS. Es secundario, pero será útil cuando el blog tenga continuidad.

## Contenido

- Hay tres artículos publicados.
- El artículo de ayudas de aerotermia cubre una intención sensible al tiempo y necesita revisión periódica.
- El artículo de BEN Dual-Air cubre producto y limitación de unidad exterior.
- El artículo de comunidad energética aporta autoridad local, pero no sustituye una guía evergreen sobre autoconsumo colectivo.
- El calendario existía, pero no tenía filas planificadas.
- Existían dos guías del blog con contenido duplicado y una afirmación desactualizada sobre la inexistencia del blog.

## No verificado

- Propiedad y estado de Google Search Console.
- Envío y lectura del sitemap por Google.
- Indexación real de cada URL.
- Consultas, impresiones, clics, CTR y posiciones.
- Perfil de Empresa de Google, reseñas y coherencia NAP fuera de la web.
- Core Web Vitals de campo.
- Backlinks, menciones locales y autoridad de dominio.
- Tasa de conversión y calidad de leads.

## Orden recomendado de corrección

1. Crear `/geotermia` y probar enlaces.
2. Automatizar sitemap e incluir `lastmod` desde frontmatter.
3. Verificar Search Console y eventos de conversión.
4. Fortalecer páginas pilar antes de exigirles competir por keywords comerciales.
5. Añadir breadcrumbs, relacionados y fecha de actualización.
6. Ejecutar el calendario editorial y revisar resultados cada cuatro semanas.

