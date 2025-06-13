import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'

export default function Mimica() {
  const ALL_CHALLENGES = useMemo(() => [
    [
      { label: 'Videojuego', value: 'FIFA' },
      { label: 'Personaje',  value: 'Tiger Woods' },
      { label: 'Emoción',     value: 'Confusión' },
      { label: 'Acción',      value: 'Plantar' },
    ],
    [
      { label: 'Dibujos animados', value: 'Los pitufos' },
      { label: 'Personaje',  value: 'Willy Wonka' },
      { label: 'Objeto',     value: 'Lavarropas' },
      { label: 'Profesión',      value: 'Abogado' },
    ],
    [
      { label: 'Dibujos animados', value: 'Dragon Ball' },
      { label: 'Personaje',  value: 'Mujer Maravilla' },
      { label: 'Objeto',     value: 'Bicicleta' },
      { label: 'Profesión',      value: 'Panadero' },
    ],
     [
      { label: 'Dibujos animados', value: 'Ben 10' },
      { label: 'Personaje',  value: 'Goku' },
      { label: 'Objeto',     value: 'Brújula' },
      { label: 'Profesión',      value: 'Piloto' },
    ],
     [
      { label: 'Dibujos animados', value: 'Padre de familia' },
      { label: 'Personaje',  value: 'Darth Vader' },
      { label: 'Objeto',     value: 'Cafetera' },
      { label: 'Profesión',      value: 'Pintor' },
    ],
     [
      { label: 'Dibujos animados', value: 'South Park' },
      { label: 'Personaje',  value: 'Rocky Balboa' },
      { label: 'Objeto',     value: 'Cuadro' },
      { label: 'Profesión',      value: 'Enfermera' },
    ],
     [
      { label: 'Dibujos animados', value: 'Futurama' },
      { label: 'Personaje',  value: 'Kobe Bryant' },
      { label: 'Objeto',     value: 'Auto' },
      { label: 'Profesión',      value: 'Policia' },
    ],
     [
      { label: 'Dibujos animados', value: 'Los súper campeones' },
      { label: 'Personaje',  value: 'Ricky Martin' },
      { label: 'Objeto',     value: 'Aspiradora' },
      { label: 'Profesión',      value: 'Arquitecto' },
    ],
     [
      { label: 'Dibujos animados', value: 'Pokemon' },
      { label: 'Personaje',  value: 'Justin Bieber' },
      { label: 'Objeto',     value: 'Almohada' },
      { label: 'Profesión',      value: 'Chef' },
    ],
     [
      { label: 'Dibujos animados', value: 'Los Simpsons' },
      { label: 'Personaje',  value: 'Buda' },
      { label: 'Objeto',     value: 'Aguja' },
      { label: 'Profesión',      value: 'Maestra' },
    ],
     [
      { label: 'Dibujos animados', value: 'Tortugas Ninjas' },
      { label: 'Personaje',  value: 'Don Ramón' },
      { label: 'Objeto',     value: 'Caja fuerte' },
      { label: 'Profesión',      value: 'Plomero' },
    ],
     [
      { label: 'Dibujos animados', value: 'Bob Esponja' },
      { label: 'Personaje',  value: 'Michael Jackson' },
      { label: 'Objeto',     value: 'Abrelatas' },
      { label: 'Profesión',      value: 'Bombero' },
    ],
     [
      { label: 'Dibujos animados', value: 'Cabelleros del Zodiaco' },
      { label: 'Personaje',  value: 'Homero Simpson' },
      { label: 'Objeto',     value: 'Inodoro' },
      { label: 'Profesión',      value: 'Youtuber' },
    ],
     [
      { label: 'Dibujos animados', value: 'Scooby Doo' },
      { label: 'Personaje',  value: 'El Zorro' },
      { label: 'Objeto',     value: 'Lámpara' },
      { label: 'Profesión',      value: 'Médico' },
    ],
     [
      { label: 'Dibujos animados', value: 'Tom y Jerry' },
      { label: 'Personaje',  value: 'Steve Jobs' },
      { label: 'Objeto',     value: 'Hilo de coser' },
      { label: 'Profesión',      value: 'Psiquiatra' },
    ],
     [
      { label: 'Dibujos animados', value: 'Rick y Morty' },
      { label: 'Personaje',  value: 'Papá Noel' },
      { label: 'Objeto',     value: 'Fotocopiadora' },
      { label: 'Profesión',      value: 'Mago' },
    ],
     [
      { label: 'Dibujos animados', value: 'He-Man' },
      { label: 'Personaje',  value: 'El Guasón' },
      { label: 'Objeto',     value: 'Escalera' },
      { label: 'Profesión',      value: 'Peluquero' },
    ],
     [
      { label: 'Lugar', value: 'Tren' },
      { label: 'Pelicula',  value: 'Titanic' },
      { label: 'Acción',     value: 'Festejar' },
      { label: 'Animal',      value: 'Ratón' },
    ],
    [
      { label: 'Lugar', value: 'Cama' },
      { label: 'Pelicula',  value: 'Misión imposible' },
      { label: 'Acción',     value: 'Sentarse' },
      { label: 'Animal',      value: 'Perro' },
    ],
    [
      { label: 'Lugar', value: 'Cine' },
      { label: 'Pelicula',  value: 'Matrix' },
      { label: 'Acción',     value: 'Reir' },
      { label: 'Animal',      value: 'Pato' },
    ],
    [
      { label: 'Lugar', value: 'Supermercado' },
      { label: 'Pelicula',  value: 'La Momia' },
      { label: 'Acción',     value: 'Regalar' },
      { label: 'Animal',      value: 'Oveja' },
    ],
    [
      { label: 'Lugar', value: 'Biblioteca' },
      { label: 'Pelicula',  value: 'La guerra de los mundos' },
      { label: 'Acción',     value: 'Prometer' },
      { label: 'Animal',      value: 'Oso' },
    ],
    [
      { label: 'Lugar', value: 'Playa' },
      { label: 'Pelicula',  value: 'Hulk' },
      { label: 'Acción',     value: 'Ofrecer' },
      { label: 'Animal',      value: 'Mariposa' },
    ],
    [
      { label: 'Lugar', value: 'Bar' },
      { label: 'Pelicula',  value: 'Jumanji' },
      { label: 'Acción',     value: 'Pagar' },
      { label: 'Animal',      value: 'Mono' },
    ],
    [
      { label: 'Lugar', value: 'Plaza' },
      { label: 'Pelicula',  value: 'Karate Kid' },
      { label: 'Acción',     value: 'Pelear' },
      { label: 'Animal',      value: 'Mosquito' },
    ],
    [
      { label: 'Lugar', value: 'Heladería' },
      { label: 'Pelicula',  value: 'Tarzán' },
      { label: 'Acción',     value: 'Espiar' },
      { label: 'Animal',      value: 'Gato' },
    ],
    [
      { label: 'Lugar', value: 'Casa' },
      { label: 'Pelicula',  value: 'Terminator' },
      { label: 'Acción',     value: 'Googlear' },
      { label: 'Animal',      value: 'Chancho' },
    ],
    [
      { label: 'Lugar', value: 'Parque de diversiones' },
      { label: 'Pelicula',  value: 'Volver al futuro' },
      { label: 'Acción',     value: 'Probar' },
      { label: 'Animal',      value: 'Serpiente' },
    ],
    [
      { label: 'Lugar', value: 'Peluquería' },
      { label: 'Pelicula',  value: 'Toy Story' },
      { label: 'Acción',     value: 'Resbalar' },
      { label: 'Animal',      value: 'Sapo' },
    ],
    [
      { label: 'Lugar', value: 'Zoológico' },
      { label: 'Pelicula',  value: 'IT El Payaso Maldito' },
      { label: 'Acción',     value: 'Afeitar' },
      { label: 'Animal',      value: 'Hiena' },
    ],
    [
      { label: 'Lugar', value: 'Baño' },
      { label: 'Pelicula',  value: 'Hombre Araña' },
      { label: 'Acción',     value: 'Matar' },
      { label: 'Animal',      value: 'Lobo' },
    ],
    [
      { label: 'Comida', value: 'Pastas' },
      { label: 'Pelicula',  value: 'Diario de una pasión' },
      { label: 'Animal',     value: 'Cucaracha' },
      { label: 'Acción',      value: 'Destruir' },
    ],
    [
      { label: 'Comida', value: 'Tortilla' },
      { label: 'Pelicula',  value: 'E.T, el extraterrestre' },
      { label: 'Animal',     value: 'Foca' },
      { label: 'Acción',      value: 'Elegir' },
    ],
    [
      { label: 'Comida', value: 'Sushi' },
      { label: 'Pelicula',  value: 'El señor de los anillos' },
      { label: 'Animal',     value: 'Jirafa' },
      { label: 'Acción',      value: 'Leer' },
    ],
    [
      { label: 'Comida', value: 'Pochoclos' },
      { label: 'Pelicula',  value: 'Forrest Gump' },
      { label: 'Animal',     value: 'Leopardo' },
      { label: 'Acción',      value: 'Copiar' },
    ],
    [
      { label: 'Comida', value: 'Queso' },
      { label: 'Pelicula',  value: 'El rey león' },
      { label: 'Animal',     value: 'Hormiga' },
      { label: 'Acción',      value: 'Fumar' },
    ],
    [
      { label: 'Comida', value: 'Galletas' },
      { label: 'Pelicula',  value: 'El planeta de los simios' },
      { label: 'Animal',     value: 'Gorila' },
      { label: 'Acción',      value: 'Jugar' },
    ],
    [
      { label: 'Comida', value: 'Arroz' },
      { label: 'Pelicula',  value: 'El Exorcista' },
      { label: 'Animal',     value: 'Gallina' },
      { label: 'Acción',      value: 'Empujar' },
    ],
    [
      { label: 'Comida', value: 'Papas fritas' },
      { label: 'Pelicula',  value: 'Buscando a Nemo' },
      { label: 'Animal',     value: 'Caballo' },
      { label: 'Acción',      value: 'Rascar' },
    ],
    [
      { label: 'Comida', value: 'Hamburguesa' },
      { label: 'Pelicula',  value: 'Atracción fatal' },
      { label: 'Animal',     value: 'Ballena' },
      { label: 'Acción',      value: 'Asesinar' },
    ],
    [
      { label: 'Comida', value: 'Chocolate' },
      { label: 'Pelicula',  value: 'Actividad paranormal' },
      { label: 'Animal',     value: 'Babosa' },
      { label: 'Acción',      value: 'Amar' },
    ],
    [
      { label: 'Comida', value: 'Sopa' },
      { label: 'Pelicula',  value: 'Harry Potter' },
      { label: 'Animal',     value: 'León' },
      { label: 'Acción',      value: 'Meditar' },
    ],
    [
      { label: 'Comida', value: 'Ensalada de frutas' },
      { label: 'Pelicula',  value: 'Corazón valiente' },
      { label: 'Animal',     value: 'Cocodrilo' },
      { label: 'Acción',      value: 'Comer' },
    ],
    [
      { label: 'Comida', value: 'Asado' },
      { label: 'Pelicula',  value: 'Kill Bill' },
      { label: 'Animal',     value: 'Canguro' },
      { label: 'Acción',      value: 'Buscar' },
    ],
    [
      { label: 'Comida', value: 'Pizza' },
      { label: 'Pelicula',  value: 'Cazafantasmas' },
      { label: 'Animal',     value: 'Cobra' },
      { label: 'Acción',      value: 'Beber' },
    ],
    [
      { label: 'Comida', value: 'Sandwich' },
      { label: 'Pelicula',  value: 'Doctor Dolittle' },
      { label: 'Animal',     value: 'Delfín' },
      { label: 'Acción',      value: 'Dormir' },
    ],
    [
      { label: 'Comida', value: 'Panqueques' },
      { label: 'Pelicula',  value: '60 segundos' },
      { label: 'Animal',     value: 'Araña' },
      { label: 'Acción',      value: 'Abrir' },
    ],
    [
      { label: 'Película', value: 'El código Da Vinci' },
      { label: 'Estereotipo',  value: 'Deportista' },
      { label: 'Personaje',     value: 'Daddy Yankee' },
      { label: 'Animal',      value: 'Cangrejo' },
    ],
     [
      { label: 'Película', value: 'Legalmente rubia' },
      { label: 'Estereotipo',  value: 'Fiestero' },
      { label: 'Personaje',     value: 'Mark Zuckerberg' },
      { label: 'Animal',      value: 'Burro' },
    ],
    [
      { label: 'Película', value: 'Cuatro bodas y un funeral' },
      { label: 'Estereotipo',  value: 'Aburrido' },
      { label: 'Personaje',     value: 'Paulo Londra' },
      { label: 'Animal',      value: 'Suricata' },
    ],
    [
      { label: 'Película', value: 'Avatar' },
      { label: 'Estereotipo',  value: 'Gamer' },
      { label: 'Personaje',     value: 'Luis Suárez' },
      { label: 'Animal',      value: 'Escorpión' },
    ],
    [
      { label: 'Película', value: 'El padrino' },
      { label: 'Estereotipo',  value: 'Chusma' },
      { label: 'Personaje',     value: 'Bill Gates' },
      { label: 'Animal',      value: 'Elefante' },
    ],
    [
      { label: 'Película', value: 'Hannibal' },
      { label: 'Estereotipo',  value: 'Gracioso' },
      { label: 'Personaje',     value: 'Shakespeare' },
      { label: 'Animal',      value: 'Pinguino' },
    ],
    [
      { label: 'Objeto', value: 'Papel Higiénico' },
      { label: 'Personaje',  value: 'David Guetta' },
      { label: 'Profesión',     value: 'Albañil' },
      { label: 'Emoción',      value: 'Hambre' },
    ],
    [
      { label: 'Objeto', value: 'Serrucho' },
      { label: 'Personaje',  value: 'Carlos Gardel' },
      { label: 'Profesión',     value: 'Mecánico' },
      { label: 'Emoción',      value: 'Miedo' },
    ],
    [
      { label: 'Objeto', value: 'Microondas' },
      { label: 'Personaje',  value: 'Albert Einstein' },
      { label: 'Profesión',     value: 'Modista' },
      { label: 'Emoción',      value: 'Alegría' },
    ],
    [
      { label: 'Objeto', value: 'Cartera' },
      { label: 'Personaje',  value: 'Leonardo DiCaprio' },
      { label: 'Profesión',     value: 'Periodista' },
      { label: 'Emoción',      value: 'Tristeza' },
    ],
    [
      { label: 'Objeto', value: 'Globo' },
      { label: 'Personaje',  value: 'Roger Federer' },
      { label: 'Profesión',     value: 'Bartender' },
      { label: 'Emoción',      value: 'Cansancio' },
    ],
    [
      { label: 'Objeto', value: 'Cactus' },
      { label: 'Personaje',  value: 'Bart Simpson' },
      { label: 'Profesión',     value: 'Relaciones Públicas' },
      { label: 'Emoción',      value: 'Culpa' },
    ],
    [
      { label: 'Objeto', value: 'Taxi' },
      { label: 'Personaje',  value: 'Chayanne' },
      { label: 'Profesión',     value: 'Coordinador de viajes de egresados' },
      { label: 'Emoción',      value: 'Felicidad' },
    ],
    [
      { label: 'Objeto', value: 'Telaraña' },
      { label: 'Personaje',  value: 'Mike Tyson' },
      { label: 'Profesión',     value: 'Escritor' },
      { label: 'Emoción',      value: 'Ansiedad' },
    ],
    [
      { label: 'Objeto', value: 'Disfraz' },
      { label: 'Personaje',  value: 'Neymar' },
      { label: 'Profesión',     value: 'Cantante' },
      { label: 'Emoción',      value: 'Celos' },
    ],
    [
      { label: 'Objeto', value: 'Estatua' },
      { label: 'Personaje',  value: 'Cristiano Ronaldo' },
      { label: 'Profesión',     value: 'Diseñador' },
      { label: 'Emoción',      value: 'Sorpresa' },
    ],
    [
      { label: 'Objeto', value: 'Compás' },
      { label: 'Personaje',  value: 'Michael Jordan' },
      { label: 'Profesión',     value: 'Veterinario' },
      { label: 'Emoción',      value: 'Atracción' },
    ],
    [
      { label: 'Objeto', value: 'Llavero' },
      { label: 'Personaje',  value: 'Lionel Messi' },
      { label: 'Profesión',     value: 'Niñera' },
      { label: 'Emoción',      value: 'Verguenza' },
    ],
    [
      { label: 'Objeto', value: 'Perfume' },
      { label: 'Personaje',  value: 'Diego Maradona' },
      { label: 'Profesión',     value: 'Electricista' },
      { label: 'Emoción',      value: 'Enojo' },
    ],
    [
      { label: 'Objeto', value: 'Gota' },
      { label: 'Personaje',  value: 'Jim Carrey' },
      { label: 'Profesión',     value: 'Modelo' },
      { label: 'Emoción',      value: 'Impaciencia' },
    ],
    [
      { label: 'Animal', value: 'Camello' },
      { label: 'Pelicula',  value: 'Zoolander' },
      { label: 'Objeto',     value: 'Timbre' },
      { label: 'Profesión',      value: 'Coleccionista' },
    ],
     [
      { label: 'Animal', value: 'Murciélago' },
      { label: 'Pelicula',  value: 'Atrápame si puedes' },
      { label: 'Objeto',     value: 'Documento de identidad' },
      { label: 'Profesión',      value: 'Maestro pizzero' },
    ],
    [
      { label: 'Animal', value: 'Lombriz' },
      { label: 'Pelicula',  value: 'Los rompebodas' },
      { label: 'Objeto',     value: 'Cámara' },
      { label: 'Profesión',      value: 'Comediante' },
    ],
    [
      { label: 'Animal', value: 'Tigre' },
      { label: 'Pelicula',  value: 'Mini espías' },
      { label: 'Objeto',     value: 'Caña de pescar' },
      { label: 'Profesión',      value: 'Paseador de perros' },
    ],
    [
      { label: 'Animal', value: 'Pulga' },
      { label: 'Pelicula',  value: 'La boda de mi mejor amigo' },
      { label: 'Objeto',     value: 'Billetera' },
      { label: 'Profesión',      value: 'Repartidor de delivery' },
    ],
    [
      { label: 'Animal', value: 'Conejo' },
      { label: 'Pelicula',  value: 'Náufrago' },
      { label: 'Objeto',     value: 'Meteorito' },
      { label: 'Profesión',      value: 'Azafata' },
    ],
    [
      { label: 'Animal', value: 'Tiburón' },
      { label: 'Pelicula',  value: 'X-men' },
      { label: 'Objeto',     value: 'Piedra' },
      { label: 'Profesión',      value: 'Personal Trainer' },
    ],
    [
      { label: 'Animal', value: 'Toro' },
      { label: 'Pelicula',  value: '¿Qué pasó ayer?' },
      { label: 'Objeto',     value: 'Cama de agua' },
      { label: 'Profesión',      value: 'Doble de riesgo' },
    ],
    [
      { label: 'Animal', value: 'Tortuga' },
      { label: 'Pelicula',  value: 'La naranja mecánica' },
      { label: 'Objeto',     value: 'Parrilla' },
      { label: 'Profesión',      value: 'Comentarista deportivo' },
    ],
    [
      { label: 'Animal', value: 'Vaca' },
      { label: 'Pelicula',  value: 'Los juegos del hambre' },
      { label: 'Objeto',     value: 'Peluca' },
      { label: 'Profesión',      value: 'Cervecero' },
    ],
    [
      { label: 'Animal', value: 'Tucán' },
      { label: 'Pelicula',  value: 'Scary Movie' },
      { label: 'Objeto',     value: 'Tatuaje' },
      { label: 'Profesión',      value: 'Fotógrafo' },
    ],
    [
      { label: 'Animal', value: 'Zorro' },
      { label: 'Pelicula',  value: 'Piratas del Caribe' },
      { label: 'Objeto',     value: 'Bikini' },
      { label: 'Profesión',      value: 'Sommelier' },
    ],
    [
      { label: 'Animal', value: 'Paloma' },
      { label: 'Pelicula',  value: 'La Guerra de las galaxias' },
      { label: 'Objeto',     value: 'Semáforo' },
      { label: 'Profesión',      value: 'Influencer' },
    ],
    [
      { label: 'Animal', value: 'Koala' },
      { label: 'Pelicula',  value: 'Batman' },
      { label: 'Objeto',     value: 'Rallador de queso' },
      { label: 'Profesión',      value: 'Guionista' },
    ],
    [
      { label: 'Videojuego', value: 'GTA' },
      { label: 'Personaje',  value: 'Shakira' },
      { label: 'Emoción',     value: 'Placer' },
      { label: 'Acción',      value: 'Nadar' },
    ],
    [
      { label: 'Videojuego', value: 'Sonic' },
      { label: 'Personaje',  value: 'John Lennon' },
      { label: 'Emoción',     value: 'Terror' },
      { label: 'Acción',      value: 'Masticar' },
    ],
    [
      { label: 'Videojuego', value: 'Los Sims' },
      { label: 'Personaje',  value: 'Donald Trump' },
      { label: 'Emoción',     value: 'Excitación' },
      { label: 'Acción',      value: 'Gastar' },
    ],
    [
      { label: 'Videojuego', value: 'Street Fighter' },
      { label: 'Personaje',  value: 'Papa Francisco' },
      { label: 'Emoción',     value: 'Euforia' },
      { label: 'Acción',      value: 'Pelar' },
    ],
    [
      { label: 'Videojuego', value: 'Minecraft' },
      { label: 'Personaje',  value: 'Che Guevara' },
      { label: 'Emoción',     value: 'Amor' },
      { label: 'Acción',      value: 'Llorar' },
    ],
    [
      { label: 'Videojuego', value: 'Mortal Kombat' },
      { label: 'Personaje',  value: 'Brad Pitt' },
      { label: 'Emoción',     value: 'Impaciencia' },
      { label: 'Acción',      value: 'Broncear' },
    ],
    [
      { label: 'Videojuego', value: 'Counter Strike' },
      { label: 'Personaje',  value: 'Will Smith' },
      { label: 'Emoción',     value: 'Asco' },
      { label: 'Acción',      value: 'Posar' },
    ],
    [
      { label: 'Videojuego', value: 'Pokemon Go' },
      { label: 'Personaje',  value: 'Madonna' },
      { label: 'Emoción',     value: 'Venganza' },
      { label: 'Acción',      value: 'Quejarse' },
    ],
    [
      { label: 'Videojuego', value: 'Super Mario' },
      { label: 'Personaje',  value: 'Floyd Mayweather' },
      { label: 'Emoción',     value: 'Timidez' },
      { label: 'Acción',      value: 'Ladrar' },
    ],
    [
      { label: 'Videojuego', value: 'Fortnite' },
      { label: 'Personaje',  value: 'Drácula' },
      { label: 'Emoción',     value: 'Pasión' },
      { label: 'Acción',      value: 'Doblar' },
    ],
    [
      { label: 'Videojuego', value: 'Candy Crush' },
      { label: 'Personaje',  value: 'Elvis Presley' },
      { label: 'Emoción',     value: 'Optimismo' },
      { label: 'Acción',      value: 'Coser' },
    ],
    [
      { label: 'Videojuego', value: 'Tetris' },
      { label: 'Personaje',  value: 'Bob Marley' },
      { label: 'Emoción',     value: 'Odio' },
      { label: 'Acción',      value: 'Perder' },
    ],
    [
      { label: 'Videojuego', value: 'Pac-Man' },
      { label: 'Personaje',  value: 'Usain Bolt' },
      { label: 'Emoción',     value: 'Pánico' },
      { label: 'Acción',      value: 'Enloquecer' },
    ],
    [
      { label: 'Previa', value: 'Bebidas' },
      { label: 'Acción',  value: 'Besar' },
      { label: 'Deporte',     value: 'Buceo' },
      { label: 'Objeto',      value: 'Caja de herramientas' },
    ],
    [
      { label: 'Previa', value: 'Música' },
      { label: 'Acción',  value: 'Desmayar' },
      { label: 'Deporte',     value: 'Karate' },
      { label: 'Objeto',      value: 'Pelota de fútbol' },
    ],
    [
      { label: 'Previa', value: 'Diversión' },
      { label: 'Acción',  value: 'Ignorar' },
      { label: 'Deporte',     value: 'Patinaje' },
      { label: 'Objeto',      value: 'Dardos' },
    ],
    [
      { label: 'Previa', value: 'Fotos ridículas' },
      { label: 'Acción',  value: 'Trasplantar' },
      { label: 'Deporte',     value: 'Hockey' },
      { label: 'Objeto',      value: 'Metal pesado' },
    ],
    [
      { label: 'Previa', value: 'Anécdotas' },
      { label: 'Acción',  value: 'Oler' },
      { label: 'Deporte',     value: 'Esquí' },
      { label: 'Objeto',      value: 'Monopatín' },
    ],
    [
      { label: 'Previa', value: 'Amistades' },
      { label: 'Acción',  value: 'Agradecer' },
      { label: 'Deporte',     value: 'Fútbol' },
      { label: 'Objeto',      value: 'Remedio' },
    ],
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

  const randomOrder = useMemo(() => {
  const order = ALL_CHALLENGES.map((_, i) => i)
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[order[i], order[j]] = [order[j], order[i]]
    }
    return order
  }, [ALL_CHALLENGES])

  const nextCard = () => {
    if (cardIdx < ALL_CHALLENGES.length - 1) {
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
          <h2 className="text-xl font-bold text-center mb-4">Cantidad de jugadores</h2>
          <input
            type="number"
            min={1} max={50}
            value={count}
            onChange={e => setCount(Number(e.target.value))}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 appearance-none"
            onKeyDown={e => ['e','E','+','-'].includes(e.key) && e.preventDefault()}
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
          <h2 className="text-xl font-bold text-center mb-4">Nombres de jugadores</h2>
          <div className="space-y-3">
            {names.map((_, i) => (
              <input
                key={i}
                type="text"
                value={names[i]}
                onChange={e => handleNameChange(i, e.target.value)}
                placeholder={`Jugador ${i+1}`}
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
          <div className="text-lg font-semibold text-blue-600">
            Jugador: {players[playerIdx]}
          </div>

          <PreguntaCard
            contentType="Mimica"
            categories={ALL_CHALLENGES[randomOrder[cardIdx]]}
          />

          <div className="flex space-x-3">
            <button
              onClick={prevCard}
              disabled={cardIdx === 0}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-default"
            >
              Anterior
            </button>
            <button
              onClick={nextCard}
              disabled={cardIdx === ALL_CHALLENGES.length - 1}
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