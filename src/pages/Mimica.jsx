import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import PreguntaCard from '../components/PreguntaCard'
import ConfigJugadores from '../components/ConfigJugadores'

const ACENTO = {
  texto: 'text-blue-600',
  barra: 'bg-blue-400',
  boton: 'bg-blue-600 hover:bg-blue-700',
  anillo: 'focus:ring-blue-400'
}

export default function Mimica() {
  const ALL_CHALLENGES = useMemo(() => [
    [
      { label: 'Personaje', value: 'Usain Bolt' },
      { label: 'Profesión', value: 'Psiquiatra' },
      { label: 'Acción', value: 'Googlear' },
      { label: 'Emoción', value: 'Alegría' },
    ],
    [
      { label: 'Profesión', value: 'Peluquero' },
      { label: 'Animal', value: 'Cocodrilo' },
      { label: 'Emoción', value: 'Felicidad' },
      { label: 'Acción', value: 'Perder' },
    ],
    [
      { label: 'Pelicula', value: 'El rey león' },
      { label: 'Animal', value: 'Tigre' },
      { label: 'Acción', value: 'Enloquecer' },
      { label: 'Personaje', value: 'Carlos Gardel' },
    ],
    [
      { label: 'Comida', value: 'Ensalada de frutas' },
      { label: 'Acción', value: 'Desmayar' },
      { label: 'Profesión', value: 'Panadero' },
      { label: 'Dibujos animados', value: 'South Park' },
    ],
    [
      { label: 'Comida', value: 'Arroz' },
      { label: 'Acción', value: 'Empujar' },
      { label: 'Pelicula', value: 'X-men' },
      { label: 'Personaje', value: 'Bart Simpson' },
    ],
    [
      { label: 'Animal', value: 'Burro' },
      { label: 'Pelicula', value: 'IT El Payaso Maldito' },
      { label: 'Objeto', value: 'Serrucho' },
      { label: 'Acción', value: 'Plantar' },
    ],
    [
      { label: 'Objeto', value: 'Peluca' },
      { label: 'Pelicula', value: 'Tarzán' },
      { label: 'Emoción', value: 'Sorpresa' },
      { label: 'Personaje', value: 'Homero Simpson' },
    ],
    [
      { label: 'Previa', value: 'Música' },
      { label: 'Objeto', value: 'Brújula' },
      { label: 'Animal', value: 'Pato' },
      { label: 'Pelicula', value: 'La boda de mi mejor amigo' },
    ],
    [
      { label: 'Personaje', value: 'Don Ramón' },
      { label: 'Pelicula', value: 'La naranja mecánica' },
      { label: 'Animal', value: 'Araña' },
      { label: 'Emoción', value: 'Celos' },
    ],
    [
      { label: 'Animal', value: 'Gorila' },
      { label: 'Objeto', value: 'Hilo de coser' },
      { label: 'Videojuego', value: 'GTA' },
      { label: 'Profesión', value: 'Médico' },
    ],
    [
      { label: 'Personaje', value: 'Mark Zuckerberg' },
      { label: 'Animal', value: 'Pulga' },
      { label: 'Dibujos animados', value: 'Cabelleros del Zodiaco' },
      { label: 'Estereotipo', value: 'Deportista' },
    ],
    [
      { label: 'Personaje', value: 'David Guetta' },
      { label: 'Animal', value: 'Canguro' },
      { label: 'Profesión', value: 'Cantante' },
      { label: 'Videojuego', value: 'Pac-Man' },
    ],
    [
      { label: 'Profesión', value: 'Veterinario' },
      { label: 'Personaje', value: 'Roger Federer' },
      { label: 'Objeto', value: 'Gota' },
      { label: 'Acción', value: 'Oler' },
    ],
    [
      { label: 'Película', value: 'Avatar' },
      { label: 'Objeto', value: 'Fotocopiadora' },
      { label: 'Lugar', value: 'Biblioteca' },
      { label: 'Animal', value: 'Sapo' },
    ],
    [
      { label: 'Personaje', value: 'Drácula' },
      { label: 'Videojuego', value: 'Sonic' },
      { label: 'Pelicula', value: 'Cazafantasmas' },
      { label: 'Previa', value: 'Diversión' },
    ],
    [
      { label: 'Pelicula', value: 'Corazón valiente' },
      { label: 'Dibujos animados', value: 'Ben 10' },
      { label: 'Personaje', value: 'Tiger Woods' },
      { label: 'Objeto', value: 'Llavero' },
    ],
    [
      { label: 'Dibujos animados', value: 'Bob Esponja' },
      { label: 'Profesión', value: 'Bombero' },
      { label: 'Pelicula', value: 'Doctor Dolittle' },
      { label: 'Lugar', value: 'Supermercado' },
    ],
    [
      { label: 'Emoción', value: 'Impaciencia' },
      { label: 'Personaje', value: 'Neymar' },
      { label: 'Animal', value: 'Babosa' },
      { label: 'Pelicula', value: 'Titanic' },
    ],
    [
      { label: 'Dibujos animados', value: 'Dragon Ball' },
      { label: 'Objeto', value: 'Disfraz' },
      { label: 'Pelicula', value: 'Náufrago' },
      { label: 'Emoción', value: 'Optimismo' },
    ],
    [
      { label: 'Personaje', value: 'Elvis Presley' },
      { label: 'Pelicula', value: 'Piratas del Caribe' },
      { label: 'Acción', value: 'Amar' },
      { label: 'Objeto', value: 'Inodoro' },
    ],
    [
      { label: 'Acción', value: 'Meditar' },
      { label: 'Emoción', value: 'Venganza' },
      { label: 'Objeto', value: 'Taxi' },
      { label: 'Animal', value: 'Gato' },
    ],
    [
      { label: 'Comida', value: 'Hamburguesa' },
      { label: 'Personaje', value: 'Jim Carrey' },
      { label: 'Profesión', value: 'Guionista' },
      { label: 'Animal', value: 'Vaca' },
    ],
    [
      { label: 'Comida', value: 'Sushi' },
      { label: 'Lugar', value: 'Baño' },
      { label: 'Objeto', value: 'Metal pesado' },
      { label: 'Videojuego', value: 'Pokemon Go' },
    ],
    [
      { label: 'Pelicula', value: 'Toy Story' },
      { label: 'Animal', value: 'Cangrejo' },
      { label: 'Personaje', value: 'Papá Noel' },
      { label: 'Emoción', value: 'Culpa' },
    ],
    [
      { label: 'Animal', value: 'Lombriz' },
      { label: 'Comida', value: 'Tortilla' },
      { label: 'Personaje', value: 'Will Smith' },
      { label: 'Emoción', value: 'Enojo' },
    ],
    [
      { label: 'Comida', value: 'Papas fritas' },
      { label: 'Pelicula', value: 'Volver al futuro' },
      { label: 'Profesión', value: 'Comediante' },
      { label: 'Acción', value: 'Leer' },
    ],
    [
      { label: 'Estereotipo', value: 'Gamer' },
      { label: 'Comida', value: 'Sandwich' },
      { label: 'Animal', value: 'Mariposa' },
      { label: 'Objeto', value: 'Cuadro' },
    ],
    [
      { label: 'Videojuego', value: 'Tetris' },
      { label: 'Pelicula', value: 'Los rompebodas' },
      { label: 'Dibujos animados', value: 'Los pitufos' },
      { label: 'Animal', value: 'Jirafa' },
    ],
    [
      { label: 'Personaje', value: 'Cristiano Ronaldo' },
      { label: 'Animal', value: 'Conejo' },
      { label: 'Profesión', value: 'Abogado' },
      { label: 'Objeto', value: 'Dardos' },
    ],
    [
      { label: 'Pelicula', value: 'Atracción fatal' },
      { label: 'Acción', value: 'Ladrar' },
      { label: 'Animal', value: 'Mono' },
      { label: 'Lugar', value: 'Peluquería' },
    ],
    [
      { label: 'Objeto', value: 'Cactus' },
      { label: 'Emoción', value: 'Cansancio' },
      { label: 'Lugar', value: 'Cama' },
      { label: 'Acción', value: 'Gastar' },
    ],
    [
      { label: 'Acción', value: 'Masticar' },
      { label: 'Pelicula', value: 'Matrix' },
      { label: 'Objeto', value: 'Documento de identidad' },
      { label: 'Personaje', value: 'Shakira' },
    ],
    [
      { label: 'Objeto', value: 'Caja de herramientas' },
      { label: 'Animal', value: 'Ratón' },
      { label: 'Acción', value: 'Prometer' },
      { label: 'Personaje', value: 'Mike Tyson' },
    ],
    [
      { label: 'Profesión', value: 'Enfermera' },
      { label: 'Pelicula', value: 'Hulk' },
      { label: 'Emoción', value: 'Ansiedad' },
      { label: 'Animal', value: 'Chancho' },
    ],
    [
      { label: 'Pelicula', value: 'E.T, el extraterrestre' },
      { label: 'Dibujos animados', value: 'Rick y Morty' },
      { label: 'Deporte', value: 'Fútbol' },
      { label: 'Animal', value: 'Elefante' },
    ],
    [
      { label: 'Profesión', value: 'Electricista' },
      { label: 'Pelicula', value: 'La Guerra de las galaxias' },
      { label: 'Animal', value: 'Leopardo' },
      { label: 'Personaje', value: 'Donald Trump' },
    ],
    [
      { label: 'Lugar', value: 'Heladería' },
      { label: 'Acción', value: 'Reir' },
      { label: 'Animal', value: 'Koala' },
      { label: 'Videojuego', value: 'Counter Strike' },
    ],
    [
      { label: 'Comida', value: 'Sopa' },
      { label: 'Profesión', value: 'Mecánico' },
      { label: 'Personaje', value: 'Kobe Bryant' },
      { label: 'Objeto', value: 'Aguja' },
    ],
    [
      { label: 'Animal', value: 'Delfín' },
      { label: 'Estereotipo', value: 'Aburrido' },
      { label: 'Emoción', value: 'Terror' },
      { label: 'Acción', value: 'Beber' },
    ],
    [
      { label: 'Comida', value: 'Galletas' },
      { label: 'Animal', value: 'Oso' },
      { label: 'Pelicula', value: 'Los juegos del hambre' },
      { label: 'Profesión', value: 'Modista' },
    ],
    [
      { label: 'Pelicula', value: 'Harry Potter' },
      { label: 'Emoción', value: 'Timidez' },
      { label: 'Profesión', value: 'Personal Trainer' },
      { label: 'Personaje', value: 'Diego Maradona' },
    ],
    [
      { label: 'Pelicula', value: 'Buscando a Nemo' },
      { label: 'Objeto', value: 'Cama de agua' },
      { label: 'Emoción', value: 'Asco' },
      { label: 'Animal', value: 'Pinguino' },
    ],
    [
      { label: 'Objeto', value: 'Monopatín' },
      { label: 'Deporte', value: 'Patinaje' },
      { label: 'Estereotipo', value: 'Chusma' },
      { label: 'Pelicula', value: 'El Exorcista' },
    ],
    [
      { label: 'Animal', value: 'Oveja' },
      { label: 'Dibujos animados', value: 'Pokemon' },
      { label: 'Personaje', value: 'Luis Suárez' },
      { label: 'Objeto', value: 'Auto' },
    ],
    [
      { label: 'Dibujos animados', value: 'Padre de familia' },
      { label: 'Animal', value: 'Tucán' },
      { label: 'Lugar', value: 'Parque de diversiones' },
      { label: 'Acción', value: 'Nadar' },
    ],
    [
      { label: 'Objeto', value: 'Bikini' },
      { label: 'Película', value: 'El código Da Vinci' },
      { label: 'Acción', value: 'Resbalar' },
      { label: 'Comida', value: 'Queso' },
    ],
    [
      { label: 'Acción', value: 'Doblar' },
      { label: 'Emoción', value: 'Tristeza' },
      { label: 'Personaje', value: 'Ricky Martin' },
      { label: 'Profesión', value: 'Maestro pizzero' },
    ],
    [
      { label: 'Objeto', value: 'Globo' },
      { label: 'Profesión', value: 'Albañil' },
      { label: 'Pelicula', value: 'Actividad paranormal' },
      { label: 'Emoción', value: 'Pánico' },
    ],
    [
      { label: 'Profesión', value: 'Piloto' },
      { label: 'Dibujos animados', value: 'Tom y Jerry' },
      { label: 'Acción', value: 'Llorar' },
      { label: 'Emoción', value: 'Excitación' },
    ],
    [
      { label: 'Profesión', value: 'Bartender' },
      { label: 'Objeto', value: 'Remedio' },
      { label: 'Personaje', value: 'Willy Wonka' },
      { label: 'Acción', value: 'Jugar' },
    ],
    [
      { label: 'Personaje', value: 'Rocky Balboa' },
      { label: 'Acción', value: 'Ofrecer' },
      { label: 'Comida', value: 'Pizza' },
      { label: 'Profesión', value: 'Youtuber' },
    ],
    [
      { label: 'Animal', value: 'Hormiga' },
      { label: 'Personaje', value: 'Leonardo DiCaprio' },
      { label: 'Acción', value: 'Pagar' },
      { label: 'Dibujos animados', value: 'He-Man' },
    ],
    [
      { label: 'Emoción', value: 'Odio' },
      { label: 'Animal', value: 'Serpiente' },
      { label: 'Profesión', value: 'Influencer' },
      { label: 'Personaje', value: 'Steve Jobs' },
    ],
    [
      { label: 'Videojuego', value: 'FIFA' },
      { label: 'Personaje', value: 'Buda' },
      { label: 'Pelicula', value: 'El señor de los anillos' },
      { label: 'Objeto', value: 'Lavarropas' },
    ],
    [
      { label: 'Personaje', value: 'Paulo Londra' },
      { label: 'Objeto', value: 'Tatuaje' },
      { label: 'Videojuego', value: 'Candy Crush' },
      { label: 'Lugar', value: 'Playa' },
    ],
    [
      { label: 'Emoción', value: 'Verguenza' },
      { label: 'Profesión', value: 'Doble de riesgo' },
      { label: 'Dibujos animados', value: 'Los Simpsons' },
      { label: 'Pelicula', value: 'Batman' },
    ],
    [
      { label: 'Objeto', value: 'Bicicleta' },
      { label: 'Acción', value: 'Pelear' },
      { label: 'Lugar', value: 'Tren' },
      { label: 'Profesión', value: 'Repartidor de delivery' },
    ],
    [
      { label: 'Objeto', value: 'Billetera' },
      { label: 'Emoción', value: 'Amor' },
      { label: 'Lugar', value: 'Casa' },
      { label: 'Animal', value: 'Hiena' },
    ],
    [
      { label: 'Personaje', value: 'Bill Gates' },
      { label: 'Acción', value: 'Quejarse' },
      { label: 'Emoción', value: 'Euforia' },
      { label: 'Objeto', value: 'Cartera' },
    ],
    [
      { label: 'Profesión', value: 'Paseador de perros' },
      { label: 'Objeto', value: 'Caja fuerte' },
      { label: 'Personaje', value: 'Daddy Yankee' },
      { label: 'Acción', value: 'Abrir' },
    ],
    [
      { label: 'Comida', value: 'Pastas' },
      { label: 'Animal', value: 'Ballena' },
      { label: 'Acción', value: 'Broncear' },
      { label: 'Profesión', value: 'Fotógrafo' },
    ],
    [
      { label: 'Pelicula', value: 'Terminator' },
      { label: 'Emoción', value: 'Hambre' },
      { label: 'Videojuego', value: 'Minecraft' },
      { label: 'Profesión', value: 'Periodista' },
    ],
    [
      { label: 'Pelicula', value: 'La guerra de los mundos' },
      { label: 'Personaje', value: 'Michael Jordan' },
      { label: 'Objeto', value: 'Telaraña' },
      { label: 'Dibujos animados', value: 'Tortugas Ninjas' },
    ],
    [
      { label: 'Personaje', value: 'Papa Francisco' },
      { label: 'Acción', value: 'Probar' },
      { label: 'Animal', value: 'Mosquito' },
      { label: 'Deporte', value: 'Hockey' },
    ],
    [
      { label: 'Emoción', value: 'Placer' },
      { label: 'Acción', value: 'Pelar' },
      { label: 'Animal', value: 'Toro' },
      { label: 'Profesión', value: 'Coordinador de viajes de egresados' },
    ],
    [
      { label: 'Acción', value: 'Elegir' },
      { label: 'Profesión', value: 'Arquitecto' },
      { label: 'Pelicula', value: 'El planeta de los simios' },
      { label: 'Personaje', value: 'Bob Marley' },
    ],
    [
      { label: 'Deporte', value: 'Buceo' },
      { label: 'Previa', value: 'Bebidas' },
      { label: 'Objeto', value: 'Lámpara' },
      { label: 'Personaje', value: 'Darth Vader' },
    ],
    [
      { label: 'Emoción', value: 'Impaciencia' },
      { label: 'Acción', value: 'Destruir' },
      { label: 'Profesión', value: 'Diseñador' },
      { label: 'Objeto', value: 'Pelota de fútbol' },
    ],
    [
      { label: 'Pelicula', value: 'Forrest Gump' },
      { label: 'Objeto', value: 'Escalera' },
      { label: 'Lugar', value: 'Zoológico' },
      { label: 'Comida', value: 'Chocolate' },
    ],
    [
      { label: 'Profesión', value: 'Sommelier' },
      { label: 'Acción', value: 'Regalar' },
      { label: 'Personaje', value: 'Chayanne' },
      { label: 'Animal', value: 'Foca' },
    ],
    [
      { label: 'Animal', value: 'León' },
      { label: 'Profesión', value: 'Azafata' },
      { label: 'Emoción', value: 'Confusión' },
      { label: 'Lugar', value: 'Plaza' },
    ],
    [
      { label: 'Pelicula', value: 'Kill Bill' },
      { label: 'Previa', value: 'Fotos ridículas' },
      { label: 'Comida', value: 'Pochoclos' },
      { label: 'Acción', value: 'Fumar' },
    ],
    [
      { label: 'Pelicula', value: 'La Momia' },
      { label: 'Profesión', value: 'Maestra' },
      { label: 'Acción', value: 'Copiar' },
      { label: 'Objeto', value: 'Meteorito' },
    ],
    [
      { label: 'Profesión', value: 'Plomero' },
      { label: 'Película', value: 'Legalmente rubia' },
      { label: 'Animal', value: 'Caballo' },
      { label: 'Emoción', value: 'Atracción' },
    ],
    [
      { label: 'Objeto', value: 'Compás' },
      { label: 'Deporte', value: 'Karate' },
      { label: 'Animal', value: 'Zorro' },
      { label: 'Personaje', value: 'El Zorro' },
    ],
    [
      { label: 'Profesión', value: 'Niñera' },
      { label: 'Objeto', value: 'Aspiradora' },
      { label: 'Videojuego', value: 'Fortnite' },
      { label: 'Personaje', value: 'El Guasón' },
    ],
    [
      { label: 'Profesión', value: 'Policia' },
      { label: 'Dibujos animados', value: 'Futurama' },
      { label: 'Pelicula', value: 'Mini espías' },
      { label: 'Acción', value: 'Ignorar' },
    ],
    [
      { label: 'Acción', value: 'Coser' },
      { label: 'Animal', value: 'Gallina' },
      { label: 'Dibujos animados', value: 'Los súper campeones' },
      { label: 'Profesión', value: 'Escritor' },
    ],
    [
      { label: 'Pelicula', value: 'Diario de una pasión' },
      { label: 'Animal', value: 'Tortuga' },
      { label: 'Objeto', value: 'Cámara' },
      { label: 'Acción', value: 'Afeitar' },
    ],
    [
      { label: 'Animal', value: 'Perro' },
      { label: 'Personaje', value: 'John Lennon' },
      { label: 'Profesión', value: 'Mago' },
      { label: 'Objeto', value: 'Almohada' },
    ],
    [
      { label: 'Profesión', value: 'Pintor' },
      { label: 'Lugar', value: 'Cine' },
      { label: 'Animal', value: 'Tiburón' },
      { label: 'Acción', value: 'Buscar' },
    ],
    [
      { label: 'Animal', value: 'Cucaracha' },
      { label: 'Objeto', value: 'Timbre' },
      { label: 'Personaje', value: 'Mujer Maravilla' },
      { label: 'Película', value: 'Hannibal' },
    ],
    [
      { label: 'Pelicula', value: 'Zoolander' },
      { label: 'Objeto', value: 'Rallador de queso' },
      { label: 'Personaje', value: 'Floyd Mayweather' },
      { label: 'Profesión', value: 'Comentarista deportivo' },
    ],
    [
      { label: 'Emoción', value: 'Miedo' },
      { label: 'Pelicula', value: 'Misión imposible' },
      { label: 'Acción', value: 'Agradecer' },
      { label: 'Animal', value: 'Camello' },
    ],
    [
      { label: 'Personaje', value: 'Justin Bieber' },
      { label: 'Animal', value: 'Lobo' },
      { label: 'Acción', value: 'Asesinar' },
      { label: 'Película', value: 'Cuatro bodas y un funeral' },
    ],
    [
      { label: 'Acción', value: 'Dormir' },
      { label: 'Personaje', value: 'Brad Pitt' },
      { label: 'Pelicula', value: 'Atrápame si puedes' },
      { label: 'Emoción', value: 'Pasión' },
    ],
    [
      { label: 'Videojuego', value: 'Super Mario' },
      { label: 'Objeto', value: 'Parrilla' },
      { label: 'Dibujos animados', value: 'Scooby Doo' },
      { label: 'Estereotipo', value: 'Fiestero' },
    ],
    [
      { label: 'Personaje', value: 'Michael Jackson' },
      { label: 'Objeto', value: 'Estatua' },
      { label: 'Profesión', value: 'Cervecero' },
      { label: 'Película', value: 'El padrino' },
    ],
    [
      { label: 'Acción', value: 'Posar' },
      { label: 'Profesión', value: 'Coleccionista' },
      { label: 'Pelicula', value: 'Jumanji' },
      { label: 'Personaje', value: 'Goku' },
    ],
    [
      { label: 'Deporte', value: 'Esquí' },
      { label: 'Acción', value: 'Festejar' },
      { label: 'Videojuego', value: 'Mortal Kombat' },
      { label: 'Comida', value: 'Panqueques' },
    ],
    [
      { label: 'Objeto', value: 'Abrelatas' },
      { label: 'Profesión', value: 'Modelo' },
      { label: 'Acción', value: 'Espiar' },
      { label: 'Previa', value: 'Anécdotas' },
    ],
    [
      { label: 'Pelicula', value: 'Hombre Araña' },
      { label: 'Objeto', value: 'Caña de pescar' },
      { label: 'Previa', value: 'Amistades' },
      { label: 'Estereotipo', value: 'Gracioso' },
    ],
    [
      { label: 'Personaje', value: 'Madonna' },
      { label: 'Animal', value: 'Suricata' },
      { label: 'Acción', value: 'Comer' },
      { label: 'Pelicula', value: 'Karate Kid' },
    ],
    [
      { label: 'Animal', value: 'Escorpión' },
      { label: 'Personaje', value: 'Shakespeare' },
      { label: 'Acción', value: 'Sentarse' },
      { label: 'Objeto', value: 'Microondas' },
    ],
    [
      { label: 'Objeto', value: 'Perfume' },
      { label: 'Acción', value: 'Trasplantar' },
      { label: 'Animal', value: 'Cobra' },
      { label: 'Personaje', value: 'Che Guevara' },
    ],
    [
      { label: 'Pelicula', value: '¿Qué pasó ayer?' },
      { label: 'Videojuego', value: 'Los Sims' },
      { label: 'Acción', value: 'Rascar' },
      { label: 'Personaje', value: 'Lionel Messi' },
    ],
    [
      { label: 'Profesión', value: 'Relaciones Públicas' },
      { label: 'Objeto', value: 'Cafetera' },
      { label: 'Animal', value: 'Paloma' },
      { label: 'Comida', value: 'Asado' },
    ],
    [
      { label: 'Pelicula', value: 'Scary Movie' },
      { label: 'Lugar', value: 'Bar' },
      { label: 'Objeto', value: 'Semáforo' },
      { label: 'Profesión', value: 'Chef' },
    ],
    [
      { label: 'Pelicula', value: '60 segundos' },
      { label: 'Animal', value: 'Murciélago' },
      { label: 'Acción', value: 'Matar' },
      { label: 'Objeto', value: 'Papel Higiénico' },
    ],
    [
      { label: 'Objeto', value: 'Piedra' },
      { label: 'Personaje', value: 'Albert Einstein' },
      { label: 'Videojuego', value: 'Street Fighter' },
      { label: 'Acción', value: 'Besar' },
    ],
    [
      { label: 'Personaje', value: 'Marge Simpson' },
      { label: 'Acción', value: 'Estornudar' },
      { label: 'Animal', value: 'Ornitorrinco' },
      { label: 'Comida', value: 'Choripán' },
    ],
    [
      { label: 'Pelicula', value: 'Rápido y furioso' },
      { label: 'Objeto', value: 'Matafuego' },
      { label: 'Emoción', value: 'Vergüenza' },
      { label: 'Profesión', value: 'Salvavidas' },
    ],
    [
      { label: 'Animal', value: 'Perezoso' },
      { label: 'Acción', value: 'Cebar mate' },
      { label: 'Lugar', value: 'La cancha' },
      { label: 'Personaje', value: 'Mr. Bean' },
    ],
    [
      { label: 'Profesión', value: 'Dentista' },
      { label: 'Objeto', value: 'Secador de pelo' },
      { label: 'Emoción', value: 'Alivio' },
      { label: 'Dibujos animados', value: 'Las Chicas Superpoderosas' },
    ],
    [
      { label: 'Videojuego', value: 'Among Us' },
      { label: 'Animal', value: 'Pulpo' },
      { label: 'Acción', value: 'Hacer dedo' },
      { label: 'Personaje', value: 'Spider-Man' },
    ],
    [
      { label: 'Comida', value: 'Milanesa napolitana' },
      { label: 'Profesión', value: 'Árbitro' },
      { label: 'Objeto', value: 'Termo' },
      { label: 'Acción', value: 'Aplaudir' },
    ],
    [
      { label: 'Pelicula', value: 'Jurassic Park' },
      { label: 'Emoción', value: 'Desesperación' },
      { label: 'Animal', value: 'Avestruz' },
      { label: 'Lugar', value: 'El subte' },
    ],
    [
      { label: 'Personaje', value: 'Charly García' },
      { label: 'Objeto', value: 'Micrófono' },
      { label: 'Acción', value: 'Hacer air guitar' },
      { label: 'Profesión', value: 'Cantante de ópera' },
    ],
    [
      { label: 'Dibujos animados', value: 'Hora de Aventura' },
      { label: 'Animal', value: 'Erizo' },
      { label: 'Comida', value: 'Locro' },
      { label: 'Emoción', value: 'Desconfianza' },
    ],
    [
      { label: 'Deporte', value: 'Escalada' },
      { label: 'Objeto', value: 'Paraguas dado vuelta' },
      { label: 'Personaje', value: 'Emanuel Ginóbili' },
      { label: 'Acción', value: 'Hacer flexiones' },
    ],
    [
      { label: 'Profesión', value: 'Astronauta' },
      { label: 'Lugar', value: 'El dentista' },
      { label: 'Emoción', value: 'Nostalgia' },
      { label: 'Animal', value: 'Alpaca' },
    ],
    [
      { label: 'Pelicula', value: 'Nueve reinas' },
      { label: 'Objeto', value: 'Reloj despertador' },
      { label: 'Acción', value: 'Correr en cámara lenta' },
      { label: 'Personaje', value: 'Charlie Chaplin' },
    ],
    [
      { label: 'Videojuego', value: 'Mario Kart' },
      { label: 'Comida', value: 'Alfajor' },
      { label: 'Profesión', value: 'Taxista' },
      { label: 'Animal', value: 'Liebre' },
    ],
    [
      { label: 'Previa', value: 'El que llega último' },
      { label: 'Acción', value: 'Sacarse una selfie' },
      { label: 'Objeto', value: 'Parlante bluetooth' },
      { label: 'Emoción', value: 'Entusiasmo' },
    ],
    [
      { label: 'Personaje', value: 'Cleopatra' },
      { label: 'Animal', value: 'Camaleón' },
      { label: 'Lugar', value: 'El desierto' },
      { label: 'Profesión', value: 'Arqueólogo' },
    ],
    [
      { label: 'Dibujos animados', value: 'Phineas y Ferb' },
      { label: 'Objeto', value: 'Destornillador' },
      { label: 'Acción', value: 'Construir algo' },
      { label: 'Emoción', value: 'Curiosidad' },
    ],
    [
      { label: 'Pelicula', value: 'El exorcista' },
      { label: 'Emoción', value: 'Angustia' },
      { label: 'Profesión', value: 'Cura' },
      { label: 'Objeto', value: 'Vela' },
    ],
    [
      { label: 'Deporte', value: 'Ping pong' },
      { label: 'Animal', value: 'Colibrí' },
      { label: 'Acción', value: 'Regatear el precio' },
      { label: 'Personaje', value: 'Elon Musk' },
    ],
    [
      { label: 'Comida', value: 'Torta de cumpleaños' },
      { label: 'Lugar', value: 'La panadería' },
      { label: 'Profesión', value: 'Cocinero' },
      { label: 'Acción', value: 'Soplar velitas' },
    ],
    [
      { label: 'Personaje', value: 'Gandalf' },
      { label: 'Objeto', value: 'Linterna' },
      { label: 'Emoción', value: 'Furia' },
      { label: 'Animal', value: 'Buho' },
    ],
    [
      { label: 'Videojuego', value: 'Guitar Hero' },
      { label: 'Profesión', value: 'Profesor de gimnasia' },
      { label: 'Acción', value: 'Saltar la soga' },
      { label: 'Emoción', value: 'Agotamiento' },
    ],
    [
      { label: 'Pelicula', value: 'La isla del tesoro' },
      { label: 'Lugar', value: 'Una isla desierta' },
      { label: 'Objeto', value: 'Pelota de vóley' },
      { label: 'Emoción', value: 'Soledad' },
    ],
    [
      { label: 'Estereotipo', value: 'El que llega tarde siempre' },
      { label: 'Acción', value: 'Mirar el reloj' },
      { label: 'Animal', value: 'Caracol' },
      { label: 'Objeto', value: 'Colectivo' },
    ],
    [
      { label: 'Dibujos animados', value: 'Looney Tunes' },
      { label: 'Animal', value: 'Comadreja' },
      { label: 'Comida', value: 'Ravioles' },
      { label: 'Acción', value: 'Perseguir a alguien' },
    ],
    [
      { label: 'Personaje', value: 'Mirtha Legrand' },
      { label: 'Profesión', value: 'Conductor de TV' },
      { label: 'Objeto', value: 'Copa de champagne' },
      { label: 'Emoción', value: 'Indignación' },
    ],
    [
      { label: 'Deporte', value: 'Surf' },
      { label: 'Lugar', value: 'La playa' },
      { label: 'Animal', value: 'Medusa' },
      { label: 'Acción', value: 'Ponerse protector solar' },
    ],
    [
      { label: 'Pelicula', value: 'Los Increíbles' },
      { label: 'Objeto', value: 'Soldadito de juguete' },
      { label: 'Emoción', value: 'Ternura' },
      { label: 'Profesión', value: 'Vaquero' },
    ],
    [
      { label: 'Videojuego', value: 'Roblox' },
      { label: 'Acción', value: 'Cavar un pozo' },
      { label: 'Animal', value: 'Topo' },
      { label: 'Lugar', value: 'Una cueva' },
    ],
    [
      { label: 'Personaje', value: 'Freddie Mercury' },
      { label: 'Acción', value: 'Hacer el moonwalk' },
      { label: 'Objeto', value: 'Guante blanco' },
      { label: 'Emoción', value: 'Emoción contenida' },
    ],
    [
      { label: 'Previa', value: 'El que se duerme primero' },
      { label: 'Comida', value: 'Pizza fría del día anterior' },
      { label: 'Profesión', value: 'Sereno' },
      { label: 'Acción', value: 'Bostezar' },
    ],
    ], [])

  const [step, setStep]       = useState('config')  
  const [players, setPlayers] = useState([])
  const [playerIdx, setPlayerIdx] = useState(0)
  const [cardIdx, setCardIdx]     = useState(0)

  const navigate = useNavigate()

  const iniciar = jugadores => {
    setPlayers(jugadores)
    setPlayerIdx(0)
    setStep('play')
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
      if (players.length) setPlayerIdx(pi => (pi + 1) % players.length)
    }
  }
  const prevCard = () => {
    if (cardIdx > 0) {
      setCardIdx(ci => ci - 1)
      if (players.length) setPlayerIdx(pi => (pi - 1 + players.length) % players.length)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {step === 'config' && (
        <ConfigJugadores
          titulo="MÍMICA"
          acento={ACENTO}
          onIniciar={iniciar}
          onVolver={() => navigate('/juegos')}
        />
      )}

      {step === 'play' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-md">
          {players.length > 0 && (
            <div className="text-lg font-semibold text-blue-600">
              Jugador: {players[playerIdx]}
            </div>
          )}

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