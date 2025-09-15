import React from 'react'
import { assets, teamData } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-white py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h1 className='text-3xl md:text-4xl font-bold text-dark mb-4'>EliteHosting</h1>
          <p className='text-gray-600 text-lg leading-6'>Learn about our story and mission to provide the best hosting experience</p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-between mb-20 lg:mb-24'>
          <div className='lg:w-1/2 mb-10 lg:mb-0 lg:pr-10'>
            <h2 className='text-2xl md:text-3xl font-bold text-dark mb-6'>Our Story</h2>
            <p className='text-gray-600 mb-4'>Founded in 2010, Elithost started with a simple mission: to make web hosting accessible, reliable, and affordable for everyone.</p>
            <p className='text-gray-600 mb-4'>What began as a small startup with a single server has grown into a global hosting provider with data centers around the world and thousands of satisfied customers.</p>
            <p className='text-gray-600'>Today, we continue to innovate and expand our services while maintaining the personal touch that sets us apart from larger corporations.</p>
          </div>
          <div className='lg:w-1/2 flex justify-center'>
            <img src={assets.heroImg} alt="About Elithosting" className='rounded-lg shadow-xl w-full max-w-md' />
          </div>
        </div>

        <div className='text-center mb-12'>
          <h4 className='text-3xl md:text-4xl font-bold text-dark mb-4 tracking-tight'>Part of our team</h4>
          <p className='text-gray-600 text-lg max-w-2xl mx-auto leading-6 tracking-tight'>Over the last 19 years, Site Ground has grown to more than A considerable number of our people started working</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10 lg:gap-12 sm:px-16 md:px-0 lg:px-16'>
          {teamData.map((item, i) => (
            <div key={i} className={`bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''} ${i === 1 ? 'md:col-span-2 lg:col-span-1' : ''} ${i === 2 ? 'md:col-span-2 md:col-start-2 lg:col-span-1' : ''}`}>
              <div className='mb-4 flex justify-center'>
                <img src={item.Image} alt={item.name} className='h-32 w-32 object-cover rounded-full' />
              </div>
              <div>
                <h5 className='text-xl font-bold text-dark mb-1'>{item.name}</h5>
                <span className='text-primary font-medium'>{item.designation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
