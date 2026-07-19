<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Reglas del Agente - Flujo Editorial SEO Escalable

1. **Eficiencia de Contexto**: Al crear, revisar o actualizar artículos del blog, NUNCA cargues toda la biblioteca de artículos completos en contexto.
2. **Uso de Registros**: Lee primero `docs/seo/calendario-publicaciones.csv` y `docs/seo/registro-publicaciones.csv` para comprobar títulos, slugs, descripciones, palabras clave principales, intenciones y clústeres.
3. **Candidatos Seleccionados**: Utiliza `grep_search` (ripgrep) o búsquedas selectivas sobre el CSV para identificar solapamientos. Selecciona como MÁXIMO 5 artículos relacionados y la página pilar correspondiente para leer su cuerpo completo.
4. **Control de Canibalización**: Si existe riesgo de canibalización SEO que no se pueda resolver con los 5 candidatos seleccionados, DETENTE y solicita autorización explícita para ampliar la revisión.
5. **Reconstrucción del Índice**: Ejecuta `npm run seo:index` inmediatamente después de crear, modificar o actualizar cualquier artículo.
6. **Modos de Operación**:
   - **SEO SIGUIENTE ARTÍCULO**: Modo por defecto. Usa el registro ligero y lee máx. 5 artículos + pilar.
   - **SEO REVISIÓN EDITORIAL**: Programado cada 25 artículos o 3 meses.
   - **SEO AUDITORÍA COMPLETA**: Revisa toda la biblioteca ÚNICAMENTE bajo orden explícita del usuario.

