
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";
import Workouts from "./pages/workouts/Workouts";
import Shop from "./pages/Shop";
import Nutrition from "./pages/Nutrition";
import Contact from "./pages/Contact";
import Adminlogin from"./pages/Adminlogin";
import Gymworkout from "./pages/workouts/Gymworkout";
import Homework from './pages/workouts/Homework';
import Login from './pages/Login';
import Cart from './pages/Cart';
import gsap from 'gsap';
import { useEffect } from 'react';
import Sellerhome from './pages/Sellerhome';
import SellerProducts from './pages/SellerProduct';
import SellerOrders from './pages/SellerOrders';
import SellerSettings from './pages/SellerSettings';
import AdminHome from './Admin/AdminHome';
import ExerciseAdmin from './Admin/ExerciseAdmin';
import AdminUser from './Admin/AdminUser';
import AdminProduct from './Admin/AdminProduct';
import Footer from './Components/Footer';




function App() {
  useEffect(() => {
  gsap.to(".color-scope", {
    "--myColor": "#0ae448",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });
}, []);

  return (
    <>
      {/* <Header/> */}
     <Routes>
     <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/contact" element={<Contact />} />



          {/* <Footer/> */}
<Route path="/Login" element={<Login/>} />
<Route path="/Adminlogin"element={<Adminlogin/>}/>
<Route path="/Cart"element={<Cart/>}/>
        
          <Route path="/gymworkout" element={<Gymworkout />} />
           <Route path="/homework" element={<Homework/>} />
       
 <Route path="/sellerhome" element={<Sellerhome/>} />
  <Route path="/sellerOrders" element={<SellerOrders/>} />
 <Route path="/sellerProducts" element={<SellerProducts/>} />
  <Route path="/sellerSettings" element={<SellerSettings/>} />
   <Route path="/AdminHome" element={<AdminHome/>} />
   <Route path="/exerciseAdmin" element={<ExerciseAdmin/>} />
    <Route path="/AdminUser" element={<AdminUser/>} />
      <Route path="/AdminProduct" element={<AdminProduct/>} />
         <Route path="/Footer" element={<Footer/>} />

     </Routes>
      
    </>
  )
}

export default App
