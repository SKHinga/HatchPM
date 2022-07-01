import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Top() {
  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className=''></div>
        <div className='col-span-10'>
          <div className='flex justify-between py-1'>
            <h1 className='orange font-bold text-2xl'>Hatch.</h1>
            <Link to='/'><Button variant='outlined' className='material-button text-end'>Log Out</Button></Link>
          </div>
        </div>
        <div className=''></div>
      </div>
    </div>
  )
}

export default Top