/* ============================================================================
 * TELÓN Y MÁSCARAS DE TEATRO  —  ADORNO DEL JUEGO "MÍMICA"
 * ============================================================================
 *
 * ESTE ARCHIVO ES **SOLO** EL DIBUJO. No tiene lógica de juego.
 *
 * ¿NO TE GUSTA? SE BORRA ASÍ (2 pasos):
 *   1. Borrá este archivo: src/components/TeatroMimica.jsx
 *   2. En src/components/PreguntaCard.jsx sacá:
 *        - la línea:  import { Mascaras } from './TeatroMimica'
 *        - dentro del bloque  if (contentType === "Mimica")  los trozos
 *          marcados con el comentario:   TEATRO (ver TeatroMimica.jsx)
 *
 * Exporta:
 *   <Mascaras />  las dos caras del teatro (comedia y tragedia)
 * ========================================================================= */

/** Las dos máscaras del teatro, una al lado de la otra. */
export function Mascaras({ className = '' }) {
  const cara = (cx, sonrie, relleno, borde) => (
    <g>
      <ellipse cx={cx} cy="50" rx="26" ry="32" fill={relleno} stroke={borde} strokeWidth="3" />
      {/* ojos */}
      <ellipse cx={cx - 9} cy="42" rx="4.5" ry="6" fill={borde} />
      <ellipse cx={cx + 9} cy="42" rx="4.5" ry="6" fill={borde} />
      {/* cejas */}
      <path
        d={sonrie
          ? `M${cx - 15} 31 Q${cx - 9} 27 ${cx - 3} 31`
          : `M${cx - 15} 29 Q${cx - 9} 34 ${cx - 3} 32`}
        fill="none"
        stroke={borde}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d={sonrie
          ? `M${cx + 3} 31 Q${cx + 9} 27 ${cx + 15} 31`
          : `M${cx + 3} 32 Q${cx + 9} 34 ${cx + 15} 29`}
        fill="none"
        stroke={borde}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* boca */}
      <path
        d={sonrie
          ? `M${cx - 13} 60 Q${cx} 74 ${cx + 13} 60 Q${cx} 66 ${cx - 13} 60 Z`
          : `M${cx - 13} 68 Q${cx} 54 ${cx + 13} 68 Q${cx} 62 ${cx - 13} 68 Z`}
        fill={borde}
      />
    </g>
  )

  return (
    <svg viewBox="0 0 130 100" className={className} aria-hidden="true">
      {cara(38, true, '#dbeafe', '#1d4ed8')}
      {cara(92, false, '#bfdbfe', '#1e3a8a')}
    </svg>
  )
}
