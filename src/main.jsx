import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import AdminContainer from './Components/AdminContainer.jsx'
import CreateAdmin from './Components/CreateAdmin.jsx'
import TestFirebase from './Components/TestFirebase.jsx'
import DebugCuadroHonor from './Components/DebugCuadroHonor.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminContainer />} />
        <Route path="/create-admin" element={<CreateAdmin />} />
        <Route path="/test-firebase" element={<TestFirebase />} />
        <Route path="/debug-cuadro" element={<DebugCuadroHonor />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
