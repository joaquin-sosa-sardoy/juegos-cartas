/**
 * Naipe español dibujado en SVG (sin imágenes externas: escala sin perder nitidez
 * y no suma peso al bundle). Mazo de 40 cartas: 1 al 10 de cada palo.
 */

export const PALOS = ['oros', 'copas', 'espadas', 'bastos']

export const PALOS_INFO = {
  oros: {
    nombre: 'Oros',
    emoji: '🪙',
    color: '#b45309',
    borde: 'border-amber-400',
    texto: 'text-amber-600',
    fondo: 'bg-amber-50',
    pintas: 0
  },
  copas: {
    nombre: 'Copas',
    emoji: '🍷',
    color: '#b91c1c',
    borde: 'border-red-400',
    texto: 'text-red-600',
    fondo: 'bg-red-50',
    pintas: 1
  },
  espadas: {
    nombre: 'Espadas',
    emoji: '⚔️',
    color: '#334155',
    borde: 'border-slate-400',
    texto: 'text-slate-600',
    fondo: 'bg-slate-50',
    pintas: 2
  },
  bastos: {
    nombre: 'Bastos',
    emoji: '🌳',
    color: '#3f6212',
    borde: 'border-lime-600',
    texto: 'text-lime-700',
    fondo: 'bg-lime-50',
    pintas: 3
  }
}

/** Dibujo de cada palo dentro de una caja de 100x100. */
const FORMAS = {
  oros: (
    <g>
      <circle cx="50" cy="50" r="47" fill="#fbbf24" stroke="#92400e" strokeWidth="3" />
      <circle cx="50" cy="50" r="38" fill="#fde68a" stroke="#b45309" strokeWidth="2" />
      <path d="M50 16 L57 43 L84 50 L57 57 L50 84 L43 57 L16 50 L43 43 Z" fill="#b45309" opacity="0.45" />
      <path d="M50 16 L57 43 L84 50 L57 57 L50 84 L43 57 L16 50 L43 43 Z" fill="#b45309" opacity="0.45" transform="rotate(45 50 50)" />
      <circle cx="50" cy="50" r="10" fill="#92400e" />
    </g>
  ),
  copas: (
    <g fill="#dc2626" stroke="#7f1d1d" strokeWidth="2.5" strokeLinejoin="round">
      <path d="M18 10 H82 V21 H18 Z" />
      <path d="M22 21 H78 C78 49 66 63 50 65 C34 63 22 49 22 21 Z" />
      <path d="M45 63 H55 V78 H45 Z" />
      <ellipse cx="50" cy="71" rx="11" ry="5" />
      <path d="M24 92 C24 82 35 77 50 77 C65 77 76 82 76 92 Z" />
    </g>
  ),
  espadas: (
    <g strokeLinejoin="round">
      <path d="M50 4 L61 30 V57 H39 V30 Z" fill="#e2e8f0" stroke="#475569" strokeWidth="3" />
      <path d="M50 10 V57" stroke="#94a3b8" strokeWidth="2.5" />
      <path d="M14 57 H86 V68 H14 Z" fill="#64748b" stroke="#334155" strokeWidth="3" />
      <path d="M44 68 H56 V83 H44 Z" fill="#334155" stroke="#1e293b" strokeWidth="3" />
      <circle cx="50" cy="90" r="8" fill="#64748b" stroke="#1e293b" strokeWidth="3" />
    </g>
  ),
  bastos: (
    <g transform="rotate(-20 50 50)" fill="#4d7c0f" stroke="#1a2e05" strokeWidth="3" strokeLinejoin="round">
      {/* ramas cortadas */}
      <path d="M58 34 L86 10 L88 22 L62 44 Z" />
      <path d="M42 58 L14 38 L11 50 L38 68 Z" />
      {/* tronco */}
      <path d="M50 3 C62 3 68 14 66 28 L58 85 C58 93 55 97 50 97 C45 97 42 93 42 85 L34 28 C32 14 38 3 50 3 Z" />
      {/* vetas de la madera */}
      <path
        d="M45 24 h10 M44 44 h12 M46 64 h9"
        stroke="#1a2e05"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.4"
        fill="none"
      />
    </g>
  )
}

