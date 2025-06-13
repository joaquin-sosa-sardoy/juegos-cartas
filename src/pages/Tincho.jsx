import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Tincho() {
  const navigate = useNavigate()
  const questions = useMemo(() => [
    "¿Color favorito? Dorado suma.",
    "¿Tenes síndrome del reflejo? O sea, ¿ves tu reflejo y te acomodás el pelo?",
    "Vas de vacaciones. ¿Te haces el tiempo para tomar sol?",
    "¿Cuánto te importa salir bronceado en alguna foto?",
    "¿Chequeas que la foto que te sacaste salió bien?",
    "¿Entrenás por facha o salud?",
    "¿Subís historias entrenando?",
    "¿Vas bien vestido al gym?",
    "¿Decís mucho 'gorda', 'o sea' o cosas así?",
    "¿Le das importancia a lo 'aesthetic'?",
    "¿Ice Coffee?",
    "¿Te importa la marca en la ropa?",
    "¿Marca de ropa preferida?",
    "¿Qué importancia le das al pelo en el outfit?",
    "¿Perfume favorito?",
    "¿Accesorios para salir? Aritos, reloj…",
    "¿Lentes de sol en el boliche?",
    "¿Ropa deportiva o 'urban'?",
    "¿Combinás ropa sí o sí?",
    "¿Comida favorita?",
    "¿Subís foto de la comida?",
    "¿Haces un dump de fotos del lugar que vas?",
    "¿Merienda favorita?",
    "¿Avocado toast?",
    "¿Foto del outfit en la previa?",
    "¿Llegás al boliche y no tenés VIP. ¿Intentás conseguirlo?",
    "Mesa en el boliche, ¿sí o no?",
    "¿Qué pasa si hay alguien vestido igual que vos en la previa?",
    "¿Compraste botellita con bengala?",
    "¿Le pagás el trago a quien te gustó en el boliche?",
    "¿Joda en una quinta o boliche zona top?",
    "¿Perreo en el piso u hombrito? (baile)",
    "Te invitan a una previa personas muy lindas. ¿Llevás botellas semi vacías o comprás nuevas?",
    "¿Tus papás tienen más de 2 autos?",
    "¿Has visitado más de 3 países?",
    "¿Compras café en Starbucks?",
    "¿Qué iPhone tenés?",
    "¿Estudiaste en colegio privado o público?",
    "¿Salís de joda entre semana?",
    "¿Tu mascota tiene cuenta de Instagram?",
    "¿Cupcake, Muffin o pastelito?",
    "¿Tenés un auto exclusivo para vos?",
    "¿Llevás auriculares al gimnasio?",
    "¿Se te escapa alguna palabra en inglés cuando no te sale un significado?",
    "¿Te vas de vacaciones todos los veranos?",
    "¿Deporte favorito?",
    "¿Vivís en barrio cerrado?",
    "¿Tenés (o tus papás) una Hilux/Amarok?",
    "¿Te llamás Martín? kjjjj",
    "¿Proteína o creatina para el gym?",
    "¿Tenés termo Stanley?",
    "¿Le hacés la montañita al mate?",
    "¿Tenés playlists para cada tipo de música?",
    "¿Te jode si te sacan fotos sin avisar?",
    "¿Tenés Play 5?",
    "¿Sabés inglés más de B1?",
    "¿Usás lentes de sol a menudo?",
    "¿Tenés playlist de pop en inglés?",
    "¿Tenés cuatriciclo?",
    "¿Ponés casa siempre que podés?",
    "¿Tenés un mate grabado y personalizado?"
  ], [])

  const [qIdx, setQIdx] = useState(0)

  const prevQuestion = () => {
    if (qIdx > 0) {
      setQIdx(q => q - 1)
    }
  }

  const nextQuestion = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(q => q + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <PreguntaCard
          contentType="Tincho"
          question={questions[qIdx]}
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
            disabled={qIdx === questions.length - 1}
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