import { useState } from 'react'
import './assets/styles/App.scss'
import Navbar from './components/Navbar'
import FormCard from './components/FormCard'
import { Outlet } from 'react-router-dom'
function App() {

  return (
    <div className='App'>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
