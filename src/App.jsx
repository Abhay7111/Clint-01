import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full flex flex-col items-center'>
      <div className='overflow-hidden w-full'>
      <Nav/>
      </div>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
