import React, { useState, useContext } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from 'react-icons/bs';
import  CartContext  from '../Context/CartContext';





function NavBar() {

 const [nav, setNav] = useState(false);
 
 const { items } = useContext(CartContext);



  return (
    <>
    <div className=' w-full h-24 bg-black text-white z-20 fixed top-0 md:border-thBlue'>
      <div className='flex justify-between items-center max-w-screen-xl mx-auto px-4 h-full'>
        <div>
          <h1 className='text-thBlue tracking-widest text-3xl'>Twilight Inc.</h1>
        </div>

        <div className='hidden lg:flex items-center'>

          <ul className='flex text-xl'>
              <Link to ='/'><li className='px-4 hover:text-thBlue duration-300 hover:scale-105'>Home</li></Link>
              <Link to ='/productpage'><li className='px-4 hover:text-thBlue duration-300 hover:scale-105'>Products</li></Link>
              <Link to ='/questionpage'><li className='px-4 hover:text-thBlue duration-300 hover:scale-105'>Questions</li></Link>
              <Link to ='/contactpage'><li className='px-4 hover:text-thBlue duration-300 hover:scale-105'>Contact</li></Link>
          </ul>
          <Link to='/cart'><BsFillCartFill className='mx-2 text-thBlue hover:scale-150 duration-300' size={30} /></Link>
          <span>{items.length}</span>
        </div>

         <div onClick={() => setNav(!nav)} className='block md:hidden cursor-pointer'>
             {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
         </div>

      </div>
    </div>


    <div className={`fixed w-full bg-black text-white z-10 left-0 h-fit py-12 lg:hidden flex
     justify-center text-center text-2xl duration-500 ${nav ? "top-24 rounded-b-2xl opactiy-95" : "top-[-100%]"}`}>
      <ul className=''>
               <Link to ='/'><li className='font-bold py-1'>Home</li></Link>
               <Link to ='/'><li className='font-bold py-1'>Cart</li></Link>
              <Link to ='/productpage'><li className='font-bold py-1'>Products</li></Link>
              <Link to ='/questionpage'><li className='font-bold py-1'>Questions</li></Link>
              <Link to ='/contactpage'><li className='font-bold py-1'>Contact</li></Link>
             
      
      </ul>
    </div>


    </>
  );
}







export default NavBar;
