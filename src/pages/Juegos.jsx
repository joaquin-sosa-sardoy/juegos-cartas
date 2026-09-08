import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PaloIcono } from '../components/CartaEspanola'
import { PalosDeFondo, Abanico } from '../components/Decoracion'
import Footer from '../components/Footer'
import { GAME_MODES, JUEGOS_DISPONIBLES, FRANJA } from '../juegos'

export default function Juegos() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* ---------- Encabezado ---------- */}
      <header className="relative overflow-hidden bg-slate-900">
        <PalosDeFondo />

        <div className="relative max-w-5xl mx-auto px-4 pt-5">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-300 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
          >
            ◂ Inicio
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pb-10 sm:pb-14 flex flex-col items-center">
          <Abanico />

          <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold text-white text-center tracking-tight">
            MIX DE <span className="text-teal-400">JUEGOS</span>
          </h1>

          <div className="mt-4 flex gap-1.5">
            {FRANJA.map(c => (
              <span key={c} className={`h-1.5 w-10 rounded-full ${c}`} />
            ))}
          </div>

          <p className="mt-4 text-slate-400 text-sm sm:text-base text-center max-w-sm">
            {JUEGOS_DISPONIBLES} juegos para distintos momentos.
          </p>
        </div>

        <div className="h-6 bg-slate-50 rounded-t-[2rem]" />
      </header>

      {/* ---------- Fichas ---------- */}
      <main className="flex-grow bg-slate-50 px-4 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 max-w-5xl w-full mx-auto">
          {GAME_MODES.map(({ slug, label, sublabel, icono, palo, bg, text, nuevo, destacado }, i) => (
            <button
              key={label}
              onClick={() => slug && navigate(`/${slug}`)}
              aria-disabled={!slug}
              style={{ animationDelay: `${i * 55}ms` }}
              className={`
                jc-reparte group relative overflow-hidden isolate
                ${bg} ${text}
                h-full ${destacado ? 'min-h-44 sm:min-h-52 md:col-span-2' : 'min-h-36 sm:min-h-40'}
                rounded-2xl shadow-lg
                flex items-center justify-center text-center px-4
                transition-all duration-300
                hover:-translate-y-1.5 hover:shadow-2xl
                focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-400
                ${slug ? 'cursor-pointer' : 'cursor-default'}
              `}
            >
              {/* Número de carta */}
              <span className="absolute top-3 left-3 text-[11px] font-bold tracking-[0.2em] opacity-50">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Marca de agua */}
              <span
                aria-hidden="true"
                className={`absolute -bottom-5 -right-3 select-none opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12 ${destacado ? 'text-8xl' : 'text-7xl'}`}
              >
                {palo
                  ? <PaloIcono palo={palo} className={destacado ? 'w-28 h-28' : 'w-20 h-20'} />
                  : icono}
              </span>

              {/* Destello al pasar el mouse */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[150%]"
              />

              {nuevo && (
                <span className="absolute top-3 right-3 bg-white text-teal-700 text-[10px] font-extrabold px-2 py-1 rounded-full shadow">
                  NUEVO
                </span>
              )}

              <span className="relative flex flex-col items-center leading-tight">
                <span className={`font-bold ${destacado ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'}`}>
                  {label}
                </span>
                {sublabel && (
                  <span className="mt-1 text-xs sm:text-sm font-bold tracking-widest opacity-75">
                    {sublabel}
                  </span>
                )}
              </span>

              {slug && (
                <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-widest opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  JUGAR ▸
                </span>
              )}

              {!slug && (
                <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-widest opacity-60">
                  PRÓXIMAMENTE
                </span>
              )}
            </button>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
