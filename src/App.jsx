import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Juegos from './pages/Juegos';
import Random from './pages/Random';
import Zarpado from './pages/Zarpado';
import Mimica from './pages/Mimica';
import Previa from './pages/Previa';

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/"      element={<Navigate to="/juegos" replace />} />
            <Route path="/juegos" element={<Juegos />} />
            <Route path="/random" element={<Random />} />
            <Route path="/zarpado" element={<Zarpado />} />
            <Route path="/mimica" element={<Mimica />} />
            <Route path="/previa" element={<Previa />} />

            <Route path="*"     element={<Navigate to="/juegos" replace />} />
          </Routes>
      </Router>
  );
}

export default App;