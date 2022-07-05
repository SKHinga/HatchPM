import React from 'react'
import About from './About';
import Botom from './Botom';
import Contact from './Contact';
import Features from './Features';
import Footer from './Footer';
import NavBar from './NavBar';
import Svg from './Svg';

function Hero() {


  return (
    <div className='login min-h-screen'>
      <NavBar/>
      <Svg/>
      <Features/>
      <About/>
      <Contact/>
      <Footer/>
      <Botom/>
    </div>
  )
}

export default Hero