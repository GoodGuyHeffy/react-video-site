import React from 'react';
import NavBar from '../components/NavBar';
import GradientBtn from '../components/GradientBtn';

function Peq15page() {
  return (
    <>
         <NavBar />
      <div className='mt-16'>
      <section className="text-white overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-xl" src="https://steeleindustries.com/wp-content/uploads/2023/04/PEQ-15-1.jpg" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-white tracking-widest">L3 Harris</h2>
        <h1 className="text-thBlue text-3xl title-font font-medium mb-1">L3 PEQ-15 visible/infared laser</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-white" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            
          </span>
          
        </div>
        <p className="leading-relaxed">The L3Harris ATPIAL AN/PEQ-15 is a small, lightweight, 
        easy-to-use aiming system with integrated infrared and visible aiming lasers and an infrared
         illuminator. ATPIAL featuers a Rail-Grabber interface and is ruggedized to military environmental
          standards for use on small arms and crew-served weapons.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
         
          
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-red-500">Currently Unavailable</span>
          <GradientBtn title="Call to Order" className="flex ml-auto text-white  py-2 px-6 focus:outline-none rounded" />
          
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </>
  )
}

export default Peq15page;