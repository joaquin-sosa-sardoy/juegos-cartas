import React, { useState, useMemo, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function MasProbable() {
  const navigate = useNavigate()

  const questions = useMemo(() => [
    "...que llegue tarde a una cita?",
    "...que pierda el celular?",
    "...que se quede dormido en el cine?",
    "...que hable solo en la calle?",
    "...que llame a su ex por error?",
    "...que se olvide de un cumpleaños importante?",
    "...que ponga la alarma y no suene?",
    "...que se pierda en su propia ciudad?",
    "...que cante en la ducha?",
    "...que haga un TikTok improvisado?",
    "...que se ría en el momento equivocado?",
    "...que olvide dónde estacionó el auto?",
    "...que cocine algo y queme la comida?",
    "...que compre algo caro por impulso?",
    "...que pierda las llaves de casa?",
    "...que se quede sin batería en el celular?",
    "...que se pinte el pelo de un color flashero?",
    "...que tome un curso online y no lo termine?",
    "...que adopte una mascota inesperada?",
    "...que viaje sin planear nada?",
    "...que compre ropa que nunca usa?",
    "...que se inscriba al gimnasio y no vaya?",
    "...que se quede hablando con un extraño?",
    "...que haga una maratón de series de 24h?",
    "...que llore con una película romántica?",
    "...que envíe un mensaje al grupo equivocado?",
    "...que se olvide de comer todo el día?",
    "...que pierda un vuelo?",
    "...que se olvide de pagar una factura?",
    "...que invente una excusa ridícula?",
    "...que hable en sueños?",
    "...que se duerma en clase o en el trabajo?",
    "...que publique algo vergonzoso en redes?",
    "...que dispare una alarma de incendio accidentalmente?",
    "...que se olvide de su contraseña de alguna red?",
    "...que haga paracaidismo?",
    "...que pruebe comida exótica sin pensarlo?",
    "...que cambie de look radicalmente?",
    "...que se convierta en influencer?",
    "...que pida pizza a medianoche?",
    "...que pierda su equipaje en un viaje?",
    "...que acepte un reto de comida picante?",
    "...que haga un tatuaje de la nada?",
    "...que se ria de sus propios chistes?",
    "...que escriba un poema y lo oculte?",
    "...que organice una fiesta sorpresa?",
    "...que ayude a un desconocido en la calle?",
    "...que se pierda en la naturaleza?",
    "...que haga puenting?",
    "...que interprete mal una joda?",
    "...que haga streams?",
    "...que cante en un ascensor lleno?",
    "...que pruebe un deporte extremo?",
    "...que lea un libro en un día?",
    "...que recicle todo lo que pueda?",
    "...que medite a diario?",
    "...que cruce un desierto en bici?",
    "...que sea voluntario en ONG?",
    "...que rompa una piñata solo por diversión?",
    "...que diseñe su propia ropa?",
    "...que explore una cueva?",
    "...que llame “maestro” al mesero?",
    "...que cambie de tema en medio de una conversación seria?",
    "...que cante karaoke borracho?",
    "...que mande un audio de 1 minuto innecesario?",
    "...que cante en el auto con todas las ventanas abajo?",
    "...que se haga amigo del barman?",
    "...que termine hablando con un desconocido en la barra?",
    "...que baile solo en medio de la pista?",
    "...que cuente chistes malos sin darse cuenta?",
    "...que organice una joda de último minuto?",
    "...que olvide pagar la cuenta?",
    "...que empiece dieta al día siguiente?",
    "...que se quede dormido en el sofá de un amigo?",
    "...que hable de ex’s toda la noche?",
    "...que se ponga sentimental en un momento inesperado?",
    "...que se acueste con alguien que conoció esa misma noche?",
    "...que envíe nudes al grupo equivocado?",
    "...que organice un trio improvisado?",
    "...que haga striptease?",
    "...que chape a un desconocido en la pista?",
    "...que se pierda del grupo por andar de novi@?",
    "...que tenga un amor de una noche y no lo cuente?",
    "...que termine en una bañera con desconocidos?",
    "...que gaste todo su sueldo el primer día del mes?",
    "...que convide café a un desconocido?",
    "...que responda “ok” a todo sin leer el mensaje?",
    "...que use el celular durante una película?",
    "...que pida helado a las 3 AM?",
    "...que se una a un reto viral sin saber de qué trata?",
    "...que desaparezca del grupo de WhatsApp un día sin avisar?",
    "...que comience a hablar en otro idioma?",
    "...que organice una apuesta loca con sus amigos?",
  ], [])

       // Elegir un índice inicial al azar
  const initialIdx = useMemo(
    () => Math.floor(Math.random() * questions.length),
    [questions.length]
  )

  // Estado: índices usados, historial y puntero actual
  const [used,    setUsed]    = useState(() => new Set([initialIdx]))
  const [history, setHistory] = useState(() => [initialIdx])
  const [pointer, setPointer] = useState(0)

  // Función para elegir un índice nuevo sin repetir
  const pickNew = useCallback(() => {
    if (used.size === questions.length) return
    let idx
    do {
      idx = Math.floor(Math.random() * questions.length)
    } while (used.has(idx))
    setUsed(u => {
      const copy = new Set(u)
      copy.add(idx)
      return copy
    })
    setHistory(h => [...h, idx])
    setPointer(p => p + 1)
  }, [questions.length, used])

  // Handlers de anterior y siguiente
  const handlePrev = () => {
    if (pointer > 0) setPointer(p => p - 1)
  }
  const handleNext = () => {
    if (pointer < history.length - 1) {
      setPointer(p => p + 1)
    } else {
      pickNew()
    }
  }

  // Índice de la pregunta actual
  const currentIdx = history[pointer]

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {currentIdx != null && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          <PreguntaCard
            contentType="MasProbable"
            question={questions[currentIdx]}
          />

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={pointer === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={
                used.size === questions.length &&
                pointer === history.length - 1
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
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