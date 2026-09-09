import CartaEspanola, { PALOS_INFO } from './CartaEspanola'
import AnilloDeNovio from './AnilloDeNovio'
import BrindisPrevia from './BrindisPrevia'
import AlceDeEx from './AlceDeEx'
import FuegoZarpado, { LlamaIcono } from './FuegoZarpado'
import { Mascaras } from './TeatroMimica'

export default function PreguntaCard({ contentType, question, challengeText, categories, title, carta }) {
  if (contentType === "Previa") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[350px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between relative overflow-hidden border-t-4 border-teal-400">

        {/* BRINDIS (ver BrindisPrevia.jsx) — marca de agua */}
        <BrindisPrevia className="pointer-events-none absolute -bottom-3 -right-2 w-28 h-28 opacity-[0.06]" />

        <div className="relative text-teal-500 text-2xl font-bold mb-4">
          {title}
        </div>

        <div className="relative text-black text-lg font-medium leading-tight mb-auto">
          {challengeText}
        </div>

        <div className="relative mt-6 flex items-end justify-between">
          {/* BRINDIS (ver BrindisPrevia.jsx) — iconito del pie */}
          <BrindisPrevia className="w-8 h-8 opacity-70" />
          <span className="text-black font-bold">PREVIA</span>
        </div>
      </div>
    );
  }

  if (contentType === "Zarpado") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] rounded-2xl shadow-2xl overflow-hidden flex flex-col bg-gradient-to-b from-zinc-900 via-zinc-900 to-red-950 border-2 border-red-600">

        {/* LLAMAS (ver FuegoZarpado.jsx) — cenefa de arriba */}
        <div className="relative h-10 shrink-0 bg-black">
          <FuegoZarpado className="absolute inset-x-0 bottom-0 w-full h-14" />
        </div>

        <div className="relative flex-grow flex flex-col p-5 sm:p-6">

          {/* LLAMAS (ver FuegoZarpado.jsx) — marca de agua */}
          <LlamaIcono
            className="pointer-events-none absolute -bottom-6 -right-4 w-40 h-40 opacity-10"
          />

          <div className="relative text-center">
            <span className="inline-block rounded-full bg-red-600 px-4 py-1 text-[11px] font-extrabold uppercase tracking-[0.25em] text-white shadow-lg">
              Prenda
            </span>
          </div>

          <p className="relative mt-4 text-white text-base sm:text-lg font-semibold leading-snug text-center">
            {challengeText}
          </p>

          <div className="relative my-5 flex items-center gap-3">
            <span className="h-px flex-grow bg-red-500/40" />
            <LlamaIcono className="w-4 h-4 opacity-80" />
            <span className="h-px flex-grow bg-red-500/40" />
          </div>

          <div className="relative mb-auto">
            <div className="text-center text-[11px] font-extrabold uppercase tracking-[0.25em] text-red-400">
              Pregunta
            </div>
            <p className="mt-2 text-center text-red-50 text-lg sm:text-xl font-bold leading-snug">
              {question}
            </p>
          </div>

          <div className="relative mt-6 border-t border-red-500/25 pt-3">
            <p className="text-[11px] text-zinc-400 italic leading-snug">
              Si cumplís la prenda, podés hacerle la pregunta al participante que quieras.
            </p>
            <div className="mt-1 text-right text-lg font-extrabold tracking-widest text-red-500">
              ZARPADO
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (contentType === "Mimica") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col relative overflow-hidden">

        {/* TEATRO (ver TeatroMimica.jsx) — marca de agua */}
        <Mascaras
          className="pointer-events-none absolute -bottom-4 -right-3 w-32 h-32 opacity-[0.07]"
        />

        {/* Header */}
        <div className="relative flex items-center gap-3 mb-6">
          {/* TEATRO (ver TeatroMimica.jsx) — máscaras del título */}
          <Mascaras className="w-12 h-10 shrink-0" />
          <div className="text-blue-600 text-xl font-medium leading-tight">
            Tenés que hacer la mímica de...
          </div>
        </div>

        {/* Categories */}
        <div className="relative space-y-4 flex-grow">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="text-gray-700 font-medium">{category.label}:</div>
              <div className="text-black text-lg">{category.value}</div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="relative mt-6 text-sm text-gray-600 border-t pt-4">
          Todos participan donde debés hacer las 4 categorías. Por cada acierto, deciden ustedes el premio/consecuencia.
        </div>

        {/* Game name */}
        <div className="relative mt-4 text-blue-600 font-bold text-right">
          MÍMICA
        </div>
      </div>
    );
  }

  if (contentType === "Random") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[350px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div className="text-green-500 text-2xl font-bold mb-4">
          {title} 
        </div>

        <div className="text-black text-lg font-medium leading-tight mb-auto">
          {challengeText}
        </div>

        {/* Footer text */}
        <div className="mt-6 text-sm text-gray-600 border-t pt-4">
          Intentar responder con la verdad. Pueden manejar este modo de juego como quieran. Ej. Todos responden, uno por uno, etc.
        </div>

        <div className="mt-6 text-green-700 font-bold text-right">
          PREGUNTAS RANDOM
        </div>
      </div>
    );
  }

  if (contentType === "Decisiones") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
    
        <div className="text-cyan-500 text-2xl font-bold mb-4 text-center">
          DECISIONES
        </div>

        <div className="text-gray-800 text-lg font-medium leading-snug mb-auto">
          {challengeText}
        </div>

        <div className="mt-6 text-sm text-gray-500 italic text-right">
          Preguntas para tomar decisiones y debatir con el grupo.
        </div>
      </div>
    )
  }

  if (contentType === "Tincho") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border-2 border-yellow-400">
        <div className="text-yellow-600 text-2xl font-bold mb-4 text-center">
          TEST DE TINCHO
        </div>

        <div className="text-gray-800 text-xl font-medium leading-snug mb-auto">
          {question}
        </div>

        <div className="mt-6 space-y-2 text-sm text-yellow-500 italic text-left">
          <p>Mientras más puntos, más tincho. Puntos a criterio del grupo.</p>
          <p>Cheto el nene. De alto estatus socioeconómico el retoño.</p>
        </div>
      </div>
    )
  }

  if (contentType === "MasProbable") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div className="text-blue-600 text-2xl font-bold mb-4 text-center">
          ¿Quién es más probable...
        </div>

        <div className="text-gray-800 text-xl font-medium leading-snug mb-auto">
          {question}
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-500 italic text-left">
          <p>El grupo debe decidir quién es el más probable.</p>
        </div>
      </div>
    )
  }

   if (contentType === "Pollera") {
  return (
    <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-pink-50 rounded-2xl shadow-xl p-6 flex flex-col justify-between border-4 border-pink-300">
      <div className="flex justify-center mb-4">
        <span className="text-pink-500 text-3xl">♥️</span>
        <h2 className="text-pink-600 text-2xl font-extrabold mx-2">POLLERA</h2>
        <span className="text-pink-500 text-3xl">♥️</span>
      </div>

      <div className="text-pink-800 text-lg font-medium leading-snug mb-auto text-center px-2">
        {question}
      </div>

      <div className="mt-6 space-y-1 text-sm text-pink-600 italic text-center">
        <p>Pollerudo de mierda.</p>
      </div>
    </div>
  )
}

  if (contentType === "NuncaNunca") {
  return (
    <div className="w-[250px] sm:w-[350px] lg:w-[350px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
   
      <div className="text-pink-800 text-2xl font-bold mb-4 text-center">
        YO NUNCA NUNCA
      </div>

      <div className="text-black text-xl font-medium leading-snug mb-auto text-center px-2">
        {challengeText}
      </div>

      <div className="mt-6 space-y-1 text-sm text-slate-500 italic text-center">
        Conozco tu secreto.. tu sucio sucio secretito. CONOZCO TU SECRETO. TU SUCIO SECRETITO.
      </div>
    </div>
  )
}

