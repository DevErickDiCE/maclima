# Guía de estilo editorial SEO — Maclima

Esta guía complementa `BLOG_GUIDE.md`. Si existe una contradicción, prevalece este centro de control SEO y debe corregirse la guía antigua.

## Voz

- Profesional, técnica y comprensible.
- Cercana, directa y sin tono de vendedor agresivo.
- Consultiva: explicar qué revisar antes de recomendar.
- Honesta con límites, variables y casos donde una tecnología no conviene.

## Estructura mínima

1. Frontmatter completo.
2. Introducción que responda al problema y anticipe la decisión.
3. H2 alineados con preguntas reales del usuario.
4. Ejemplos o criterios prácticos.
5. Bloque “qué debe revisar un profesional” cuando aplique.
6. Conclusión breve y CTA adaptado a la intención.

## Frontmatter

```yaml
---
id: "slug-unico"
title: "Título visible"
seoTitle: "Título SEO"
slug: "slug-unico"
description: "Meta descripción de hasta 155 caracteres"
date: "YYYY-MM-DD"
updated_at: "YYYY-MM-DD"
category: "Aerotermia"
cluster: "Aerotermia"
keyword_principal: "keyword principal"
intencion: "comercial"
zona: "Comunidad de Madrid"
pagina_pilar: "/aerotermia"
status: "borrador"
image: "/blog/slug-unico.webp"
imageAlt: "Descripción concreta de la imagen"
---
```

Estados del contenido: `borrador`, `revision`, `publicado`.

## SEO on-page

- Una keyword principal y una intención dominante por URL.
- Título claro; no forzar la keyword si empeora la lectura.
- `seoTitle` distinto del H1 solo cuando mejore claridad o longitud.
- Descripción de hasta 155 caracteres y sin promesas no demostradas.
- Slug corto, estable y sin año salvo que la intención sea temporal.
- H2 descriptivos; evitar varios H1 dentro del Markdown.
- Añadir FAQ solo si responde preguntas reales. No usar schema FAQ automáticamente.
- Incluir enlaces contextuales según `enlaces-internos.md`.

## Evidencia

- Cifras comerciales: validar con Maclima.
- Rendimiento de productos: citar ficha del fabricante y condiciones.
- Normativa, ayudas y fiscalidad: fuente oficial y fecha de consulta.
- Casos: no inventar vivienda, consumo, ahorro ni resultado.
- Diferenciar datos medidos, cálculos orientativos y ejemplos.

## Imágenes

- Prioridad: proyectos reales y material propio autorizado.
- Alternativa: ilustración técnica coherente con la marca.
- Formato preferente WebP o AVIF.
- Nombre igual o relacionado con el slug.
- `imageAlt` describe lo visible; no acumula keywords.
- No subir imágenes pesadas sin optimización.

## Conversión

- Artículo de precio: CTA a estudio y presupuesto adaptado.
- Comparativa: CTA a evaluación del inmueble.
- Mantenimiento: CTA a revisión técnica.
- Producto: CTA a comprobar compatibilidad.
- BESS: CTA a análisis de curva de consumo.

## Prohibido

- “Factura cero”, “ahorro garantizado” o “la mejor empresa” sin prueba.
- Presentar ayudas como disponibles sin verificar convocatoria y plazo.
- Copiar artículos, noticias o fichas completas.
- Crear páginas locales repetidas cambiando solo el municipio.
- Dar instrucciones eléctricas, de refrigerantes, cubierta o perforación que puedan ser peligrosas.

