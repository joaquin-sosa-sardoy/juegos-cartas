import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Pollera() {
  const navigate = useNavigate()

  const questions = useMemo(() => [
    "¿Tus amigos te invitan a salir a la noche cuando no tenías planes. ¿Tenés que pedirle permiso a tu pareja?",
    "¿Dejarías que tu pareja te revise el celular las veces que quiera?",
    "Tienen un evento muy importante para ir. ¿Quién elige los outfits?",
    "Cuando ven series o TV, ¿quién elige la mayoría de veces lo que ver?",
    "¿Te ha comprado medias o ropa interior tu pareja?",
    "Cuando tu pareja cocina, ¿comés igual sin protestar aunque no te guste?",
    "En tu día a día, ya sea en el celular o en la billetera, ¿tenés una foto de tu pareja?",
    "¿Tu pareja sabe tu PIN de la tarjeta de crédito?",
    "¿Te acordás la fecha del primer beso y del inicio de la relación?",
    "¿Haces regalos cuando cumplen mes?",
    "¿Vas al super con órdenes y lista de compras que te da tu pareja?",
    "En los últimos años, ¿aprendiste de maquillaje (o de fútbol) por tu pareja?",
    "¿Qué es lo más tierno que hiciste por amor?",
    "¿Has cancelado salidas planeadas porque ‘pintó quedarse’?",
    "¿Tu vocabulario se adaptó a cómo habla tu pareja?",
    "¿Tuviste que aprender de signos u horóscopo?",
    "Estás en una juntada con amigos y tu pareja dice: ‘amor, estoy aburrid@’. ¿Te vas o te quedás?",
    "Recibís un mensaje de un@ amig@ del secundario. ¿Se lo contás a tu pareja?",
    "Caminas con tu pareja que va sosteniendo una cartera y una botella. ¿Le cargás las cosas?",
    "¿Tenés una remera, tazas o algo de tu pareja?",
    "¿Comprarías algo caro sin su permiso?",
    "¿Necesitas aprobación de tu pareja para vestirte?",
    "¿Planeas salidas con amigos según disponibilidad de tu pareja?",
    "¿Tu pareja elige fotos o recomienda qué subir para tus redes?",
    "¿Coleccionas recuerdos de lo que hacen juntos?",
    "¿Le pedís que te acompañe al médico o a hacer trámites?",
    "¿Cambiarías hobbies por los de tu pareja?",
    "¿Medís tu autoestima por su aprobación?",
    "¿Cambiarías tu corte de pelo según su recomendación?",
    "¿Le has pedido que cancele un plan para quedarse contigo?",
    "Si tu pareja te pide cancelar un plan para pasar tiempo juntos, ¿qué haces?",
    "¿Le pides que te ayude a comprar ropa?",
    "¿Has usado palabras de su vocabulario para que lo note?",
    "¿Le aceptas videollamadas si te las pide?",
    "¿Leerías un libro si tu pareja te lo recomienda?",
    "¿Tenés una playlist compartida con tu pareja?",
    "¿Tenés foto de perfil con tu pareja en alguna red social?"
  ], [])

  const [qIdx, setQIdx] = useState(0)

  const prevQuestion = () => {
    if (qIdx > 0) {
      setQIdx(idx => idx - 1)
    }
  }

  const nextQuestion = () => {
    if (qIdx < questions.length - 1) {
      setQIdx(idx => idx + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-6 w-full max-w-md">
        <PreguntaCard
          contentType="Pollera"
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
