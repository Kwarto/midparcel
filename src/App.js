import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        #57b279
        #000066
        #ffffff
      </Routes> 
      <Footer />
    </>
  )
}

export default App