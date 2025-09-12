import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function AmigosDeMierda() {
  const ALL_CARDS = useMemo(() => [
    { text: '¿Quién se pide lo más caro de la carta y se hace el boludo para dividir la cuenta entre todos?' },
    { text: 'Uno de nosotros se hace el boludo, pero está secretamente resentido porque ganó 1 punto en este jueguito como amigo de mierda.' },
    { text: 'Atropellamos a alguien. ¿Quién propone echarse a la fuga?' },
    { text: 'En todo grupo de amigos hay alguien que se viste para el ojete. En el nuestro es..' },
    { text: '¿Quién de nosotros es secretamente un supervillano?' },
    { text: '¿Quién de nosotros es o sería un robot?' },
    { text: '¿Quién de nosotros pide plata sabiendo que nunca la va a devolver?' },
    { text: 'Jamás tocaría la ropa interior de...' },
    { text: 'Nos eligen senadores a todos. ¿Quién hace más guita cobrando coimas?' },
    { text: '¿Quién se va a casar con alguien que todavía no nació?' },
    { text: '¿Quién mea en la pileta?' },
    { text: '¿Quién tiene más chances de ir preso por un crimen que no cometió?' },
    { text: 'Uno de nosotros hace 10 años tenía un futuro muy prometedor. ¿Quién?' },
    { text: 'Ganamos la lotería y dividimos el premio entre todos. ¿Quién es el primero en perder todo lo que ganó?' },
    { text: 'A partir de este año nos van a entregar un Nobel a la falta de aseo personal. ¿Quién es nomidado?' },
    { text: 'Viajamos todos a Las Vegas. ¿Quién vuelve casado?' },
    { text: 'Somos todos cómplices de un crimen y nos están interrogando. ¿Quién es el primero en quebrar y confesar?' },
    { text: 'A uno de nosotros le encuentran una colección de chicles masticados por sus ex. ¿A quién?' },
    { text: 'Si nos hiciéramos mafiosos, ¿quién sería el capo?' },
    { text: 'Uno de nosotros admira secretamente a Hitler. ¿Quién?' },
    { text: 'Somos los protagonistas de un thriller de suspenso. Al final, ¿quién es el asesino?' },
    { text: 'Un amigo en común necesita con urgencia dadores de sangre. ¿Quién dice que fué a donar pero en realidad no?' },
    { text: 'Llegó el apocalipsis. ¿Quién muere primero?' },
    { text: '¿Con quién te harías el dormido para no tener que escucharlo en un viaje muy largo?' },
    { text: 'Nos anotamos en un programa de talentos. ¿Quién se va en el primer capítulo?' },
    { text: '¡Escándalo! Reveladoras fotos de una orgía. ¿Quién de nosotros está?' },
    { text: '¿A quién no querrías jamás como jefe?' },
    { text: 'Uno de nosotros está envejeciendo peor que los demás, ¿quién?' },
    { text: 'En el futuro cercano, uno de nosotros va a morir víctima de un ajuste de cuentas, ¿quién?' },
    { text: 'Uno de nosotros tiene el fetiche de comer caca. ¿Quién?' },
    { text: 'Uno de nosotros debutó con menos de 13 años. ¿Quién?' },
    { text: 'Nos invitan a comer a la mesa de Mirtha. ¿Quién discute a los gritos?' },
    { text: '¿Quién quisieras que nunca adopte un hijo tuyo?' },
    { text: 'Todos tenemos nuestras cosas pero uno de nosotros es realmente inmadura para su edad. ¿Quién?' },
    { text: '¿Quién se considera mucho más inteligente de lo que en realidad es?' },
    { text: '¿Si todos nos dedicáramos a vivir del stand up, ¿quién se funde primero?' },
    { text: 'Vuelve la colimba. ¿Quién se pega un tiro en el pie para no hacerla?' },
    { text: 'Tenés que pegarle una trompada en la cara a uno de nosotros. ¿A quién?' },
    { text: '¿Quién de nosotros se cree mejor que todos los demás?' },
    { text: 'De un día para el otro, el mundo se queda sin Internet. ¿Quién se mata primero?' },
    { text: 'Somos los biólogos más capaces del planeta. ¿Quién inventa un virus para después vender la cura?' },
    { text: 'Estás en una situación complicada. ¿A quién no le pedís un consejo?' },
    { text: '¿Quién de nosotros odia su vida?' },
    { text: '¿Quién de nosotros cree que la tierra es plana?' },
    { text: '¿A quién de nosotros no te animarías a hacer enojar?' },
    { text: '¿Quién lee la Biblia?' },
    { text: 'Vamos a jugar un juego nuevo. ¿Quién tarda más en entender las reglas?' },
    { text: 'Alquilamos una casa en la costa y está todo listo. ¿Quién se baja a último momento?' },
    { text: 'Uno de nosotros tiene un hijo no reconocido. ¿Quién?' },
    { text: 'Uno de nosotros tiene una doble vida. ¿Quién?' },
    { text: 'Nos acabamos de enterar un secreto tremendo. ¿Quién es el primero en contarlo?' },
    { text: 'El día que la ciencia descubra cómo agregarnos otro set de genitales. ¿Quién es el primero en la fila?' },
    { text: 'Todos tenemos un equipo a cargo. ¿Quién maltrata más a sus empleados?' },
    { text: 'Uno de nosotros secretamente le desea la muerte a todos los demás. ¿Quién?' },
    { text: 'Nos despertamos en una isla desierta sin ningún tipo de alimento. ¿Quién propone que nos comamos a uno de nosotros?' },
    { text: 'Uno de nosotros no entiende la gracia de este juego, pero se ríe de compromiso para no quedar como el ojete. ¿Quién?' },
    { text: 'Estamos todos en cuarentena contagiados con un virus mortal e intratable. ¿Quién se escapa y genera una epidemia?' },
    { text: 'A todos nos da miedo subirnos al auto cuando maneja...' },
    { text: 'Escalando el monte Everest, nos encontramos con el yeti. Para nuestro asombro es increiblemente parecido a...' },
    { text: 'Necesitamos a alguien para comandar a nuestras tropas. Por favor, que no sea...' },
    { text: 'Fuimos apóstoles. ¿Quién fue Judas?' },
    { text: 'Nos ofrecen darnos 1000 dólares por cada cucharada de mierda que comamos. ¿Quién está dispuesto a hacerse rico?' },
    { text: 'Somos estrellas de rock. ¿Quién muere primero por sobredosis?' },
    { text: 'Estamos en un avión sin control y quedan paracaídas para todos excepto uno. ¿Quién es el primero en agarrar uno y salvarse?' },
    { text: 'Somos miembros de una banda de forajidos buscados en el Lejano Oeste. ¿La cabeza de quién vale menos?' },
    { text: 'Somos la nueva camada de oficiales de policía. ¿Quién es el primer caso de gatillo fácil?' },
    { text: '¿Quién se cagó?' },
    { text: 'Solo vas a poder abrazar a uno de nosotros el resto de tu vida. ¿A quién?' },
    { text: 'Fui asesinado. ¿Quién me mató?' },
    { text: 'Me parece bien que en Argentina se permita el matrimonio entre 2 personas del mismo género piensan todos menos...' },
    { text: 'Nos tiramos todos en paracaídas. ¿A quién no se le abre?' },
    { text: 'Uno de nosotros en una vida pasada fue traficante de esclavos. ¿Quién?' },
    { text: 'Uno de nosotros cree que el mundo sería mejor sin salud pública. ¿Quién?' },
    { text: 'Somos candidatos a presidente. ¿Quién consigue menos votos?' },
    { text: 'Si todos fuésemos presidentes de un país. ¿Quién sería el primero en imponer la pena de muerte?' },
    { text: 'Uno de nosotros no cree en la igualdad de género. ¿Quién?' },
    { text: '¿Quién se gana una enorme fortuna en el casino y desaparece de nuestras vidas por completo?' },
    { text: 'Uno de nosotros siempre quiso ser gendarme para poder reprimir con balas de gomas. ¿Quién?' },
    { text: '¿Quién invitaría a una ex pareja a tomar un café y mentiría descaradamente sobre su vida actual?' },
    { text: 'Volvemos de vacaciones y uno de nosotros tiene unos kilitos demás. ¿Quién se lo hace notar inmediatamente?' },
    { text: 'Descubren la fórmula para la inmortalidad. ¿A quién se la niegan para beneficio de toda la humanidad?' },
    { text: 'Uno de nosotros está secretamente enamorado de otro de nosotros. ¿Quién?' },
    { text: 'Cada uno publica un libro con su propia autobiografía. ¿Cuál te interesa menos?' },
    { text: 'Estamos presos. ¿Quién es el primero en prostituirse por protección?' },
    { text: 'Ponen nuestros rostros en billetes. ¿A quién le toca el billete más bajo?' },
    { text: '¿Quién de nosotros tendría sexo con un animal?' },
    { text: '¿Quién de nosotros se masturbó más veces el año pasado?' },
    { text: '¿En el historial de Google de quién encontraríamos las cosas mas raras?' },
    { text: '¿Con quién de nosotros JAMÁS participarías en un trío?' },
    { text: 'Uno de nosotros es MUY irresponsable a la hora de cuidarse durante el sexo. ¿Quién?' },
    { text: 'De ahora en más, siempre que tengas un orgasmo, vas a ver la cara de uno de nosotros. Ojalá no sea la de...' },
    { text: '¿Quién de nosotros JAMÁS participaría en una orgía?' },
    { text: 'Uno de nosotros lo excita la idea de acostarse con personas casadas. ¿A quién?' },
    { text: 'Uno de nosotros se masturba pensando en el/la presidente. ¿Quién?' },
    { text: 'Ya es posible la clonación humana. ¿Quién se clona para poder coger consigo mismo?' },
    { text: 'Los genitales de uno de nosotros son el molde de juguetes sexuales. ¿Los de quién?' },
    { text: '¿Quién es el más egoista en la cama?' },
    { text: '¿A quién le da asquito el sexo oral?' },
    { text: 'Uno de nosotros es secretamente, una estrella para adultos conocida como "Beso Negro" Jones. ¿Quién?' },
    { text: 'Nos acabamos de enterar tremendo secreto. ¿Quién es el primero en contarlo?' },
    { text: 'Alquilamos una casa en la costa. ¿Quién se raja a último momento con todo pagado?' },
    { text: 'Trabajamos en una cadena de comida rápida. ¿Quién escupe en la comida?' },
  ], [])

  const [step, setStep]       = useState('count')
  const [count, setCount]     = useState(1)
  const [names, setNames]     = useState([])
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [cardIdx, setCardIdx]     = useState(0)

  const navigate = useNavigate()

  const handleCountNext = () => {
    if (count >= 1 && count <= 50) {
      setNames(Array(count).fill(''))
      setStep('names')
    }
  }

  const handleNameChange = (i, v) => {
    const copy = [...names]; copy[i] = v; setNames(copy)
  }
  const handleNamesNext = () => {
    if (names.every(n => n.trim())) {
      setPlayers(names)
      setStep('rules')
    }
  }

  const randomOrder = useMemo(() => {
    const order = ALL_CARDS.map((_, i) => i)
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[order[i], order[j]] = [order[j], order[i]]
    }
    return order
  }, [ALL_CARDS])

  const nextCard = () => {
    if (cardIdx < ALL_CARDS.length - 1) {
      setCardIdx(ci => ci + 1)
      setPlayerIdx(pi => (pi + 1) % players.length)
    }
  }
  const prevCard = () => {
    if (cardIdx > 0) {
      setCardIdx(ci => ci - 1)
      setPlayerIdx(pi => (pi - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 'count' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
          <h2 className="text-xl font-bold text-center mb-4">Jugadores</h2>
          <input
            type="number" min={1} max={50}
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
            onKeyDown={e => ['e','E','+','-'].includes(e.key) && e.preventDefault()}
          />
          <button
            onClick={handleCountNext}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Siguiente
          </button>
        </div>
      )}

      {step === 'names' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Nombres</h2>
          <div className="space-y-3">
            {names.map((_, i) => (
              <input
                key={i}
                type="text"
                value={names[i]}
                onChange={e => handleNameChange(i, e.target.value)}
                placeholder={`Jugador ${i+1}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            ))}
          </div>
          <button
            onClick={handleNamesNext}
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Continuar a Reglas
          </button>
        </div>
      )}

      {step === 'rules' && (
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-4">REGLAS</h2>
          <ul className="list-disc list-inside mb-6 space-y-2 text-gray-800">
            <li>Una partida de Amigos de Mierda se juega en turnos, comenzando por el Jugador Inicial (el ultimo que fue al baño) y siguiendo en sentido horario o un jugador lee todas las "cartas".</li>
            <li>Al jugador se le entrega una "carta" y se lee en voz alta (o se puede hacer que uno lea todo).</li>
            <li>Todos los jugadores (incluso el que leyó la carta) se toman unos segundos para pensar la respuesta.</li>
            <li>Una vez que todos hayan pensado, el jugador que leyó la carta hace un conteo regresivo: 3... 2... 1...</li>
            <li>Al llegar a uno, <strong>todos</strong> deben apuntar con el dedo, en simultáneo, a la persona que eligieron como su respuesta a la pregunta.</li>
            <li>El jugador con más personas apuntándolo es el “ganador” y suma un punto.</li>
            <li>Al finalizar, el que más puntos tiene, más amigo de mierda es. (ojito con ese buitre)</li>
          </ul>
          <button
            onClick={() => setStep('play')}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Empezar Juego
          </button>
        </div>
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          
          <div className="text-lg font-semibold text-slate-600">
            Jugador: {players[playerIdx]}
          </div>

          <PreguntaCard
            contentType="AmigosDeMierda"
            categories={{ text: ALL_CARDS[randomOrder[cardIdx]].text }}
          />

          <div className="flex space-x-3 mt-4">
            <button
              onClick={prevCard}
              disabled={cardIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
            >
              Anterior
            </button>
            <button
              onClick={nextCard}
              disabled={cardIdx === ALL_CARDS.length - 1}
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
