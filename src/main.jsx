import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css'
import Equipo from './components/Equipo.jsx';
import PaginaPrincipal from './components/PaginaPrincipal'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/equipo/:id" element={<Equipo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
