import React from 'react';

function Questions() {
  return (
    
        <div name="F.A.Q" className="w-full text-white py-24">

<div className="max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full items-center text-center">

    <div className="p-10">
        <p className="text-4xl leading-normal font-bold inline border-b-4 border-teal-500">Frequently Asked Questions</p>
    </div>

    <div className='border border-thBlue rounded-xl my-4 px-4 py-4'>
    <p className="text-4xl font-bold md:m-8"><span className='text-thBlue'>Question: WHY ARE SOME OF YOUR PRODUCTS RESTRICTED TO GOVERMENT AND LAW ENFORCEMENT ONLY?</span></p>

         <br />
         
         <p className="font-bold pb-2">Answer: There are no limitations on civilians possessing Night Vision Image Intensifiers
          or Thermal Imaging Equipment imposed by the government. Individual manufacturers impose restrictions on our website
           as part of their own company policies, which we must follow. These limitations are normally imposed in response to high
            demand from the US Department of Defense, and there are simply insufficient units to meet the needs of the civilian sector as well.</p>
            </div>
            
            <div className='border border-thBlue rounded-xl my-4 px-4 py-4'>
          <p className="text-4xl pt-10 font-bold md:m-8"><span className='text-thBlue'>Question: Can a flashlight defeat/damage my tubes?</span></p>

         <br />
         <p className="font-bold">Answer: Auto-gated Gen 3 image tubes allow for operation in all light conditions and are resistant to "blooming", or image distortion caused
          by bright lights. This enables superior performance in urban environments or anytime there are artificial lights present, such as vehicle lights or flashlights.</p>
          </div>

          <div className='border border-thBlue rounded-xl my-4 px-4 py-4'>
         <p className="text-4xl pt-10 font-bold md:m-8"><span className='text-thBlue'>Question: DO YOU SELL USED / REFURBISHED EQUIPMENT?</span></p>

              <br />
      
              <p className="font-bold">Answer:No. Twilight Inc. only sells the best, most operationally-ready gear. Image Intensifier Tubes have a finite life
               and there is no way to accurately gauge what stage the tube is in. We would not take a used NVD of questionable or unknown origin into the field and neither should you. </p>
                   <br />
                   </div>
</div>

</div>
    
  )
}

export default Questions;