import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Changer from './Changer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Changer/>
    
    </>
  )
}

export default App
