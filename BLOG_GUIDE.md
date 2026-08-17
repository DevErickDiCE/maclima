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
id: "url-del-articulo"
title: "Título del artículo"
seoTitle: "Título SEO"
slug: "url-del-articulo"
description: "Descripción SEO breve del artículo (máx. 155 caracteres)."
date: "YYYY-MM-DD"
updated_at: "YYYY-MM-DD"
category: "Aerotermia"
cluster: "Aerotermia"
keyword_principal: "palabra clave principal"
intencion: "informacional | comercial | transaccional | navegacional"
zona: "España | Comunidad de Madrid | Sierra de Madrid"
pagina_pilar: "/aerotermia"
status: "borrador | revision | publicado"
image: "/blog/nombre-imagen.webp"
imageAlt: "Descripción útil de la imagen"
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
| `updated_at`  | Sí          | Última revisión real en formato `YYYY-MM-DD`.                                    |
| `category`    | Sí          | Una de: `Aerotermia`, `Fotovoltaica`, `Climatización`, `Geotermia`, `BESS`, `Ahorro energético`, `Consejos`. |
| `cluster`     | Sí          | Clúster definido en `docs/seo/keywords.csv`.                                     |
| `keyword_principal` | Sí    | Una intención dominante por URL.                                                 |
| `intencion`   | Sí          | `informacional`, `comercial`, `transaccional` o `navegacional`.                  |
| `zona`        | Sí          | Alcance territorial real del contenido.                                          |
| `pagina_pilar` | Sí         | Ruta comercial a la que apoya el artículo.                                       |
| `status`      | Sí          | `borrador`, `revision` o `publicado`.                                             |
| `image`       | Opcional    | Ruta desde la web (sin `public`). Ej.: `/blog/aerotermia.webp`.                  |
| `imageAlt`    | Si hay imagen | Descripción concreta de lo visible.                                             |

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

## 8. Proceso para publicar un nuevo artículo (Flujo SEO Escalable)

1. **Consultar el registro ligero**: Leer `docs/seo/calendario-publicaciones.csv` y `docs/seo/registro-publicaciones.csv`. No cargar toda la biblioteca de artículos.
2. **Seleccionar candidatos**: Comparar título, slug, descripción, keyword y clúster. Usar `grep_search` si es necesario. Seleccionar como máximo 5 artículos relacionados y la página pilar correspondiente para leer completos. Si hay riesgo de canibalización no resoluble entre estos 5, detenerse y pedir autorización.
3. **Redactar el contenido**: Siguiendo la estructura del apartado 4.
4. **Crear el archivo**: Guardar en `/content/blog/<slug>.md`.
5. **Verificar metadatos**: Asegurar que `slug`, `title`, `description`, `category` y `date` están definidos en el frontmatter.
6. **Imagen destacada**: Si corresponde, guardar en `/public/blog/<slug>.webp` y referenciar en el frontmatter.
7. **Reconstruir el índice SEO**: Ejecutar `npm run seo:index` para actualizar `docs/seo/registro-publicaciones.csv` sin procesar cuerpos completos con LLM.
8. **Probar localmente**: Probar con `npm run dev` o validar build.
9. **Hacer commit**: Guardar cambios con mensaje claro.

Ejemplo de commit:

```bash
npm run seo:index
git add content/blog/ventajas-de-la-aerotermia.md docs/seo/registro-publicaciones.csv public/blog/ventajas-de-la-aerotermia.webp
git commit -m "Add blog article: ventajas de la aerotermia"
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
Quiero que subas un nuevo artículo al blog de Maclima Soluciones Energéticas siguiendo exactamente las instrucciones del archivo BLOG_GUIDE.md y el flujo SEO escalable.

Te paso el tema, frases obligatorias y contenido base:

TEMA:
[Pegar aquí el tema]

FRASES OBLIGATORIAS:
[Pegar aquí las frases exactas que deben aparecer]

INFORMACIÓN BASE:
[Pegar aquí notas, enlaces, ideas o texto del cliente]

Instrucciones:
1. Aplica el MODO SEO SIGUIENTE ARTÍCULO: Lee primero /docs/seo/registro-publicaciones.csv y /docs/seo/calendario-publicaciones.csv.
2. Selecciona como máximo los 5 artículos más relacionados e inspecciona sus cuerpos sólo si es necesario. No leas toda la biblioteca.
3. Redacta el artículo con tono profesional, cercano y claro.
4. Respeta las frases obligatorias sin cambiarlas.
5. Optimiza el artículo para SEO.
6. Crea el slug correcto y úsalo como nombre del archivo.
7. Añade frontmatter completo según BLOG_GUIDE.md.
8. Guarda el artículo en /content/blog/<slug>.md.
9. Ejecuta `npm run seo:index` para regenerar el registro ligero.
10. Si hace falta imagen destacada, deja indicado el nombre recomendado en /public/blog/<slug>.webp.
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

El blog está implementado en `/blog` y las páginas individuales en `/blog/[slug]`. Los archivos Markdown de `/content/blog/` son la fuente de verdad editorial.

La estrategia, mapa de keywords, calendario, checklists y prompts operativos viven en `docs/seo/`. La cadencia activa es de dos publicaciones semanales, martes y viernes.
