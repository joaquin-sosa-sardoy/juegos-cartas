import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'
import { PalosDeFondo, Abanico } from '../components/Decoracion'
import Footer from '../components/Footer'
import { GAME_MODES, JUEGOS_DISPONIBLES, TOTAL_CARTAS, REDES, FRANJA } from '../juegos'

const PASOS = [
  { n: '01', titulo: 'Elegí el juego', texto: 'Trece modos distintos. Preguntas, prendas, mímica, mentiras y cartas.' },
  { n: '02', titulo: 'Pasá el celular', texto: 'Cargás los nombres (o no) y la ronda arranca sola. No hay que instalar nada.' },
  { n: '03', titulo: 'No la pinchés', texto: 'Tenés que cumplir lo de la carta ok?' }
]

const spotify = REDES.find(r => r.nombre === 'Spotify')
const instagram = REDES.find(r => r.nombre === 'Instagram')
const twitter = REDES.find(r => r.nombre === 'Twitter')

/* Las tres redes, en el orden en que se muestran. */
const TARJETAS = [
  {
    ...instagram,
    Icono: FaInstagram,
    fondo: 'bg-gradient-to-br from-fuchsia-600 via-pink-500 to-amber-400',
    anillo: 'focus-visible:ring-pink-300'
  },
  {
    ...twitter,
    Icono: FaTwitter,
    fondo: 'bg-gradient-to-br from-sky-500 to-slate-900',
    anillo: 'focus-visible:ring-sky-300'
  },
  {
    ...spotify,
    Icono: FaSpotify,
    fondo: 'bg-gradient-to-br from-green-500 to-green-900',
    anillo: 'focus-visible:ring-green-300'
  }
]

export default function Landing() {
  const navigate = useNavigate()
  const verJuegos = () => navigate('/juegos')

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* ---------- Portada ---------- */}
      <section className="relative overflow-hidden bg-slate-900 min-h-screen flex flex-col justify-center">
        <PalosDeFondo />

        <div className="relative max-w-5xl mx-auto px-4 py-12 w-full flex flex-col items-center text-center">
          <Abanico tamano="lg" />

          <div className="jc-aparece mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-teal-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 jc-titila" />
            {JUEGOS_DISPONIBLES} juegos · +{TOTAL_CARTAS} cartas
          </div>

          <h1
            className="jc-aparece mt-5 text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.95]"
            style={{ animationDelay: '80ms' }}
          >
            MIX DE
            <br />
            <span className="text-teal-400">JUEGOS</span>
          </h1>

          <div className="jc-aparece mt-6 flex gap-1.5" style={{ animationDelay: '160ms' }}>
            {FRANJA.map(c => (
              <span key={c} className={`h-1.5 w-10 rounded-full ${c}`} />
            ))}
          </div>

          <p
            className="jc-aparece mt-6 max-w-md text-slate-300 text-base sm:text-lg leading-relaxed"
            style={{ animationDelay: '240ms' }}
          >
            Abrís el celu, elegís un juego y listo:
            sin apps, sin cuentas, sin excusas.
          </p>

          <div
            className="jc-aparece mt-9 flex flex-col sm:flex-row items-center gap-4"
            style={{ animationDelay: '320ms' }}
          >
            <button
              onClick={verJuegos}
              className="jc-pulso group inline-flex items-center gap-3 rounded-full bg-teal-500 px-9 py-4 text-lg font-extrabold text-slate-900 shadow-xl transition hover:bg-teal-400 hover:scale-105 active:scale-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
            >
              VER JUEGOS
              <span className="transition-transform group-hover:translate-x-1">▸</span>
            </button>

            <a
              href={spotify.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-green-500 hover:bg-green-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <FaSpotify className="text-lg" />
              Playlists para todo momento de juego
            </a>
          </div>
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 bottom-6 flex justify-center">
          <span className="animate-bounce text-2xl text-slate-500">⌄</span>
        </div>
      </section>

      {/* ---------- Cómo se juega ---------- */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-xs font-bold tracking-[0.3em] text-teal-600 uppercase">
            Cómo funciona
          </p>
          <h2 className="mt-3 text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
            Tres pasos y ya estás jugando
          </h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {PASOS.map(paso => (
              <div
                key={paso.n}
                className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm border border-slate-200 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute -top-3 -right-1 text-7xl font-extrabold text-slate-100 select-none">
                  {paso.n}
                </span>
                <h3 className="relative text-xl font-extrabold text-slate-900">
                  {paso.titulo}
                </h3>
                <p className="relative mt-2 text-sm text-slate-600 leading-relaxed">
                  {paso.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Los juegos ---------- */}
      <section className="bg-slate-900 py-16 sm:py-20 px-4 relative overflow-hidden">
        <PalosDeFondo />

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.3em] text-teal-400 uppercase">
            El mazo completo
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            {JUEGOS_DISPONIBLES} juegos adentro
          </h2>

          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {GAME_MODES.filter(g => g.slug).map(g => (
              <button
                key={g.slug}
                onClick={() => navigate(`/${g.slug}`)}
                className={`
                  rounded-full px-4 py-2 text-sm font-bold shadow-md
                  transition hover:-translate-y-1 hover:shadow-xl
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white
                  ${g.chip}
                `}
              >
                {g.label}
              </button>
            ))}
          </div>

          <button
            onClick={verJuegos}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-extrabold text-slate-900 transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-400"
          >
            Ver todos
            <span>▸</span>
          </button>
        </div>
      </section>

      

      {/* ---------- Redes ---------- */}
      <section className="bg-slate-50 py-16 sm:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
            Por ig mandame sugerencias-detalles-bugs que tenga el juego.
          </h2>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-slate-900">
            Por tw no sé.
          </h2>

          <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-3">
            {TARJETAS.map(red => (
              <a
                key={red.nombre}
                href={red.url}
                target="_blank"
                rel="noreferrer"
                className={`group relative overflow-hidden rounded-2xl p-6 text-white shadow-lg transition hover:-translate-y-1.5 hover:shadow-2xl focus:outline-none focus-visible:ring-4 ${red.fondo} ${red.anillo}`}
              >
                <red.Icono
                  aria-hidden="true"
                  className="absolute -bottom-6 -right-4 text-8xl opacity-25 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12"
                />
                <red.Icono className="relative text-3xl" />
                <p className="relative mt-4 text-2xl font-extrabold">{red.nombre}</p>
                <p className="relative mt-1 truncate text-white/85">{red.handle}</p>
                
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cierre ---------- */}
      <section className="relative overflow-hidden bg-slate-900 py-16 sm:py-20 px-4 text-center">
        <PalosDeFondo />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            Bueno, gracias por ver y guardá el link.
            <br />
            <span className="text-teal-400">Compartilo, contalo, comentalo, algo.. no se</span>
          </h2>
          <button
            onClick={verJuegos}
            className="jc-pulso mt-9 inline-flex items-center gap-3 rounded-full bg-teal-500 px-10 py-4 text-lg font-extrabold text-slate-900 shadow-xl transition hover:bg-teal-400 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-teal-300"
          >
            VER JUEGOS
            <span>▸</span>
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
