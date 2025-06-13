export default function PreguntaCard({ contentType, question, challengeText, categories, title }) {
  if (contentType === "Previa") { //Este contentType es ya dentro de la "carta"
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[350px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div className="text-teal-500 text-2xl font-bold mb-4">
          {title} 
        </div>

        <div className="text-black text-lg font-medium leading-tight mb-auto">
          {challengeText}
        </div>

        <div className="mt-6 text-black font-bold text-right">
          PREVIA
        </div>
      </div>
    );
  }

  if (contentType === "Zarpado") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between">
        <div className="text-black text-lg font-medium leading-tight mb-auto">
          {challengeText}
        </div>
        
        <div className="space-y-2">
          <div className="text-red-500 font-medium">Pregunta</div>
          <div className="text-black text-lg">{question}</div>
          
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 italic">
              Cumpliendo la prenda, podés hacerle la pregunta al participante que quieras.
            </p>
            <div className="text-red-500 font-bold text-right">ZARPADO</div>
          </div>
        </div>
      </div>
    );
  }

  if (contentType === "Mimica") {
    return (
      <div className="w-[250px] sm:w-[350px] lg:w-[400px] min-h-[400px] bg-white rounded-xl shadow-lg p-6 flex flex-col">
        {/* Header */}
        <div className="text-blue-600 text-xl font-medium mb-6">
          Debés hacer la mímica de...
        </div>

        {/* Categories */}
        <div className="space-y-4 flex-grow">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="text-gray-700 font-medium">{category.label}:</div>
              <div className="text-black text-lg">{category.value}</div>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-6 text-sm text-gray-600 border-t pt-4">
          Todos participan. Debés hacer las 4 categorías. Por cada acierto, el que adivinó regala 1 trago.
        </div>

        {/* Game name */}
        <div className="mt-4 text-blue-600 font-bold text-right">
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
    
        <div className="text-purple-600 text-2xl font-bold mb-4 text-center">
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
   
      <div className="text-red-500 text-2xl font-bold mb-4 text-center">
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


  return null;
}
