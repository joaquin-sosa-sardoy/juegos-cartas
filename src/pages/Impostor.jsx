import { useEffect, useRef, useState } from "react"
import { useNavigate } from 'react-router-dom'

const PALABRAS = [
  { palabra: "Asado", pista: "Fuego" },
  { palabra: "Empanadas", pista: "Lesbiana" },
  { palabra: "Mate", pista: "Ronda" },
  { palabra: "Messi", pista: "Premio Puskas" },
  { palabra: "Futbol", pista: "Pasión" },
  { palabra: "Tini", pista: "Escenario" },
  { palabra: "Garche", pista: "Encuentro" },
  { palabra: "Gato", pista: "Noche" },
  { palabra: "Trola", pista: "Reputación" },
  { palabra: "Cheto", pista: "Clase" },
  { palabra: "Obelisco", pista: "Centro" },
  { palabra: "Subte", pista: "Escalera" },
  { palabra: "Colectivo", pista: "Parada" },
  { palabra: "Bondi", pista: "Viaje" },
  { palabra: "Plaza", pista: "Banco" },
  { palabra: "Vereda", pista: "Baldosa" },
  { palabra: "Quiosco", pista: "Monedas" },
  { palabra: "Facturas", pista: "Domingo" },
  { palabra: "Medialunas", pista: "Manteca" },
  { palabra: "Panaderia", pista: "Temprano" },
  { palabra: "Helado", pista: "Verano" },
  { palabra: "Fernet", pista: "Hielo" },
  { palabra: "Cordoba", pista: "Tonada" },
  { palabra: "Rosario", pista: "Paraná" },
  { palabra: "Patagonia", pista: "Viento" },
  { palabra: "Pampa", pista: "Plano" },
  { palabra: "Gaucho", pista: "Facón" },
  { palabra: "Estancia", pista: "Campo" },
  { palabra: "Parrilla", pista: "Hierro" },
  { palabra: "Chimichurri", pista: "Verde" },
  { palabra: "Cancha", pista: "Tribuna" },
  { palabra: "Pelota", pista: "Rebote" },
  { palabra: "Arco", pista: "Red" },
  { palabra: "Hincha", pista: "Garganta" },
  { palabra: "Camiseta", pista: "Escudo" },
  { palabra: "Gol", pista: "Grito" },
  { palabra: "Boca", pista: "Azul" },
  { palabra: "River", pista: "Banda" },
  { palabra: "Seleccion", pista: "Celeste" },
  { palabra: "Folklore", pista: "Antiguo" },
  { palabra: "Peña", pista: "Guitarra" },
  { palabra: "Domingo", pista: "Siesta" },
  { palabra: "Lunes", pista: "Rutina" },
  { palabra: "Trabajo", pista: "Horario" },
  { palabra: "Escuela", pista: "Timbre" },
  { palabra: "Universidad", pista: "Final" },
  { palabra: "Cuaderno", pista: "Rayas" },
  { palabra: "Lapicera", pista: "Dibujo" },
  { palabra: "Mochila", pista: "Peso" },
  { palabra: "Recreo", pista: "Carrera" },
  { palabra: "Vacaciones", pista: "Valija" },
  { palabra: "Lluvia", pista: "Paraguas" },
  { palabra: "Verano", pista: "Pileta" },
  { palabra: "Invierno", pista: "Bufanda" },
  { palabra: "Otoño", pista: "Hojas" },
  { palabra: "Primavera", pista: "Flores" },
  { palabra: "Control", pista: "Boton" },
  { palabra: "Celular", pista: "Pulgar" },
  { palabra: "Computadora", pista: "Caja" },
  { palabra: "Teclado", pista: "Golpes" },
  { palabra: "Mouse", pista: "Flecha" },
  { palabra: "Auriculares", pista: "Silencio" },
  { palabra: "Parlante", pista: "Volumen" },
  { palabra: "Cargador", pista: "Bateria" },
  { palabra: "Enchufe", pista: "Corriente" },
  { palabra: "Cable", pista: "Conexion" },
  { palabra: "Botella", pista: "Sorbo" },
  { palabra: "Vaso", pista: "Borde" },
  { palabra: "Cuchara", pista: "Curva" },
  { palabra: "Tenedor", pista: "Puntas" },
  { palabra: "Cuchillo", pista: "Filo" },
  { palabra: "Sarten", pista: "Plana" },
  { palabra: "Olla", pista: "Hervor" },
  { palabra: "Heladera", pista: "Frio" },
  { palabra: "Mochila", pista: "Carga" },
  { palabra: "Bolso", pista: "Viaje" },
  { palabra: "Valija", pista: "Salida" },
  { palabra: "Cuaderno", pista: "Rayas" },
  { palabra: "Lapicera", pista: "Tinta" },
  { palabra: "Libro", pista: "Paginas" },
  { palabra: "Caja", pista: "Contenido" },
  { palabra: "Candado", pista: "Cierre" },
  { palabra: "Escoba", pista: "Vehiculo" },
  { palabra: "Cepillo", pista: "Cerdas" },
  { palabra: "Peine", pista: "Raya" },
  { palabra: "Jabon", pista: "Espuma" },
  { palabra: "Toalla", pista: "Seco" },
  { palabra: "Esponja", pista: "Absorbe" },
  { palabra: "Pasta", pista: "Menta" },
  { palabra: "Rastrillo", pista: "Afeitar" },
  { palabra: "Perfume", pista: "Aroma" },
  { palabra: "Desodorante", pista: "Axila" },
  { palabra: "Crema", pista: "Suave" },
  { palabra: "Lentes", pista: "Vista" },
  { palabra: "Anteojos", pista: "Enfoque" },
  { palabra: "Sombrero", pista: "Sombra" },
  { palabra: "Bufanda", pista: "Cuello" },
  { palabra: "Campera", pista: "Abrigo" },
  { palabra: "Cinturon", pista: "Ajuste" },
  { palabra: "Zapatos", pista: "Suela" },
  { palabra: "Zapatillas", pista: "Cordones" },
  { palabra: "Medias", pista: "Par" },
  { palabra: "Llaves", pista: "Ruido" },
  { palabra: "Billetera", pista: "Billetes" },
  { palabra: "Monedero", pista: "Cambio" },
  { palabra: "Tarjeta", pista: "Plastico" },
  { palabra: "Documento", pista: "Identidad" },
  { palabra: "Pasaporte", pista: "Frontera" },
  { palabra: "RelojPulsera", pista: "Muñeca" },
  { palabra: "Anillo", pista: "Dedo" },
  { palabra: "Collar", pista: "Cuello" },
  { palabra: "Pulsera", pista: "Ajuste" },
  { palabra: "Linterna", pista: "Laser" },
  { palabra: "Pila", pista: "Energia" },
  { palabra: "Calculadora", pista: "Numeros" },
  { palabra: "Agenda", pista: "Fechas" },
  { palabra: "Calendario", pista: "Dias" },
  { palabra: "Tijera", pista: "Corte" },
  { palabra: "Cinta", pista: "Pega" },
  { palabra: "Regla", pista: "Recta" },
  { palabra: "Pegamento", pista: "Union" },
  { palabra: "Laburo", pista: "Horario" },
  { palabra: "TikTok", pista: "Scroll" },
  { palabra: "Instagram", pista: "Filtro" },
  { palabra: "WhatsApp", pista: "Visto" },
  { palabra: "Twitter", pista: "Hilo" },
  { palabra: "Netflix", pista: "Maraton" },
  { palabra: "Spotify", pista: "Playlist" },
  { palabra: "YouTube", pista: "Miniatura" },
  { palabra: "Google", pista: "Buscar" },
  { palabra: "Uber", pista: "Viaje" },
  { palabra: "Delivery", pista: "Timbre" },
  { palabra: "Pedido", pista: "Espera" },
  { palabra: "Propina", pista: "Cambio" },
  { palabra: "Tarjeta", pista: "Contacto" },
  { palabra: "Efectivo", pista: "Billete" },
  { palabra: "Factura", pista: "Ticket" },
  { palabra: "Alquiler", pista: "Contrato" },
  { palabra: "Expensas", pista: "Consorcio" },
  { palabra: "Inflacion", pista: "Aumento" },
  { palabra: "Colectivo", pista: "Parada" },
  { palabra: "Bondi", pista: "Apretado" },
  { palabra: "Subte", pista: "Anden" },
  { palabra: "Tramite", pista: "Fila" },
  { palabra: "Turno", pista: "Espera" },
  { palabra: "Feriado", pista: "Descanso" }
];


