import { useState } from 'react'
import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Contact from './component/Contact'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Gallery from './component/Gallery'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<div>Error: Page not found</div>} />
      </Routes>
    </HashRouter>
  )
}

export default App
