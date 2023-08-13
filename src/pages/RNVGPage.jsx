import React from 'react';
import NavBar from '../components/NavBar';
import GradientBtn from '../components/GradientBtn';
import { Link } from 'react-router-dom';

function RNVGPage() {
  return (
    <>
      <NavBar />
      <div className='mt-16'>
      <section className="text-white overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-xl" src="https://steeleindustries.com/wp-content/uploads/2023/05/RNVG-2.jpg" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-white tracking-widest">AB Night Vision</h2>
        <h1 className="text-thBlue text-3xl title-font font-medium mb-1">Ruggedized Night Vision Goggle - RNVG</h1>
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
        <p className="leading-relaxed">The AB Night Vision RNVG is one of the most durable dual tube night vision system on the market. 
        This unit is crafted out of 7075 aluminum making it very strong, and runs off a single CR123 battery up to 16
         hours of use.  This unit comes with our 10 year warranty, and our limited lifetime service.<br />

Are you interested in a more personal buying experience? We offer customers the option to view our Ready To Ship 
options which features all of our night vision systems that we have in stock ready to ship overnight. You will 
be able to view images through the unit, the specifications for the unit, and be able to select the one that 
works for you. If you have questions, or don't know what will work for you, you can always submit a form on our Contact page, or give us a call and we would be more than happy to figure out which system will best fit your
 specific needs.</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
         
          
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-thBlue">$6,799 - $8,999</span>
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

export default RNVGPage;