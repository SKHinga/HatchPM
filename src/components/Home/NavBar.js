import React, {useState} from 'react'
import { NavLink} from 'react-router-dom';
import Button from '@mui/material/Button';

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
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Features</NavLink>
                <NavLink to='/'>About Us</NavLink>
                <NavLink to='/'>Contact</NavLink>
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