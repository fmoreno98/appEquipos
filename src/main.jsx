import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import AddPartido from './components/AddPartido.jsx';
import Equipo from './components/Equipo.jsx';
import PaginaPrincipal from './components/PaginaPrincipal'
import AddEquipo from './components/AddEquipo.jsx';
import EditEquipo from './components/EditEquipo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}>
          <Route index element={<PaginaPrincipal />} />
          <Route path="/equipo/:id" element={<Equipo />} />
          <Route path="/addequipo" element={<AddEquipo />}/>
          <Route path="/edditequipo/:id" element={<EditEquipo />}/>

          <Route path="/addpartido/:id" element={<AddPartido />}/>

          </Route>
          
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
