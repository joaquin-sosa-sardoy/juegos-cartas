import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'
import ConfigJugadores from '../components/ConfigJugadores'

const ACENTO = {
  texto: 'text-cyan-600',
  barra: 'bg-cyan-400',
  boton: 'bg-cyan-500 hover:bg-cyan-600',
  anillo: 'focus:ring-cyan-400'
}

export default function Filosofando() {
  const navigate = useNavigate()

  const questions = useMemo(() => [
    "¡Oh no! Un tren avanza hacia 5 personas. Puedes accionar la palanca para desviarlo hacia la otra vía, matando a 1 persona en su lugar. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Puedes accionar la palanca para desviarlo hacia la otra vía, matando a 4 personas en su lugar. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Puedes accionar la palanca para desviarlo hacia la otra vía, pero eso destruirá tus ahorros de toda la vida. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Puedes accionar la palanca para desviarlo hacia la otra vía, sacrificándote tú mismo. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Puedes accionar la palanca para desviarlo hacia la otra vía, pero entonces se destruirá la copia original de la Mona Lisa. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia un hombre rico. El hombre rico te ofrece USD500.000 para accionar la palanca, lo cual desviaría el tren y mataría a otra persona. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 langostas. Puedes accionar la palanca para desviarlo hacia la otra vía y atropellar a un gato en su lugar. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas que duermen y no sentirán dolor. Puedes accionar la palanca para desviarlo hacia la otra vía, atropellando a alguien que está despierto. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas atadas a las vías. Puedes accionar la palanca para desviarlo y matar a 1 persona que tropezó accidentalmente. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. La palanca solo acelera el tren, quizá lo haga menos doloroso. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia un solo hombre. Puedes desviarlo pero tu paquete de Mercado Libre llegará tarde. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia tu mejor amigo. Puedes desviarlo matando a 5 desconocidos. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Crees que matarás a 1 al desviarlo… pero olvidaste tus anteojos. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia uno de tus primos hermanos. Puedes desviarlo y matar a 3 de tus primos segundos. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 ancianos. Puedes desviarlo y atropellar a un bebé. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 clones idénticos tuyos. Puedes desviarlo sacrificándote tú. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia una caja misteriosa con 50 % de probabilidad de 2 personas. Lo desvías hacia otra caja con 10 % de 10 personas. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 robots sensibles. Puedes desviarlo y matar a 1 humano. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 3 trenes vacíos valorados en USD900.000. Lo desvías a uno vacío de USD300.000. ¿Qué haces?",
    "¡Oh no! Un tren emite 100 kg de CO₂/año, matará 5 personas en 30 años. Lo desvías a un muro y desmantélalo. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas y tu pareja está en una de las vías secundarias. Desvíalo y salvarás a esas cinco, pero tu pareja morirá. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 adolescentes distraídos con sus móviles; si lo desvías, atropellarás a un monje budista en meditación. ¿Qué haces?",
    "¡Oh no! Eres un ser reencarnado que serás cada persona en este dilema. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia ningún lado, pero quieres gastar una broma al conductor. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia un buen ciudadano. Puedes desviarlo y atropellar a alguien que tira basura. ¿Qué haces?",
    "¡Oh no! Debido a un error, el tren está en bucle eterno. Si lo desví­as explota; si no, dará vueltas por siempre. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia tu peor enemigo. Puedes desviarlo y salvarlo, o no hacer nada. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia alguien y reducirá su esperanza de vida 50 años. Lo desvías y reduce 10 años a 5 personas. ¿Qué haces?",
    "¡Oh no! Un tren avanza hacia 5 personas. Lo desvías al futuro para matar 5 dentro de 100 años. ¿Qué haces?",
    "¡Oh no! Este dilema del tren se desarrolla ante ti. ¿Tienes realmente elección o todo está predeterminado?"
  ], [])

    const [step, setStep] = useState('config')
    const [players, setPlayers] = useState([])
    const [playerIdx, setPlayerIdx] = useState(0)
    const [qIdx, setQIdx] = useState(0)

  const iniciar = jugadores => {
    setPlayers(jugadores)
    setPlayerIdx(0)
    setStep('play')
  }

  const nextQuestion = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(q => q + 1)
      if (players.length) setPlayerIdx(p => (p + 1) % players.length)
    }
  }
  const prevQuestion = () => {
    if (qIdx > 0) {
      setQIdx(q => q - 1)
      if (players.length) setPlayerIdx(p => (p - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  
      {step === 'config' && (
        <ConfigJugadores
          titulo="DECISIONES"
          acento={ACENTO}
          onIniciar={iniciar}
          onVolver={() => navigate('/juegos')}
        />
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          {players.length > 0 && (
            <div className="text-lg font-semibold text-cyan-500">
              Jugador: {players[playerIdx]}
            </div>
          )}

          <PreguntaCard
            contentType="Decisiones"
            challengeText={questions[qIdx]}
          />

          <div className="flex space-x-4">
            <button
              onClick={prevQuestion}
              disabled={qIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >Anterior</button>
            <button
              onClick={nextQuestion}
              disabled={qIdx === questions.length - 1}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >Siguiente</button>
          </div>

          <button
            onClick={() => navigate('/juegos')}
            className="mt-4 px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >Menú Principal</button>
        </div>
      )}
    </div>
  )
}
