/* ============================================================================
 * BRINDIS  —  ADORNO DEL JUEGO "PREVIA"
 * ============================================================================
 *
 * ESTE ARCHIVO ES **SOLO** EL DIBUJO. No tiene lógica de juego.
 * Es a propósito discreto: dos vasos chocando, nada más.
 *
 * ¿NO TE GUSTA? SE BORRA ASÍ (2 pasos):
 *   1. Borrá este archivo: src/components/BrindisPrevia.jsx
 *   2. En src/components/PreguntaCard.jsx sacá:
 *        - la línea:  import BrindisPrevia from './BrindisPrevia'
 *        - dentro del bloque  if (contentType === "Previa")  los trozos
 *          marcados con el comentario:   BRINDIS (ver BrindisPrevia.jsx)
 * ========================================================================= */

export default function BrindisPrevia({ className = '' }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      {/* vaso izquierdo, inclinado hacia la derecha */}
      <g transform="rotate(-16 40 60)">
        <path
          d="M22 26 H58 L53 78 C53 84 49 88 40 88 C31 88 27 84 27 78 Z"
          fill="#5eead4"
          fillOpacity="0.35"
          stroke="#0d9488"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* nivel del líquido */}
        <path d="M25 44 H55 L52 70 C52 76 48 79 40 79 C32 79 28 76 28 70 Z" fill="#14b8a6" />
      </g>

      {/* vaso derecho, inclinado hacia la izquierda */}
      <g transform="rotate(16 80 60)">
        <path
          d="M62 26 H98 L93 78 C93 84 89 88 80 88 C71 88 67 84 67 78 Z"
          fill="#5eead4"
          fillOpacity="0.35"
          stroke="#0d9488"
          strokeWidth="4"
          strokeLinejoin="round"
        />
        <path d="M65 44 H95 L92 70 C92 76 88 79 80 79 C72 79 68 76 68 70 Z" fill="#14b8a6" />
      </g>

      {/* chispas del choque */}
      <g stroke="#0d9488" strokeWidth="4" strokeLinecap="round">
        <path d="M60 16 V4" />
        <path d="M46 20 L38 10" />
        <path d="M74 20 L82 10" />
      </g>
    </svg>
  )
}
