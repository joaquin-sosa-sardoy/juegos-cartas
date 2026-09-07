import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'
import { PaloIcono } from './CartaEspanola'
import { PalosDeFondo } from './Decoracion'
import { REDES, FRANJA } from '../juegos'

const ICONOS = { Spotify: FaSpotify, Instagram: FaInstagram, Twitter: FaTwitter }

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      <div className="flex h-1.5 w-full">
        {FRANJA.map(c => (
          <div key={c} className={`flex-1 ${c}`} />
        ))}
      </div>

      <PalosDeFondo />

      <div className="relative max-w-5xl mx-auto px-4 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <PaloIcono palo="espadas" className="w-5 h-5" />
            <span className="font-extrabold text-white tracking-tight text-lg">
              MIX DE JUEGOS
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-400 max-w-sm leading-relaxed">
            Seguime en Spotify que tengo Spotify, en Instagram que tengo
            Instagram y en Twitter que tengo Twitter.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          {REDES.map(red => {
            const Icono = ICONOS[red.nombre]
            return (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                aria-label={red.nombre}
                title={red.nombre}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center text-xl
                  bg-white/5 border border-white/10 text-white
                  transition-all duration-300
                  hover:-translate-y-1 hover:scale-110 ${red.hover}
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400
                `}
              >
                <Icono />
              </a>
            )
          })}
        </div>
      </div>

      <div className="relative border-t border-white/10 py-4 text-center text-xs text-slate-500">
        Hecho para la previa · {new Date().getFullYear()}
      </div>
    </footer>
  )
}
