import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaServer, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-dark text-white py-12'>
      <div className='w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-12 lg:px-18'>
        <div className='lg:col-span-2'>
          <div className='flex items-center gap-1.5 mb-3 lg:mb-4'>
            <FaServer className='text-primary text-lg lg:text-xl' />
            <span className='text-xl lg:text-2xl tracking-tight font-bold'>EliteHosting</span>
          </div>
          <p className='text-gray-400 mb-4 lg:mb-6 max-w-sm text-sm lg:text-base'>Premium web hosting solutions with blazing fast speed and reliable performance.</p>
          <div className='flex space-x-3 md:space-x-4'>
            <FaTwitter className='text-gray-400 hover:text-primary cursor-pointer transition-colors text-lg md:text-xl' />
            <FaFacebook className='text-gray-400 hover:text-primary cursor-pointer transition-colors text-lg md:text-xl' />
            <FaLinkedin className='text-gray-400 hover:text-primary cursor-pointer transition-colors text-lg md:text-xl' />
            <FaInstagram className='text-gray-400 hover:text-primary cursor-pointer transition-colors text-lg md:text-xl' />
          </div>
        </div>

        <div>
          <h3 className='text-base lg:text-lg font-semibold mb-3 lg:mb-4'>Services</h3>
          <ul className='space-y-2'>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Web Hosting</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>VPS Hosting</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Dedicated Server</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Domain Name</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-base lg:text-lg font-semibold mb-3 lg:mb-4'>Company</h3>
          <ul className='space-y-2'>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>About us</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Blog</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Careers</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Press</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-base lg:text-lg font-semibold mb-3 lg:mb-4'>Support</h3>
          <ul className='space-y-2'>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Help Center</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Contact</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Privacy Policy</Link>
            </li>
            <li>
              <Link className='text-gray-400 hover:text-primary transition-colors text-sm lg:text-base'>Term of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
