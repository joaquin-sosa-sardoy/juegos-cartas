import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const GAME_MODES = [
  { slug: 'previa',  label: 'PREVIA',  bg: 'bg-white border border-gray-300', text: 'text-black' },
  { slug: 'zarpado', label: 'ZARPADO', bg: 'bg-red-500', text: 'text-black' },
  { slug: 'mimica',  label: 'MÍMICA',  bg: 'bg-blue-600', text: 'text-white' },
  { slug: 'random',  label: 'RANDOM',  bg: 'bg-green-700', text: 'text-white' },
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
    if (password === 'a') {
      sessionStorage.setItem('loggedIn','true')
      setUnlocked(true)
      setError('')
    } else {
      setError('🔒 Contraseña incorrecta')
    }
  }
//LOGIN
  if (!unlocked) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-xl shadow-md w-full max-w-xs space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            INGRESAR CONTRASEÑA
          </h2>
          <div>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {error && (
              <p className="mt-2 text-red-600 text-sm text-center">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    )
  }

  return (
    //MEJORAR TODO
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white p-4 rounded-xl shadow-md mb-8">
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          JUEGOS
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {GAME_MODES.map(({ slug, label, bg, text }) => (
          <button
            key={slug}
            onClick={() => navigate(`/${slug}`)}
            className={`
              ${bg} ${text}
              h-32 sm:h-40
              flex items-center justify-center
              rounded-xl
              shadow-md
              transform transition
              hover:scale-105 hover:shadow-lg
            `}
          >
            <span className="text-xl font-semibold">{label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
