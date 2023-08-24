import React, { useContext }from 'react';
import NavBar from '../components/NavBar';

import { CartContext } from '../Context/CartContext';

function Cart() {


  const { cartItems} = useContext(CartContext);


console.log(cartItems);
  return (
    <>
        <NavBar />
        <div>
          <div className='flex justify-center mt-28 md:mt-40 '><h1 className='text-2xl md:text-4xl border-b-4 border-thBlue'>Your Cart Items</h1></div>
          <div>
          {cartItems.map((item, index)=> (
            <div className=' rounded-lg relative' key={index}>
                <img className='w-[200px] h-[200px] object-cover rounded-t-lg' src={item.productImage} alt={item.productName}/>
                <div className='flex flex-col justify-between px-2 py-4'>
                    <p className='font-bold pb-6'>PLACEHOLDER</p>
                    <div className='flex flex-row justify-between'>
                    <p className='text-thBlue font-bold absolute left-0 bottom-0 p-2 pt-2'>PLACEHOLDER</p>
                    
                    </div>
                </div>
                
            </div>
        ))}
          </div>
        </div>
    </>
  )
}

export default Cart;