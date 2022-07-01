import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import Button from '@mui/material/Button';

function Hero() {

  const handleNew = () => {
    console.log("now");
  }
  return (
    <div className='login h-screen'>
        <div className='grid grid-cols-12'>
          <div className=''></div>
          <div className='col-span-10'>
            <div className='flex justify-between py-1'>
              <h1 className='orange font-bold text-2xl'>Hatch.</h1>
              <div className='flex justify-between w-80 mt-1 gress'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Features</NavLink>
                <NavLink to='/'>About Us</NavLink>
                <NavLink to='/'>Contact</NavLink>
              </div>
              <NavLink to='signin'><Button variant='outlined' className='material-button text-end' onClick={handleNew}>Log In</Button></NavLink>
            </div>
          </div>
          <div className=''></div>
        </div>
    </div>
  )
}

export default Hero