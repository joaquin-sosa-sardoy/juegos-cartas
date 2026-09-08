import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

/*
 * ES UN 10 PERO... (CON FRASES)
 * La versión con las frases ya escritas. La otra ("SIN FRASES") está en
 * EsUn10Pero.jsx y muestra una carta española para que la completes vos.
 */
export default function EsUn10PeroFrases() {
  const navigate = useNavigate()

  /* ==========================================================================
   * ▼▼▼  ACÁ SE AGREGAN / BORRAN / EDITAN LAS FRASES  ▼▼▼
   *
   * Cada frase va entre comillas y termina en coma. Una por renglón.
   * La carta muestra arriba "Es un 10, pero..." así que la frase arranca
   * directo con el defecto, en minúscula. Ejemplo:
   *
   *     "no devuelve el táper",
   *
   * Podés agregar todas las que quieras, no hay límite. Si una frase lleva
   * comillas adentro, escribilas así:  \\"  (barra invertida y comilla).
   * ========================================================================== */
  const frases = useMemo(() => [
    "te deja en visto y después likea tu historia",
    "dice \"ya salgo\" y todavía se está bañando",
    "usa medias con ojotas (kjjjj)",
    "es kuka",
    "es libertario",
    "es de extrema izquierda, participa en marchas y milita el partido",
    "te transfiere la plata tres días después",
    "te spoileo el final de la serie/pelicula",
    "se caga para las pelis de terror",
    "manda audios de cuatro minutos",
    "dice que no tiene hambre y se come tus papas",
    "llega tarde y encima se queja del tráfico",
    "agarra el parlante y no lo suelta más",
    "escucha musica muy rara y disgustante para vos",
    "sube la foto solo si sale bien él",
    "dice que no toma y después se toma todo",
    "tiene el celular al 3% siempre",
    "pide un poquito de cada plato ajeno",
    "contesta \"jaja\" y nada más",
    "saluda por el cumpleaños al día siguiente",
    "usa el \"te aviso\" como forma de decir que no",
    "maneja mirando el celular",
    "deja los platos en remojo tres días",
    "te hace esperar afuera del boliche",
    "habla en el cine",
    "se levanta a las tres de la tarde",
    "pone diez alarmas y no se levanta con ninguna",
    "dice \"estoy llegando\" desde la casa",
    "te manda memes a las cuatro de la mañana",
    "sabe todo de astrología y nada de tu cumpleaños",
    "te pide el cargador y no te lo devuelve",
    "cambia la canción a los veinte segundos",
    "dice \"hacé lo que quieras\" y después se enoja",
    "tiene la heladera llena y pide delivery",
    "manda audios a las siete de la mañana",
    "cuenta el mismo chiste tres veces en la misma noche",
    "dice que no le importa el fútbol y grita el gol",
    "te lee el mensaje y te contesta en persona",
    "tiene mil playlists y siempre pone la misma",
    "propone plan, lo organiza y después cancela",
    "le cae mal a tu familia",
    "habla mal de tu mejor amigo",
    "se comió a 30 antes de vos",
    "es vegan@",
    "es de Boca",
    "es de River",
    "no mira futbol",
    "le importa mas su club de futbol que vos",
    "critica tus gustos deportivos",
    "odia los perros",
    "odia los gatos",
    "no quiere hijos",
    "quiere más de 4 hijos",
    "no le gusta viajar",
    "mueren todos los taladros cuando aparece",
    "se hace las uñas/pestañas re seguido",
    "le gustaban tod@s antes de vos",
    "sale todos los findes",
    "NO tiene celos",
    "con el tiempo se quedará pelado",
    "con el tiempo irá engordando por no cuidarse",
    "es adict@ al gym",
    "odia tu comida favorita",
    "odia la música que escuchás",
    "colecciona cosas absurdas para vos",
    "no limpia nada",
    "no te contesta por jugar a la PC",
    "no sabe escribir bien",
    "se llevó todas las materias",
    "estudia filosofía",
    "estudia arquitectura",
    "será ginecólogo",
    "estudia derecho (o de costado BOE) (perdon soy esto)",
    "es bisexual",
    "toca la guitarra",
    "es futbolista profesional en Europa y vos su botiner@ ñaññañañ",
    "quiere hacer intercambio/voluntariado",
    "no lee libros",
    "no tiene redes sociales",
    "aún tiene Snapchat",
    "se cree twittero",
    "es un intento de influencer",
    "es un intento de streamer/youtuber",
    "de otro país",
    "quiere coger todo el dia y todos los dias",
    "no sabe cocinar",
    "no sabe manejar auto",
    "gasta en bolucompras",
  ], [])
  /* ▲▲▲  FIN DE LAS FRASES  ▲▲▲ */

  const [idx, setIdx] = useState(0)

  const anterior = () => {
    if (idx > 0) setIdx(i => i - 1)
  }

  const siguiente = () => {
    if (idx < frases.length - 1) setIdx(i => i + 1)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">

        <div className="text-sm font-semibold text-teal-700">
          Frase {idx + 1} de {frases.length}
        </div>

        <PreguntaCard
          contentType="EsUn10PeroFrases"
          question={frases[idx]}
        />

        <div className="flex space-x-4">
          <button
            onClick={anterior}
            disabled={idx === 0}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 transition"
          >
            Anterior
          </button>
          <button
            onClick={siguiente}
            disabled={idx === frases.length - 1}
            className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 disabled:opacity-50 transition"
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
