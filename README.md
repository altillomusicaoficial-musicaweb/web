# ALTILLO — web

Sitio de una sola página para ALTILLO ("Gazpacho Sonoro"), maquetado como una
carta de restaurante. HTML/CSS/JS puro — sin build, sin dependencias, sin
frameworks. Para editarlo solo hace falta abrir `index.html`.

## Estructura

```
index.html          ← la página principal (carta de restaurante)
pedido.html          ← formulario de encargo del mercadillo (Bizum/transferencia a mano)
assets/
  img/               ← fotos y collages (jpg/webp)
  fonts/             ← Nimbus Sans Narrow Bold y Nimbus Roman Italic (respaldo local de Anton / Instrument Serif)
  docs/
    ALTILLO-dossier.pdf
```

## Cómo funciona "pedido.html"

No hay pasarela de pago real (la web es estática, sin servidor). Los botones
"Comprar" del Mercadillo llevan a `pedido.html`, donde la persona elige
producto y cantidad, deja sus datos y pulsa "Enviar pedido": esto abre su
aplicación de correo con un email ya redactado a
`altillomusica.oficial@gmail.com` con el resumen del pedido. Desde ahí
respondéis a mano con el importe final y cómo pagar (Bizum o transferencia).
Los precios y el texto de los tres pasos están escritos directamente en el
HTML — si cambia un precio, edita el `data-precio` y el texto `€` visible en
`pedido.html`, y también el precio en la tarjeta de producto de
`index.html`.

## Enlaces pendientes

Cerca del final de `index.html` hay un bloque `window.ALTILLO = { ... }` con
todos los enlaces externos del sitio (vídeos de YouTube, tienda, redes,
formulario de contratación). Cada campo marcado `// TODO` está vacío a
propósito: mientras lo esté, el botón correspondiente muestra un aviso
("Seguimos cocinando") en vez de romperse.

Todo relleno por ahora. Si algo cambia:
- `enlaces.disco` → perfil de Tidal (única plataforma que traía el dossier;
  añade Spotify/Bandcamp aquí si los usáis)
- `enlaces.youtube` → canal de YouTube
- `enlaces.contratar` → formulario de contratación (`app.altillomusica.com/contratar`)
- `enlaces.instagram` → perfil real de Instagram
- `videos.espectaculo` / `videos.directo` / `videos.ultimoLanzamiento` → IDs
  de YouTube (la parte después de `watch?v=`). `directo` es "Empecinadas" en
  directo; `ultimoLanzamiento` es "Paseíto".

## Publicarlo en GitHub Pages

1. Crea un repositorio nuevo y vacío en GitHub (sin README, sin .gitignore —
   ya los trae esta carpeta).
2. Desde esta carpeta:
   ```
   git init
   git add .
   git commit -m "Primera versión de la web"
   git branch -M main
   git remote add origin <URL-de-tu-repo>
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Deploy from a
   branch**, elige `main` y la carpeta `/ (root)`. En un par de minutos la
   web queda publicada en `https://<tu-usuario>.github.io/<nombre-repo>/`.

### Sin usar la terminal

También puedes crear el repositorio vacío en GitHub y luego, en la página
del repo, usar **Add file → Upload files** para arrastrar todo el contenido
de esta carpeta (mantén la estructura de `assets/`). Luego sigue el paso 3
de arriba para activar Pages.

## Mantener el dominio altillomusica.com

Cuando deis de baja el plan de Wix, para que `altillomusica.com` siga
apuntando a esta web:

1. En **Settings → Pages** de tu repo, en "Custom domain" escribe
   `altillomusica.com` y guarda — esto crea un archivo `CNAME` en el repo
   automáticamente.
2. En el proveedor donde tengáis el dominio (donde esté registrado, no en
   Wix necesariamente), cambia el registro DNS para que apunte a GitHub
   Pages. GitHub te muestra los valores exactos (registros A y/o CNAME) en
   esa misma pantalla de Settings → Pages una vez escribes el dominio.
3. La propagación puede tardar hasta 24h. Mientras tanto el sitio sigue
   accesible en la URL `github.io`.

No hemos tocado nada de Wix — podéis dejarlo así y probar primero la URL de
`github.io` con tranquilidad antes de mover el dominio.
