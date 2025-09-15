import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className='flex bg-gradient-to-br from-blue-50 to-indigo-50 py-12 md:py-16 lg:py-22'>
      <div className='w-[90%] max-w-6xl mx-auto px-2 md:px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-x-6 gap-y-12'>
        <div>
          <div className='inline-block bg-primary/10 px-4 py-2 rounded-full'>
            <span className='text-primary font-semibold text-sm'>Supercharge your website today</span>
          </div>
          <h1 className='text-3xl font-bold text-dark my-4'>
            <span className='block'>Premium Web Hosting</span>
            <hr className='w-16 h-1.5 bg-primary border-0 rounded my-3' />
            <span className='block'>Solution for your Business</span>
          </h1>
          <p className='text-gray-600 text-base max-w-lg mb-6'>
            Lightning-fast hosting with 99.9% uptime, top-notch security, and 24/7 expert support to keep your website running.
          </p>
          <div className='flex flex-col sm:flex-row gap-3'>
            <button className='px-6 py-3 bg-primary text-white font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-colors shadow-md'>Get Started</button>
            <button className='px-6 py-3 bg-white text-dark border border-gray-300 font-semibold rounded-lg cursor-pointer hover:bg-gray-50 transition-colors shadow-sm'>View Plans</button>
          </div>
        </div>

        <div className='relative'>
          <img src={assets.heroImg} alt="" className='rounded-lg shadow-xl w-full min-h-80 object-cover max-w-md' />
          <div className='absolute -bottom-3 -left-3 bg-white p-3 rounded-lg shadow-md flex items-center'>
            <div className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse'></div>
            <span className='text-xs font-medium'>99.9% Uptime</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
