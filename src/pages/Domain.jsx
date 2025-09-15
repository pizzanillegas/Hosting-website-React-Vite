import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { domainData } from '../assets/assets'

const Domain = () => {
  return (
    <div className='bg-gray-50 py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto'>
        <div className='text-center mb-16 md:mx-24 lg:mx-44'>
          <h2 className='text-3xl md:text-4xl font-bold text-dark mb-4 text-balance leading-8'>Find Best Unique Domains Checker!</h2>
          <p className='text-gray-600 text-lg leading-6'>Web Hosting, Domain Name and Hosting Center Solutions</p>
        </div>

        <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 mb-16 flex flex-col md:flex-row gap-4 md:mx-10 lg:mx-24'>
          <input type="text" placeholder='Search for your domain' className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
          <select className='px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'>
            <option>.com</option>
            <option>.in</option>
            <option>.net</option>
            <option>.org</option>
            <option>.co</option>
            <option>.io</option>
          </select>
          <button className='px-6 py-3 bg-primary text-white font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-colors'>Search</button>
        </div>

        <div className='text-center mb-12'>
          <h3 className='text-3xl md:text-4xl font-bold text-dark mb-4'>EliteHost Straight forward Domain Pricing</h3>
        </div>

        <div className='custom-scroll grid overflow-x-auto grid-flow-col auto-cols-max snap-x snap-mandatory lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-4 gap-6'>
          {domainData.map((item, i) => (
            <div key={i} className='bg-white w-2xs sm:w-xs md:w-sm snap-start lg:w-auto rounded-xl shadow-lg p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1'>
              <div className='mb-4 flex justify-center'>
                <img src={item.Image} alt="" className='h-16 w-16 object-contain' />
              </div>
              <p className='text-gray-600 mb-4 leading-5 tracking-tight'>{item.content}</p>
              <span className='text-2xl font-bold text-dark mb-4 block'>{item.price}</span>
              <a href="#" className='inline-flex items-center justify-center text-primary font-semibold group hover:text-primary-dark transition-colors'>
                Get Offer
                <FaArrowRightLong className='ml-2 transition-transform group-hover:translate-x-1' />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Domain
