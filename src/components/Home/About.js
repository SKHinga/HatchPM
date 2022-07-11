import React from 'react'

const logos = require('../assets/Logos.png') 

function About() {
  return (
    <div id='about' className='grid grid-cols-10 md:grid-cols-12 mt-3'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-10 md:col-span-10'>
        <h2 className='font-bold cal text-xl text-center'>About Us</h2>
        <p className='gress text-l md:text-center p-2 md:p-0'>Hatch is a modern work management platform that brings together the best tools for high-level planning, project and product management, task organization and productivity growth based on transparency, agility, and motivation.</p>
        <p className='gress text-xl font-medium text-center my-3'>Trusted by 10,000+ happy clients worldwide.</p>
        <div className='flex justify-center'>
          <img src={logos} alt='Logos'/>
        </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default About