import React, { useEffect, useState } from 'react'
import { FaBars, FaServer } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setShowMenu(false)
  }, [location])

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showMenu])

  return (
    <nav className='bg-white sticky top-0 shadow z-50'>
      <div className='w-[90%] max-w-6xl mx-auto flex justify-between items-center py-4'>
        <div className='flex items-center space-x-14'>
          <div className='flex items-center gap-1.5'>
            <FaServer className='text-xl text-primary' />
            <span className='text-2xl tracking-tight font-bold text-dark'>EliteHosting</span>
          </div>
          <div className='hidden lg:flex space-x-6 text-base font-semibold text-dark'>
            <Link className={`relative after:content-[''] after:block after:h-[0.12rem] after:bg-primary after:absolute after:top-5.5 after:transition-[width] ${location.pathname === '/' ? 'text-primary after:w-full' : 'hover:text-primary after:w-0 hover:after:w-full transition-color duration-300'}`} to="/">Home</Link>
            <Link className={`relative after:content-[''] after:block after:h-[0.12rem] after:bg-primary after:absolute after:top-5.5 after:transition-[width] ${location.pathname === '/hosting' ? 'text-primary after:w-full' : 'hover:text-primary after:w-0 hover:after:w-full transition-color duration-300'}`} to={'/hosting'}>Hosting</Link>
            <Link className={`relative after:content-[''] after:block after:h-[0.12rem] after:bg-primary after:absolute after:top-5.5 after:transition-[width] ${location.pathname === '/domain' ? 'text-primary after:w-full' : 'hover:text-primary after:w-0 hover:after:w-full transition-color duration-300'}`} to={'/domain'}>Domain</Link>
            <Link className={`relative after:content-[''] after:block after:h-[0.12rem] after:bg-primary after:absolute after:top-5.5 after:transition-[width] ${location.pathname === '/about' ? 'text-primary after:w-full' : 'hover:text-primary after:w-0 hover:after:w-full transition-color duration-300'}`} to={'/about'}>About</Link>
            <Link className={`relative after:content-[''] after:block after:h-[0.12rem] after:bg-primary after:absolute after:top-5.5 after:transition-[width] ${location.pathname === '/contact' ? 'text-primary after:w-full' : 'hover:text-primary after:w-0 hover:after:w-full transition-color duration-300'}`} to={'/contact'}>Contact</Link>
          </div>
        </div>

        <div className='hidden lg:flex items-center space-x-6 text-base'>
          <Link className='text-dark font-semibold hover:text-primary transition-colors' to={'/auth?mode=login'}>Login</Link>
          <Link className='px-4 py-2 bg-primary text-white font-semibold rounded hover:bg-primary-dark transition-colors' to={'/auth?mode=signup'}>Sign Up</Link>
        </div>

        <div className='z-50 lg:hidden' onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? <FaBars className='text-2xl text-dark cursor-pointer' /> : <FaXmark className='text-2xl text-dark cursor-pointer' />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed h-dvh w-[70%] bg-primary top-0 right-0 z-40 flex flex-col transform transition-transform duration-300 ${!showMenu ? 'translate-x-full' : 'translate-x-0'} lg:hidden`}>
        <div className='flex items-center gap-1.5 p-6 border-b border-white/20'>
          <FaServer className='text-white text-xl' />
          <span className='text-2xl tracking-tight font-bold text-white'>EliteHosting</span>
        </div>

        <div className='flex-1 p-6 space-y-6 sm:flex flex-col items-center justify-center sm:space-y-12'>
          <Link className={`text-lg font-semibold ${location.pathname === '/' ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors block`} to={'/'}>Home</Link>
          <Link className={`text-lg font-semibold ${location.pathname === '/hosting' ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors block`} to={'/hosting'}>Hosting</Link>
          <Link className={`text-lg font-semibold ${location.pathname === '/domain' ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors block`} to={'/domain'}>Domain</Link>
          <Link className={`text-lg font-semibold ${location.pathname === '/about' ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors block`} to={'/about'}>About</Link>
          <Link className={`text-lg font-semibold ${location.pathname === '/contact' ? 'text-secondary' : 'text-white'} hover:text-secondary transition-colors block`} to={'/contact'}>Contact</Link>
        </div>

        <div className='flex flex-col space-y-4 border-t border-white/20 p-6'>
          <Link className='bg-white text-primary py-2.5 text-center font-semibold rounded hover:bg-gray-100 transition-colors' to={'/auth?mode=login'}>Login</Link>
          <Link className='bg-secondary text-white py-2.5 text-center font-semibold rounded hover:bg-secondary-dark transition-colors' to={'/auth?mode=signup'}>Sign up</Link>
        </div>
      </div>

      {/* Overlay */}
      {showMenu && (
        <div className='fixed inset-0 bg-black/50 z-30 lg:hidden' onClick={() => setShowMenu(false)} />
      )}
    </nav>
  )
}

export default Navbar
