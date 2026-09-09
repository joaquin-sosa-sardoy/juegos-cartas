import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

/* ==========================================================================
 * ▼▼▼  NOMBRE E IDENTIDAD DE LA APP  ▼▼▼
 *
 * NOMBRE_CORTO es el que aparece DEBAJO DEL ÍCONO en la pantalla de inicio
 * del celular. Ojo: los teléfonos lo cortan alrededor de los 12 caracteres,
 * así que conviene que sea breve. Probá cómo se ve antes de decidir.
 *
 * NOMBRE_LARGO se usa en el cartel de "instalar app", en la pantalla de
 * carga y en la lista de aplicaciones.
 * ========================================================================== */
const NOMBRE_CORTO = 'Mix Juegos'
const NOMBRE_LARGO = 'Mix de Juegos'
const DESCRIPCION = 'Juegos para la previa: preguntas, prendas, mímica y cartas.'

/* Colores de la app cuando se abre desde el ícono (barra de estado y fondo
 * de la pantalla de carga). */
const COLOR_TEMA = '#0f172a'
const COLOR_FONDO = '#0f172a'
/* ▲▲▲  FIN DE LA IDENTIDAD  ▲▲▲ */

/* Ruta bajo la que se publica en GitHub Pages. Si algún día cambia el nombre
 * del repositorio o pasás a un dominio propio, hay que tocarlo acá (y el
 * "homepage" de package.json). */
const BASE = '/juegos-cartas/'

export default defineConfig({
  base: BASE,
  build: {
    outDir: 'docs'
  },
  plugins: [
    react(),
    VitePWA({
      /* 'prompt': cuando hay una versión nueva le avisa al usuario con un
       * cartelito en vez de actualizar de prepo. El cartel está en
       * src/components/ActualizarApp.jsx */
      registerType: 'prompt',

      /* Archivos sueltos de public/ que también van al caché. */
      includeAssets: [
        'images/favicon.ico',
        'images/favicon-16.png',
        'images/favicon-32.png',
        'images/icono.svg',
        'images/apple-touch-icon.png'
      ],

      manifest: {
        name: NOMBRE_LARGO,
        short_name: NOMBRE_CORTO,
        description: DESCRIPCION,
        lang: 'es-AR',
        dir: 'ltr',
        theme_color: COLOR_TEMA,
        background_color: COLOR_FONDO,
        display: 'standalone',
        orientation: 'portrait',
        scope: BASE,
        start_url: BASE,
        categories: ['games', 'entertainment'],
        icons: [
          /* Si cambiás los íconos, respetá estos nombres y tamaños
           * (están en public/images/, ver el LEEME de esa carpeta). */
          { src: 'images/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'images/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: 'images/icon-512-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },

      workbox: {
        /* Todo lo que se guarda para que la app abra sin internet. */
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff,woff2}'],
        cleanupOutdatedCaches: true,
        navigateFallback: `${BASE}index.html`,

        /* La tipografía viene de Google Fonts, que es un servidor externo:
         * la guardamos aparte para que la app se vea igual sin conexión. */
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: { cacheName: 'google-fonts-css' }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-archivos',
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] }
            }
          }
        ]
      },

      /* En `npm run dev` no hace falta el service worker: molesta más de lo
       * que ayuda porque cachea mientras estás editando. */
      devOptions: { enabled: false }
    })
  ]
})
