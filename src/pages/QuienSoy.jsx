import React, { useState, useMemo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function QuienSoy() {
  const navigate = useNavigate()

  const celebrities = useMemo(() => [
    'Lionel Messi',
    'Shakira',
    'Cristiano Ronaldo',
    'Taylor Swift',
    'Leonardo DiCaprio',
    'Beyoncé',
    'Eminem',
    'Adele',
    'Brad Pitt',
    'Rihanna',
    'Michael Jackson',
    'Will Smith',
    'Emma Watson',
    'Elon Musk',
    'Lady Gaga',
    'Tom Cruise',
    'Kanye West',
    'Zendaya',
    'Chris Hemsworth',
    'Selena Gomez',
    'La Roca',
    'Milei',
    'Susana Giménez',
    'Ricardo Arjona',
    'CFK',
    'Néstor Kirchner',
    'Diego Maradona',
    'Carlos Tévez',
    'Gustavo Cerati',
    'Mercedes Sosa',
    'Charly García',
    'Fito Páez',
    'Manuel Adorni',
    'J.K. Rowling',
    'Dibu Martínez',
    'Montiel',
    'Paulo Dybala',
    'Ángel Di María',
    'Lali Espósito',
    'Tini Stoessel',
    'J Balvin',
    'Bad Bunny',
    'Maluma',
    'Nicki Nicole',
    'Duki',
    'Ricky Martin',
    'Justin Bieber',
    'Katy Perry',
    'Ariana Grande',
    'Billie Eilish',
    'Harry Styles',
    'Noah Centineo',
    'Sydney Sweeney',
    'Mirtha Legrand',
    'Francella',
    'Ricardo Darín',
    'Patricia Bullrich',
    'Mauricio Macri',
    'Alberto Fernández',
    'Sergio Massa',
    'El Rubius',
    'Germán Garmendia',
    'David Bisbal',
    'Daddy Yankee',
    'Luis Fonsi',
    'Marama',
    'Rombai',
    'Tinelli',
    'Marley',
    'El Gordo Dan',
    'Adam Sandler',
    'El Polaco',
    'Karina La Princesita',
    'Julián Álvarez',
    'Donald Trump',
    'Barack Obama',
    'Videla',
    'De la Rúa',
    'Perón',
    'Yanina Latorre',
    'Miranda',
    'Divididos',
    'Los Piojos',
    'No Te Va Gustar',
    'Las Pastillas del Abuelo',
    'Guns N’ Roses',
    'Linkin Park',
    'Jeff Bezos',
    'Mark Zuckerberg',
    'Bill Gates',
    'Steve Jobs',
    'Diana Mondino',
    'Marra',
    'Fort',
    'La Mona',
    'Ester Expósito',
    'Pedro Pascal',
    'Pampita',
    'Lanata',
    'Guido Kaczka',
    'Óscar Ruggeri',
  ], [])

  const [step, setStep] = useState('announce')
  const [used, setUsed] = useState(new Set())
  const [history, setHistory] = useState([])
  const [pointer, setPointer] = useState(-1)

  const pickNew = useCallback(() => {
    if (used.size === celebrities.length) return
    let idx
    do {
      idx = Math.floor(Math.random() * celebrities.length)
    } while (used.has(idx))
    setUsed(u => new Set(u).add(idx))
    setHistory(h => [...h, idx])
    setPointer(p => p + 1)
  }, [used, celebrities.length])

  const handleStart = () => {
    pickNew()
    setStep('play')
  }

  const handlePrev = () => {
    if (pointer > 0) setPointer(p => p - 1)
  }
  const handleNext = () => {
    if (pointer < history.length - 1) {
      setPointer(p => p + 1)
    } else {
      pickNew()
    }
  }

  const currentIdx = pointer >= 0 ? history[pointer] : null

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">

      {step === 'announce' && (
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">¿Quién Soy?</h2>
          <p className="mb-6 text-gray-700">
            Por cada persona/grupo que aparezca en la carta,<br/>
            los demás deberán adivinar con preguntas de SÍ/NO.
          </p>
          <button
            onClick={handleStart}
            className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition"
          >
            Listo
          </button>
        </div>
      )}

      {step === 'play' && currentIdx != null && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
        
          <PreguntaCard
            contentType="QuienSoy"
            question={celebrities[currentIdx]}
          />

          <div className="flex space-x-4">
            <button
              onClick={handlePrev}
              disabled={pointer === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={
                used.size === celebrities.length &&
                pointer === history.length - 1
              }
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50"
            >
              Siguiente
            </button>
          </div>

          <button
            onClick={() => navigate('/juegos')}
            className="mt-4 py-2 px-6 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Menú Principal
          </button>
        </div>
      )}
    </div>
  )
}
