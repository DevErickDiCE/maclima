# Checklist de publicación

## Antes de redactar

- [ ] Fila identificada en `calendario-publicaciones.csv`.
- [ ] Estado cambiado a `en_redaccion`.
- [ ] Keyword, intención, clúster y pilar definidos.
- [ ] Registro consultado para evitar canibalización.
- [ ] Máximo cinco artículos completos y una página pilar cargados.

## Borrador

- [ ] Frontmatter completo según `guia-estilo-articulos.md`.
- [ ] Slug e ID únicos.
- [ ] Título útil y no duplicado.
- [ ] Meta descripción de hasta 155 caracteres.
- [ ] Respuesta directa en la introducción.
- [ ] H2 coherentes con la intención.
- [ ] Cifras y afirmaciones respaldadas.
- [ ] Enlaces internos mínimos añadidos.
- [ ] CTA adaptado a la intención.
- [ ] Imagen optimizada y alt descriptivo.

## Revisión

- [ ] Revisión ortográfica y editorial.
- [ ] Revisión técnica por Maclima cuando corresponda.
- [ ] Revisión legal/fiscal/tarifaria en contenidos sensibles.
- [ ] Fuentes temporales comprobadas el mismo día.
- [ ] Sin promesas de precio, ahorro o subvención garantizada.
- [ ] Estado cambiado a `revisado`.

## Publicación técnica

- [ ] Ejecutar `npm run seo:index`.
- [ ] Ejecutar `npm run lint`.
- [ ] Ejecutar `npm run build`.
- [ ] Confirmar que la URL aparece en el sitemap.
- [ ] Confirmar canonical, título, descripción, OG y schema.
- [ ] Probar móvil, enlaces y CTA.
- [ ] Completar `fecha_publicacion` y `url` del calendario.
- [ ] Cambiar estado a `publicado`.

## Después

- [ ] Solicitar indexación solo si aporta valor; no repetir de forma masiva.
- [ ] Preparar adaptación social sin publicarla automáticamente.
- [ ] Revisar indexación a los 7–14 días.
- [ ] Revisar consultas y enlazado a las 4–6 semanas.

