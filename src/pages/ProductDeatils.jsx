import React, { useState, useEffect, useContext } from 'react';
import NavBar from '../components/NavBar';
import { useParams } from 'react-router-dom';
import  DATA  from '../data';
import { CartContext } from '../Context/CartContext';

function ProductDeatils() {

  
  const { addToCart } = useContext(CartContext);
  const params = useParams();

  const [item, setItem] = useState(null);


  
 




  useEffect(() => {
      
      const idFormUrl = parseInt(params.id,10);

      const foundItem = DATA.find((d) => d.id === idFormUrl);

      setItem(foundItem);

  }, [params.id]);


   
 
  return (
    <>
        <NavBar />
        <div>
            {item ? ( 
        <div className='mt-16'>
      <section className="text-white overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={item.productName} className="lg:w-1/2 w-full object-cover object-center rounded-xl" src={item.productImage} />
      <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
        <h1 className='text-thBlue text-3xl title-font font-medium mb-1'>{item.productName}</h1>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
         <br />
        <p className='text-white'>{item.info}</p>
        <br />
        <p className='text-white'>{item.specs}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-thBlue">{item.price}</span>
          <button onClick={() => addToCart(item)}  className="flex ml-auto text-black bg-thBlue font-bold  py-2 px-6 focus:outline-none rounded-lg hover:scale-105 duration-300">Add To Cart</button>
          
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
      ) : (
        <p>Loading.....</p>
      )}
        </div>
    </>
  )
}

export default ProductDeatils;