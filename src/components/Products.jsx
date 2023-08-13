import React from 'react';
import { Link } from 'react-router-dom';


function Products() {

 


  return (
    <div name="products" className='w-full text-white md:h-screen py-12 pt-24 mt-10'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8 md:pt-20'>
          <p className='text-4xl font-bold inline pt-20 border-b-4 border-teal-500'>Products</p>
          <p className="py-6">We provide high quality Night Vision and thermal devices to Civilian and LEO agencies.
           We will NEVER compromise in bringing you the best equipment available. We pride ourselves on understanding 
           your needs as professionals and intentionally do not feature every night vision device available on our website, 
           we only sell what we'd bet our lives on. All devices are built to order. Give us a call at <span className='text-thBlue text-xl font-bold'>1-800-123-1234</span> or sumbit a form on our <span className='text-thBlue font-bold'>Contact Page </span>to place an order.</p>
        </div>
         
        


        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  sm:px-0 pb-8'>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/rnvgpage'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2023/05/RNVG-2.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">AB Night Vision RNVG</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$6,799 - $8,999</p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/peq15page'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2023/04/PEQ-15-1.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">L3 PEQ-15  IR laser</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue"><span className='text-red-500'>Currently Unavailable</span></p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/pvs14'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2023/01/PVS-14-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">PVS-14 L3 Unfilmed White Phosphor</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$4,299.98</p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/cnvdpage'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2022/01/CLIPNV-LR-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">EoTech CLIPNV-LR - Clip on NVG</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$10,125.98</p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/pvs31page'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2020/06/PVS-31-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">L3Harris AN/PVS-31A 2376+ FOM</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$13,700.98</p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/iraypage'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2022/06/RH25-1-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">IRAY RICO MICRO RH25 640</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$6,299.98</p>
          </div>
          </div>
          </div>
           
          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/mawlpage'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2021/11/MAWL-ER-BLK-1-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">B.E. MEYERS MAWL-ER IR/Visible Laser</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$3,599</p>
          </div>
          </div>
          </div>

          <div className="mx-auto mt-11 w-full transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <Link to='/gpnvgpage'><img className="h-50 w-full object-cover object-center" src="https://steeleindustries.com/wp-content/uploads/2020/06/GPNVG-2-600x600.jpg" alt="/" /></Link>
          <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">L3harris GPNVG - Panoramic Night Vision Goggle</h2>
          <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-thBlue">$40,399.98</p>
          </div>
          </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Products;