# Guía para subir artículos al blog de Maclima

Este documento explica cómo crear y publicar nuevos artículos en el blog de Maclima Soluciones Energéticas manteniendo siempre la misma estructura, tono, formato y calidad.

> **Importante para el agente que publique el artículo:** todo artículo nuevo debe seguir esta guía al pie de la letra. La estructura de carpetas y el frontmatter no son opcionales: garantizan que el blog pueda renderizarse, indexarse en SEO y mantenerse semanalmente sin esfuerzo.

---

## 1. Dónde se guarda cada artículo

Todos los artículos del blog viven en:

```
/content/blog/
```

Un artículo = un archivo Markdown con extensión `.md` cuyo nombre coincide con el `slug`.

Ejemplo:

```
/content/blog/ventajas-de-la-aerotermia.md
/content/blog/como-ahorrar-en-la-factura-de-la-luz.md
```

Las imágenes destacadas y cualquier recurso del blog se guardan en:

```
/public/blog/
```

Ejemplo:

```
/public/blog/ventajas-de-la-aerotermia.webp
```

Las imágenes en `/public/blog/` se referencian en el frontmatter con ruta absoluta desde la web, sin `public`:

```yaml
image: "/blog/ventajas-de-la-aerotermia.webp"
```

---

## 2. Objetivo del blog

El blog de Maclima debe servir para:

- Explicar temas de aerotermia, fotovoltaica, climatización, geotermia, BESS y eficiencia energética.
- Resolver dudas habituales de clientes particulares y empresas.
- Mejorar el posicionamiento SEO de la web.
- Generar confianza y facilitar el contacto por WhatsApp o formulario.
- Mantener un tono profesional, claro y cercano.

---

## 3. Tono de escritura

El tono debe ser:

- Profesional, pero fácil de entender.
- Cercano, sin sonar excesivamente técnico.
- Orientado a clientes reales que buscan ahorrar, reformar o mejorar su vivienda o local.
- Comercial de forma natural, sin parecer agresivo.
- Claro, directo y útil.

Evitar:

- Textos genéricos sin valor.
- Promesas exageradas.
- Frases como “la mejor empresa del mercado” si no están justificadas.
- Lenguaje demasiado técnico sin explicación.
- Párrafos muy largos.

---

## 4. Estructura obligatoria del archivo

Cada artículo debe seguir esta estructura exacta. El frontmatter va arriba, entre `---`, y el contenido en Markdown justo debajo.

```md
---
title: "Título del artículo"
slug: "url-del-articulo"
description: "Descripción SEO breve del artículo (máx. 155 caracteres)."
date: "YYYY-MM-DD"
category: "Aerotermia"
image: "/blog/nombre-imagen.webp"
---

# Título del artículo

Introducción breve del tema. Explica el problema o la duda del cliente y anticipa qué va a aprender.

## Primer apartado principal

Explicación clara del tema.

## Segundo apartado principal

Desarrollo del contenido con ejemplos prácticos.

## Tercer apartado principal

Consejos, ventajas, errores habituales o aspectos que debe tener en cuenta el cliente.

## ¿Cuándo conviene pedir asesoramiento profesional?

Bloque orientado a conversión. Explicar que cada vivienda, local o instalación puede necesitar un estudio específico.

## Conclusión

Resumen final del artículo y llamada a la acción.

**¿Quieres saber qué solución encaja mejor en tu vivienda o negocio? Contacta con Maclima Soluciones Energéticas y te asesoramos sin compromiso.**
```

### Campos del frontmatter

| Campo         | Obligatorio | Formato / Reglas                                                                 |
|---------------|-------------|----------------------------------------------------------------------------------|
| `title`       | Sí          | Entre comillas. Claro y con la palabra clave principal.                          |
| `slug`        | Sí          | En kebab-case, sin tildes, sin caracteres especiales. Único en todo el blog.     |
| `description` | Sí          | Máximo 155 caracteres. Resume el artículo para SEO.                              |
| `date`        | Sí          | Formato `YYYY-MM-DD`.                                                            |
| `category`    | Sí          | Una de: `Aerotermia`, `Fotovoltaica`, `Climatización`, `Geotermia`, `BESS`, `Ahorro energético`, `Consejos`. |
| `image`       | Opcional    | Ruta desde la web (sin `public`). Ej.: `/blog/aerotermia.webp`.                  |

---

## 5. Reglas SEO

Cada artículo debe incluir:

- Un título claro con la palabra clave principal.
- Una descripción SEO de máximo 155 caracteres.
- Un slug limpio, sin tildes ni caracteres especiales.
- Subtítulos `##` (H2) bien organizados.
- Frases cortas y párrafos fáciles de leer.
- Una llamada a la acción al final.
- Enlaces internos hacia otras páginas del sitio cuando tenga sentido (`/aerotermia`, `/fotovoltaica`, `/contacto`, etc.).

Ejemplos de slugs correctos:

```
aerotermia-y-fotovoltaica
como-ahorrar-en-la-factura-de-la-luz
ventajas-de-la-aerotermia
mantenimiento-de-placas-solares
```

---

## 6. Formato visual

El artículo debe ser fácil de leer en móvil. Usar:

