import CartaEspanola, { PaloIcono } from './CartaEspanola'

/* Abanico del encabezado: una carta de cada palo. */
const ABANICO = [
  { palo: 'oros',    numero: 10, x: -96, y:  14, r: -18, xh: -150, yh:  26, rh: -26 },
  { palo: 'copas',   numero:  7, x: -33, y:  -2, r:  -6, xh:  -52, yh:  -8, rh:  -9 },
  { palo: 'espadas', numero:  4, x:  33, y:  -2, r:   6, xh:   52, yh:  -8, rh:   9 },
  { palo: 'bastos',  numero:  1, x:  96, y:  14, r:  18, xh:  150, yh:  26, rh:  26 }
]

/* Palos que suben despacio de fondo. */
const FONDO = [
  { palo: 'oros',    left: '6%',  top: '62%', tam: 52, dur: 26, delay: 0 },
  { palo: 'espadas', left: '18%', top: '88%', tam: 38, dur: 34, delay: 6 },
  { palo: 'copas',   left: '34%', top: '75%', tam: 44, dur: 30, delay: 12 },
  { palo: 'bastos',  left: '52%', top: '92%', tam: 34, dur: 38, delay: 3 },
  { palo: 'oros',    left: '68%', top: '70%', tam: 40, dur: 28, delay: 15 },
  { palo: 'copas',   left: '83%', top: '86%', tam: 50, dur: 32, delay: 9 },
  { palo: 'espadas', left: '93%', top: '64%', tam: 32, dur: 36, delay: 20 }
]

export function PalosDeFondo({ opacidad = 'opacity-[0.07]' }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {FONDO.map((p, i) => (
        <div
          key={i}
          className={`jc-deriva absolute ${opacidad}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.tam,
            animationDuration: `${p.dur}s`,
            animationDelay: `-${p.delay}s`
          }}
        >
          <PaloIcono palo={p.palo} className="w-full h-auto" />
        </div>
      ))}
    </div>
  )
}

/**
 * Abanico de cartas. `tamano`: 'sm' para cabeceras compactas,
 * 'md' por defecto, 'lg' para la portada.
 */
export function Abanico({ tamano = 'md' }) {
  const alto = {
    sm: 'h-[130px]',
    md: 'h-[190px] sm:h-[240px]',
    lg: 'h-[230px] sm:h-[300px]'
  }[tamano]

  const escala = {
    sm: 'scale-[0.55]',
    md: 'scale-[0.72] sm:scale-100',
    lg: 'scale-[0.85] sm:scale-[1.2]'
  }[tamano]

  return (
    <div className={`relative flex items-center justify-center ${alto}`}>
      <div className={`jc-abanico relative w-[110px] h-[176px] ${escala}`}>
        {ABANICO.map((c, i) => (
          <div
            key={c.palo}
            className="jc-carta absolute inset-0"
            style={{
              '--x': `${c.x}px`,
              '--y': `${c.y}px`,
              '--r': `${c.r}deg`,
              '--xh': `${c.xh}px`,
              '--yh': `${c.yh}px`,
              '--rh': `${c.rh}deg`
            }}
          >
            <div className="jc-flota" style={{ animationDelay: `${i * 0.4}s` }}>
              <CartaEspanola
                palo={c.palo}
                numero={c.numero}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
