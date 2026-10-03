# La Cocina de Altillo

App interna de ALTILLO para organizarnos: comanda del día, cajones, calendario y mapa del año, objetivos por plazo, conciertos (preparación, ensayos, setlist) y repertorio con audios.

Se publica en **https://altillomusica.com/cocina/** y se instala en el móvil como una app (icono propio, pantalla completa, funciona sin cobertura).

## Cómo funciona

- **La app** (esta carpeta) es pública y no contiene datos.
- **Los datos** viven en el repo privado `altillomusicaoficial-musicaweb/altillo-cocina-datos`:
  - `cocina.json` guarda cajones, tareas, objetivos, conciertos, temas y pegatinas.
  - `archivos/` guarda los audios, vídeos, PDF e imágenes que subáis.
- Cada móvil guarda una copia local y sube los cambios al repo en cuanto hay conexión. Cada guardado es un commit, así que el historial de GitHub es también la copia de seguridad.

## Conectar un móvil

1. Abre https://altillomusica.com/cocina/ y ve a **Ajustes** (rueda dentada).
2. Crea una clave en https://github.com/settings/personal-access-tokens/new
   - Repository access: **Only select repositories** → `altillo-cocina-datos`
   - Repository permissions → **Contents: Read and write**
3. Pégala en Ajustes y pulsa **Guardar y conectar**.
4. Instala: en iPhone, Safari → Compartir → «Añadir a pantalla de inicio». En Android, Chrome → ⋮ → «Instalar aplicación».

## Apuntar rápido

En el botón **+** (o la barra roja en ordenador) se escribe en lenguaje normal:

```
Pitch de Papila a Radio 3 @ariana #prensa viernes ✳
```

- `@david`, `@ariana`, `@ambos` → responsable
- `#prensa` → cajón (vale el principio del nombre)
- `hoy`, `mañana`, `viernes`, `15/10`, `15 oct`, `en 3 días`, `finde` → fecha
- `✳` o `*` → hito
- `nota:` al principio → nota en vez de tarea

El tipo (pitch, reel, grabar, mezclar, ensayo, reunión, escribir, lanzamiento…) se deduce de las palabras y, si se nombra un tema del repertorio, la tarea queda enlazada a él.

## Archivos

- `index.html` — la app completa (HTML, CSS y JS en un solo archivo)
- `manifest.webmanifest` — nombre, colores e iconos para instalarla
- `sw.js` — funcionamiento sin conexión
- `icons/` — icono ✳ en todos los tamaños
