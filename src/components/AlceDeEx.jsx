/* ============================================================================
 * ALCE (cabeza con astas)  —  ADORNO DEL JUEGO "TAG DEL EX"
 * ============================================================================
 *
 * ESTE ARCHIVO ES **SOLO** EL DIBUJO DEL ALCE. No tiene lógica de juego.
 * (Antes se llamaba CuernosDeEx.jsx y las astas iban por detrás de la carta;
 *  ahora es el alce entero y va adentro de la carta, abajo.)
 *
 * ¿NO TE GUSTA? SE BORRA ASÍ (2 pasos, nada más):
 *   1. Borrá este archivo: src/components/AlceDeEx.jsx
 *   2. Abrí src/components/PreguntaCard.jsx y sacá:
 *        - la línea:  import AlceDeEx from './AlceDeEx'
 *        - dentro del bloque  if (contentType === "TagDelEx")  el trozo
 *          marcado con el comentario:   ALCE (ver AlceDeEx.jsx)
 *   El juego sigue funcionando igual, solo queda la carta sin el alce.
 *
 * Está dibujado en SVG (no es una imagen) así que no pesa nada y se ve nítido
 * en cualquier pantalla.
 * ========================================================================= */

const MARRON = '#78350f'
const MARRON_CLARO = '#a16207'

/* Un asta, dibujada mirando a la derecha. La izquierda es esta misma espejada. */
function Asta() {
  return (
    <g fill="none" stroke={MARRON} strokeLinecap="round" strokeLinejoin="round">
      {/* vara principal */}
      <path d="M106 116 C112 98 126 84 146 74 C154 70 161 67 168 65" strokeWidth="10" />
      {/* puntas que nacen de la vara */}
      <path d="M114 100 C117 84 113 68 105 55" strokeWidth="8" />
      <path d="M130 84 C136 68 138 54 133 39" strokeWidth="7.5" />
      <path d="M150 71 C159 59 164 47 164 34" strokeWidth="7" />
      <path d="M168 65 C179 59 186 50 190 39" strokeWidth="6.5" />
    </g>
  )
}

export default function AlceDeEx({ className = '' }) {
  return (
    <svg viewBox="0 0 200 195" className={className} aria-hidden="true">
      {/* --- astas --- */}
      <g transform="translate(200 0) scale(-1 1)">
        <Asta />
      </g>
      <Asta />

      {/* --- orejas --- */}
      <ellipse cx="70" cy="132" rx="15" ry="8" fill={MARRON} transform="rotate(-25 70 132)" />
      <ellipse cx="130" cy="132" rx="15" ry="8" fill={MARRON} transform="rotate(25 130 132)" />

      {/* --- cabeza --- */}
      <ellipse cx="100" cy="136" rx="27" ry="22" fill={MARRON} />

      {/* --- hocico --- */}
      <path
        d="M86 150 C84 170 90 186 100 186 C110 186 116 170 114 150 Z"
        fill={MARRON_CLARO}
      />
      <ellipse cx="100" cy="176" rx="9" ry="6" fill={MARRON} />

      {/* --- ojos --- */}
      <circle cx="90" cy="133" r="3.6" fill="#fffbeb" />
      <circle cx="110" cy="133" r="3.6" fill="#fffbeb" />
    </svg>
  )
}
