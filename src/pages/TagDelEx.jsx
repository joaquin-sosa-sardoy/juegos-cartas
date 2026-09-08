import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

/*
 * TAG DEL EX
 * Funciona como Tincho o MasProbable: no pide jugadores, se lee la carta y
 * se responde ahí nomás, frente al grupo.
 * El adorno del alce está en AlceDeEx.jsx.
 */
export default function TagDelEx() {
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
    "¿Qué fue lo que más te atrajo de tu ex al principio?",
    "¿Por qué terminaron, en una palabra?",
    "¿Alguna vez le fuiste infiel a tu ex, o te fue infiel a vos?",
    "¿Qué extrañás de esa relación, aunque sea un poco?",
    "¿Hay algo que harías diferente si volvieras a esa relación?",
    "¿Qué es lo peor que te dijeron en una pelea con tu ex?",
    "¿Volverías con tu ex si te lo pidiera hoy?",
    "¿Hablás mal de tu ex con tus amigos?",
    "¿Qué pensaba tu familia de tu ex?",
    "¿Sos feliz de que haya terminado?",
    "¿Alguna vez stalkeaste las redes de tu ex después de terminar?",
    "¿Comparás a la persona que te gusta ahora con tu ex?",
    "¿Cuál fue la razón real de la ruptura, no la que contás siempre?",
    "¿Qué fue lo mejor que te dejó esa relación?",
    "¿Todavía tenés cosas de tu ex guardadas?",
    "¿Creés que tu ex piensa en vos todavía?",
    "¿Cuál fue el mejor momento de esa relación?",
    "¿Qué es lo que nunca le perdonaste a tu ex?",
    "¿Alguna vez lloraste por esa persona después de terminar?",
    "Si lo tuvieras enfrente ahora mismo, ¿qué le dirías a tu ex?",
    "¿Qué es lo primero que se te viene a la cabeza cuando pensás en tu ex?",
    "¿Alguna vez lo/la bloqueaste y después lo/la desbloqueaste?",
    "¿Qué fue lo que más te dolió de la ruptura?",
    "¿Todavía guardás fotos de esa relación?",
    "¿Alguna vez inventaste una excusa para cruzarte con tu ex?",
    "¿Qué te gustaría que tu ex supiera y nunca le dijiste?",
    "¿Sentiste alivio o tristeza cuando terminaron?",
    "¿Alguna vez comparaste a tu pareja actual (u otra persona) con tu ex delante de otros?",
    "¿Qué fue lo más tóxico de esa relación?",
    "¿Le devolviste todo lo que te había regalado?",
    "¿Alguna vez le mentiste a tu ex sobre algo importante?",
    "¿Qué es lo que jamás repetirías con una próxima pareja, por culpa de tu ex?",
    "¿Sabés si tu ex habla de vos con sus amigos?",
    "¿Qué fue lo que más te costó superar de esa relación?",
    "¿Alguna vez volviste con tu ex después de haber cortado?",
    "¿Qué extrañás más: la persona o la relación?",
    "¿Alguna vez sentiste que tu ex te usó?",
    "¿Qué aprendiste de vos mismo/a en esa relación?",
    "¿Le agradecerías algo a tu ex si lo tuvieras enfrente?",
    "¿Qué canción te hace acordar a esa relación y evitás escuchar?"
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
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">

        <div className="text-sm font-semibold text-amber-700">
          Pregunta {qIdx + 1} de {questions.length}
        </div>

        <PreguntaCard
          contentType="TagDelEx"
          question={questions[qIdx]}
        />

        <div className="flex space-x-4">
          <button
            onClick={prevQuestion}
            disabled={qIdx === 0}
            className="px-4 py-2 bg-white border border-amber-200 rounded-lg hover:bg-amber-100 disabled:opacity-50 transition"
          >
            Anterior
          </button>
          <button
            onClick={nextQuestion}
            disabled={qIdx === questions.length - 1}
            className="px-6 py-2 bg-amber-800 text-white font-semibold rounded-lg hover:bg-amber-900 disabled:opacity-50 transition"
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
