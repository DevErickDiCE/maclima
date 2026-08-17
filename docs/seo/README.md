# Centro de control SEO de Maclima

Este directorio es la fuente de verdad para planificar, crear, revisar y medir el contenido orgánico de Maclima Soluciones Energéticas.

## Objetivo operativo

- Cadencia: **2 publicaciones por semana**, martes y viernes.
- Primer horizonte: **12 semanas**, del 18 de agosto al 6 de noviembre de 2026.
- Resultado del ciclo: 24 contenidos nuevos, además de las actualizaciones necesarias de contenidos existentes.
- Territorio prioritario: Sierra de Madrid y Comunidad de Madrid.
- Conversión principal: solicitud de consultoría gratuita.
- Conversión secundaria: contacto por WhatsApp.

## Archivos principales

| Archivo | Función |
|---|---|
| `brief-proyecto.md` | Contexto comercial, audiencias y límites del proyecto |
| `auditoria-seo.md` | Diagnóstico inicial y prioridades técnicas |
| `estrategia-seo.md` | Estrategia, arquitectura, medición y plan de 90 días |
| `keywords.csv` | Mapa de keywords y página objetivo |
| `calendario-publicaciones.csv` | Cola editorial ordenada por fecha |
| `registro-publicaciones.csv` | Índice automático de lo que ya existe |
| `guia-estilo-articulos.md` | Reglas editoriales y de calidad |
| `enlaces-internos.md` | Reglas de enlazado por clúster |
| `fuentes-confiables.md` | Jerarquía de fuentes y vigencia |
| `checklist-tecnico-seo.md` | Control técnico periódico |
| `checklist-publicacion.md` | Control antes y después de publicar |
| `PROMPT_MAESTRO_VSCODE_SEO_Maclima.md` | Instrucciones completas para el agente del repositorio |

## Flujo habitual

1. Abrir `calendario-publicaciones.csv` y elegir la fila `pendiente` con fecha más antigua.
2. Consultar `registro-publicaciones.csv` y buscar solapamientos.
3. Leer como máximo cinco artículos relacionados y la página pilar.
4. Cambiar la fila a `en_redaccion`.
5. Investigar fuentes actuales y redactar el borrador.
6. Pasar revisión técnica, factual, editorial y comercial.
7. Ejecutar `npm run seo:index`, `npm run lint` y `npm run build`.
8. Publicar, completar fecha y URL, y cambiar el estado a `publicado` únicamente con autorización.

Comando habitual:

```text
SEO SIGUIENTE ARTÍCULO: Maclima
```

## Estados del calendario

- `pendiente`
- `en_redaccion`
- `revisado`
- `publicado`

No se debe borrar una idea descartada: se conserva con una nota o se mueve al buzón de ideas.

