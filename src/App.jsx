
import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
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

function ProtectedRoute({ children }) {
  const loggedIn = sessionStorage.getItem('loggedIn') === 'true'
  return loggedIn
    ? children
    : <Navigate to="/" replace />
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/juegos" replace />} />
        <Route path="/juegos" element={<Juegos />} />

        <Route path="/random" element={<ProtectedRoute><Random /></ProtectedRoute> }/>
        <Route path="/zarpado" element={<ProtectedRoute><Zarpado /></ProtectedRoute>} />
        <Route path="/mimica"   element={<ProtectedRoute><Mimica   /></ProtectedRoute>} />
        <Route path="/previa"   element={<ProtectedRoute><Previa   /></ProtectedRoute>} />
        <Route path="/decisiones" element={<ProtectedRoute><Decisiones /></ProtectedRoute>} />
        <Route path="/tincho"     element={<ProtectedRoute><Tincho    /></ProtectedRoute>} />
        <Route path="/mas-probable" element={<ProtectedRoute><MasProbable /></ProtectedRoute>} />
        <Route path="/pollera"    element={<ProtectedRoute><Pollera   /></ProtectedRoute>} />
        <Route path="/nunca-nunca" element={<ProtectedRoute><NuncaNunca /></ProtectedRoute>} />
        <Route path="/quien-soy"  element={<ProtectedRoute><QuienSoy  /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/juegos" replace />} />
      </Routes>
    </Router>
  )
}
