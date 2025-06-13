import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa'

const GAME_MODES = [
  { slug: 'previa',       label: 'PREVIA',                bg: 'bg-white border border-gray-300', text: 'text-black' },
  { slug: 'zarpado',      label: 'ZARPADO',               bg: 'bg-red-500',                      text: 'text-white' },
  { slug: 'mimica',       label: 'MÍMICA',                bg: 'bg-blue-600',                     text: 'text-white' },
  { slug: 'random',       label: 'RANDOM',                bg: 'bg-green-700',                    text: 'text-white' },
  { slug: 'decisiones',   label: 'DECISIONES',            bg: 'bg-cyan-500',                     text: 'text-black' },
  { slug: 'tincho',       label: 'TINCHO',                bg: 'bg-amber-400',                    text: 'text-black' },
  { slug: 'mas-probable', label: 'QUIÉN ES MÁS PROBABLE', bg: 'bg-purple-500',                   text: 'text-white' },
  { slug: 'pollera',      label: 'POLLERA',               bg: 'bg-pink-500',                     text: 'text-white' },
  { slug: 'nunca-nunca',  label: 'YO NUNCA NUNCA',        bg: 'bg-pink-800',                     text: 'text-white' },
  { slug: 'quien-soy',    label: 'QUIÉN SOY',             bg: 'bg-emerald-800',                  text: 'text-white' },
  { slug: '',             label: 'PRÓXIMOS JUEGOS...',    bg: 'bg-zinc-500',                     text: 'text-white' }
]

export default function Juegos() {
  const navigate = useNavigate()
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem('loggedIn') === 'true'
  )
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = e => {
    e.preventDefault()
    if (password === 'joamixs') {
      sessionStorage.setItem('loggedIn','true')
      setUnlocked(true)
      setError('')
    } else {
      setError('🔒 Contraseña incorrecta')
    }
  }

  if (!unlocked) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xs space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Mix de Juegos
        </h2>
        <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full" />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error && (
          <p className="text-red-500 text-center text-sm">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          INGRESAR
        </button>
      </form>
    </div>
  )
}

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
  
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center">
            MIX DE JUEGOS
          </h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl w-full">
          {GAME_MODES.map(({ slug, label, bg, text }) => (
            <button
              key={label}
              onClick={() => slug && navigate(`/${slug}`)}
              className={`
                ${bg} ${text}
                relative overflow-hidden
                h-40 sm:h-44
                flex items-center justify-center
                rounded-2xl
                shadow-md
                transition transform hover:-translate-y-1 hover:shadow-xl
                focus:outline-none focus:ring-4 focus:ring-indigo-300
              `}
            >
              <span className="text-xl sm:text-2xl font-semibold">{label}</span>
              {!slug && (
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                  <span className="text-white text-sm uppercase">Próximamente</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </main>

<footer className="bg-indigo-50">
  <div className="max-w-4xl mx-auto py-4 px-4 flex items-center justify-center space-x-6">
    
    <span className="text-gray-700 text-sm">
      Seguime en Spotify que tengo Spotify, en Instragram que tengo Instagram y en Twitter que tengo Twitter.
    </span>

    <a
      href="https://instagram.com/joaquin.sosa_"
      target="_blank"
      rel="noreferrer"
      className="text-4xl hover:text-pink-600 transition"
    >
      <FaInstagram />
    </a>
    <a
      href="https://x.com/joaquiin_sosa"
      target="_blank"
      rel="noreferrer"
      className="text-4xl hover:text-blue-500 transition"
    >
      <FaTwitter />
    </a>
    <a
      href="https://open.spotify.com/user/gc6zteqnqrnq0hl3vygnalvmg"
      target="_blank"
      rel="noreferrer"
      className="text-4xl hover:text-green-600 transition"
    >
      <FaSpotify />
    </a>
  </div>
</footer>

    </div>
  )
}