if (contentType === "QuienSoy") {
  return (
    <div className="
      w-[250px] sm:w-[350px] lg:w-[400px]
      bg-gradient-to-br from-indigo-50 to-white
      rounded-2xl shadow-2xl
      p-6 flex flex-col justify-between
      border-4 border-indigo-300
    ">
      <div className="flex items-center justify-center space-x-2 mb-4">
        <span className="text-indigo-500 text-2xl">👤</span>
        <h2 className="
          bg-clip-text text-transparent
          bg-gradient-to-r from-indigo-600 to-blue-500
          text-2xl font-extrabold uppercase tracking-wider
        ">
          ¿Quién Soy?
        </h2>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <span className="text-gray-800 text-4xl font-extrabold text-center leading-snug">
          {question}
        </span>
      </div>

    </div>
  )
}
if (contentType === "AmigosDeMierda") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[300px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between mx-auto relative overflow-hidden font-bold">

        <div className="absolute top-0 left-0 h-full w-2 bg-slate-700 rounded-tl-xl rounded-bl-xl"></div>

        <div className="text-center text-slate-700 text-2xl font-semibold mb-2 uppercase tracking-widest">
          <span className="inline-block transform rotate-1">AMIGOS</span>
          <br />
          <span className="inline-block transform -rotate-1">DE MIERDA</span>
        </div>

        <div className="w-16 h-0.5 border-slate-700 border mx-auto mb-4"></div>

        <div className="flex-grow flex items-center justify-center text-center text-gray-800 text-lg px-4 leading-snug">
          “{categories?.text}”
        </div>

        <div className="mt-4 flex items-center justify-end text-sm italic text-slate-700">
          <span className="mr-2">Forro </span>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[url('/textures/subtle-pattern.png')] opacity-5 rounded-xl"></div>
      </div>
    );
  }


  if (contentType === "EsUn10Pero") {
    const info = PALOS_INFO[carta.palo]

    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-2xl shadow-xl p-5 sm:p-6 flex flex-col justify-between border-4 border-teal-600">
        <div className="text-center text-teal-700 text-lg sm:text-xl font-extrabold uppercase tracking-widest">
          Es un 10, pero...
        </div>

        <div className="flex justify-center my-4">
          <CartaEspanola
            palo={carta.palo}
            numero={carta.numero}
            className="w-[150px] sm:w-[180px] lg:w-[195px] h-auto drop-shadow-md"
          />
        </div>

        <div className="text-center">
          <p className={`text-xl sm:text-2xl font-extrabold ${info.texto}`}>
            {carta.numero} de {info.nombre}
          </p>
        </div>
      </div>
    )
  }

  if (contentType === "TagDelNovio") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-rose-50 rounded-2xl shadow-xl p-6 flex flex-col justify-between border-4 border-rose-300">

        {/* ANILLO (ver AnilloDeNovio.jsx) */}
        <div className="flex justify-center">
          <AnilloDeNovio className="w-14 h-14 sm:w-16 sm:h-16" />
        </div>

        <div className="mt-3 text-center text-rose-600 text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
          Tag del Novio
        </div>
        <div className="text-center text-rose-400 text-xs font-semibold uppercase tracking-[0.2em]">
          o de la pareja
        </div>

        <div className="mt-6 mb-auto text-center text-rose-900 text-lg sm:text-xl font-medium leading-snug px-1">
          {question}
        </div>

        <div className="mt-6 pt-3 border-t border-rose-200 text-center text-sm text-rose-500 italic">
          <p>Se lee y se responde ahí nomás. Sin pensarlo mucho.</p>
        </div>
      </div>
    )
  }

  if (contentType === "TagDelEx") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between border-4 border-amber-800">
        <div className="text-center text-amber-800 text-xl sm:text-2xl font-extrabold uppercase tracking-wide">
          Tag del Ex
        </div>
        <div className="text-center text-amber-600 text-xs font-semibold uppercase tracking-[0.2em]">
          Frente al grupo
        </div>

        <div className="mt-6 mb-auto text-center text-gray-900 text-lg sm:text-xl font-medium leading-snug px-1">
          {question}
        </div>

        <div className="mt-6 pt-4 border-t border-amber-200 text-center">
          {/* ALCE (ver AlceDeEx.jsx) */}
          <div className="flex justify-center">
            <AlceDeEx className="w-16 sm:w-20 h-auto" />
          </div>

          <p className="mt-2 text-sm text-amber-700 italic">
            Se responde en voz alta. Sin editar la historia.
          </p>
        </div>
      </div>
    )
  }

  if (contentType === "EsUn10PeroFrases") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between border-4 border-teal-600">
        <div className="text-center text-teal-700 text-lg sm:text-xl font-extrabold uppercase tracking-widest">
          Es un 10, pero...
        </div>

        <div className="my-6 flex-grow flex items-center justify-center">
          <p className="text-center text-gray-900 text-xl sm:text-2xl font-bold leading-snug">
            {question}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-200 text-center text-sm text-teal-700 italic">
          <p>Con frases ya escritas.</p>
        </div>
      </div>
    )
  }

  return null;
}