/** Cómo se reparten los palos en la cara de la carta (una fila por elemento). */
const FILAS = {
  1: [1],
  2: [1, 1],
  3: [1, 1, 1],
  4: [2, 2],
  5: [2, 1, 2],
  6: [2, 2, 2],
  7: [2, 3, 2],
  8: [3, 2, 3],
  9: [3, 3, 3],
  10: [2, 3, 3, 2]
}

const CENTRO_X = 125
const CENTRO_Y = 205
const ANCHO_ZONA = 140
const ALTO_ZONA = 240

function posiciones(numero) {
  const filas = FILAS[numero]
  const maxCols = Math.max(...filas)
  const tam = Math.min(ANCHO_ZONA / maxCols, ALTO_ZONA / filas.length) * 0.86
  const puntos = []

  filas.forEach((cantidad, f) => {
    const y = CENTRO_Y - ALTO_ZONA / 2 + (ALTO_ZONA * (f + 0.5)) / filas.length
    for (let c = 0; c < cantidad; c++) {
      const x = CENTRO_X - ANCHO_ZONA / 2 + (ANCHO_ZONA * (c + 0.5)) / cantidad
      puntos.push({ x, y })
    }
  })

  return { puntos, tam }
}

function Palo({ palo, x, y, tam }) {
  return (
    <g transform={`translate(${x - tam / 2} ${y - tam / 2}) scale(${tam / 100})`}>
      {FORMAS[palo]}
    </g>
  )
}

/** Un palo suelto, para decorar fuera de una carta. */
export function PaloIcono({ palo, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {FORMAS[palo]}
    </svg>
  )
}

export default function CartaEspanola({ palo, numero, className = '' }) {
  const info = PALOS_INFO[palo]
  const { puntos, tam } = posiciones(numero)

  // Las "pintas" son los cortes del marco: 0 oros, 1 copas, 2 espadas, 3 bastos.
  const pintas = Array.from(
    { length: info.pintas },
    (_, i) => (i - (info.pintas - 1) / 2) * 11
  )

  const indice = girado => (
    <g transform={girado ? 'rotate(180 125 200)' : undefined}>
      <text
        x="36"
        y="58"
        textAnchor="middle"
        fontSize="34"
        fontWeight="700"
        fill={info.color}
        fontFamily="Poppins, system-ui, sans-serif"
      >
        {numero}
      </text>
      <Palo palo={palo} x={36} y={84} tam={26} />
    </g>
  )

  return (
    <svg
      viewBox="0 0 250 400"
      className={className}
      role="img"
      aria-label={`${numero} de ${info.nombre}`}
    >
      <rect x="2" y="2" width="246" height="396" rx="18" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />
      <rect x="14" y="14" width="222" height="372" rx="10" fill="none" stroke={info.color} strokeWidth="2.5" />

      {pintas.map(dx => (
        <g key={dx}>
          <rect x={125 + dx - 4} y="9" width="8" height="10" fill="#ffffff" />
          <rect x={125 + dx - 1.5} y="7" width="3" height="14" fill={info.color} />
          <rect x={125 + dx - 4} y="381" width="8" height="10" fill="#ffffff" />
          <rect x={125 + dx - 1.5} y="379" width="3" height="14" fill={info.color} />
        </g>
      ))}

      {indice(false)}
      {indice(true)}

      {puntos.map((p, i) => (
        <Palo key={i} palo={palo} x={p.x} y={p.y} tam={tam} />
      ))}
    </svg>
  )
}

/** Mazo de 40 cartas: 1 a 10 de cada palo (sin 11, 12 ni comodines). */
export function crearMazo() {
  const mazo = []
  for (const palo of PALOS) {
    for (let numero = 1; numero <= 10; numero++) {
      mazo.push({ palo, numero, id: `${palo}-${numero}` })
    }
  }
  return mazo
}

/** Fisher-Yates: ninguna carta se repite hasta que se termina el mazo. */
export function barajar(mazo) {
  const copia = [...mazo]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = copia[i]
    copia[i] = copia[j]
    copia[j] = tmp
  }
  return copia
}
