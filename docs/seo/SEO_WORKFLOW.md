# Flujo Editorial SEO Escalable - Maclima

Este documento define la arquitectura y el procedimiento operativo para la creación, actualización y auditoría de contenidos SEO en el blog de Maclima Soluciones Energéticas, garantizando que el agente de IA mantenga un consumo eficiente de tokens y contexto.

---

## 1. Principio de Contexto Mínimo Ligero

Al trabajar con contenidos en este repositorio, el agente de IA **NO debe leer todos los cuerpos de los artículos en Markdown**. 

Para tomar decisiones editoriales y de posicionamiento:
1. Utiliza los registros en CSV (`docs/seo/registro-publicaciones.csv` y `docs/seo/calendario-publicaciones.csv`).
2. Utiliza búsquedas quirúrgicas mediante `grep_search` (ripgrep) o lecturas parciales de frontmatter.
3. Lee el texto completo de **como máximo 5 artículos** estrechamente relacionados y la página pilar correspondiente.

---

## 2. Modos de Operación SEO

### Modo 1: SEO SIGUIENTE ARTÍCULO (Flujo Habitual)
Utilizado para la planificación y redacción de cada nuevo artículo individual.

1. **Consulta Ligera Inicial**:
   - Abrir `docs/seo/calendario-publicaciones.csv` y `docs/seo/registro-publicaciones.csv`.
   - Comparar el nuevo tema, título proyectado, slug, palabra clave principal, intención de búsqueda y clúster con lo ya publicado o programado.
2. **Búsqueda de Solapamientos**:
   - Usar `grep_search` para buscar términos clave clave en los títulos y descripciones del registro o en `content/blog/`.
3. **Candidatos de Contexto (Máximo 5)**:
   - Seleccionar como máximo 5 artículos estrechamente relacionados y la página pilar del clúster.
   - Cargar en contexto únicamente esos archivos para analizar enlazado interno, enfoque y coherencia editorial.
4. **Control de Canibalización**:
   - Si se detecta riesgo de canibalización con un artículo existente que no pueda resolverse entre los 5 candidatos seleccionados, el agente debe **detenerse y solicitar autorización explícita al usuario** para ampliar el alcance de revisión.
5. **Generación del Índice**:
   - Tras redactar, editar o cambiar el estado de un artículo, ejecutar siempre `npm run seo:index`.

### Modo 2: SEO REVISIÓN EDITORIAL (Revisión Periódica)
Ejecutado de forma programada **cada 25 artículos nuevos publicados** o **cada tres meses**.

- **Objetivo**: Detectar desactualizaciones, canibalización progresiva, rotura de enlaces internos y nuevas oportunidades de clúster.
- **Procedimiento**: Revisa los metadatos globales del registro `docs/seo/registro-publicaciones.csv` y realiza lecturas muestreadas o focalizadas.
- **Acción**: Produce un informe con recomendaciones de actualización o fusión de contenidos sin sobrescribir artículos sin confirmación.

### Modo 3: SEO AUDITORÍA COMPLETA (Auditoría Global)
Ejecutado **únicamente bajo orden explícita del usuario** (ej.: `/goal` o petición directa de reestructuración global).

- **Alcance**: Puede leer e inspeccionar todos los artículos completos del blog.
- **Uso**: Reestructuraciones mayores de arquitectura web, migraciones de CMS o auditorías SEO técnicas globales.

---

## 3. Registro de Publicaciones (`docs/seo/registro-publicaciones.csv`)

El archivo `docs/seo/registro-publicaciones.csv` es la fuente de verdad ligera para el motor SEO del proyecto.

### Esquema de Columnas

| Columna | Descripción | Ejemplo |
|---|---|---|
| `id` | Identificador único del artículo | `ayudas-aerotermia-madrid-2026` |
| `titulo` | Título visible / H1 | `Ayudas para aerotermia en Madrid en 2026` |
| `slug` | Slug kebab-case para la URL | `ayudas-aerotermia-madrid-2026` |
| `url` | Ruta canónica interna | `/blog/ayudas-aerotermia-madrid-2026` |
| `descripcion` | Meta descripción SEO (máx 155 caracteres) | `Descubre las ayudas, deducciones IRPF...` |
| `keyword_principal` | Palabra clave principal objetivo | `ayudas aerotermia madrid 2026` |
| `cluster` | Clúster temático / categoría | `Aerotermia` |
| `intencion` | Intención dominante | `comercial` |
| `zona` | Alcance territorial | `Comunidad de Madrid` |
| `pagina_pilar` | Slug o URL de la página pilar | `/aerotermia` |
| `status` | Estado (`publicado`, `borrador`, `revision`) | `publicado` |
| `fecha_publicacion` | Fecha de publicación (`YYYY-MM-DD`) | `2026-07-08` |
| `fecha_actualizacion` | Fecha de última actualización | `2026-07-08` |
| `ruta_archivo` | Ruta relativa al archivo `.md` | `content/blog/ayudas-aerotermia-madrid-2026.md` |

---

## 4. Reconstrucción Automática del Registro

El registro se mantiene mediante un script determinista que lee **únicamente las rutas y frontmatters** de `content/blog/*.md`:

```bash
npm run seo:index
```

### Validaciones Automáticas del Script:
- Verifica la existencia física de cada archivo registrado.
- Detecta slugs o IDs duplicados.
- Formatea de forma segura los valores CSV con comillas y escape de comillas dobles.
