// src/pages/Zarpado.jsx
import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Zarpado() {
  const allChallenges = useMemo(() => ({
    "¿Estuviste con alguien que solo conocías de internet?":"Pintate los labios y dejale 5 marcas de besos a quien quieras en diferentes lugares. Si no ambos toman 3 tragos y se sacan una prenda.",
    "¿Qué terminos usas para buscar videos porno en internet?":"Tenés que dejar que te dibujen un pene en la frente. Si no debés hacer fondo blacno.",
    "¿Alguna vez viste una pelicula porno completa?":"Hacé girar la botella en el centro de la mesa y dale un pico al jugador que toque (todos tienen que hacerla girar una vez). Si no, tomá medio vaso.",
    "¿Preferís dar o recibir?":"Cuando vos quieras, podés recuperar 2 prendas que te hayas sacado o elegí a alguien para que se saque 1.",
    "¿Alguna vez tuviste un encuentro sexual que haya durado menos de 5 minutos?":"Debés lamer el codo de la persona a tu derecha. Si lo hacés recuperás una prenda.",
    "¿Cuántas parejas tuviste?":"Desafía a uno de los presentes a elegir cara o cruz, tirá la moneda y quien salga deberá sacarse una prenda.",
    "¿Qué fue lo mas zarpado que te pidieron que hagas en pleno acto sexual y no te animaste?":"Hacele sexo oral a tu propio pie o pulgar por 20 segundos. Si no, tomá 6 tragos.",
    "¿Cuál fue tu peor experiencia sexual?":"Pintá de negro uno de tus dientes (una paleta). Si no sacate una prenda.",
    "¿Alguna vez te acostaste con alguien del trabajo?":"Imitá frente a todos como te masturbas. Si no hacés, fondo blanco.",
    "¿Cuál sería tu apodo en la industria del porno?":"Debés imitar el sonido de una garganta profunda. Si no tomá 3 tragos.",
    "¿Qué preferis? Los cuerpos completamente depilados o naturales":"Por turnos ir diciendo: 'Formas de nombrar al pene' o 'Formas de decir sexo' (elegir una opción). El que repita o se quede sin ideas toma 3 tragos.",
    "¿Cómo fue tu último sueño erótico?":"Tenés que mandarle un mensaje por WhatsApp diciendo:'Tuve un sueño húmedo con vos' a la persona con la que hablaste y no esté presente. No podés decir nada hasta que pasen 10 minutos. Si no tomá 4 tragos.",
    "¿Alguna vez dudaste de tu orientación sexual?":"Por turnos ir diciendo: 'Ay', el de la derecha deberá decir 'dale', el siguiente 'si', el otro 'más' y el siguiente 'fuerte'. Así sucesivamente por 3 rondas, cada vez mas rápido e intenso. El que se traba toma 4 tragos.",
    "¿Alguna vez usaste anticonceptivos de emergencia?":"Escondé una moneda en tu cuerpo y elegí a alguien para que la busque. Si no la encuentra en 30 segundos toma 3 tragos y si la encuentra tomás vos.",
    "¿Tuviste sexo con diferentes personas el mismo día?":"Buscá un cubito de hielo, luego con quien tengas en frente deberán sujetarlo entre sus panzas descubiertas hasta derretirlo. Si no ambos toman medio vaso.",
    "¿Qué preferís? El sexo por la mañana, por la tarde o por la noche":"Por turnos ir diciendo un cantante que los ponga muy caliente",
    "¿Alguna vez probaste 'por detrás'?":"Debés besar a la persona cuyo cumpleaños sea el más cercano. Si no tomá 5 tragos.",
    "¿Te hicieron o hiciste alguna vez sexo oral sin antes haber besado a la persona por primera vez?":"La persona a tu derecha tiene un minuto para inspeccionar lo que tenés en tu bolso o billetera. Si no te sacás una prenda.",
    "¿Qué edad tenía la persona más grande con la que tuviste relaciones?":"Toma 3 tragos el participante que tenga todas sus prendas puestas.",
    "¿Utilizás juguetes sexuales?":"Desafiá a alguien a que se saque prendas, por cada prenda que se saque tenés que tomar 3 tragos.",
    "¿Cuál es tu posición favorita?":"Si hace frío te sacás 1 prenda, si hace calor te sacás 2.",
    "¿Cuál es tu fantasía sexual más salvaje?":"Por una ronda, cada vez que tomen un trago lo tienen que hacer eroticamente (ej. sacando la lengua, con poses sensuales, etc.).",
    "¿Tuviste sexo telefónico o por chat alguna vez?":"Chupale la oreja a un jugador (decide el más grande del grupo). Si alguno se niega ambos toman 3 tragos.",
    "¿Te gustan los disfraces eróticos?":"Los que están solteros toman 1 trago, de novios toman 2 y casados toman 3.",
    "¿Qué es lo mas lindo de una mujer/hombre?":"Debés dejar que te dibujen una carita al rededor del ombligo.",
    "¿Te acostaste con una ex pareja mucho después de dejarlo?":"Andá al baño y volvé con tu ropa interior en la mano. Podrás volver a ponértela en tu próximo turno.",
    "¿Alguna vez mandaste nudes?":"La primera jugadora en sacarse el corpiño y ponerlo sobre la mesa puede mandar a sacarse 4 prendas (en total) a los jugadores que prefiera.",
    "¿Qué preferís? Tener sexo con alguien que no para de hablar o con alguien que no dice nada":"Tenés que desabrocharle la bragueta a alguien con una sola mano. Decide la mayoría a quien. Si tardás mas de 5 segundos ambos toman 3 tragos.",
    "¿Cuánto es lo mínimo que duraste en un encuentro sexual?":"Participan todos. El que pueda hacer 20 flexiones de brazos sin parar puede recuperar una prenda.",
    "¿Te depilás tu zona íntima?":"Gritá una prenda, el primera que se la saque puede repartir 10 tragos a quienes quiera.",
    "¿Tuviste relaciones con alguien de este grupo?":"Por turnos ir diciendo: frases que se puedan usar durante el sexo y en una comida familiar. El que repita o se quede sin ideas toma 5 tragos.",
    "¿Cuándo fue la última vez que tuviste sexo?":"Por 2 rondas ningún jugador se podrá sacar las prendas él mismo, lo tiene que hacer otro participante.",
    "¿Cuál es la posición más incómoda para tener sexo?":"Debés besar a todos los jugaodres donde cada uno te diga. Por cada beso que no des sacate una prenda o tomá 3 tragos.",
    "¿Alguna vez te acostaste con alguien que no deberías?":"Debés tener un cubito de hielo en la boca hasta derretirlo por completo. Si no te sacás una prenda.",
    "¿Qué pensás del sexo con elementos del masoquismo?":"Si alguien quiere recuperar una prenda deberá tomar 5 tragos.",
    "¿Cuál de tus exs fue mejor en la cama?":"Debés posar eróticamente para una foto que te sacará la persona que está a tu izquierda. Si no tomá medio vaso.",
    "¿Cómo haces un oral?":"Cada uno debe darte un beso en la panza. El que no lo hace se saca una prenda.",
    "¿Si fueras estrella porno, qué género filmarías?":"Debés buscar 3 veces en Google 'sex shop' distintos y registrarte en una sola tienda, luego todos eligen un artículo y lo añadís al carrito. No debes hacer mas nada. Si no tomá 5 tragos.",
    "¿Te acostaste alguna vez con alguien que tenía pareja?":"Debés hacer 5 flexiones de brazos teniendo a la persona que está a tu derecha acostada abajo tuyo. Si no tomá 3 tragos.",
    "¿Podrías definir el orgasmo en una sola palabra?":"La mujer que muestre su corpiño completamente puede repartir 10 tragos a los jugadores que quiera.",
    "¿Alguna vez te lastimaste teniendo sexo?":"El hombre que muestre completamente los calzconcillos reparte 10 tragos a quien quiera.",
    "¿Cómo se llamaría tu película porno?":"Describí, con lujo de detalle, cómo harías para que la persona a tu derecha llege al un orgasmo. Si no toma 5 tragos.",
    "¿Que preferís? Que la tenga chica y haga un sexo oral increíble o que la tenga grande y no haga sexo oral.":"Debés bailar Twerking por 15 segundos. (si no sabes lo que es Googleá). Si no, sacate una prenda.",
    "¿Alguna vez sufriste por un amor no correspondido?":"Por una ronda tenés que sentarte sobre la persona a tu derecha. Si lo hacen recuperan una prenda, si no ambos hacen fondo blanco.",
    "¿Alguna vez tuviste que hacerte un estudio de ETS por miedo a haber contraído algo?":"Dejá que alguien elija un video porno en tu celular y comentá si lo hiciste o no lo que estás viendo.",
    "Mencioná quién de los jugadores te parece mas salvaje en la cama. (No vale tu pareja)":"Todos los hombres deben mostrar sus calzoncillos y las chicas son el jurado. El calzón más feo debe tomar 4 tragos.",
    "¿Con quién de los jugadores no te acostarías?":"Debés pasar un trago de boca en boca a la persona a tu izquierda. Si no lo hacen ambos deben tomar 4 tragos y sacarse una prenda.",
    "¿Con qué 2 adjetivos te definirías en la cama?":"Por cada 2 prendas que te saques, el jugador que elijas deberá sacarse 1.",
    "¿Alguna vez usaste comida durante los juegos previos?":"Podés devolver 3 prendas a los jugadores que prefieras. Si aún nadie se sacó prendas tomá 3 tragos.",
    "¿Te excita el dolor?":"Actuá con alguien que elija el grupo tu posición sexual favorita por 30 segundos y así recuperan 1 prenda. Si no ambos se tienen que sacar 2 prendas.",
    "¿Cómo sería tu experiencia sexual perfecta?":"Por turnos ir diciendo: 'Llego al telo y me saco...' y agregarle una prenda. Cada jugador arrancando por la izquierda deberá repetir y agregarle una prenda. El que se equivoca toma 4 tragos.",
    "¿Qué creés que es ser bueno en la cama?":"Por una ronda podés mandar a otro jugador a hacer lo que te toque a vos.",
    "¿Cuál es el tamaño ideal de un pene?":"Desfile de culos. Los hombres se ponen a desfilar y las mujeres son el jurado. El que gane puede repartir 5 tragos.",
    "¿El trío cómo lo preferís? 2 mujeres y 1 hombre o 2 hombres y una mujer":"Debés ponerte en 4 patas, la persona que está a tu derecha que te use de caballito y dale una vuelta al rededor de la mesa. Si no tomá 5 tragos.",
    "¿Qué es lo que buscás de un buen amante en la cama?":"Por turnos ir diciendo: 'frutas o verduras que pueden ser sinónimos de pene' o 'formas de hacer bajar una erección' (elegir una opción). El que repita o se quede sin ideas toma 5 tragos.",
    "¿Cuál es la cosa más rara que te excita?":"Por turnos ir diciendo:'artículos de cocina que pueden usarse para el sexo' o 'lugares raros para tener sexo' (elegir una opción). El que repita o se quede sin ideas toma 5 tragos.",
    "¿Cuál es tu punto débil (erótico)?":"Tenés que relatar como si fuera un documental lo que sucede en un video porno elegido por la mayoría. Si no sacate 2 prendas.",
    "¿Con qué posición llegas al orgasmo con más frecuencia?":"Besá la pared de manera apasionada por 30 segundos. Si no, hacés fondo blanco y te sacás 1 prenda.",
    "¿Alguna vez lo hiciste en el agua?":"Por 2 rondas antes de levantar una carta cada participante debe decir: 'quiero terminar desnudo', si alguien se olvida se tiene que sacar 1 prenda.",
    "¿Qué preferís?, dormir o tener sexo.":"Elegí a alguien de mismo sexo y dale un pico. Si no, ambos deben tomar 3 tragos.",
    "¿Qué diferencia de edad tenías con la persona más joven con la que tuviste relaciones?":"Tenés que sacarte una selfie con todos los participantes jugando y subirla en una historia de Instragram con una frase que decida la mayoría. Si no, te sacás una prenda.",
    "¿Qué nombre le pondrías a tus partes íntimas? ¿Por qué?":"Tenés que sacarle las medias con los dientes a la persona que elija la mayoría.",
    "¿Con qué frecuencia te gusta tener sexo?":"Tenés que sacarte 2 prendas. El jugador de la derecha decide una y el de la izquierda decide la otra.",
    "¿Con qué famoso te gustaría tener sexo?":"Por una ronda cada vez que alguien levante una carta tiene que decir: 'como me garcharía a (nombre)'. El que se olvida toma 4 tragos.",
    "¿Qué páginas de pornografía mirás?":"La mayoria elije a un jugador que deberá tocar pecho con pecho con vos por 30 segundos. Si no, ambos toman 3 tragos.",
    "¿Alguna vez fingiste un orgasmo?":"Con el participante de la izquierda deben mirarse a los ojos apoyando entre sí la punta de la nariz por 30 segundos. Si no, ambos se sacan una prenda.",
    "¿Alguna vez recibiste fotos de alguien desnudo?":"Por una ronda, cada vez que le toque una carta a un jugador, deberá darle un beso al jugador de la derecha. Si no, toma 3 tragos.",
    "¿Qué te gusta hacer en el sexo?":"Los que hayan tragado semen alguna vez toman 3 tragos levantando la mano.",
    "¿Tragás o escupís?":"Cerrá los ojos. Cualquier participante te tiene que dar un pico y tenés que adivinar quién es. Si no, tomá 2 tragos.",
    "¿Cuál crees que es la diferencia entre 'tener sexo' y 'hacer el amor'?":"Dibujale en el pecho con un lápiz labial, a la persona a tu izquierda, un corazón. Si no ambos toman medio vaso.",
    "¿Qué crees que más estimula a una mujer?. Explícalo":"Practicá primeros auxilios con la persona que esté a tu izquierda (de forma erótica). Si no ambos hacen fondo blanco.",
    "¿Cúando perdiste la virginidad y con quíen?":"Elegí un objeto y que cada participante le dé una utilidad sexual. Toma 3 tragos quien se quede sin ideas.",
    "¿Estuviste con alguien que tenía un pene enorme? ¿Cómo estuvo?":"Adiviná de qué color es la ropa interior de cada jugador y tomá 1 trago por cada error. Los jugadorés deberán mostrar si adivinás.",
    "¿El tamaño importa?":"Los que fueron infieles alguna vez toman 2 tragos.",
    "¿Dónde más te gusta que te besen?":"Toma 3 tragos el participante que quiera recuperar 1 prenda.",
    "Si tuvieras que comparar tus habilidades en la cama con un fenómeno natural o meteorológico, ¿cuál sería?":"Todas las mujeres deben mostrar sus corpiños y los chicos son el jurado. El corpiño mas lindo reparte 4 tragos a quien quiera.",
    "¿Cuál fue tu peor experiencia sexual?":"Se tienen que sacar una prenda los jugadores que tengan el vaso por encima de la mitad.",
    "¿Hay algo que no harías en la cama?":"Podés devolver, a los participantes que vos quieras, 2 prendas o tomá medio vaso.",
    "¿Con quién fue tu mejor sexo en la vida?":"Gemí durante 15 segundos en el oído del jugador de tu izquierda. Si no toma 4 tragos.",
    "¿Alguna vez tuviste un encuentro sexual que haya durado más de 2 horas?":"Todos los jugadores deben intercambiar entre sí una prenda o accesorio. El que no cumple hace fondo blanco.",
    "¿Se puede seguir amando a una persona con la que el sexo no es bueno?":"Por turnos ir diciendo: 'frases que se pueden decir después del sexo' o 'posiciones sexuales' (elejir una opción). El que repita o se quede sin ideas toma 5 tragos.",
    "¿Alguna vez hiciste un trío?":"Preguntale al participante de la izquierda: '¿Puedo recuperar una prenda? Tengo frío'. Si te dice que sí recuperala, si no tomá 3 tragos para que se te pase el frío.",
    "¿Cómo fue tu peor cita?":"Podés recuperar 2 prendas pero no tuyas, sinó del jugador de tu derecha. Si todavía no se sacó ninguna se las tendrá que sacar.",
    "¿Alguna vez diste o recibiste un beso negro?":"Con los ojos tapados, tocale una parte del cuerpo a alguien y adiviná quién es. Tenés 3 oportunidades, si no adivinás ambos toman 3 tragos.",
    "¿Alguna vez fuiste o te fueron infiel?":"Adiviná de quién es cada prenda que se hayan sacado el resto de los jugadores. Por cada error 1 trago y si no hay prendas tuviste suerte.",
    "¿Llegás siempre al orgasmo con sexo oral?":"Por turnos ir diciendo: 'formas de nombrar la vagina' o 'excusas para no tener sexo' (elegir una sola opción). El que repita o se quede sin ideas toma 3 tragos.",
    "¿Qué opinás de la depilación genital?":"Sacate una prenda si alguna vez tuviste sexo frente a otras personas.",
    "Si tuvieras que ir a nadar desnudo con algún participante, ¿con quién sería?":"Agarrá un objeto pequeño y de boca en boca pasaselo al participante de la derecha y así hasta completar la ronda. Al que se le cae antes de terminar la ronda toma 4 tragos.",
    "¿Quién de los presentes creés que tiene el miembro más pequeño?":"Debés frotarte con la persona que tenés enfrente por 20 segundos y fingir que tienen un orgasmo. Si no ambos toman 5 tragos.",
    "¿Cúanto tiempo es lo ideal del sexo con la previa incluída?":"Por turnos todos los jugadores deben decir con quién de esta habitación preferirían acostarse. El que no responda que haga fondo blanco (no vale elegir a tu pareja).",
    "¿Dónde está el punto G?":"Debés decir qué posición del Kamasutra harías con cada uno de los presentes para recuperar 1 prenda.",
    "¿Con quienes de los presentes harías un trío?":"Dale un masaje capilar de 30 segundos al jugador de la derecha. Si no, tomá 4 tragos",
    "¿Te acostaste con alguien poco atractivo/a alguna vez?":"Recuperá todas las prendas que te sacaste haciendo un baile muy divertido de festejo.",
    "¿Tenés fotos o videos hot de alguien de esta habitación?":"Todos los que perdonarían una infidelidad toman 3 tragos.",
    "¿En el sexo, sos ruidoso/a o silencioso/a?":"Enviá un mensaje de Instagram a la persona que los demás elijan diciendo:'Estoy muy caliente'. Si no, sacate una prenda.",
    "¿Qué posición preferís? Misionero, 69 o perrito":"Reparten 3 tragos aquellas personas que tuvieron un orgasmo teniendo sexo anal",
    "Si tuvieras que desnudarte frente a una sola persona de los presentes ¿Con quién sería?":"Por turnos ir diciendo: 'métodos anticonceptivos'. El que repita o se quede sin ideas debe tomar 3 tragos.",
    "¿Tenés una lengua habilidosa para el sexo?":"Pasale un hielo de boca en boca al de tu derecha. Asi sucesivamente hasta completar la ronda. Si a alguno se le cae toma 4 tragos.",
    "¿Alguna vez te hicieron o hiciste la lluvia dorada?":"Por 2 rondas cada vez que alguno toque un vaso tiene que imitar un orgasmo. Si alguno se olvida debe tomar 3 tragos.",
    "¿Cómo conquistarías a un hombre o una mujer?":"El primero en poner un preservativo en la mesa manda a quitarse 1 prenda a dos jugadores. Si nadie lo hace todos toman 3 tragos." 
  
  }), [])

  const challenges = useMemo(
    () => Object.entries(allChallenges).map(([question, challengeText]) => ({ question, challengeText })),
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

  const handleNameChange = (i, v) => {
    const copy = [...names]
    copy[i] = v
    setNames(copy)
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
          <h2 className="text-xl font-bold text-center mb-4">
            Cantidad de jugadores
          </h2>
          <input
            type="number"
            min="1" max="50"
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-indigo-400
                       appearance-none"
            onKeyDown={e => ['e','E','+','-'].includes(e.key) && e.preventDefault()}
          />
          <button
            onClick={handleCountNext}
            className="w-full bg-green-500 text-white py-2 rounded-lg
                       hover:bg-green-600 transition"
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
                value={n}
                onChange={e => handleNameChange(i, e.target.value)}
                placeholder={`Jugador ${i + 1}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            ))}
          </div>
          <button
            onClick={handleNamesNext}
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg
                       hover:bg-blue-600 transition"
          >
            Comenzar Juego
          </button>
        </div>
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          <div className="text-lg font-semibold text-red-500">
            Jugador: {players[playerIdx]}
          </div>

          <PreguntaCard
            contentType="Zarpado"
            question={challenges[qIdx].question}
            challengeText={challenges[qIdx].challengeText}
          />

          <div className="flex space-x-3">
            <button
              onClick={prevQuestion}
              disabled={qIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300
                         disabled:opacity-50 disabled:cursor-default"
            >
              Anterior
            </button>
            <button
              onClick={nextQuestion}
              disabled={qIdx === challenges.length - 1}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300
                         disabled:opacity-50 disabled:cursor-default"
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
