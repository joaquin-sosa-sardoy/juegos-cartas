// src/pages/Previa.jsx
import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Previa() {
  const navigate = useNavigate()

  const allChallenges = useMemo(() => ({
    "Digan conmigo": "A partir de ahora y por 2 rondas decir: 'Ni en pedo' antes de levantar una carta del mazo. El que incumpla la regla toma 2 tragos.",
    "Siamo Fuori": "Hablá con acento italiano por 2 rondas, si te olvidás tenés que tomar 2 tragos.",
    "Hakaaaaaa": "Tenés que preparar con la ayuda de la persona que esté a tu derecha, un auténtico Haka con las poses y cantos. (Google en caso de no saber qué es). Si no lo hacen, deben tomar 5 tragos cada uno.",
    "Cállate, cállate que me desesperas":"Por 1 ronda no podés hablar, si lo hacés debés tomar 5 tragos",
    "Mano cambiada":"Por 1 ronda todos deben usar su mano inhábil para tomar.",
    "El Diego en 3,2,1...": "Por una ronda todos deben hablar de sí mismo en 3ra persona, el primero en confudirse toma 4 tragos y se termina el desafío.",
    "Ya tu sape": "Tenés que mandar un audio de 15 segundos a la última persona con la que hayas hablado por WhatsApp (y no este presente ahora) cantando Gasolina u otro tema que elijas. No se le puede decir nada por 30 minutos. Si no debés tomar 5 tragos.",
    "Meeeeame":"Cada participante abrirá su billetera y el que tenga el billete mas grande puede regalar 5 tragos a quienes quiera. (En caso de empate cada uno puede regalar 2 tragos a quien quiera)",
    "Agugugaga":"Tenés que comportarte como un bebé por una ronda. Si no tenés que tomar 4 tragos.",
    "Humorista":"Contá un chiste, los que se rian deben tomar 2 tragos. Si nadie se ríe los debés tomar vos",
    "Salvavidas":"Por una ronda te salvás de tomar",
    "Sin repetir y sin soplar":"Mencioná 5 capitales de America del Sur en 20 segundos, si repetís o te equivocás tenés que tomar 2 tragos.",
    "Lenguaje de señas":"Haz mímica de 5 objetos y los demás tienen que adivinar. Si nadie lo hace debés tomar 3 tragos, si adivinan todas podés darle 3 tragos a quien vos quieras.",
    "Agua por favor":"Tomá un vaso de agua. Recuperate un poco",
    "Me gusta pero no tanto":"Tenés que poner 'me gusta' a las primeras 5 fotos que te aparezcan en instagram o tomar medio vaso.",
    "Fue difícil juntar al equipo para la previa":"Tenés que hablar como un jugador de fútbol en una entrevista por una ronda. Si te equivocás, tomá 3 tragos",
    "Le quedan divinas":"Pintale 2 uñas de la mano la persona a tu derecha. Si se niega debe tomar medio vaso.",
    "Shhhhh!!":"Todos deben hablar en voz baja como en una biblioteca por 5 minutos. Si alguno se olvida o no lo hace toma 2 tragos",
    "Que valga el sacrificio":"Si te das un pico con la persona que está a tu derecha, todos deberán tomar medio vaso, menos ustedes dos. Si no lo hacen lo toman ustedes",
    "Debo cumplir con el beber":"Debés comenzar diciendo 'Voy al bar y necesito pedir un mojito' (o cualquier otra bebida). Después de eso, el jugador de la derecha repite lo del jugador anterior y agrega otra bebida, sigue la ronda hasta que alguna se equivoque y tome 3 tragos.",
    "Tu galery":"Debés subir la 8va foto de tu galería a Instagram y etiquetar a la persona que decida el grupo. Si no lo haces debés tomar medio vaso",
    "Baño público":"El último participante que fue al baño debe tomar 3 tragos",
    "¿Preparados para filmar?":"Tenés que dar un beso con lengua imaginario al aire por 15 segundos. Si no lo hacés debes hacer fondo blanco.",
    "Para toda la vida":"Por turnos cada uno debe mostrar una marca de nacimiento. Si no tenés o no mostrás tomás 3 tragos.",
    "No tengo nada que ocultar":"Debés mostrar tus últimas fotos del celular o hacer fondo blanco.",
    "Verdaderamente":"Debés hacerle una pregunta al de la izquierda y debe responder con la verdad, después el de tu izquierda debe hacer lo mismo  y así con todos hasta terminar la ronda. El que responda con una mentira toma 2 tragos",
    "¿Cómo me llamo?":"El juego consiste en cambiar de nombres con quien tengas a la derecha durante una ronda, por eso, vos te vas a llamar como se llame el de la derecha y asi sucesivamente. Toman 2 tragos por cada error.",
    "Soy de madera":"Debés buscar la canción 'Gangnam Style' y bailarla por 30 segundos. Si no lo hacés debés tomar 3 tragos.",
    "Qúe baúl tan grande":"Arrancá diciendo 'Abro el baúl' luego se agrega una frase y se termina con 'Cierro el baúl' y sigue la persona de tu derecha. Ej: 'Abro el baúl, pongo una remera, cierra el baúl'. El que sigue: 'Abro el baúl, pongo una remera, saco un pescado, cierro el baúl'. Así hasta que alguien se equivoque y deba tomar 4 tragos.",
    "No vale rascarse las partes":"Contanos a todos qué haces en tu trabajo, sin hablar, sólo mímicas. El participante que adivine regala 1 trago, si no aciertan todos deben beberlo.",
    "Odio esos grupos":"Tomá un trago por cada grupo de WhatsApp que tengas en tu celular.",
    "7x1 = 6":"Tenés que decir la tabla del 7 en 30 segundos, si no tenés que tomar 3 tragos.",
    "Pichilo":"Dejá que alguien te dibuje la uniceja (con lo que sea). Si no tomás medio vaso.",
    "Tatto Master":"Todos toman un trago por cada tatuaje que tengan.",
    "Camisaki":"Los participantes que lleven camisa se suben los cuellos y luego toman 2 tragos",
    "El Cristo bebedor":"Tenés que mantener los brazos extendidos sosteniendo bebidas en cada mano por 2 minutos. Si no aguantás tomás 2 tragos de cada vaso.",
    "Es obvio que mi destino es el éxito":"Por 1 ronda sos inmune, no tenés que tomar ni hacer nada si te toca.",
    "Para que aprendas":"Buscá una birome o marcador, por cada mala palabra que diga un participante se la deben escribir en el cuerpo. Válido por 2 rondas.",
    "El alcohol nos pone sensibles":"Envía 'Te extraño' por mensaje (sin escribir nada más) a quien elija la persona que está a tu derecha o tomá 5 tragos.",
    "Bostezaaaahhhr":"Debés bostezar para forzar a que otro jugador lo haga. El primero que lo hace toma 3 tragos.",
    "Sugar daddy":"Todos deben decir la edad de la persona más grande con lo que se hayan acostado/besado. El que estuvo con la persona mas vieja reparte 3 tragos.",
    "Como si aplastaras a una indefensa hormiga":"Elegí el momento que quieras del juego para poner en el borde de la mesa tu dedo pulgar derecho (puede ser mas adelante, cuando prefieras). Al hacerlo los demás jugadores deben hacer lo mismo con sus respectivos pulgares. El ultimo en hacerlo toma 3 tragos.",
    "Amistad en redes":"El primero que publique una historia y etiquete a alguno de los presentes regala 5 tragos a quien quiera.",
    "Novios por 24 horas":"Debés subir una foto a Instagram con corazones junto a un participante que elija la mayoría. Si no ambos toman 5 tragos (pueden ser minutos decididos por la mayoría).",
    "No te veo pero te siento":"El último en sacarse sus calzados toma 3 tragos",
    "Te invito a cada a ver Netflix":"Actúa la escena de una película, el primero que adivine de cual es puede repartir 3 tragos a quienes quiera. Si nadie adivina los toma el que actuó.",
    "Canta que la vida es una fiesta":"Por 1 ronda cada vez que hables debés hacerlo cantando. Tomá 2 tragos cada vez que te olvides.",
    "Escondete":"Tenés que estar por 1 ronda debajo de la mesa o tomar un vaso de lo que la mayoría elija",
    "M-M-M-M-M-M-":"Tenés que decir el abecedario completo sin abrir la boca",
    "Momento Yoga":"Tocate la frente con el pie y que uno de los presentes lo haga también, si uno no lo hace deben tomar 3 tragos cada uno.",
    "Un poquito de quilombo sin romper nada":"Tenés que hacer equilibrio con tu bebida en la cabeza por 10 segundos. Si no lo lográs, tomás 6 tragos de la bebida del que tengas a tu derecha.",
    "No es lo que parece":"Imitá a otro jugador y el que adivine quién es reparte 4 tragos a quien quiera.",
    "Mi juego, mis reglas":"Podés cambiar los vasos de los que quieras y tendrán que adaptarse.",
    "Don Ramón":"Tenés que usar tu dedo como bigote por 1 ronda, si lo sacás debés tomar 3 tragos.",
    "Quedé duro duro":"Por una ronda no podés moverte del cuello para abajo. Si no tomás 3 tragos.",
    "Toma mi mano":"Por 1 ronda tenés que jugar agarrado de la mano con la persona que está a tu derecha. Si se sueltan ambos toman 4 tragos.",
    "Parapaaaan para paaaaan":"Tenés que saltar la soga como un boxeador mientras todos tararean la canción de Rocky durante 20 segundos. Si no lo hacés debés tomar 4 tragos.",
    "Tin-to-To-mo":"Tenés que decir una palabra, ej: 'Auto, el jugador de la derecha debe decir otra que comience con la última sílaba, por ej:'Toro'(Au-to, To-ro). Asi sucesivamente. El que repita o se equivoque toma 3 tragos.",
    "Si ya saben como me pongo, pá qué me invitan":"Debés girar 10 veces sobre vos mismo y contar hasta 50 antes de terminar de dar las vueltas, si no hacé fondo blanco.",
    "Memoria llena":"Debés comenzar diciendo 'Habia una vez...' y agregar 2 palabras máximo. Por turnos desde tu izquierda, repetir lo que se dijo anteriormente y añadir una parte. El que se equivoca toma 3 tragos.",
    "Con más aguante":"Desafía a qien vos quieras. Ambos se pondrán en posición de sentadilla y el primero que se rinda debe tomar 4 tragos.",
    "Éramos tan pobres":"El que tenga una moneda/billete de menor valor puede regalar 2 tragos a la persona que quiera. En caso de empate, ambos regalan 2 tragos.",
    "Fuerza alcohólica":"Todos deberán llenar sus vasos y levantarlos sin apoyar el codo ni el brazo. El que se canse primero deberá tomar la mitad del contenido.",
    "Miralo miralo":"Revisá tus historias de instragram y tomá un trago por cada seguidor que haya subido algo relacionado con bebidas alcoholicas (ver las 15 primeras).",
    "Enamorados":"La persona que lleve más tiempo en una relación se toma 3 tragos",
    "Foto carnet":"Tenés que sacarle una foto a tu cara del DNI y ponerla como foto de perfil de WhatsApp por el resto del juego. Si no tomá todo el contenido del vaso.",
    "Labios carmesí":"Pintate los labios de rojo. Si te negás tenés que tomar todo lo que tengas en el vaso.",
    "Miauuu miauuu":"Debés maullar cada vez que levanten/pasen una carta hasta que sea tu turno de nuevo. Tomás 3 tragos si te olvidás.",
    "Tirate un qué, tirate un paso":"Tirate unos pasos de Fortnite o challenge de Tiktok por 20 segundos (Si no conocés buscá) y repartí 3 tragos a quien quieras.",
    "Familia numerosa":"Cada jugador toma 1 trago por cada hermano o hermana que tenga.",
    "Playa":"El último participante que haya ido a la playa toma 5 tragos. Si viven en un lugar con playa, todos toman 2 tragos.",
    "Un brindis":"Elegí a un jugador por el cual todos harán un brindis en su honor. El jugador elegido toma la mitad de su vaso.",
    "Cierra los ojos y recuerda que...":"Tenés que jugar con los ojos cerrados para las próximas 3 cartas. Si incumplís, tomás 5 tragos.",
    "Poker face":"Todos deben cantarte el feliz cumpleaños y pedí 3 deseos en voz alta.",
    "Qué fisura":"Sacate una selfie con el inodoro y subila a tu instagram. Si no hacés fondo blanco.",
    "Calesita oscura":"Tenés que dar 5 vueltas con los ojos cerrados, sin abrirlos señalá donde están sentados. Si acertás elegís quien toma 5 tragos, si no los tomás vos.",
    "Catador profesional":"Con los ojos cerrados probá una bebida que alguien te dé. Si no adivinás qué es, hacés fondo blanco.",
    "Circo soleil":"Equilibrá una cuchara en tu dedo hasta que sea tu turno nuevamente, si se cae tomás 4 tragos.",
    "No repetir":"A la cuenta de 3 todos deben decir el nombre de alguno de los jugadores. Los que digan el mismo deben tomar 3 tragos.",
    "Buscador de WhatsApp":"El grupo debe elegir una palabra y debés buscarla en tus mensajes de WhatsApp y si está, pueden leer contexto por 10 segundos. Si no la encontrás tomás 3 tragos.",
    "Hacete el famoso":"Debés tomar tantos tragos como conversaciones de WhatsApp que tengas sin responder en tu celular.",
    "Maria/Mario, Juana/Juan, Ana/...":"Por 1 ronda tienen que llamar a las chicas por su nombre masculino y al revés para chicos. Cada vez que se equivoquen deben tomar 2 tragos.",
    "Meo callejero":"Todos los que hayan orinado entre 2 autos, toman 2 tragos.",
    "Compartí tu trago":"Por 1 ronda, a todos los que le toque tomar deben hacerlo del vaso de la persona de la derecha.",
    "Dictador/a":"Pensá una consigna, la que vos quieras. Todos tienen que cumplirla menos vos.",
    "I love you":"Tenés que responder la primera historia que aparezca en tu Instagram con un corazon. Si no tomá medio vaso.",
    "Máquina del tiempo":"Por 1 ronda cada vez que hables tiene que ser en futuro. Por cada error, tomá 3 tragos",
    "Cacho de dia, Rita de noche":"Tomá 3 tragos en posición de perrito.",
    "Papita pal Loro":"Por 1 ronda te convertís en loro, tenés que repetir todo lo que diga la persona a tu izquierda.",
    "Ayudá a tomar":"Tenés que tomar 3 tragos del vaso de la persona que lo tenga más lleno.",
    "Gracias por venir, los quiero":"Sacate una foto con cada uno de los presentes individualmente, como si fuese tu cumpleaños. Si no, 5 tragos.",
    "Ano no no...":"Tenés que mencionar 3 partes del cuerpo que tengan menos de 5 letras, si no tomá 3 tragos.",
    "AnA":"Cada jugador deberá tomar 1 trago por cada letra 'A' que tenga en su nombre.",
    "Tour de vasos":"Debés tomar 1 trago de cada vaso de la mesa.",
    "Hospital":"Si durante el último año tuviste que ir al hospital, debés tomar 2 tragos.",
    "No suma ni resta sino que me da igual":"Debés contar de 3 en 3 hasta 66 en 30 segundos. Si te equivocás o no llegás debés tomar 3 tragos.",
    "Ex-pedientes":"Tomá 3 tragos el participante que tenga más exs.",
    "Te mando una selfie":"Sacate una selfie ahora y mandasela a la última persona con la que hablaste por WhatsApp. Si no lo hacés tomás 5 tragos.",
  }), [])

  const challenges = useMemo(
    () =>
      Object.entries(allChallenges).map(([title, text]) => ({
        title,
        text,
      })),
    [allChallenges]
  )

  const [step, setStep] = useState('count')
  const [count, setCount] = useState(1)
  const [names, setNames]     = useState([])
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)

  const handleCountNext = () => {
    if (count >= 1 && count <= 50) {
      setNames(Array(count).fill(''))
      setStep('names')
    }
  }

  const handleNamesNext = () => {
    if (names.every(n => n.trim() !== '')) {
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
          <h2 className="text-xl font-bold text-center mb-4">
            Cantidad de jugadores
          </h2>
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            onKeyDown={e =>
              ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
            }
          />
          <button
            onClick={handleCountNext}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
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
            {names.map((n, i) => (
              <input
                key={i}
                type="text"
                value={names[i]}
                onChange={e => {
                  const arr = [...names]
                  arr[i] = e.target.value
                  setNames(arr)
                }}
                placeholder={`Jugador ${i + 1}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            ))}
          </div>
          <button
            onClick={handleNamesNext}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Comenzar
          </button>
        </div>
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          <div className="text-lg font-semibold text-teal-600">
            Jugador: {players[playerIdx]}
          </div>

          <PreguntaCard
            contentType="Previa"
            title={challenges[qIdx].title}
            challengeText={challenges[qIdx].text}
          />

          <div className="flex space-x-4">
            <button
              onClick={prevQuestion}
              disabled={qIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
            >
              Anterior
            </button>
            <button
              onClick={nextQuestion}
              disabled={qIdx === challenges.length - 1}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
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
