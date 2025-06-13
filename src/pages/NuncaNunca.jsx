import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function NuncaNunca() {
  const navigate = useNavigate()

  const questions = useMemo(() => [
    "...he probado comida exótica.",
    "...he mentido para evitar una cita.",
    "...he fingido un orgasmo.",
    "...he usado ropa interior al revés todo el día.",
    "...he enviado un mensaje comprometedor a la persona equivocada.",
    "...he besado a alguien del mismo sexo.",
    "...he viajado solo/a al extranjero.",
    "...he entrado a un baño público y salido sin lavar manos.",
    "...he hecho un striptease para alguien.",
    "...he roto algo en casa y culpado a otra persona.",
    "...he enviado nudes.",
    "...me he quedado dormido/a durante el trabajo o clase.",
    "...he usado Tinder o apps de citas.",
    "...he besado a una persona casada.",
    "...he leído mensajes de mi pareja sin permiso.",
    "...he sacado una foto sexy solo/a para mí.",
    "...he tomado el último trago de alguien sin preguntar.",
    "...he usado un arma de fuego.",
    "...he robado algo de un kiosco",
    "...he engañado a mi pareja.",
    "...he probado un trago de más y no recordar la noche.",
    "...he tenido un tatuaje improvisado.",
    "...he viboreado con alguien de acá.",
    "...he chapado drásticamente en el boliche",
    "...he estado sin ropa interior en algún lugar fuera de casa.",
    "...he fingido estar enfermo/a para faltar a un compromiso.",
    "...he cruzado de vereda para evitar a alguien.",
    "...he hecho trampas en un examen.",
    "...he tenido un crush en el profesor/a.",
    "...he besado a alguien debajo de la lluvia.",
    "...he usado disfraces sexuales en la intimidad.",
    "...he robado un beso.",
    "...he participado en un ‘after’ o joda clandestina.",
    "...he dicho ‘te amo’ solo por emoción del momento.",
    "...he mirado el celular de mis padres.",
    "...he fantaseado con un famoso.",
    "...he probado comida de un extraño en la calle.",
    "...he enviado un meme privado a un grupo equivocado.",
    "...he comprado en una sex shop.",
    "...he dado ‘me gusta’ a una foto vieja de alguien.",
    "...he fingido un accidente para llamar la atención.",
    "...he publicado algo vergonzoso en redes sociales.",
    "...he usado falsas identidades en línea.",
    "...he probado bungee jumping.",
    "...he subido fotos provocativas a mis historias.",
    "...he gastado demasiado en un regalo improvisado.",
    "...he hecho sexting.",
    "...he soñado con alguien que conocí hace poco.",
    "...me he quedado atascado/a en un ascensor.",
    "...he confesado un amor imposible.",
    "...he chocado mi auto por algún motivo.",
    "...he pasado la noche en un hospital.",
    "...he declarado mi amor en público.",
    "...he reprobado un curso a propósito.",
    "...he aceptado cosas que no me gustaban de una persona."
  ], [])


  const [current, setCurrent] = useState(0)

  const handlePrev = () => {
    setCurrent(i => Math.max(0, i - 1))
  }

  const handleNext = () => {
    setCurrent(i => Math.min(questions.length - 1, i + 1))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <PreguntaCard
          contentType="NuncaNunca"
          title="Yo nunca nunca..."
          challengeText={questions[current]}
        />

        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            disabled={current === 0}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            onClick={handleNext}
            disabled={current === questions.length - 1}
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
    </div>
  )
}
