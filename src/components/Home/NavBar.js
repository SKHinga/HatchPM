import React, {useState} from 'react'
import { NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';
import {HashLink} from 'react-router-hash-link';

function NavBar() {

  const [toggl, setToggl] = useState(false);

  const handleNew = () => {
    console.log("now");
  }

  const handleToggle = () => {
    setToggl(!toggl)
  }

  return (
    <div>
        <div className='grid grid-cols-10 md:grid-cols-12'>
          <div className='hidden md:contents'><div></div></div>
          <div className='col-span-10 md:col-span-10'>
            <div className='flex justify-between py-1'>
              <h1 className='orange font-bold text-2xl px-3 md:px-0'>Hatch.</h1>
              <div className='flex justify-between md:w-80 mt-11 md:mt-1 gress bar'>
                <HashLink to='#home'>Home</HashLink>
                <HashLink to='#features'>Features</HashLink>
                <HashLink to='#about'>About Us</HashLink>
                <HashLink to='#contact'>Contact</HashLink>
              </div>
              <NavLink to='signin' className={toggl?'activebar':'bar'}><Button variant='outlined' className='material-button text-end' onClick={handleNew}>Log In</Button></NavLink>
              <div className='hamburger px-3 md:px-0' onClick={handleToggle}>
                <span className='barr'></span>
                <span className='barr'></span>
                <span className='barr'></span>
              </div>
            </div>
          </div>
          <div className='hidden md:contents'><div></div></div>
        </div>
    </div>
  )
}

export default NavBar