export default function Impostor() {
  const navigate = useNavigate()
  const [fase, setFase] = useState("menu")
  const [jugadores, setJugadores] = useState(() => {
    const saved = localStorage.getItem("impostor_jugadores")
    return saved ? JSON.parse(saved) : []
  })

  const [nuevoJugador, setNuevoJugador] = useState("")
  const [editingIndex, setEditingIndex] = useState(null)
  const [editingValue, setEditingValue] = useState("")

  const [cantidadImpostores, setCantidadImpostores] = useState(1)

  const [palabraActual, setPalabraActual] = useState(null)
  const [impostores, setImpostores] = useState([])
  const [turno, setTurno] = useState(0)

  const [jugadorInicial, setJugadorInicial] = useState(null)

  // Drag
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startY = useRef(0)
  const DRAG_THRESHOLD = 120

  // Countdown
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    localStorage.setItem(
      "impostor_jugadores",
      JSON.stringify(jugadores)
    )
  }, [jugadores])

  const mezclar = arr => [...arr].sort(() => Math.random() - 0.5)

  const iniciarPartida = () => {
    const seleccion =
      PALABRAS[Math.floor(Math.random() * PALABRAS.length)]

    const indices = jugadores.map((_, i) => i)
    const impostoresRandom = mezclar(indices).slice(
      0,
      cantidadImpostores
    )

    setPalabraActual(seleccion)
    setImpostores(impostoresRandom)
    setTurno(0)
    setFase("ver-palabras")
  }

  // ---------------- Drag ----------------
  const handleDragStart = e => {
    setIsDragging(true)
    startY.current = e.touches
      ? e.touches[0].clientY
      : e.clientY
  }

  const handleDragMove = e => {
    if (!isDragging) return
    const currentY = e.touches
      ? e.touches[0].clientY
      : e.clientY

    const offset = Math.min(0, currentY - startY.current)
    setDragOffset(offset)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    setDragOffset(0)
  }

  const palabraVisible = dragOffset < -DRAG_THRESHOLD
  const esImpostor = impostores.includes(turno)

  // ---------------- Countdown ----------------
  useEffect(() => {
    if (fase !== "countdown") return

    if (countdown === 0) {
      setJugadorInicial(
        jugadores[Math.floor(Math.random() * jugadores.length)]
      )
      setFase("jugando")
      return
    }

    const timer = setTimeout(
      () => setCountdown(c => c - 1),
      1000
    )
    return () => clearTimeout(timer)
  }, [fase, countdown])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">

        {/* MENU */}
        {fase === "menu" && (
          <>
            <h1 className="text-2xl font-bold text-center mb-4">
              IMPOSTOR
            </h1>

            <div className="flex gap-2 mb-3">
              <input
                value={nuevoJugador}
                onChange={e => setNuevoJugador(e.target.value)}
                placeholder="Nombre del jugador"
                className="flex-1 border rounded-lg px-3 py-2"
              />
              <button
                onClick={() => {
                  if (!nuevoJugador.trim()) return
                  setJugadores([...jugadores, nuevoJugador.trim()])
                  setNuevoJugador("")
                }}
                className="bg-indigo-600 text-white px-4 rounded-lg"
              >
                +
              </button>
            </div>

            <ul className="space-y-2 mb-4">
              {jugadores.map((j, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg"
                >
                  {editingIndex === i ? (
                    <input
                      value={editingValue}
                      onChange={e => setEditingValue(e.target.value)}
                      onBlur={() => {
                        if (editingValue.trim()) {
                          const copy = [...jugadores]
                          copy[i] = editingValue.trim()
                          setJugadores(copy)
                        }
                        setEditingIndex(null)
                      }}
                      autoFocus
                      className="flex-1 border rounded px-2 py-1"
                    />
                  ) : (
                    <span className="flex-1">
                      {i + 1}. {j}
                    </span>
                  )}

                  <button
                    onClick={() => {
                      setEditingIndex(i)
                      setEditingValue(j)
                    }}
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() =>
                      setJugadores(
                        jugadores.filter((_, idx) => idx !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>

            <label className="block mb-2 font-semibold">
              Impostores: {cantidadImpostores}
            </label>
            <input
              type="range"
              min={1}
              max={Math.max(1, Math.floor(jugadores.length / 2))}
              value={cantidadImpostores}
              onChange={e =>
                setCantidadImpostores(Number(e.target.value))
              }
              className="w-full mb-4"
            />

            <button
              disabled={jugadores.length < 3}
              onClick={iniciarPartida}
              className="w-full bg-purple-600 text-white py-3 rounded-xl disabled:opacity-40"
            >
              INICIAR
            </button>
            <button
            onClick={() => navigate('/juegos')}
            className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition block mx-auto"
          >
            Menú Principal
          </button>
          </>
          
        )}

        {/* VER PALABRAS */}
        {fase === "ver-palabras" && (
          <>
            <button
              onClick={() => setFase("menu")}
              className="mb-4 text-sm text-indigo-600 font-bold"
            >
              ← Volver al menú
            </button>

            <p className="text-center text-sm text-gray-500">
              Turno de
            </p>
            <h2 className="text-3xl font-extrabold text-center text-indigo-700 mb-4">
              {jugadores[turno]}
            </h2>

            <div className="relative h-56 border rounded-xl overflow-hidden flex items-center justify-center">

              {palabraVisible && (
                <div className="text-center z-10 px-4">
                  {esImpostor ? (
                    <>
                      <p className="text-red-700 font-extrabold text-xl mb-2">
                        IMPOSTOR
                      </p>
                      <p className="text-lg">
                        Pista:{" "}
                        <b>{palabraActual.pista}</b>
                      </p>
                    </>
                  ) : (
                    <p className="text-2xl font-bold">
                      {palabraActual.palabra}
                    </p>
                  )}
                </div>
              )}

              <div
                className="absolute inset-0 bg-purple-700 text-white flex items-center justify-center font-bold touch-none"
                style={{
                  transform: `translateY(${dragOffset}px)`,
                  transition: isDragging
                    ? "none"
                    : "transform 0.25s ease-out",
                }}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
              >
                DESLIZÁ HACIA ARRIBA
              </div>
            </div>

            <button
              onClick={() => {
                if (turno === jugadores.length - 1) {
                  setCountdown(3)
                  setFase("countdown")
                } else {
                  setTurno(t => t + 1)
                }
              }}
              className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-xl"
            >
              {turno === jugadores.length - 1
                ? "INICIAR JUEGO"
                : "SIGUIENTE"}
            </button>
          </>
        )}

        {/* COUNTDOWN */}
        {fase === "countdown" && (
          <div className="text-center py-16">
            <p className="text-lg mb-2">
              Empieza en
            </p>
            <p className="text-5xl font-bold">
              {countdown}
            </p>
          </div>
        )}

        {/* JUGANDO */}
        {fase === "jugando" && (
          <div className="text-center py-10">
            <h2 className="text-xl mb-4">
              Empieza:
            </h2>
            <p className="text-3xl font-bold mb-6">
              {jugadorInicial}
            </p>
            <button
              onClick={() => setFase("terminado")}
              className="bg-red-600 text-white px-6 py-3 rounded-xl"
            >
              Finalizar juego
            </button>
          </div>
        )}

        {/* TERMINADO */}
        {fase === "terminado" && (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold mb-4">
              🎉 Juego terminado
            </h2>
            <p className="text-lg mb-6">
              La palabra era{" "}
              <b>"{palabraActual.palabra}"</b>
            </p>
            <button
              onClick={() => setFase("menu")}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl"
            >
              Volver al menú
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
