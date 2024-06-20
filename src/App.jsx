import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WeddingVendor from './Pages/WeddingVendor';
import WeddingVenue from './Pages/WeddingVenue';
import Bride from './Pages/Bride';
import Groom from './Pages/Groom';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
import PlanningTool from './Pages/PlanningTool';
import Footer from './Components/Footer';
import WeddingPhotograhers from './Pages/WeddingPhotograhers';



const App = () => {
  return (
  
   <BrowserRouter>
    <Header />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/PlanningTool' element={<PlanningTool />} />
    <Route path='/WeddingVendor' element={<WeddingVendor />}/>
    <Route path='/WeddingVenue' element={<WeddingVenue />}/>
    <Route path='/Bride' element={<Bride />}/>
    <Route path='/Groom' element={<Groom />}/>
    <Route path='/Signin' element={<Signin />}/>
    <Route path='/Login' element={<Login />} />
    <Route path='//WeddingVendor/WeddingPhotographers' element={<WeddingPhotograhers />} />
    

   </Routes>
   
   </BrowserRouter>
   
  );
};

export default App;