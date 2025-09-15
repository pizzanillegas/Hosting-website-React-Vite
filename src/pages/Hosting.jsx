import React from 'react'
import { FaCheckCircle, FaCloud, FaDatabase, FaServer } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { assets } from '../assets/assets'

const Hosting = () => {
  return (
    <div className='bg-white py-12'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <div className='text-center mb-14 md:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-dark mb-3'>Web Hosting Solution</h2>
          <p className='text-gray-600 text-lg leading-6'>Find the perfect hosting plan for your website needs</p>
        </div>

        {/* Shared Hosting */}
        <div className='flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-24'>
          <div className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'>
            <div className='flex items-center mb-4'>
              <FaServer className='text-primary text-2xl mr-3' />
              <h3 className='text-2xl font-bold text-dark'>Shared Hosting</h3>
            </div>
            <p className='text-gray-600 mb-6 leading-5'>Perfect for beginners and small websites. Get started with our affordable shared hosting plans.</p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Easy-to-use control panel</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>One-click WordPress install</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Free website migration</span>
              </li>
            </ul>
            <a href="#" className='inline-flex items-center text-primary font-semibold group hover:text-primary-dark transition-colors'>
              View Details
              <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
            </a>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={assets.sharedDomainImg} alt="Shared Hosting" className='rounded-lg shadow-xl w-full max-w-md' />
          </div>
        </div>

        {/* VPS Hosting */}
        <div className='flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-24'>
          <div className='lg:w-1/2 mb-10 lg:mb-0 lg:order-1 lg:pl-10'>
            <div className='flex items-center mb-4'>
              <FaCloud className='text-primary text-2xl mr-3' />
              <h3 className='text-2xl font-bold text-dark'>VPS Hosting</h3>
            </div>
            <p className='text-gray-600 mb-6 leading-5'>Get more power and flexibility with our Virtual Private Server solutions.</p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Dedicated resources</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Full root access</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Free website migration</span>
              </li>
            </ul>
            <a href="#" className='inline-flex items-center text-primary font-semibold group hover:text-primary-dark transition-colors'>
              View Details
              <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
            </a>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={assets.vpsDomainImg} alt="VPS Hosting" className='rounded-lg shadow-xl w-full max-w-md' />
          </div>
        </div>

        {/* Dedicated Server */}
        <div className='flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-24'>
          <div className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'>
            <div className='flex items-center mb-4'>
              <FaDatabase className='text-primary text-2xl mr-3' />
              <h3 className='text-2xl font-bold text-dark'>Dedicated Server</h3>
            </div>
            <p className='text-gray-600 mb-6 leading-5'>Maximum performance and security with your own dedicated server.</p>
            <ul className='space-y-3 mb-8'>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Entire server resources</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>Enhanced security</span>
              </li>
              <li className='flex items-start'>
                <FaCheckCircle className='text-green-500 mt-1 mr-3 flex-shrink-0' />
                <span className='text-gray-700'>24/7 monitoring</span>
              </li>
            </ul>
            <a href="#" className='inline-flex items-center text-primary font-semibold group hover:text-primary-dark transition-colors'>
              View Details
              <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
            </a>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={assets.serverDomainImg} alt="Dedicated Server" className='rounded-lg shadow-xl w-full max-w-md' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosting