# 📚 Guía de Uso - Sistema Dinámico de Proyectos

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Cómo Funciona](#cómo-funciona)
3. [Estructura del JSON](#estructura-del-json)
4. [Crear un Nuevo Proyecto](#crear-un-nuevo-proyecto)
5. [Acceder a un Proyecto](#acceder-a-un-proyecto)
6. [Ejemplos](#ejemplos)
7. [Solución de Problemas](#solución-de-problemas)
8. [Estructura de Archivos](#estructura-de-archivos)

---

## 🎯 Descripción General

El sistema dinámico de proyectos permite que un único archivo HTML (`proyectos.html`) muestre información de cualquier proyecto basándose en un ID pasado por URL. Todo el contenido (textos, imágenes, mapas, galerías) se carga dinámicamente desde archivos JSON.

**Ventajas:**
- ✅ Un solo archivo HTML para todos los proyectos
- ✅ Fácil mantenimiento: solo editar JSON
- ✅ Escalable: agregar proyectos sin tocar HTML
- ✅ Consistente: misma estructura para todos

---

## 🔧 Cómo Funciona

1. El usuario accede a `proyectos.html?id=nombre-proyecto`
2. JavaScript lee el parámetro `id` de la URL
3. Se carga el archivo JSON correspondiente: `data/proyectos/{id}.json`
4. El contenido se renderiza dinámicamente en el HTML
5. Si el proyecto no existe, se muestra un mensaje de error

---

## 📄 Estructura del JSON

Cada proyecto debe tener un archivo JSON con la siguiente estructura:

```json
{
  "id": "identificador-unico",
  "name": "Nombre del Proyecto",
  "location": "Ubicación",
  "tagline": "Descripción breve",
  
  "hero": [
    "ruta/imagen1.jpg",
    "ruta/imagen2.jpg"
  ],
  
  "about": {
    "subtitle": "Subtítulo del proyecto",
    "summary_title": "Resumen",
    "summary_top": "Primera línea del resumen",
    "summary_text": "Texto completo del resumen...",
    "attractives_title": "Atractivos de la zona",
    "attractives_description": "Descripción de atractivos",
    "attractives_items": [
      "Atractivo 1",
      "Atractivo 2",
      "Atractivo 3"
    ],
    "map_iframe": "URL completa del iframe de Google Maps",
    "masterplan_url": "URL del masterplan/vista 360"
  },
  
  "gallery": [
    "ruta/imagen1.jpg",
    "ruta/imagen2.jpg",
    "ruta/imagen3.jpg"
  ]
}
```

### 📝 Descripción de Campos

| Campo | Tipo | Descripción | Requerido |
|-------|------|-------------|-----------|
| `id` | string | Identificador único del proyecto (usado en la URL) | ✅ Sí |
| `name` | string | Nombre completo del proyecto | ✅ Sí |
| `location` | string | Ubicación/ciudad del proyecto | ✅ Sí |
| `tagline` | string | Frase corta descriptiva | ✅ Sí |
| `hero` | array | Array de rutas de imágenes para el carousel hero | ✅ Sí |
| `about.subtitle` | string | Subtítulo de la sección "Sobre el proyecto" | ✅ Sí |
| `about.summary_title` | string | Título de la sección resumen | ✅ Sí |
| `about.summary_top` | string | Primera línea del resumen | ✅ Sí |
| `about.summary_text` | string | Texto completo del resumen | ✅ Sí |
| `about.attractives_title` | string | Título de la sección de atractivos | ✅ Sí |
| `about.attractives_description` | string | Descripción de los atractivos | ✅ Sí |
| `about.attractives_items` | array | Lista de atractivos (strings) | ✅ Sí |
| `about.map_iframe` | string | URL completa del iframe de Google Maps | ✅ Sí |
| `about.masterplan_url` | string | URL del masterplan/vista 360 | ✅ Sí |
| `gallery` | array | Array de rutas de imágenes para la galería | ✅ Sí |

---

## 🆕 Crear un Nuevo Proyecto

### Paso 1: Preparar las Imágenes

Organiza las imágenes del proyecto en una carpeta:
```
assets/img/proyectos/{nombre-proyecto}/
  ├── hero.jpg
  ├── hero-2.jpg
  ├── 1.jpg
  ├── 2.jpg
  ├── 3.jpg
  └── ...
```

### Paso 2: Crear el Archivo JSON

1. Crea un nuevo archivo en: `data/proyectos/{id-proyecto}.json`
2. Usa el ID que quieras (sin espacios, preferiblemente minúsculas y guiones)
   - ✅ Ejemplos válidos: `lagunabonita`, `estero-molgue`, `proyecto-norte`
   - ❌ Evitar: `Laguna Bonita` (espacios), `PROYECTO_1` (mayúsculas y guiones bajos)

3. Copia la estructura base y completa los datos:

```json
{
  "id": "mi-nuevo-proyecto",
  "name": "Mi Nuevo Proyecto",
  "location": "Ciudad, Región",
  "tagline": "Descripción breve del proyecto",
  
  "hero": [
    "assets/img/proyectos/mi-nuevo-proyecto/hero.jpg",
    "assets/img/proyectos/mi-nuevo-proyecto/hero-2.jpg"
  ],
  
  "about": {
    "subtitle": "Subtítulo descriptivo del proyecto",
    "summary_title": "Resumen",
    "summary_top": "Primera línea del resumen",
    "summary_text": "Texto completo que describe el proyecto en detalle...",
    "attractives_title": "Atractivos de la zona",
    "attractives_description": "Descripción general de los atractivos",
    "attractives_items": [
      "Atractivo turístico 1",
      "Atractivo turístico 2",
      "Atractivo turístico 3"
    ],
    "map_iframe": "https://www.google.com/maps/embed?pb=...",
    "masterplan_url": "https://mi-proyecto.com/masterplan.html"
  },
  
  "gallery": [
    "assets/img/proyectos/mi-nuevo-proyecto/1.jpg",
    "assets/img/proyectos/mi-nuevo-proyecto/2.jpg",
    "assets/img/proyectos/mi-nuevo-proyecto/3.jpg"
  ]
}
```

### Paso 3: Obtener el Iframe de Google Maps

1. Ve a [Google Maps](https://www.google.com/maps)
2. Busca la ubicación del proyecto
3. Haz clic en "Compartir" → "Insertar un mapa"
4. Copia el código del iframe
5. Extrae solo la URL del atributo `src` y pégala en `map_iframe`

**Ejemplo:**
```html
<!-- Código completo del iframe -->
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." width="600" height="450"></iframe>

<!-- Solo la URL para el JSON -->
"map_iframe": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
```

### Paso 4: Validar el JSON

Asegúrate de que:
- ✅ El JSON esté bien formateado (sin comas finales)
- ✅ Todas las rutas de imágenes sean correctas
- ✅ Las URLs de mapas y masterplan funcionen
- ✅ El ID coincida con el nombre del archivo

---

## 🌐 Acceder a un Proyecto

Una vez creado el archivo JSON, accede al proyecto usando:

```
proyectos.html?id={id-proyecto}
```

**Ejemplos:**
- `proyectos.html?id=lagunabonita`
- `proyectos.html?id=estero-molgue`
- `proyectos.html?id=mi-nuevo-proyecto`

---

## 📚 Ejemplos

### Ejemplo 1: Proyecto Completo (Laguna Bonita)

**Archivo:** `data/proyectos/lagunabonita.json`

```json
{
  "id": "lagunabonita",
  "name": "Laguna Bonita",
  "location": "Rupanco",
  "tagline": "Proyecto de alta plusvalía",
  
  "hero": [
    "assets/img/proyectos/lagunabonita/hero.jpg",
    "assets/img/proyectos/lagunabonita/hero-2.jpg"
  ],
  
  "about": {
    "subtitle": "En el corazón del sur de chile - Rupanco, Pto. Octay",
    "summary_title": "Resumen",
    "summary_top": "En el corazón del sur de Chile, donde la magia de Rupanco y Puerto Octa, Ruta Interlagos",
    "summary_text": "Lago Ranco al norte, al sur lago llanquihue, volcán osorno, petrohué, lago todos los santos. se encuentran próximamente nuestra parcelas.",
    "attractives_title": "Atractivos de la zona",
    "attractives_description": "Naturaleza, aventura y turismo activo.",
    "attractives_items": [
      "Marina Rupanco",
      "Islote Rupanco",
      "Pesca deportiva",
      "Saltos de Lago Rupanco (Sector Las Gaviotas)"
    ],
    "map_iframe": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.123456789!2d-72.57637505266972!3d-40.883354158635385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDUzJzAwLjEiUyA3MsKwMzQnMzQuOSJX!5e0!3m2!1ses!2scl!4v1234567890123!5m2!1ses!2scl",
    "masterplan_url": "https://lagunabonita-production.up.railway.app/masterplan.html"
  },
  
  "gallery": [
    "assets/img/proyectos/lagunabonita/1.jpg",
    "assets/img/proyectos/lagunabonita/2.jpg",
    "assets/img/proyectos/lagunabonita/3.jpg",
    "assets/img/proyectos/lagunabonita/4.jpg",
    "assets/img/proyectos/lagunabonita/5.jpg"
  ]
}
```

**Acceso:** `proyectos.html?id=lagunabonita`

### Ejemplo 2: Proyecto Mínimo

```json
{
  "id": "proyecto-simple",
  "name": "Proyecto Simple",
  "location": "Santiago",
  "tagline": "Tu próximo hogar",
  
  "hero": [
    "assets/img/proyectos/proyecto-simple/hero.jpg"
  ],
  
  "about": {
    "subtitle": "Ubicado en el corazón de Santiago",
    "summary_title": "Resumen",
    "summary_top": "Un proyecto único en su tipo",
    "summary_text": "Descripción detallada del proyecto...",
    "attractives_title": "Atractivos",
    "attractives_description": "Zona con múltiples atractivos",
    "attractives_items": [
      "Cerca del metro",
      "Zona comercial",
      "Parques cercanos"
    ],
    "map_iframe": "https://www.google.com/maps/embed?pb=...",
    "masterplan_url": "https://ejemplo.com/masterplan.html"
  },
  
  "gallery": [
    "assets/img/proyectos/proyecto-simple/1.jpg",
    "assets/img/proyectos/proyecto-simple/2.jpg"
  ]
}
```

---

## 🔍 Solución de Problemas

### ❌ Error: "Proyecto no encontrado"

**Causas posibles:**
1. El archivo JSON no existe en `data/proyectos/{id}.json`
2. El ID en la URL no coincide con el nombre del archivo
3. Error de escritura en el nombre del archivo (mayúsculas/minúsculas)

**Solución:**
- Verifica que el archivo exista y tenga el nombre correcto
- Asegúrate de que el ID en la URL coincida exactamente con el nombre del archivo (sin la extensión `.json`)
- Verifica mayúsculas y minúsculas (son sensibles)

### ❌ Las imágenes no se muestran

**Causas posibles:**
1. Rutas incorrectas en el JSON
2. Las imágenes no existen en la ubicación especificada
3. Rutas relativas incorrectas

**Solución:**
- Verifica que las rutas en el JSON sean correctas
- Asegúrate de que las imágenes existan en las carpetas especificadas
- Usa rutas relativas desde la raíz del proyecto: `assets/img/proyectos/...`

### ❌ El mapa no se muestra

**Causas posibles:**
1. URL del iframe incorrecta
2. URL mal formateada en el JSON

**Solución:**
- Verifica que la URL del iframe sea completa y válida
- Asegúrate de copiar solo la URL del atributo `src`, no todo el código HTML

### ❌ El carousel del hero no funciona

**Causas posibles:**
1. JavaScript no se cargó correctamente
2. Bootstrap no está inicializado

**Solución:**
- Verifica que `js/proyectos.js` esté incluido en el HTML
- Asegúrate de que Bootstrap esté cargado antes del script
- Revisa la consola del navegador para errores

### ❌ La galería no abre en modal

**Causas posibles:**
1. Los handlers del modal no se inicializaron
2. Conflicto con otros scripts

**Solución:**
- Verifica que el modal de galería exista en el HTML
- Revisa la consola del navegador para errores
- Asegúrate de que no haya conflictos con otros scripts

### ❌ JSON mal formateado

**Síntomas:**
- Error en consola: "Unexpected token"
- El proyecto no carga

**Solución:**
- Valida el JSON usando un validador online (jsonlint.com)
- Verifica comas finales (no deben existir)
- Asegúrate de que todas las comillas estén cerradas

---

## 📁 Estructura de Archivos

```
proyecto/
├── proyectos.html          # Archivo HTML principal (único para todos los proyectos)
├── js/
│   └── proyectos.js        # Script que carga los proyectos dinámicamente
├── data/
│   └── proyectos/
│       ├── lagunabonita.json
│       ├── estero-molgue.json
│       └── {id-proyecto}.json
└── assets/
    └── img/
        └── proyectos/
            ├── lagunabonita/
            │   ├── hero.jpg
            │   ├── hero-2.jpg
            │   ├── 1.jpg
            │   └── ...
            └── {nombre-proyecto}/
                └── ...
```

---

## 💡 Consejos y Mejores Prácticas

### ✅ Nombres de Archivos
- Usa IDs en minúsculas
- Usa guiones en lugar de espacios: `proyecto-norte` ✅, `proyecto norte` ❌
- Mantén consistencia en los nombres

### ✅ Imágenes
- Optimiza las imágenes antes de subirlas
- Usa formatos web (JPG, PNG, WebP)
- Mantén tamaños razonables (máx. 2MB por imagen)
- Nombra las imágenes de forma descriptiva

### ✅ JSON
- Mantén el JSON bien formateado
- Usa un editor con validación JSON
- Comenta mentalmente la estructura antes de crear nuevos proyectos

### ✅ URLs
- Verifica que todas las URLs funcionen
- Usa HTTPS cuando sea posible
- Prueba los iframes antes de agregarlos

### ✅ Testing
- Prueba cada proyecto después de crearlo
- Verifica en diferentes navegadores
- Prueba en dispositivos móviles

---

## 🚀 Flujo de Trabajo Recomendado

1. **Preparar contenido**
   - Escribir textos
   - Preparar imágenes
   - Obtener URLs de mapas y masterplan

2. **Crear estructura de carpetas**
   - Crear carpeta de imágenes: `assets/img/proyectos/{nombre}/`

3. **Subir imágenes**
   - Subir todas las imágenes a la carpeta correspondiente

4. **Crear JSON**
   - Crear archivo `data/proyectos/{id}.json`
   - Completar todos los campos
   - Validar formato JSON

5. **Probar**
   - Acceder a `proyectos.html?id={id}`
   - Verificar que todo se muestre correctamente
   - Probar en diferentes dispositivos

6. **Publicar**
   - Una vez verificado, el proyecto está listo

---

## 📞 Soporte

Si encuentras problemas o tienes preguntas:

1. Revisa esta guía completa
2. Verifica la sección de "Solución de Problemas"
3. Revisa la consola del navegador (F12) para errores
4. Compara tu JSON con los ejemplos proporcionados

---

## 📝 Notas Finales

- El sistema es completamente dinámico: **nunca necesitas modificar el HTML** para agregar proyectos
- Todos los proyectos comparten la misma estructura visual
- El contenido se carga desde JSON, facilitando el mantenimiento
- El sistema es escalable: puedes agregar tantos proyectos como necesites

---

**Última actualización:** 2025
**Versión:** 1.0

