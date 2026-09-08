import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

/*
 * TAG DEL NOVIO / PAREJA
 * Funciona como Tincho o MasProbable: no pide jugadores, se lee la carta y
 * se responde ahí nomás. El adorno del anillo está en AnilloDeNovio.jsx.
 */
export default function TagDelNovio() {
  const navigate = useNavigate()

  /* ==========================================================================
   * ▼▼▼  ACÁ SE AGREGAN / BORRAN / EDITAN LAS PREGUNTAS  ▼▼▼
   *
   * Cada pregunta va entre comillas y termina en coma. Una por renglón.
   * Ejemplo:
   *
   *     "¿Qué canción te hace acordar a nosotros?",
   *
   * Podés agregar todas las que quieras, no hay límite: el contador
   * "Pregunta X de Y" se actualiza solo.
   * Si una pregunta lleva comillas adentro, escribilas así:  \"
   * ========================================================================== */
  const questions = useMemo(() => [
    "¿Cuál es el recuerdo favorito que tenés de nosotros?",
    "¿Qué fue lo primero que pensaste de mí cuando me viste?",
    "¿Dónde nos conocimos y que sensación te trae el lugar?",
    "¿Quién dio el primer paso?",
    "¿Cuál fue nuestra peor pelea hasta ahora?",
    "¿Qué es lo que más te gusta de mí?",
    "¿Qué es lo que menos te gusta de mí y nunca me lo dijiste?",
    "¿Cuál fue la mejor cita que tuvimos?",
    "¿Te acordás la fecha exacta en la que empezamos a salir?",
    "¿Quién dijo \"te amo\" primero?",
    "¿Cuál fue tu primera impresión de mis amigos?",
    "¿Qué es lo más loco que hiciste por mí?",
    "¿Cómo te imaginás nuestra vida en diez años?",
    "¿Sabés cuál es mi comida favorita?",
    "¿Sabés el nombre completo de mi mejor amigo/a?",
    "¿Alguna vez sentiste celos de alguien cercano a mí?",
    "¿Cuál fue el regalo que más te gustó que te hice?",
    "Del uno al diez, ¿qué puntaje le ponés a nuestra relación?",
    "¿Hay algo que cambiarías de cómo empezamos?",
    "¿Cuál es mi manía más rara?",
    "¿Cuál fue el viaje que más disfrutaste conmigo?",
    "¿Qué es lo que te haría dudar de seguir en esta relación?",
    "¿Sabés cuál es mi mayor miedo?",
    "¿Qué canción te hace acordar a nosotros?",
    "¿Qué es lo más incómodo que pasamos juntos?",
    "¿Alguna vez pensaste en terminar y no lo dijiste?",
    "¿Cuál es el chiste interno que más se repite entre nosotros?",
    "Y ahora, ¿cuál es el CHISME interno que pensás que más se repite de nosotros?",
    "¿Qué es lo que más te sorprendió de mí cuando nos conocimos?",
    "¿Alguna vez te arrepentiste de algo que me dijiste?",
    "¿Qué es lo que más admirás de mí?",
    "¿Cuál fue el momento en que sentiste que esto iba en serio?",
    "¿Sabés cuál es la película que más veces vi en mi vida (o favorita)?",
    "¿Qué apodo me pusiste que nunca uso delante de otros?",
    "¿Cuál fue la primera vez que dudaste de nosotros?",
    "¿Qué costumbre mía te costó más aceptar?",
    "¿Cuál es el error que no querés volver a cometer en esta relación?",
    "¿Qué es lo que te hace reír de mí sin que yo me dé cuenta?",
    "¿Sabés cuál es mi color favorito?",
    "¿Qué fue lo más difícil que atravesamos juntos?",
    "¿Alguna vez fantaseaste con alguien más estando conmigo?",
    "¿Qué es lo que más te gustaría cambiar de nuestra rutina?",
    "¿Cuál fue el regalo que peor disimulaste que no te gustó?",
    "¿Qué es lo que nunca me perdonarías?",
    "¿Sabés cuál es mi mayor sueño?",
    "¿Qué fue lo que más te costó de mi familia?",
    "¿Creés que vamos a envejecer bien juntos?",
  ], [])
  /* ▲▲▲  FIN DE LAS PREGUNTAS  ▲▲▲ */

  const [qIdx, setQIdx] = useState(0)

  const prevQuestion = () => {
    if (qIdx > 0) setQIdx(q => q - 1)
  }

  const nextQuestion = () => {
    if (qIdx < questions.length - 1) setQIdx(q => q + 1)
  }

  return (
    <div className="min-h-screen bg-rose-50 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">

        <div className="text-sm font-semibold text-rose-500">
          Pregunta {qIdx + 1} de {questions.length}
        </div>

        <PreguntaCard
          contentType="TagDelNovio"
          question={questions[qIdx]}
        />

        <div className="flex space-x-4">
          <button
            onClick={prevQuestion}
            disabled={qIdx === 0}
            className="px-4 py-2 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 disabled:opacity-50 transition"
          >
            Anterior
          </button>
          <button
            onClick={nextQuestion}
            disabled={qIdx === questions.length - 1}
            className="px-6 py-2 bg-rose-500 text-white font-semibold rounded-lg hover:bg-rose-600 disabled:opacity-50 transition"
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
