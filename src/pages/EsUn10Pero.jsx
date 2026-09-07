import React, { useState, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'
import ConfigJugadores from '../components/ConfigJugadores'
import { crearMazo, barajar } from '../components/CartaEspanola'

const ACENTO = {
  texto: 'text-teal-700',
  barra: 'bg-teal-400',
  boton: 'bg-teal-600 hover:bg-teal-700',
  anillo: 'focus:ring-teal-400'
}

export default function EsUn10Pero() {
  const navigate = useNavigate()

  const [step, setStep] = useState('config')
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [mazo, setMazo] = useState(() => barajar(crearMazo()))
  const [idx, setIdx] = useState(0)

  const carta = mazo[idx]
  const restantes = mazo.length - idx - 1
  const esUltima = idx === mazo.length - 1

  const iniciar = jugadores => {
    setPlayers(jugadores)
    setPlayerIdx(0)
    setStep('play')
  }

  const anterior = useCallback(() => {
    if (idx === 0) return
    setIdx(i => i - 1)
    if (players.length) setPlayerIdx(p => (p - 1 + players.length) % players.length)
  }, [idx, players.length])

  const siguiente = useCallback(() => {
    if (esUltima) return
    setIdx(i => i + 1)
    if (players.length) setPlayerIdx(p => (p + 1) % players.length)
  }, [esUltima, players.length])

  const reiniciar = useCallback(() => {
    setMazo(barajar(crearMazo()))
    setIdx(0)
    setPlayerIdx(0)
  }, [])

  // Atajos de teclado para moverse entre cartas.
  useEffect(() => {
    if (step !== 'play') return
    const onKey = e => {
      if (e.key === 'ArrowLeft') anterior()
      else if (e.key === 'ArrowRight') siguiente()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [step, anterior, siguiente])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      {step === 'config' && (
        <ConfigJugadores
          titulo="ES UN 10, PERO..."
          acento={ACENTO}
          onIniciar={iniciar}
          onVolver={() => navigate('/juegos')}
        />
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-5 w-full max-w-md">

          {players.length > 0 && (
            <div className="text-lg font-semibold text-teal-700">
              Jugador: {players[playerIdx]}
            </div>
          )}

          <div className="w-[250px] sm:w-[350px] lg:w-[400px]">
            <div className="flex items-center justify-between text-sm font-semibold text-gray-600 mb-2">
              <span>Carta {idx + 1} de {mazo.length}</span>
              <span className="text-teal-700">
                {restantes === 0 ? 'Última carta' : `Quedan ${restantes}`}
              </span>
            </div>
            <div className="h-2 w-full bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-600 rounded-full transition-all duration-300"
                style={{ width: `${((idx + 1) / mazo.length) * 100}%` }}
              />
            </div>
          </div>

          <PreguntaCard contentType="EsUn10Pero" carta={carta} />

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={anterior}
              disabled={idx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Anterior
            </button>

            <button
              onClick={siguiente}
              disabled={esUltima}
              className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              Siguiente
            </button>

            <button
              onClick={reiniciar}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
            >
              Barajar de nuevo
            </button>
          </div>

          {esUltima && (
            <p className="text-center text-sm text-teal-700 font-semibold">
              Se terminó el mazo. Barajá de nuevo para otra ronda.
            </p>
          )}

          <button
            onClick={() => navigate('/juegos')}
            className="mt-2 py-2 px-6 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Menú Principal
          </button>
        </div>
      )}
    </div>
  )
}