- Párrafos cortos.
- Listas cuando ayuden a ordenar ideas.
- Negritas solo para destacar ideas importantes.
- Subtítulos claros.
- Una imagen destacada si está disponible.

No saturar con demasiadas negritas ni listas innecesarias.

---

## 7. Imágenes

Si el artículo lleva imagen destacada:

- Guardarla en `/public/blog/`.
- Usar formato `.webp` siempre que sea posible (mejor compresión).
- Nombre = mismo slug del artículo.
- Referenciarla en el frontmatter con la ruta `/blog/<nombre>.webp`.

Ejemplo:

```
Archivo físico:   /public/blog/aerotermia-y-fotovoltaica.webp
En el frontmatter: image: "/blog/aerotermia-y-fotovoltaica.webp"
```

Si no hay imagen disponible, dejar `image: ""` o eliminar la línea.

---

## 8. Proceso para publicar un nuevo artículo

1. Redactar el contenido siguiendo la estructura del apartado 4.
2. Crear el archivo en `/content/blog/<slug>.md`.
3. Verificar que el `slug` es único (ningún otro archivo con ese nombre).
4. Verificar que la fecha está en formato `YYYY-MM-DD`.
5. Si hay imagen destacada, guardarla en `/public/blog/<slug>.webp` y referenciarla en el frontmatter.
6. Revisar ortografía y enlaces internos.
7. Probar localmente (`npm run dev`) y comprobar que el listado del blog y la página individual cargan bien.
8. Revisar la versión móvil.
9. Hacer commit con un mensaje claro.

Ejemplo de commit:

```bash
git add content/blog/ventajas-de-la-aerotermia.md public/blog/ventajas-de-la-aerotermia.webp
git commit -m "Add blog article: ventajas de la aerotermia"
git push
```

---

## 9. Plantilla base de artículo

Plantilla lista para copiar y pegar al crear un nuevo archivo en `/content/blog/`:

```md
---
title: ""
slug: ""
description: ""
date: ""
category: ""
image: ""
---

#

Introducción del artículo.

##

Contenido del primer apartado.

##

Contenido del segundo apartado.

##

Contenido del tercer apartado.

## ¿Cuándo conviene pedir asesoramiento profesional?

Cada vivienda, local o instalación puede tener necesidades diferentes. Por eso, antes de tomar una decisión, es recomendable revisar el consumo, el tipo de inmueble, el espacio disponible y los objetivos de ahorro.

En Maclima Soluciones Energéticas podemos ayudarte a valorar qué solución encaja mejor en tu caso.

## Conclusión

Resumen final del artículo.

**¿Quieres mejorar la eficiencia energética de tu vivienda o negocio? Contacta con Maclima Soluciones Energéticas y te asesoramos sin compromiso.**
```

---

## 10. Prompt reutilizable para futuros artículos

Cuando se quiera subir un nuevo artículo al blog, usar este prompt:

```txt
Quiero que subas un nuevo artículo al blog de Maclima Soluciones Energéticas siguiendo exactamente las instrucciones del archivo BLOG_GUIDE.md.

Te paso el tema, frases obligatorias y contenido base:

TEMA:
[Pegar aquí el tema]

FRASES OBLIGATORIAS:
[Pegar aquí las frases exactas que deben aparecer]

INFORMACIÓN BASE:
[Pegar aquí notas, enlaces, ideas o texto del cliente]

Instrucciones:
1. Redacta el artículo con tono profesional, cercano y claro.
2. Respeta las frases obligatorias sin cambiarlas.
3. Optimiza el artículo para SEO.
4. Crea el slug correcto y úsalo como nombre del archivo.
5. Añade frontmatter completo según BLOG_GUIDE.md.
6. Guarda el artículo en /content/blog/<slug>.md.
7. Si hace falta imagen destacada, deja indicado el nombre recomendado en /public/blog/<slug>.webp.
8. Revisa responsive móvil.
9. Haz commit con un mensaje claro.
```

---

## 11. Criterios de calidad antes de darlo por terminado

Antes de finalizar, comprobar:

- El artículo se entiende sin conocimientos técnicos.
- El título es claro y atractivo.
- La descripción SEO resume bien el contenido y respeta los 155 caracteres.
- El slug está limpio, en kebab-case y es único.
- Las frases obligatorias del cliente aparecen exactamente como se han pedido.
- La llamada a la acción está incluida.
- El artículo no parece generado de forma genérica.
- No hay faltas de ortografía.
- La página se ve bien en móvil.
- El archivo está en `/content/blog/` y la imagen (si la hay) en `/public/blog/`.

---

## 12. Estado actual del blog

A día de hoy, la web de Maclima **todavía no tiene página de blog implementada**. Esta guía y la estructura de carpetas (`/content/blog/` y `/public/blog/`) quedan preparadas para que:

- Los artículos puedan empezar a redactarse y almacenarse desde ya con el formato definitivo.
- Cuando se implemente la página `/blog` y la página individual `/blog/[slug]`, los artículos existentes se rendericen sin necesidad de cambiar nada.

Mientras el listado y la página individual no estén implementados, los archivos Markdown se mantienen en `/content/blog/` como fuente de verdad del contenido.
