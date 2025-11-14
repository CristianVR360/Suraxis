# 📋 Plantilla para Nuevos Proyectos

## 🚀 Uso Rápido

1. **Copia el archivo `template.json`**
2. **Renómbralo** con el ID de tu proyecto: `{id-proyecto}.json`
3. **Reemplaza** todos los valores de ejemplo con los datos reales
4. **Guarda** el archivo en esta misma carpeta

## 📝 Instrucciones de Llenado

### Campos Básicos
- `id`: Identificador único (sin espacios, minúsculas, usar guiones)
- `name`: Nombre completo del proyecto
- `location`: Ciudad y región
- `tagline`: Frase corta y atractiva

### Hero (Imágenes del Carrusel)
- Reemplaza las rutas con las imágenes reales
- Puedes tener 1 o más imágenes
- Formato: `"assets/img/proyectos/{nombre-proyecto}/hero.jpg"`

### About (Información del Proyecto)
- `subtitle`: Subtítulo principal
- `summary_top`: Primera línea destacada
- `summary_text`: Descripción completa
- `attractives_items`: Lista de atractivos (agrega o elimina según necesites)

### Mapas y Masterplan
- `map_iframe`: URL completa del iframe de Google Maps
- `masterplan_url`: URL del masterplan/vista 360

### Galería
- Agrega todas las rutas de imágenes de la galería
- Puedes tener tantas imágenes como necesites
- Formato: `"assets/img/proyectos/{nombre-proyecto}/X.jpg"`

## ⚠️ Importante

- **NO** dejes valores de ejemplo en el JSON final
- **Verifica** que todas las rutas de imágenes sean correctas
- **Valida** el JSON antes de guardar (usa jsonlint.com)
- El `id` debe coincidir exactamente con el nombre del archivo (sin .json)

## 📖 Ejemplo Completo

Ver `lagunabonita.json` para un ejemplo real y completo.

## 🔗 Más Información

Consulta `GUIA_PROYECTOS.md` en la raíz del proyecto para la documentación completa.

