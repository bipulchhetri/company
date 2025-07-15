import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  CheckCircle, 
  Code, 
  Smartphone, 
  Zap,
  TrendingUp,
  Award,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Quote,
  Globe,
  Database,
  Rocket
} from 'lucide-react';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Service from './components/Service';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
function App() {
 

  

 

 

  return (

    <div className=" bg-gray-900 text-white overflow-x-hidden">

   
<Nav/>
     <Hero/>

     <Service/>
      

  <About/>
    {/* <Portfolio/> */}

     {/* <Testimonial/> */}

     <Contact/>

  <Footer/>
  </div>
 
  );
}

export default App;