import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-8'>
        <h1 className='text-3xl font-bold text-blue-600 mb-4'>
          Vítej
        </h1>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Přidat úkol
        </button>
      </div>
    </>
  )
}

export default App
