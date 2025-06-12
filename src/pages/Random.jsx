
import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Random() {
  const allChallenges = useMemo(() => ({
    q1: "¿Abririas un onlyfans? ¿Por qué?",
    q2: "¿Qué es lo más raro que has hecho estando borracho?",
    q3: "¿Si tu pareja tuviera un gemelo/a, te gustaría esa persona también?",
    q4: "¿Qué es algo sobre vos que te gustaría que la gente lo sepa?",
    q5: "¿Cuál es el mejor consejo que has recibido?",
    q6: "¿Vivirías en una casa o en un departamento? ¿Por qué?",
    q7: "¿Qué fue lo más lindo que has hecho por alguien?",
    q8: "¿Qué necesitas más en tu vida?",
    q9: "¿Qué fue lo peor que hiciste en la escuela/secundaria?",
    q10: "¿Cuál es el mayor problema en el que te has metido?",
    q11: "¿De qué logro estás mas orgulloso?",
    q12: "¿Qué ilumina tu día a día al pensar en ello?",
    q13: "¿Viajar al pasado o al futuro? ¿Qué harías allí?",
    q14: "Si pudieras, ¿leerías el libro sobre tu vida? ¿Por qué?",
    q15: "¿Qué es lo que más te gusta de vos?",
    q16: "Para vos, ¿qué es la confianza? (No vale googlear, usa tus palabras).",
    q17: "¿Volverías con tu ex? (Expláyate segun tu respuesta o toma otra pregunta si no tienes).", 
    q18: "¿Te has quedado con ganas de decirle/preguntarle cosas a alguna persona? Opcional: ¿A quién y qué?",
    q19: "¿Cuál seria tu superpoder ideal? ¿Por qué?",
    q20: "¿Cuál sería la solución ideal a un mundo más justo según tu punto de vista?",
    q21: "¿Venderías a tu mascota preferida por una suma de dinero millonaria?",
    q22: "Sabiendo que te pagarían MUCHO dinero por el trabajo que te gusta, ¿Qué trabajo elegirías?. Responden todos",
    q23: "¿Estás de acuerdo con la frase: 'El tren pasa una sola vez' ? ¿Por qué?",
    q24: "Considerando que una persona cambia positivamente. ¿Volverías a entablar relación con esa persona?",
    q25: "¿Qué es lo que más te cuesta perdonar?",
    q26: "¿Qué es lo que más te cuesta olvidar?",
    q27: "¿Le dirías a tu pareja las siguientes cosas: 'debes ir al gimnasio y/o hacer dieta', 'debes ir al psicológo', 'debes estudiar', 'debes cambiar tu forma de vestir' ?",
    q28: "¿Te sentirías cómodo/a si tu pareja es mejor que vos en varios aspectos como deportes, estudio, sociabilidad, trabajo, etc?",
    q29: "¿Qué te irrita facilmente?",
    q30: "¿Harías un trío? Explica tu respuesta.",
    q31: "¿Eres supersticioso/a? ¿Con qué cosas?",
    q32: "¿Qué buscarías en tu pareja ideal?. Además, ¿te gustaría que salga o que prefiera quedarse en casa por las noches?",
    q33: "¿Te sientes manipulado/a por alguien cercano a vos? Ya sean padres sobreprotectores, novio/a, amigos, etc. Explicate si lo deseas",
    q34: "¿Qué opinas de la siguiente frase: 'Prefiero estar solo para no estar con muchas personas que estar con muchas personas para no estar solo'?",
    q35: "El perro es perro y donde le den de comer, come. ¿Estás de acuerdo con esta frase? ¿Por qué?",
    q36: "¿Qué pensarías y qué harías si un allegado tuyo tiene acusaciones graves? Explícate.",
    q37: "El gran dilema: ¿Invierno o verano? ¿Por qué?",
    q38: "¿Qué es lo que más te cuesta aceptar de vos mismo/a?",
    q39: "¿Qué es lo que más te cuesta aceptar de los demás?",
    q40: "¿Qué pensás que es lo mejor y peor de tener hijos?",
    q41: "Tres cosas que te llevarías a una isla desierta. ¿Por qué?",
    q42: "¿Cómo fue tu cuarentena? ¿Hubieras cambiado algo?",
    q43: "¿Cuál es la decepción mas grande que tuviste en tu vida?",
    q44: "¿Ganarías la lotería a cambio de perder a tu mejor amigo/a?",
    q45: "¿Se puede estar enamorado de varias personas a la vez?. Explícate.",
    q46: "¿Fuiste infiel a alguna vez?",
    q47: "¿Qué prefieres controlar: lectura de mente, el tiempo o ser invisible?",
    q48: "¿Amor o dinero? ¿Por qué?",
    q49: "¿Te operarías alguna parte del cuerpo? ¿Cuál?",
    q50: "¿Estás a favor de los tatuajes, piercings y modificaciones corporales? ¿Por qué?",
    q51: "Si a tu pareja le cae muy mal tu mejor amigo/a, ¿qué harías?",
    q52: "¿Qué pensarías si a tu grupo de amigos les cae mal tu pareja? ¿Y qué harías?",
    q53: "¿Qué opinas de la frase: 'El fin justifica los medios'?",
    q54: "¿Poder hablar con los animales o todos los idiomas del mundo? ¿Por qué?",
    q55: "¿Qué cosas pierdes al entablar una relación?",
    q56: "¿Qué cosas ganas al entablar una relación?",
    q57: "¿Cómo te describirías ante un desconocido?",
    q58: "¿Alguna vez te chocaste contra un vidrio? ¿Cómo fue?",
    q59: "¿Qué tipo de canciones te gustan 'en secreto'?",
    q60: "¿Qué es lo que más te cuesta decir?",
    q61: "¿Te gusta el humor negro?",
    q62: "¿Cúal es tu mayor miedo?",
    q63: "¿Cúal es tu peor hábito?",
    q64: "¿En qué destino te gustaría (recibir o hacer) la propuesta de casamiento? (No vale Noruega en las auroras boreales, Francia o Disney. Elige otro.)",
    q65: "¿Crees en fantasmas/presencias y extraterrestres?",
    q66: "Mi amor imposible es...",
    q67: "¿Las personas cambian en base a experiencias vividas? Ya sean noviazgos, estudios, trabajos, deportes, etc",
    q68: "¿Crees haber perdido personas importantes? Opcional: ¿quién/es?",
    q69: "¿Estarías con alguien que piensa totalmente opuesto a tu ideología política?",
    q70: "¿Estas a favor de: aborto, pena de muerte, eutanasia, legalización de drogas? ¿Por qué?",
  }), [])
  const challenges = useMemo(
    () => Object.entries(allChallenges).map(([key, text]) => ({ key, text })),
    [allChallenges]
  )

  const [step, setStep] = useState('count')
  const [count, setCount] = useState(1)
  const [names, setNames] = useState([])
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)

  const navigate = useNavigate()

  const handleCountNext = () => {
    if (count >= 1 && count <= 50) {
      setNames(Array(count).fill(''))
      setStep('names')
    }
  }

  const handleNameChange = (i, value) => {
    const arr = [...names]
    arr[i] = value
    setNames(arr)
  }

  const handleNamesNext = () => {
    if (names.every(n => n.trim())) {
      setPlayers(names)
      setStep('play')
    }
  }

  const nextQuestion = () => {
    if (qIdx < challenges.length - 1) {
      setQIdx(q => q + 1)
      setPlayerIdx(p => (p + 1) % players.length)
    }
  }

  const prevQuestion = () => {
    if (qIdx > 0) {
      setQIdx(q => q - 1)
      setPlayerIdx(p => (p - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 'count' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-4">Cantidad de jugadores</h2>
          <input
            type="number"
            min="1" max="50"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            onKeyDown={e => ['e','E','+','-'].includes(e.key) && e.preventDefault()}
          />
          <button
            onClick={handleCountNext}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Siguiente
          </button>
        </div>
      )}

      {step === 'names' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Nombres de jugadores</h2>
          <div className="space-y-3">
            {names.map((n, i) => (
              <input
                key={i}
                type="text"
                value={n}
                onChange={e => handleNameChange(i, e.target.value)}
                placeholder={`Jugador ${i + 1}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            ))}
          </div>
          <button
            onClick={handleNamesNext}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Comenzar Juego
          </button>
        </div>
      )}

      {step === 'play' && (
  <div className="flex flex-col items-center space-y-6 w-full max-w-md">
    <div className="text-lg font-semibold text-green-600">
      Jugador: {players[playerIdx]}
    </div>

    <PreguntaCard
      contentType="Random"
      challengeText={challenges[qIdx].text}
    />

    <div className="flex space-x-4">
      <button
        onClick={prevQuestion}
        disabled={qIdx === 0}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        Anterior
      </button>
      <button
        onClick={nextQuestion}
        disabled={qIdx === challenges.length - 1}
        className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
      >
        Siguiente
      </button>
    </div>

    <button
      onClick={() => navigate('/juegos')}
      className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
    >
      Menú Principal
    </button>
  </div>
)}
    </div>
  )
}
