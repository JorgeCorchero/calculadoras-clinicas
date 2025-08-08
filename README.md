# Calculadoras Clínicas (MVP)

Sitio estático con 4 calculadoras: Cockcroft–Gault, CHA2DS2-VASc, HAS-BLED y FIB-4.

## Despliegue rápido en GitHub Pages
1. Crea un repositorio nuevo en GitHub (p. ej. `calculadoras-clinicas`).
2. Sube el contenido de la carpeta `site/` a la rama `main`.
3. En **Settings → Pages**, elige **Deploy from a branch** y selecciona `main` / `/ (root)`.
4. Tu web estará disponible en `https://tu-usuario.github.io/calculadoras-clinicas/`.

## Activar AdSense (opcional)
- Sustituye `ca-pub-XXXX` en `index.html` por tu ID y añade bloques de anuncio donde quieras.
- Revisa políticas de Google y muestra aviso de cookies si corresponde en tu jurisdicción.

## Gumroad
- Sustituye el enlace del botón por tu URL de producto.

## Analítica
- Sustituye `G-XXXX` por tu ID de Google Analytics 4 (o elimina el bloque).

## Nota legal
- Uso educativo. No sustituye el juicio clínico. Revisa guías locales.
- Referencias principales incluidas en `disclaimer.html` y en cada calculadora.


## PWA (instalable)
- Incluye `manifest.webmanifest` y `service-worker.js` para uso offline básico y modo app.
- Los iconos están en `/assets/`.

## Cookies / Consentimiento
- `cookie-consent.js` muestra un banner y guarda la preferencia en `localStorage`.
- Solo activa scripts de analítica/anuncios si `cookieConsentGranted() === true`. Eres responsable de cumplir RGPD/ley de cookies en tu jurisdicción.

## SEO
- Añadidos `robots.txt` y `sitemap.xml` (edita tu dominio/usuario).
- Etiqueta `link rel="canonical"` en cada página.

