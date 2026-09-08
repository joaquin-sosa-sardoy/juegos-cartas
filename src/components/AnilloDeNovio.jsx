/* ============================================================================
 * ANILLO DE COMPROMISO  —  ADORNO DEL JUEGO "TAG DEL NOVIO / PAREJA"
 * ============================================================================
 *
 * ESTE ARCHIVO ES **SOLO** EL DIBUJO DEL ANILLO. No tiene lógica de juego.
 *
 * ¿NO TE GUSTA? SE BORRA ASÍ (2 pasos, nada más):
 *   1. Borrá este archivo: src/components/AnilloDeNovio.jsx
 *   2. Abrí src/components/PreguntaCard.jsx y sacá:
 *        - la línea:  import AnilloDeNovio from './AnilloDeNovio'
 *        - dentro del bloque  if (contentType === "TagDelNovio")  el trozo
 *          marcado con el comentario  {/* ANILLO (ver AnilloDeNovio.jsx) *\/}
 *   El juego sigue funcionando igual, solo queda la carta sin el anillo.
 *
 * Está dibujado en SVG (no es una imagen) así que no pesa nada y se ve nítido
 * en cualquier pantalla.
 * ========================================================================= */

export default function AnilloDeNovio({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {/* aro */}
      <ellipse
        cx="50"
        cy="68"
        rx="25"
        ry="26"
        fill="none"
        stroke="#d97706"
        strokeWidth="8"
      />
      <ellipse
        cx="50"
        cy="68"
        rx="25"
        ry="26"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="3.5"
      />

      {/* garras que sostienen la piedra */}
      <path
        d="M38 36 L50 46 L62 36"
        fill="none"
        stroke="#d97706"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* piedra */}
      <path
        d="M34 30 L50 10 L66 30 L50 48 Z"
        fill="#bae6fd"
        stroke="#0284c7"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* facetas */}
      <path
        d="M34 30 H66 M50 10 V48 M34 30 L50 48 M66 30 L50 48"
        fill="none"
        stroke="#e0f2fe"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}
