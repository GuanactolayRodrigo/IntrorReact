import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputNombre from './components/InputNombre'
import ListaNombres from './components/ListaNombres'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListaNombres/>
    </>
  )
}

export default App
