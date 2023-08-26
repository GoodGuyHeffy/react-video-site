import React, { useContext }from 'react';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';

import { CartContext } from '../Context/CartContext';

function Cart() {


  const { cartItems, getCartTotal, removeFromCart} = useContext(CartContext);


console.log(cartItems);
  return (
    <>
        <NavBar />
        <div className='flex flex-col justify-center mt-28 md:mt-40 w-full h-full'>
          
            <h1 className='flex justify-center text-2xl md:text-4xl pb-2 font-bold border-b-4 border-teal-500'>Your Cart Items</h1>
            
          
     {
      cartItems.length > 0 ? (
          <div className=''>
          {cartItems.map((item, index)=> (
            <div className='flex flex-col md:flex-row m-4 text-center justify-between items-center' key={index}>
                <img className=' w-full md:w-[200px] md:h-[200px] object-cover rounded-xl' src={item.productImage} alt={item.productName}/>
                <p className='text-2xl my-2'>{item.productName}</p>
                <p className='text-thBlue text-2xl'>${item.price}</p>
                <div className=' flex flex-col md:flex-row text-center m-4 items-center md:text-2xl'>
                   
                    
                   
                      <button onClick={() => removeFromCart(item)} className='bg-thBlue text-black mx-2 p-2 my-2 rounded-xl hover:scale-105 duration-300'>Remove from Cart</button>
                      
                </div>
                
            </div>

        ))}
        <div className='flex justify-center items-center font-bold text-thBlue py-12 mx-6 '>
            <p className='px-8 text-xl md:text-2xl md:mx-12'> CART TOTAL: <span className='text-white'>${getCartTotal()}</span></p>
            <Link to='/rickroll'><button className='px-4 py-2 bg-thBlue text-black rounded-xl hover:scale-105 duration-300 md:mx-12'>Check Out</button></Link>
          </div>
          </div>
          
      ) : (
       <div>
        <h1 className=" flex text-3xl md:text-7xl font-bold justify-center items-center mt-24 text-thBlue">Your cart is empty</h1>
        <p className='flex justify-center items-center mt-12 text-3xl font-bold text-thBlue'>¯\_(ツ)_/¯</p>
        </div>
      )
}
          
        </div>
    </>
  )
}

export default Cart;