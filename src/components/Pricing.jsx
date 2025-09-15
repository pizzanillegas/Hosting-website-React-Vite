import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Pricing = () => {
  return (
    <section className='bg-gray-50 py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <div className='text-center max-w-2xl mx-auto mb-12 lg:mb-16'>
          <h2 className='text-3xl md:text-4xl font-bold text-dark mb-4 leading-8'>Choose Hosting Plan</h2>
          <p className='text-gray-600 text-lg leading-6'>Globally incubate next-generation e-services via state of the art technology.</p>
        </div>

        <div className='flex flex-col md:flex-row gap-6 lg:gap-8 items-center md:items-stretch justify-center'>

          <div className='bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col w-3xs transition-all duration-300 hover:shadow-xl'>
            <div className='flex-1'>
              <h3 className='text-xl md:text-2xl font-bold text-dark mb-2'>Starter</h3>
              <p className='text-gray-600 mb-4'>Perfect for small websites and blogs</p>
            </div>
            <div className='mb-4 md:mb-6'>
              <span className='text-3xl font-bold text-dark'>$2.99</span>
              <span className='text-gray-500 text-base'>/month</span>
            </div>
            <button className='px-5 py-2.5 bg-gray-100 text-dark text-base font-semibold rounded-lg cursor-pointer hover:bg-gray-200 transition-colors mb-6'>Get Started</button>
            <ul className='space-y-3 md:space-y-4 text-sm lg:text-base'>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>1 Website</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>10 GB SSD Storage</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Unlimited Bandwidth</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Free SSL Certificate</span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col w-3xs border-2 border-primary relative transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1'>
            <span className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white block px-4 py-1 rounded-full text-sm font-semibold'>
              Popular
            </span>
            <div className='flex-1'>
              <h3 className='text-xl md:text-2xl font-bold text-dark mb-2'>Business</h3>
              <p className='text-gray-600 mb-4'>Ideal for business growing</p>
            </div>
            <div className='mb-4 md:mb-6'>
              <span className='text-3xl font-bold text-dark'>$5.99</span>
              <span className='text-gray-500 text-base'>/month</span>
            </div>
            <button className='px-5 py-2.5 bg-primary text-white text-base font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-colors mb-6'>Get Started</button>
            <ul className='space-y-3 md:space-y-4 text-sm lg:text-base'>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Unlimited Websites</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>50 GB SSD Storage</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Unlimited Bandwidth</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Free SSL Certificate</span>
              </li>
            </ul>
          </div>

          <div className='bg-white rounded-xl shadow-lg p-6 lg:p-8 flex flex-col w-3xs transition-all duration-300 hover:shadow-xl'>
            <div className='flex-1'>
              <h3 className='text-xl md:text-2xl font-bold text-dark mb-2'>Enterprise</h3>
              <p className='text-gray-600 mb-4'>For high-traffic websites</p>
            </div>
            <div className='mb-4 md:mb-6'>
              <span className='text-3xl font-bold text-dark'>$12.99</span>
              <span className='text-gray-500 text-base'>/month</span>
            </div>
            <button className='px-5 py-2.5 bg-gray-100 text-dark text-base font-semibold rounded-lg cursor-pointer hover:bg-gray-200 transition-colors mb-6'>Get Started</button>
            <ul className='space-y-3 md:space-y-4 text-sm lg:text-base'>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Unlimited Websites</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>200 GB SSD Storage</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Unlimited Bandwidth</span>
              </li>
              <li className='flex items-center'>
                <FaCheckCircle className='text-green-500 mr-3' />
                <span className='text-gray-700'>Free SSL Certificate</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Pricing
