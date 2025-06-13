// src/pages/Random.jsx
import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

function shuffleArray(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Random() {
  const navigate = useNavigate()

  const allChallenges = useMemo(() => ({
    q1:  "¿Abrirías un onlyfans? ¿Por qué?",
    q2:  "¿Qué es lo más raro que has hecho estando borracho?",
    q3:  "¿Si tu pareja tuviera un gemelo/a, te gustaría esa persona también?",
    q4:  "¿Qué es algo sobre vos que te gustaría que la gente lo sepa?",
    q5:  "¿Cuál es el mejor consejo que has recibido?",
    q6:  "¿Vivirías en una casa o en un departamento? ¿Por qué?",
    q7:  "¿Qué fue lo más lindo que has hecho por alguien?",
    q8:  "¿Qué necesitas más en tu vida?",
    q9:  "¿Qué fue lo peor que hiciste en la escuela/secundaria?",
    q10: "¿Cuál es el mayor problema en el que te has metido?",
    q11: "¿De qué logro estás más orgulloso?",
    q12: "¿Qué ilumina tu día a día al pensar en ello?",
    q13: "¿Viajar al pasado o al futuro? ¿Qué harías allí?",
    q14: "Si pudieras, ¿leerías el libro sobre tu vida? ¿Por qué?",
    q15: "¿Qué es lo que más te gusta de vos?",
    q16: "Para vos, ¿qué es la confianza? (No vale googlear, usa tus palabras).",
    q17: "¿Volverías con tu ex? (Expláyate según tu respuesta o toma otra pregunta si no tienes).",
    q18: "¿Te has quedado con ganas de decirle/preguntarle cosas a alguna persona? Opcional: ¿A quién y qué?",
    q19: "¿Cuál sería tu superpoder ideal? ¿Por qué?",
    q20: "¿Cuál sería la solución ideal a un mundo más justo según tu punto de vista?",
    q21: "¿Venderías a tu mascota preferida por una suma de dinero millonaria?",
    q22: "Sabiendo que te pagarían MUCHO dinero por el trabajo que te gusta, ¿qué trabajo elegirías? Responden todos",
    q23: "¿Estás de acuerdo con la frase: 'El tren pasa una sola vez'? ¿Por qué?",
    q24: "Considerando que una persona cambia positivamente. ¿Volverías a entablar relación con esa persona?",
    q25: "¿Qué es lo que más te cuesta perdonar?",
    q26: "¿Qué es lo que más te cuesta olvidar?",
    q27: "¿Le dirías a tu pareja las siguientes cosas: 'debes ir al gimnasio y/o hacer dieta', 'debes ir al psicólogo', 'debes estudiar', 'debes cambiar tu forma de vestir'?",
    q28: "¿Te sentirías cómodo/a si tu pareja es mejor que vos en varios aspectos como deportes, estudio, sociabilidad, trabajo, etc.?",
    q29: "¿Qué te irrita fácilmente?",
    q30: "¿Harías un trío? Explica tu respuesta.",
    q31: "¿Eres supersticioso/a? ¿Con qué cosas?",
    q32: "¿Qué buscarías en tu pareja ideal? Además, ¿te gustaría que salga o que prefiera quedarse en casa por las noches?",
    q33: "¿Te sientes manipulado/a por alguien cercano a vos? Ya sean padres sobreprotectores, novio/a, amigos, etc. Explícate si lo deseas",
    q34: "¿Qué opinas de la frase: 'Prefiero estar solo para no estar con muchas personas que estar con muchas personas para no estar solo'?",
    q35: "El perro es perro y donde le den de comer, come. ¿Estás de acuerdo con esta frase? ¿Por qué?",
    q36: "¿Qué pensarías y qué harías si un allegado tuyo tiene acusaciones graves? Explícate.",
    q37: "El gran dilema: ¿Invierno o verano? ¿Por qué?",
    q38: "¿Qué es lo que más te cuesta aceptar de vos mismo/a?",
    q39: "¿Qué es lo que más te cuesta aceptar de los demás?",
    q40: "¿Qué pensás que es lo mejor y peor de tener hijos?",
    q41: "Tres cosas que te llevarías a una isla desierta. ¿Por qué?",
    q42: "¿Cómo fue tu cuarentena? ¿Hubieras cambiado algo?",
    q43: "¿Cuál es la decepción más grande que tuviste en tu vida?",
    q44: "¿Ganarías la lotería a cambio de perder a tu mejor amigo/a?",
    q45: "¿Se puede estar enamorado de varias personas a la vez? Explícate.",
    q46: "¿Fuiste infiel alguna vez?",
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
    q62: "¿Cuál es tu mayor miedo?",
    q63: "¿Cuál es tu peor hábito?",
    q64: "¿En qué destino te gustaría (recibir o hacer) la propuesta de casamiento? (No vale Noruega en las auroras boreales, Francia o Disney. Elige otro.)",
    q65: "¿Crees en fantasmas/presencias y extraterrestres?",
    q66: "Mi amor imposible es...",
    q67: "¿Las personas cambian en base a experiencias vividas? Ya sean noviazgos, estudios, trabajos, deportes, etc.",
    q68: "¿Crees haber perdido personas importantes? Opcional: ¿quién/es?",
    q69: "¿Estarías con alguien que piensa totalmente opuesto a tu ideología política?",
    q70: "¿Estás a favor de: aborto, pena de muerte, eutanasia, legalización de drogas? ¿Por qué?",
    q71:  "Si pudieras intercambiar tu vida con la de tu mascota por un día, ¿qué harías primero?",
    q72:  "Si te ofrecieran un millón de dólares a cambio de nunca volver a usar Internet, ¿aceptarías?",
    q73:  "Si pudieras borrar un recuerdo de tu mente, ¿qué olvidarías?",
    q74:  "Si descubrieras que todas tus decisiones estaban predeterminadas, ¿seguirías el mismo camino?",
    q75:  "Si cada mentira que dijeras te hiciera crecer un centímetro, ¿seguirías mintiendo?",
    q76:  "Si pudieras hablar con los muertos por una hora, ¿a quién le preguntarías algo?",
    q77:  "Si tuvieras que vivir un año entero sin hablar, ¿cómo te comunicarías?",
    q78:  "Si pudieras aprender instantáneamente cualquier habilidad, ¿qué elegirías?",
    q79:  "Si pudieras renunciar a un sentido (vista, oído, gusto, tacto u olfato), ¿cuál sacrificarías?",
    q80:  "Si pudieras eliminar una emoción de tu vida, ¿cuál borrarías?",
    q81:  "Si un botón te diera felicidad eterna pero perdieras tu creatividad, ¿lo presionarías?",
    q82:  "Si tuvieras un clon que pudiera hacer tus tareas, ¿qué le pedirías que hiciera?",
    q83:  "Te encontrás con tu 'yo' de 10 años, ¿qué consejos te darías?",
    q84:  "Si tuvieras que comer un solo plato por el resto de tu vida, ¿cuál sería?",
    q85:  "Si solo te quedaran 24 horas de vida, ¿qué harías primero?",
    q86:  "Si tuvieron que elegir entre salvar a tu mejor amigo o a tu pareja, ¿qué harías?",
    q87:  "Si un día despertaras con la habilidad de entender a los animales, ¿qué les preguntarías?",
    q88:  "Si quemaras todos tus recuerdos de la infancia, ¿serías una persona diferente?",
    q89:  "Si te ofrecieran cambiar tu voz por la de un famoso cantante, ¿lo harías?",
    q90: "Si una IA tomara todas tus decisiones financieras, ¿confiarías plenamente en ella?",
    q91: "Si un día la humanidad decidiera no tener hijos más, ¿apoyarías esa decisión?",
    q92: "Si te dieran la opción de vivir bajo el agua, ¿lo probarías?",
    q93: "Si una entidad te ofreciera la cura a todas las enfermedades a costa de un gran secreto, ¿aceptarías?",
    q94: "Si perdieras temporalmente tus emociones, ¿qué harías?",
    q95: "Si un científico te ofreciera teletransportarte pero con 1 % de riesgo de error, ¿lo intentarías?",
    q96: "Si tu vida fuera una película, ¿qué género sería?",
    q97: "Si recibieras una carta de tu “yo” futuro, ¿qué le pedirías que te contara?",
    q98: "Si pudieras enviar un mensaje a toda la humanidad, ¿qué dirías?",
    q99: "Si conquistaras el mundo mañana, ¿qué primera ley promulgarías?",
    q100: "Si la tecnología te permitiera transferir tu mente a un cuerpo más joven, ¿lo harías?",
    q101: "Si tuvieras que elegir entre el amor o la fama, ¿qué preferirías?",
    q102: "Si un extraterrestre te ofreciera llevarte a su galaxia, ¿aceptarías?",
    q103: "Si un científico te ofreciera vivir en una simulación perfecta, ¿entrarías?",
    q104: "Si pudieras convertirte en un objeto inanimado por un día, ¿qué objeto elegirías?",
    q105: "Si pudieras fusionarte con otra persona para compartir habilidades, ¿con quién lo harías?",
    q106: "Si pudieras escoger tu propio final, ¿cómo querrías que fuera?",
    q107: "Si te ofrecieran un viaje sin retorno a Marte, pero con vida asegurada, ¿irías?",
    q108: "Si tus sueños se hicieran realidad al despertar, ¿qué soñarías?",
    q109: "Si pudieras parar el tiempo durante una hora diaria, ¿qué harías con ese tiempo?",
    q110: "Si una IA pudiera amar, sentir y encima tiene la forma muy exacta a un humano, ¿estarías con ese 'robot'?",
    q111: "Si pudieras replicar cualquier objeto con tu mente, ¿qué crearías primero?",
    q112: "Si una voz te dijera la verdad absoluta sobre alguien, ¿la escucharías?",
    q113: "Si pudieras entregar un mensaje a las futuras generaciones, ¿cuál sería?",
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
  const [deck, setDeck] = useState([])
  const [drawIdx, setDrawIdx] = useState(0)

  const handleCountNext = () => {
    if (count >= 1 && count <= 50) {
      setNames(Array(count).fill(''))
      setStep('names')
    }
  }

  const handleNameChange = (i, v) => {
    const a = [...names]; a[i] = v; setNames(a)
  }

  const handleNamesNext = () => {
    if (names.every(n => n.trim())) {
      setPlayers(names)
      setDeck(shuffleArray(challenges))
      setDrawIdx(0)
      setStep('play')
    }
  }

  const nextQuestion = () => {
    if (drawIdx < deck.length - 1) {
      setDrawIdx(di => di + 1)
      setPlayerIdx(pi => (pi + 1) % players.length)
    }
  }

  const prevQuestion = () => {
    if (drawIdx > 0) {
      setDrawIdx(di => di - 1)
      setPlayerIdx(pi => (pi - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 'count' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-4">
            Cantidad de jugadores
          </h2>
          <input
            type="number" min={1} max={50}
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
          <h2 className="text-xl font-bold text-center mb-4">
            Nombres de jugadores
          </h2>
          <div className="space-y-3">
            {names.map((_, i) => (
              <input
                key={i}
                type="text"
                value={names[i]}
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
            challengeText={deck[drawIdx].text}
          />

          <div className="flex space-x-4">
            <button
              onClick={prevQuestion}
              disabled={drawIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={nextQuestion}
              disabled={drawIdx === deck.length - 1}
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
