import React, { useEffect, useState } from 'react'
import { FaServer } from 'react-icons/fa'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'

const Auth = () => {
  const [searchParams] = useSearchParams()
  const [isLogin, setIsLogin] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const mode = searchParams.get('mode')
    setIsLogin(mode !== 'signup')
  }, [searchParams])

  function onSubmit(e) {
    e.preventDefault()
    navigate('/')
  }

  return (
    <div className='h-dvh lg:h-auto lg:min-h-screen bg-gray-50 py-12 md:16'>
      <div className='w-[90%] max-w-6xl mx-auto h-full flex justify-center items-center'>
        <Link className='flex items-center gap-1.5 cursor-pointer fixed top-4 left-4 md:top-6 md:left-6' to={'/'}>
          <FaServer className='text-primary text-xl' />
          <span className='text-2xl tracking-tight font-bold text-dark'>ElitHosting</span>
        </Link>

        <div className='bg-white rounded-xl shadow-lg p-6 w-full max-w-md'>
          <span className='block text-2xl font-bold text-dark text-center mb-4 md:mb-5'>
            {isLogin ? 'Sign In' : 'Sign Up'}
          </span>

          <form className='space-y-5' onSubmit={(e) => onSubmit(e)}>
            {!isLogin && (
              <div>
                <label className='block text-gray-700 font-medium mb-1'>Full Name</label>
                <input type="text" placeholder='Enter your name' className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
            )}

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Email Address</label>
              <input type="email" placeholder='Enter email' className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
            </div>

            <div>
              <label className='block text-gray-700 font-medium mb-1'>Password</label>
              <input type="password" placeholder='Enter password' className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
            </div>

            {!isLogin && (
              <div>
                <label className='block text-gray-700 font-medium mb-1'>Confirm Password</label>
                <input type="password" placeholder='Confirm password' className='w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
            )}

            <div className='flex items-center justify-between'>
              <div className={`flex items-center ${!isLogin && 'items-start'}`}>
                <input type="checkbox" className={`h-4 w-4 ${!isLogin && 'mt-1'} text-primary focus:ring-primary border-gray-300 rounded`} />
                <span className='ml-2 text-gray-700 text-sm'>
                  {isLogin ? 'Remember Me' : (
                    <>
                      I read and accept all {' '}
                      <span className='text-primary cursor-pointer'>terms of use</span> {' '}
                      and {' '}
                      <span className='text-primary cursor-pointer'>privacy policy</span>
                    </>
                  )}
                </span>
              </div>
              {isLogin && <a href="#" className='text-primary text-sm hover:underline'>Forgot Password?</a>}
            </div>

            <button type='submit' className='w-full py-2.5 bg-primary text-white font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-colors'>
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
          </form>

          <p className='text-center text-gray-600 mt-6'>
            {isLogin ? 'Have no account yet?' : 'Already have an account?'}
            <Link to={isLogin ? '/auth?mode=signup' : '/auth?mode=login'} className='text-primary cursor-pointer ml-2 hover:underline'>
              {isLogin ? 'Sign Up' : 'Login'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth
