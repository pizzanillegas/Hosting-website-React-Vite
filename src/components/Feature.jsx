import React from 'react'
import { serviceProvider } from '../assets/assets'
import { FaArrowRightLong } from 'react-icons/fa6'

const Feature = () => {
  return (
    <section className='bg-white py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <div className='text-center max-w-2xl mx-auto mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-dark mb-4 leading-8'>We Provide Hosting Solutions</h2>
          <p className='text-gray-600 text-lg leading-6'>Select your solution and we will help you narrow down our best high-speed options to fit your needs.</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-16 sm:justify-items-center'>
          {serviceProvider.map((item, i) => (
            <div key={i} className='sm:min-w-lg md:min-w-auto p-5 lg:p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <div className='mb-5'>
                <img src={item.Image} alt="" className='h-40 w-full object-cover rounded-lg' />
              </div>
              <h3 className='text-xl font-bold text-dark mb-3'>{item.title}</h3>
              <p className='text-gray-600 mb-5 leading-5 max-w-3xs'>{item.content}</p>
              <a href="#" className='inline-flex items-center text-primary font-semibold group hover:text-primary-dark transition-colors'>
                View Details
                <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Feature
