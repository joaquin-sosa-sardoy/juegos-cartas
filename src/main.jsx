// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import ActualizarApp from './components/ActualizarApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* Cartel de "hay una versión nueva". Ver ActualizarApp.jsx */}
    <ActualizarApp />
  </React.StrictMode>
)
