import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Hosting from './pages/Hosting'
import Domain from './pages/Domain'
import About from './pages/About'
import Contact from './pages/Contact'
import Auth from './pages/Auth'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation()
  const hideHeaderFooter = location.pathname === '/auth'

  return (
    <>
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hosting' element={<Hosting />} />
        <Route path='/domain' element={<Domain />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
