import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Landing from './pages/Landing'
import Juegos from './pages/Juegos'
import Random from './pages/Random'
import Zarpado from './pages/Zarpado'
import Mimica from './pages/Mimica'
import Previa from './pages/Previa'
import Decisiones from './pages/Decisiones'
import Tincho from './pages/Tincho'
import MasProbable from './pages/MasProbable'
import Pollera from './pages/Pollera'
import NuncaNunca from './pages/NuncaNunca'
import QuienSoy from './pages/QuienSoy'
import AmigosDeMierda from './pages/AmigosDeMierda'
import Impostor from './pages/Impostor'
import EsUn10Pero from './pages/EsUn10Pero'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/juegos" element={<Juegos />} />

        <Route path="/random" element={<Random />} />
        <Route path="/zarpado" element={<Zarpado />} />
        <Route path="/mimica" element={<Mimica />} />
        <Route path="/previa" element={<Previa />} />
        <Route path="/decisiones" element={<Decisiones />} />
        <Route path="/tincho" element={<Tincho />} />
        <Route path="/mas-probable" element={<MasProbable />} />
        <Route path="/pollera" element={<Pollera />} />
        <Route path="/nunca-nunca" element={<NuncaNunca />} />
        <Route path="/quien-soy" element={<QuienSoy />} />
        <Route path="/amigos-de-mierda" element={<AmigosDeMierda />} />
        <Route path="/impostor" element={<Impostor />} />
        <Route path="/esun10pero" element={<EsUn10Pero />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
