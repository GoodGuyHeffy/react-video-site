import React from 'react';
import NavBar from '../components/NavBar';
import GradientBtn from '../components/GradientBtn';

function MAWLPage() {

  return (
    <>
        <NavBar />
      <div className='mt-16'>
      <section className="text-white overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded-xl" src="https://steeleindustries.com/wp-content/uploads/2021/11/MAWL-ER-BLK-1-600x600.jpg" />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-white tracking-widest">B.E. MEYERS</h2>
        <h1 className="text-thBlue text-3xl title-font font-medium mb-1">MAWL-ER IR/Visible Laser</h1>
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
        <p className="leading-relaxed">The MAWL®-ER (Extended Range) is a Class 3B multi-function laser
         illuminator/aiming device. It is a high powered variant of the MAWL®-DA with infrared illuminators 
         intended to offer greater capability at distance or in environments with excessive ambient lighting
          conditions. The device is capable of emitting a visible green 520 nm pointer beam, 860 nm invisible 
          infrared illumination beams, and an 852 nm IR point beam..</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
         
          
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-thBlue">$3,599</span>
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

export default MAWLPage;