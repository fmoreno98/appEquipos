import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardEquipo from './components/CardEquipo'
import Equipo from './components/Equipo'
import PartidoMin from './components/PartidoMin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="caja">
      <Equipo/>

    </div>
        
  )
}

export default App
