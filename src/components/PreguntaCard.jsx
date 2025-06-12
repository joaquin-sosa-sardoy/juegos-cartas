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

  return null; // En caso de que no haya un tipo válido
}
