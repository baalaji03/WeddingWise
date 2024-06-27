import React from 'react';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import WeddingVendor from './Pages/WeddingVendor';
import WeddingVenue from './Pages/WeddingVenue';
import Bride from './Pages/Bride';
import Groom from './Pages/Groom';
import Signup from './Pages/Signup';
import PlanningTool from './Pages/PlanningTool';
import WeddingPhotograhers from './Pages/WeddingPhotograhers';
import FooterCom from './Components/Footer';
import Signin from './Pages/Signin';
import WeddingVideographers from './Pages/WeddingVideographers';
import WeddingPlanners from './Pages/WeddingPlanners';
import Caterers from './Pages/Caterers';
import Banquet from './Pages/Banquet';
import WeddingResort from './Pages/WeddingResort';
import Mandapam from './Pages/Mandapam';
import MehndiArtists from './Pages/MehndiArtists';
import MakeupArtists from './Pages/MakeupArtists';
import Dress from './Pages/Dress';
import GroomMakeup from './Pages/GroomMakeup';



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
    <Route path='/Signup' element={<Signup />}/>
    <Route path='/Signin' element={<Signin />} />
    <Route path='//WeddingVendor/WeddingPhotographers' element={<WeddingPhotograhers />} />
    <Route path='//WeddingVendor/Weddingvideographers' element={<WeddingVideographers />} />
    <Route path='//WeddingVendor/WeddingPlanners' element={<WeddingPlanners />} />
    <Route path='//WeddingVendor/Caterers' element={<Caterers />} />
    <Route path='//WeddingVenue/Banquet' element={<Banquet />} />
    <Route path='//WeddingVenue/WeddingResort' element={<WeddingResort />} />
    <Route path='//WeddingVenue/Mandapam' element={<Mandapam />} />
    <Route path='//Bride/MehndiArtists' element={<MehndiArtists />} />
    <Route path='//Bride/MakeupArtists' element={<MakeupArtists />} />
    <Route path='//Groom/Dress' element={<Dress />} />
    <Route path='//Groom/GroomMakeup' element={<GroomMakeup />} />


    
    
    
   
   </Routes>
   <FooterCom />
   </BrowserRouter>
   
  );
};

export default App;