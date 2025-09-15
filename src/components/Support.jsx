import React from 'react'
import { assets } from '../assets/assets'
import { FaCheckCircle } from 'react-icons/fa'

const Support = () => {
  return (
    <div className='bg-gray-50 py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between'>
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <img src={assets.expertSupport} alt="24/7 Support" className="rounded-lg shadow-lg w-full" />
        </div>

        <div className='lg:w-1/2 lg:pl-10 xl:pl-12'>
          <h4 className="text-2xl md:text-3xl text-balance font-bold text-dark mb-6 md:mb-8">24/7 Support for Your Success</h4>
          <ul className='space-y-3 md:space-y-4'>
            <li className='flex items-start'>
              <FaCheckCircle className='text-green-500 mt-1 mr-3 md:mr-4 flex-shrink-0 text-base md:text-lg' />
              <span className='text-gray-700 text-base md:text-lg'>Ensure support is available 24/7, including weekends and holidays.</span>
            </li>
            <li className='flex items-start'>
              <FaCheckCircle className='text-green-500 mt-1 mr-3 md:mr-4 flex-shrink-0 text-base md:text-lg' />
              <span className='text-gray-700 text-base md:text-lg'>Ensure support is available 24/7, including weekends and holidays.</span>
            </li>
            <li className='flex items-start'>
              <FaCheckCircle className='text-green-500 mt-1 mr-3 md:mr-4 flex-shrink-0 text-base md:text-lg' />
              <span className='text-gray-700 text-base md:text-lg'>Ensure support is available 24/7, including weekends and holidays.</span>
            </li>
            <li className='flex items-start'>
              <FaCheckCircle className='text-green-500 mt-1 mr-3 md:mr-4 flex-shrink-0 text-base md:text-lg' />
              <span className='text-gray-700 text-base md:text-lg'>Ensure support is available 24/7, including weekends and holidays.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Support
