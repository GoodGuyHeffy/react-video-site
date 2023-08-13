import React from 'react';
import QuestionPage from './pages/QuestionPage';
import CustomerPage from './pages/CustomerPage';
import Contactpage from './pages/Contactpage';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import RNVGPage from './pages/RNVGPage';
import Peq15page from './pages/Peq15page';
import PVS14 from './pages/PVS14';
import CNVDPage from './pages/CNVDPage';
import PVS31Page from './pages/PVS31Page';
import IRAYPage from './pages/IRAYPage';
import MAWLPage from './pages/MAWLPage';
import GPNVGPage from './pages/GPNVGPage';




function App() {

  


  return (
    <div>
      
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/productpage' element={<ProductPage />} />
         <Route path='/questionpage' element={<QuestionPage />} />
         <Route path='/customerpage' element={<CustomerPage />} />
         <Route path='/contactpage' element={<Contactpage />} />
         <Route path='/rnvgpage' element={<RNVGPage />} />
         <Route path='/peq15page' element={<Peq15page />} />
         <Route path='/pvs14' element={<PVS14 />} />
         <Route path='/cnvdpage' element={<CNVDPage />} />
         <Route path='/pvs31page' element={<PVS31Page />} />
         <Route path='/iraypage' element={<IRAYPage />} />
         <Route path='/mawlpage' element={<MAWLPage />} />
         <Route path='/gpnvgpage' element={<GPNVGPage />} />
      </Routes>

    </div>
  );
}

export default App;
