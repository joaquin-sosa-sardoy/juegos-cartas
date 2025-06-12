import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Mimica() {
  const ALL_CHALLENGES = useMemo(() => [
    [
      { label: 'Videojuego', value: 'FIFA' },
      { label: 'Personaje',  value: 'Tiger Woods' },
      { label: 'Emoción',     value: 'Confusión' },
      { label: 'Acción',      value: 'Plantar' },
    ],
    [
      { label: 'Videojuego', value: 'Mario Kart' },
      { label: 'Personaje',  value: 'Lara Croft' },
      { label: 'Emoción',     value: 'Alegría' },
      { label: 'Acción',      value: 'Correr' },
    ],
    //  cartas TODO
  ], [])

  const [step, setStep]       = useState('count')  
  const [count, setCount]     = useState(1)
  const [names, setNames]     = useState([])
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [cardIdx, setCardIdx]     = useState(0)

  const navigate = useNavigate()

  const handleCountNext = () => {
    if (count >= 1 && count <= 50) {
      setNames(Array(count).fill(''))
      setStep('names')
    }
  }

  const handleNameChange = (i, v) => {
    const copy = [...names]
    copy[i] = v
    setNames(copy)
  }

  const handleNamesNext = () => {
    if (names.every(n => n.trim())) {
      setPlayers(names)
      setStep('play')
    }
  }

  const nextCard = () => {
    if (cardIdx < ALL_CHALLENGES.length - 1) {
      setCardIdx(ci => ci + 1)
      setPlayerIdx(pi => (pi + 1) % players.length)
    }
  }
  const prevCard = () => {
    if (cardIdx > 0) {
      setCardIdx(ci => ci - 1)
      setPlayerIdx(pi => (pi - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 'count' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-4">Cantidad de jugadores</h2>
          <input
            type="number"
            min={1} max={50}
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            onKeyDown={e => ['e','E','+','-'].includes(e.key) && e.preventDefault()}
          />
          <button
            onClick={handleCountNext}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Siguiente
          </button>
        </div>
      )}

      {step === 'names' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Nombres de jugadores</h2>
          <div className="space-y-3">
            {names.map((_, i) => (
              <input
                key={i}
                type="text"
                value={names[i]}
                onChange={e => handleNameChange(i, e.target.value)}
                placeholder={`Jugador ${i+1}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            ))}
          </div>
          <button
            onClick={handleNamesNext}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Comenzar
          </button>
        </div>
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          <div className="text-lg font-semibold text-blue-600">
            Jugador: {players[playerIdx]}
          </div>

          <PreguntaCard
            contentType="Mimica"
            categories={ALL_CHALLENGES[cardIdx]}
          />

          <div className="flex space-x-3">
            <button
              onClick={prevCard}
              disabled={cardIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
            >
              Anterior
            </button>
            <button
              onClick={nextCard}
              disabled={cardIdx === ALL_CHALLENGES.length - 1}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
            >
              Siguiente
            </button>
          </div>

          <button
            onClick={() => navigate('/juegos')}
            className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Menú Principal
          </button>
        </div>
      )}
    </div>
  )
}