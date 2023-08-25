import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import DATA from '../data';

function Products() {

 

 const [kind, setKind] = useState(DATA);

 const filterType = (category) => {
  setKind(
    DATA.filter((item) => {
      return item.category === category;
    })
  );
 };


  return (
    <div name="products" className='w-full text-white md:h-screen py-12 pt-24 mt-10'>
      <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full'>
        <div className='pb-8 md:pt-20 max-w-screen text-center'>
          <p className='text-4xl font-bold inline pt-20 border-b-4 border-teal-500'>Products</p>
          <p className="py-6 text-xl md:mx-12 px-6">We provide high quality Night Vision and thermal devices to Civilian and LEO agencies.
           We will NEVER compromise in bringing you the best equipment available. We pride ourselves on understanding 
           your needs as professionals and intentionally do not feature every night vision device available on our website, 
           we only sell what we'd bet our lives on.</p>
        </div>
         
        <div>
        <div>
          <p className='pl-4 text-xl font-bold text-thBlue py-4'>Filter Type</p>
          <div className='flex flex-wrap'>
            <button onClick={()=> setKind(DATA)} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>All</button>
            <button onClick={() => filterType('nvg')} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>Night Vision</button>
            <button onClick={() => filterType('thermal')} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>Thermals</button>
            <button onClick={() => filterType('laser')} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>Lasers</button>
            <button onClick={() => filterType('helmet')} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>Brain Buckets</button>
            <button onClick={() => filterType('accessories')} className='px-4 mx-2 my-4 hover:uppercase hover:scale-105 rounded-xl bg-thBlue text-black duration-300'>Accessories</button>
          </div>
        </div>
        </div>

        <div className='w-full text-white md:h-screen py-12 pt-24  px-10'>
    <div className='max-w-screen p-4 mx-auto flex flex-col justify-center w-full'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  sm:px-0 pb-8 '>
      {kind.map((item, index)=> (
            <div className='bg-black hover:scale-105 duration-300 rounded-lg relative' key={index}>
              <Link to={`/productpage/${item.id}`}>
                <img className='w-full h-[200px] object-cover rounded-t-lg' src={item.productImage} alt={item.productName}/>
                <div className='flex flex-col justify-between px-2 py-4'>
                    <p className='font-bold pb-6'>{item.productName}</p>
                    <div className='flex flex-row justify-between'>
                    <p className='text-thBlue font-bold absolute left-0 bottom-0 p-2 pt-2'>${item.price}</p>
                    
                    </div>
                </div>
                </Link>
            </div>
        ))}
        </div>
      </div>
    </div>
        

      </div>
    </div>
  )
}

export default Products;