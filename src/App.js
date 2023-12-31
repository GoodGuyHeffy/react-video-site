import React from 'react';
import QuestionPage from './pages/QuestionPage';
import Contactpage from './pages/Contactpage';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDeatils from './pages/ProductDeatils';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import { CartProvider } from './Context/CartContext';
import RickRoll from './pages/RickRoll';





function App() {

  
  return (
    <div>
      <CartProvider>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/productpage' element={<ProductPage />} />
         <Route path='/questionpage' element={<QuestionPage />} />
         <Route path='/contactpage' element={<Contactpage />} />
         <Route path='/cart' element={<Cart />} />
         <Route path='/rickroll' element={<RickRoll />} />
         <Route path='/productpage/:id' element={<ProductDeatils />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
