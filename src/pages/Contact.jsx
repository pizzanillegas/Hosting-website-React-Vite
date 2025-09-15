import React from 'react'
import { FaEnvelope, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='bg-gray-50  py-12 md:py-16'>
      <div className='w-[90%] max-w-6xl mx-auto px-4 sm:px-10'>
        <div className='text-center mb-16'>
          <h4 className='text-3xl md:text-4xl font-bold text-dark mb-3'>Get in Touch</h4>
          <p className='text-gray-600 text-lg'>Have questions? Our team is here to help you with any inquiries</p>
        </div>

        <div className='flex flex-col lg:flex-row gap-12 '>
          <form className='lg:w-1/2 bg-white rounded-xl shadow-lg p-6 md:p-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>First Name</label>
                <input type="text" placeholder='Enter first name' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
              <div>
                <label className='block text-gray-700 font-medium mb-2'>Last Name</label>
                <input type="text" placeholder='Enter last name' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
              </div>
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 font-medium mb-2'>Email Address</label>
              <input type="text" placeholder='Enter email address' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 font-medium mb-2'>Subject</label>
              <input type="text" placeholder='Enter subjects' className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary' />
            </div>

            <div className='mb-8'>
              <label className='block text-gray-700 font-medium mb-2'>Message</label>
              <textarea placeholder='Enter message' rows="5" className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary'></textarea>
            </div>

            <button className='w-full px-6 py-3.5 bg-primary text-white font-semibold rounded-lg cursor-pointer hover:bg-primary-dark transition-colors'>Send Message</button>
          </form>

          <div className='lg:w-1/2'>
            <h4 className='text-xl font-bold text-dark mb-8'>Contact Information</h4>
            <div className='bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8 lg:mb-12'>
              <div className='space-y-6 lg:space-y-10'>
                <div className='flex items-start'>
                  <FaLocationDot className='text-primary text-xl mt-1 mr-4 flex-shrink-0' />
                  <div>
                    <span className='block text-gray-700 font-medium'>Address</span>
                    <span className='text-gray-600'>123 Margalla Avenue, F-7/3, Islamabad, 44000</span>
                  </div>
                </div>
                <div className='flex items-start'>
                  <FaPhone className='text-primary text-xl mt-1 mr-4 flex-shrink-0' />
                  <div>
                    <span className='block text-gray-700 font-medium'>Phone</span>
                    <span className='text-gray-600'>00923407852942</span>
                  </div>
                </div>
                <div className='flex items-start'>
                  <FaEnvelope className='text-primary text-xl mt-1 mr-4 flex-shrink-0' />
                  <div>
                    <span className='block text-gray-700 font-medium'>Email</span>
                    <span className='text-gray-600'>alishah.qasim4@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-white rounded-xl shadow-lg p-6 md:p-8'>
              <h3 className='text-xl font-bold text-dark mb-8'>Support Hours</h3>
              <ul className='space-y-5'>
                <li className='flex justify-between'>
                  <span className='text-gray-700 font-medium'>Monday-Friday</span>
                  <span className='text-gray-600'>24/7</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-700 font-medium'>Saturday</span>
                  <span className='text-gray-600'>24/7</span>
                </li>
                <li className='flex justify-between'>
                  <span className='text-gray-700 font-medium'>Sunday</span>
                  <span className='text-gray-600'>24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
