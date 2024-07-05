import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardEquipo from './components/CardEquipo'
import CardJugador from './components/CardJugador'
import JugadorEspecifico from './components/JugadorEspecifico'
import Equipo from './components/Equipo'
import PartidoMin from './components/PartidoMin'
import { Outlet } from 'react-router-dom'

function App() {

  return (

        
    <div className="caja">
      <header className="portada">
        <img src="/img/YOUR.png" alt="Logo de la App"/>
      </header>
      <Outlet />
      <footer>
        <p>&copy; 2023 YourTrainer. Todos los derechos reservados.</p>
      </footer>

    </div>
        
  )
}

export default App
