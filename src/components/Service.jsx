import React from 'react'
import { serviceData } from '../assets/assets'

const Service = () => {
  return (
    <div className='bg-white py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-12 lg:mb-16">Why EliteHost</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10'>
          {serviceData.map((item, i) => (
            <div key={i} className='text-center p-5 md:p-6 lg:p-7 rounded-lg transition-all duration-300 hover:shadow-lg'>
              <div className='mb-4 md:mb-5 lg:mb-6 flex justify-center'>
                <img src={item.Image} alt="" className='h-20 w-20 md:h-25 md:w-25 lg:h-30 lg:w-30 object-cover rounded-full' />
              </div>
              <h3 className='text-lg md:text-xl font-bold text-dark mb-2 md:mb-3'>{item.title}</h3>
              <p className='text-gray-600 text-sm md:text-base'>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Service
