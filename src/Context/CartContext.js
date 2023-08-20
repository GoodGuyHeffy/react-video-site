import { createContext, /* useState, useEffect*/ } from 'react';
//import DATA from '../data';


const CartContext = createContext();


export function CartProvider({children}) {

   


    return (
        <CartContext.Provider value={{}}>
            {children}
        </CartContext.Provider>
    )
 }





export default CartContext;