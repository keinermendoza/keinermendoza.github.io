import { useEffect, useState } from 'react'
import './App.css'
import '../dist/output.css'


function App() {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})
  
  // add listener. using pointer data for update position state
  useEffect(() => {
  
    function handleMove(event) {
      const {clientX, clientY} = event
      setPosition({x:clientX, y:clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    } 

    // cleanup executes each time the dependencies changes  
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }

  }, [enabled])
  
  // hidding pointer when enabled 
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)
  }, [enabled])


  return (
    <section className='h-screen grid  gap-y-5 place-content-center text-center'>
      <h3 className=' mb-10 text-xl font-mono text-center'>
        <a className='underline text-sky-600' href="/">Come Back Home</a>
      </h3>
      
      <h3 className=''>Project 3</h3>

      <div style={{transform: `translate(${position.x}px , ${position.y}px)`}}
      className='absolute bg-orange-600 rounded-full opacity-80
        pointer-events-none -left-5 -top-5 w-10 h-10'></div>

      <button onClick={() => setEnabled(!enabled)}
        className='px-2 py-1 rounded bg-slate-600 border border-black'>
        {enabled ? 'Desactivate' : 'Activate'} Follow Cursor
      </button>
    </section>
  )
}

export default App
