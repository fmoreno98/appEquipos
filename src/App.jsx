import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardEquipo from './components/CardEquipo'
import CardJugador from './components/CardJugador'
import JugadorEspecifico from './components/JugadorEspecifico'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'> 
      <JugadorEspecifico />
        
    </div>
  )
}

export default App
