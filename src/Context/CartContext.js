import { createContext, useState } from 'react';
import DATA from '../data';


const CartContext = createContext();


export function CartProvider({children}) {
   

   const [items, setItems] = useState([]);

   const addToCart = (productName, price) => {
    setItems((prevState) => [...prevState, { productName, price }]);
   }
console.log(items);
    return (
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
 }





export default CartContext;