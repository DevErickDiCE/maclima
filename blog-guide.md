# Guía para subir artículos al blog de Maclima

> Documento legado. La fuente canónica es `BLOG_GUIDE.md` junto con el centro de control `docs/seo/`. No usar este archivo para crear o publicar artículos nuevos.

Este documento explica cómo crear y subir nuevos artículos al blog de Maclima Soluciones Energéticas manteniendo siempre la misma estructura, tono, formato y calidad.

## Objetivo del blog

El blog de Maclima debe servir para:

- Explicar temas relacionados con aerotermia, fotovoltaica, climatización, ahorro energético y eficiencia.
- Resolver dudas habituales de clientes particulares y empresas.
- Mejorar el posicionamiento SEO de la web.
- Generar confianza y facilitar que el usuario contacte por WhatsApp o formulario.
- Mantener un tono profesional, claro y cercano.

## Tono de escritura

El tono debe ser:

- Profesional, pero fácil de entender.
- Cercano, sin sonar excesivamente técnico.
- Orientado a clientes reales que buscan ahorrar, reformar o mejorar su vivienda/local.
- Comercial de forma natural, sin parecer agresivo.
- Claro, directo y útil.

Evitar:

- Textos genéricos sin valor.
- Promesas exageradas.
- Frases como “la mejor empresa del mercado” si no están justificadas.
- Lenguaje demasiado técnico sin explicación.
- Párrafos muy largos.

## Estructura obligatoria de cada artículo

Cada artículo debe seguir esta estructura:

```md
---
title: "Título del artículo"
slug: "url-del-articulo"
description: "Descripción SEO breve del artículo."
date: "YYYY-MM-DD"
category: "Aerotermia | Fotovoltaica | Climatización | Ahorro energético | Consejos"
image: "/blog/nombre-imagen.webp"
---

# Título del artículo

Introducción breve del tema. Debe explicar el problema o la duda del cliente y anticipar qué va a aprender en el artículo.

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

## Reglas SEO

Cada artículo debe incluir:

- Un título claro con la palabra clave principal.
- Una descripción SEO de máximo 155 caracteres.
- Un slug limpio, sin tildes ni caracteres especiales.
- Subtítulos H2 bien organizados.
- Frases cortas y párrafos fáciles de leer.
- Una llamada a la acción al final.
- Enlaces internos cuando tenga sentido.

Ejemplos de slugs correctos:

```txt
aerotermia-y-fotovoltaica
como-ahorrar-en-la-factura-de-la-luz
ventajas-de-la-aerotermia
mantenimiento-de-placas-solares
```

## Formato visual

El artículo debe ser fácil de leer en móvil.

Usar:

- Párrafos cortos.
- Listas cuando ayuden a ordenar ideas.
- Negritas solo para destacar ideas importantes.
- Subtítulos claros.
- Una imagen principal si el diseño del blog lo permite.

No saturar con demasiadas negritas ni listas innecesarias.

## Imágenes

Si el artículo necesita imagen destacada:

- Guardarla en la carpeta correspondiente del proyecto, normalmente en:

```txt
/public/blog/
```

- Usar formato `.webp` si es posible.
- Nombre recomendado:

```txt
nombre-del-articulo.webp
```

- Ejemplo:

```txt
/public/blog/aerotermia-y-fotovoltaica.webp
```

## Proceso para subir un nuevo artículo (Flujo SEO Escalable)

1. **Consultar registro ligero**: Leer `docs/seo/calendario-publicaciones.csv` y `docs/seo/registro-publicaciones.csv`. No cargar toda la biblioteca de artículos.
2. **Seleccionar candidatos**: Comparar título, slug, descripción, keyword y clúster. Usar `grep_search` si es necesario. Seleccionar máximo 5 artículos relacionados y la página pilar para leer completos. Si hay riesgo de canibalización no resoluble, pedir autorización.
3. **Crear el contenido**: Siguiendo la estructura.
4. **Guardar el artículo**: En `/content/blog/<slug>.md`.
5. **Reconstruir el índice SEO**: Ejecutar `npm run seo:index`.
6. **Añadir imagen destacada**: Si corresponde, en `/public/blog/<slug>.webp`.
7. **Probar localmente**: Comprobar carga y build.
8. **Hacer commit**: Con mensaje claro.

Ejemplo de commit:

```bash
npm run seo:index
git add content/blog/<slug>.md docs/seo/registro-publicaciones.csv
git commit -m "Add new blog article: <slug>"
```

## Plantilla base de artículo

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

## Prompt reutilizable para futuros artículos

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
6. Crea el slug correcto.
7. Añade frontmatter completo.
8. Guarda el artículo en /content/blog/<slug>.md.
9. Ejecuta `npm run seo:index` para actualizar el índice ligero.
10. Haz commit con un mensaje claro.
```

## Criterios de calidad antes de darlo por terminado

Antes de finalizar, comprobar:

- El artículo se entiende sin conocimientos técnicos.
- El título es claro y atractivo.
- La descripción SEO resume bien el contenido.
- El slug está limpio.
- Las frases obligatorias del cliente aparecen exactamente.
- La llamada a la acción está incluida.
- El artículo no parece generado de forma genérica.
- No hay faltas de ortografía.
- La página se ve bien en móvil.
- El artículo está correctamente enlazado desde el blog.
