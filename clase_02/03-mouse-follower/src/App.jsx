import { useState, useEffect } from 'react'
import './App.css'



const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // console.log('efecto', { enabled })

    const handleMove = (event) => {
      const { clientX, clientY } = event
      // console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)

      return () => {
        window.removeEventListener('pointermove', handleMove)
      }
    }
  }, [enabled])
  return (
    <>
      <h3>Proyecto 3</h3>
      <div className="bola" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </>
  )
}


function App() {
  const [mounted, setMounted] = useState(true)

  return (
  <main> 
    {mounted &&<FollowMouse />}
    <button onClick={() => setMounted(!mounted)}>
      Toggle mounted FollowMouse component
    </button>
  </main>
  )
}

export default App
