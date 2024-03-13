import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import About from './Page/About'
import Contact from './Page/Contact'
import Project from './Page/Project'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
