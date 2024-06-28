import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardEquipo from './components/CardEquipo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'> 
      <CardEquipo />
      <CardEquipo />
        
    </div>
  )
}

export default App
