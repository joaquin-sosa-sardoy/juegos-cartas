/* Catálogo de juegos: lo usan el menú y la presentación. */
export const GAME_MODES = [
  { slug: 'previa',       label: 'PREVIA',                icono: '🍻', bg: 'bg-white border border-gray-300', text: 'text-black', chip: 'bg-white text-slate-900' },
  { slug: 'zarpado',      label: 'ZARPADO',               icono: '🔥', bg: 'bg-red-500',       text: 'text-white', chip: 'bg-red-500 text-white' },
  { slug: 'mimica',       label: 'MÍMICA',                icono: '🎭', bg: 'bg-blue-600',      text: 'text-white', chip: 'bg-blue-600 text-white' },
  { slug: 'random',       label: 'RANDOM',                icono: '🎲', bg: 'bg-green-700',     text: 'text-white', chip: 'bg-green-700 text-white' },
  { slug: 'decisiones',   label: 'DECISIONES',            icono: '⚖️', bg: 'bg-cyan-500',      text: 'text-black', chip: 'bg-cyan-500 text-black' },
  { slug: 'tincho',       label: 'TINCHO',                icono: '😎', bg: 'bg-amber-400',     text: 'text-black', chip: 'bg-amber-400 text-black' },
  { slug: 'mas-probable', label: 'QUIÉN ES MÁS PROBABLE', icono: '👉', bg: 'bg-fuchsia-400',   text: 'text-white', chip: 'bg-fuchsia-400 text-white' },
  { slug: 'pollera',      label: 'POLLERA',               icono: '💘', bg: 'bg-pink-500',      text: 'text-white', chip: 'bg-pink-500 text-white' },
  { slug: 'nunca-nunca',  label: 'YO NUNCA NUNCA',        icono: '🙊', bg: 'bg-pink-800',      text: 'text-white', chip: 'bg-pink-800 text-white' },
  { slug: 'quien-soy',    label: 'QUIÉN SOY',             icono: '🕵️', bg: 'bg-emerald-800',   text: 'text-white', chip: 'bg-emerald-800 text-white' },
  { slug: 'amigos-de-mierda', label: 'AMIGOS DE MIERDA',  icono: '😈', bg: 'bg-slate-700',     text: 'text-white', chip: 'bg-slate-700 text-white' },
  { slug: 'impostor',     label: 'IMPOSTOR',              icono: '🫥', bg: 'bg-purple-700',    text: 'text-white', chip: 'bg-purple-700 text-white' },
  { slug: 'esun10pero',   label: 'ES UN 10 PERO...',      sublabel: '(SIN FRASES)', palo: 'oros', bg: 'bg-teal-700',  text: 'text-white', chip: 'bg-teal-700 text-white', destacado: true },
  { slug: 'esun10perofrases', label: 'ES UN 10 PERO...',  sublabel: '(CON FRASES)', palo: 'copas', bg: 'bg-teal-800', text: 'text-white', chip: 'bg-teal-800 text-white', nuevo: true, destacado: true },
  { slug: 'tag-del-novio', label: 'TAG DEL NOVIO',        icono: '💍', bg: 'bg-rose-600',      text: 'text-white', chip: 'bg-rose-600 text-white', nuevo: true },
  { slug: 'tag-del-ex',   label: 'TAG DEL EX',            icono: '🦌', bg: 'bg-amber-800',     text: 'text-white', chip: 'bg-amber-800 text-white', nuevo: true },
  { slug: '',             label: 'PRÓXIMOS JUEGOS...',    icono: '❓', bg: 'bg-slate-800',     text: 'text-white' }
]

export const JUEGOS_DISPONIBLES = GAME_MODES.filter(g => g.slug).length

/* Cartas repartidas entre todos los juegos (contadas sobre los datos de cada página). */
export const TOTAL_CARTAS = 1000

export const REDES = [
  {
    nombre: 'Spotify',
    handle: 'joaquin sosa',
    url: 'https://open.spotify.com/user/gc6zteqnqrnq0hl3vygnalvmg',
    hover: 'hover:bg-green-500 hover:border-green-500'
  },
  {
    nombre: 'Instagram',
    handle: '@joaquin.sosa_',
    url: 'https://instagram.com/joaquin.sosa_',
    hover: 'hover:bg-pink-600 hover:border-pink-600'
  },
  {
    nombre: 'Twitter',
    handle: '@joaquiin_sosa',
    url: 'https://x.com/joaquiin_sosa',
    hover: 'hover:bg-sky-500 hover:border-sky-500'
  }
]

export const FRANJA = [
  'bg-amber-400',
  'bg-red-500',
  'bg-fuchsia-500',
  'bg-teal-500',
  'bg-blue-600',
  'bg-green-600'
]
