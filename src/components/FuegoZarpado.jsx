/* ============================================================================
 * LLAMAS  —  ADORNO DEL JUEGO "ZARPADO"
 * ============================================================================
 *
 * ESTE ARCHIVO ES **SOLO** EL DIBUJO DE LAS LLAMAS. No tiene lógica de juego.
 *
 * ¿NO TE GUSTA? SE BORRA ASÍ (2 pasos):
 *   1. Borrá este archivo: src/components/FuegoZarpado.jsx
 *   2. En src/components/PreguntaCard.jsx sacá:
 *        - la línea:  import FuegoZarpado from './FuegoZarpado'
 *        - dentro del bloque  if (contentType === "Zarpado")  los trozos
 *          marcados con el comentario:   LLAMAS (ver FuegoZarpado.jsx)
 *
 * Se usa dos veces en la carta: como cenefa arriba y de marca de agua abajo.
 * ========================================================================= */

/* Una llama suelta, en una caja de 100x100 apoyada en el piso. */
function Llama({ x, escala, opacidad, retraso }) {
  return (
    <g
      transform={`translate(${x} 0) scale(${escala})`}
      opacity={opacidad}
      style={{ transformOrigin: 'bottom center' }}
    >
      <g className="jc-flamea" style={{ animationDelay: `${retraso}s` }}>
        {/* cuerpo exterior */}
        <path
          d="M50 100 C18 88 8 62 22 38 C26 50 34 56 40 56 C32 34 40 14 62 0 C58 18 66 26 74 36 C90 56 84 88 50 100 Z"
          fill="#dc2626"
        />
        {/* corazón de la llama */}
        <path
          d="M50 100 C32 92 26 74 36 58 C38 66 44 70 48 70 C44 54 50 40 62 30 C60 44 68 50 72 60 C80 78 70 94 50 100 Z"
          fill="#f97316"
        />
        <path
          d="M50 100 C40 94 38 82 46 72 C48 80 54 82 56 78 C60 86 60 94 50 100 Z"
          fill="#fbbf24"
        />
      </g>
    </g>
  )
}

/** Cenefa de llamas: se estira a lo ancho de lo que la contenga. */
export default function FuegoZarpado({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 100"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <Llama x={-10} escala={0.75} opacidad={0.55} retraso={0} />
      <Llama x={55} escala={1} opacidad={0.85} retraso={0.35} />
      <Llama x={130} escala={0.65} opacidad={0.5} retraso={0.7} />
      <Llama x={190} escala={0.95} opacidad={0.8} retraso={0.15} />
      <Llama x={265} escala={0.7} opacidad={0.55} retraso={0.5} />
      <Llama x={325} escala={0.9} opacidad={0.75} retraso={0.85} />
    </svg>
  )
}

/** Una sola llama, para usar de ícono. */
export function LlamaIcono({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <Llama x={0} escala={1} opacidad={1} retraso={0} />
    </svg>
  )
}
