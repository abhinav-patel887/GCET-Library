import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
