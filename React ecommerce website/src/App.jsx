import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NaveItems from './components/NaveItems'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NaveItems />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
