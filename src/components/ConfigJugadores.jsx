import { useState } from 'react'

const MIN = 1
const MAX = 50

/**
 * Pantalla previa compartida por los juegos: cantidad de jugadores y nombres,
 * con la opción de seguir sin nombres (en ese caso `onIniciar` recibe []).
 * Devuelve sólo la tarjeta: cada página aporta su propio contenedor de pantalla.
 */
export default function ConfigJugadores({ titulo, acento, onIniciar, onVolver }) {
  const [paso, setPaso] = useState('cantidad')
  const [cantidad, setCantidad] = useState(2)
  const [nombres, setNombres] = useState([])

  const ajustar = valor => {
    const n = Math.min(MAX, Math.max(MIN, valor || MIN))
    setCantidad(n)
  }

  const irANombres = () => {
    setNombres(Array(cantidad).fill(''))
    setPaso('nombres')
  }

  const empezarConNombres = () => {
    onIniciar(nombres.map((n, i) => n.trim() || `Jugador ${i + 1}`))
  }

  const sinNombres = () => onIniciar([])

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
      <h2 className={`text-2xl font-extrabold text-center ${acento.texto}`}>
        {titulo}
      </h2>
      <div className={`w-16 h-1 mx-auto rounded-full mt-2 mb-6 ${acento.barra}`} />

      {paso === 'cantidad' && (
        <>
          <label className="block text-center text-gray-700 font-medium mb-4">
            ¿Cuántos jugadores son?
          </label>

          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              type="button"
              onClick={() => ajustar(cantidad - 1)}
              disabled={cantidad <= MIN}
              aria-label="Un jugador menos"
              className="w-11 h-11 text-2xl font-bold bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              −
            </button>
            <input
              type="number"
              min={MIN}
              max={MAX}
              value={cantidad}
              onChange={e => ajustar(parseInt(e.target.value, 10))}
              className={`w-24 text-center text-2xl font-bold px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${acento.anillo}`}
            />
            <button
              type="button"
              onClick={() => ajustar(cantidad + 1)}
              disabled={cantidad >= MAX}
              aria-label="Un jugador más"
              className="w-11 h-11 text-2xl font-bold bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              +
            </button>
          </div>

          <button
            onClick={irANombres}
            className={`w-full text-white py-3 rounded-lg font-semibold transition ${acento.boton}`}
          >
            Poner los nombres
          </button>
        </>
      )}

      {paso === 'nombres' && (
        <>
          <p className="text-center text-gray-700 font-medium mb-4">
            Nombres de los jugadores
          </p>

          <div className="space-y-3 max-h-[45vh] overflow-y-auto pr-1">
            {nombres.map((nombre, i) => (
              <input
                key={i}
                type="text"
                value={nombre}
                onChange={e => {
                  const copia = [...nombres]
                  copia[i] = e.target.value
                  setNombres(copia)
                }}
                placeholder={`Jugador ${i + 1}`}
                className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${acento.anillo}`}
              />
            ))}
          </div>

          <button
            onClick={empezarConNombres}
            className={`mt-5 w-full text-white py-3 rounded-lg font-semibold transition ${acento.boton}`}
          >
            Empezar
          </button>

          <button
            onClick={() => setPaso('cantidad')}
            className="mt-3 w-full py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
          >
            Cambiar cantidad
          </button>
        </>
      )}

      <button
        onClick={sinNombres}
        className="mt-3 w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-100 transition"
      >
        Continuar sin nombres
      </button>

      <button
        onClick={onVolver}
        className="mt-3 w-full py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
      >
        Menú Principal
      </button>
    </div>
  )
}
