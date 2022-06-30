import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Signup() {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: mine`)
  }

  return (
    <div className='login h-screen w-full'>
      <Link className='p-3'><ArrowBackIcon/></Link>
      <form onSubmit={handleSubmit} className='h flex flex-column justify-center items-center'>
        <div className='w-5/6 md:w-1/2 h-5/6 md:h-1/2 flex flex-col justify-around'>
          <h2 font-medium text-2xl>Sign Up:</h2>
          <div className=''>
            <input type='text' placeholder='First Name*' required className='font-normal put w-full md:w-1/2 my-5 md:my-0'/>
            <input type='text' placeholder='Last Name*' required className='font-normal put w-full md:w-1/2'/>
          </div>
          <select className='font-normal put' value='Gender'>
            <option value="null">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type='email' placeholder='Email' required className='font-normal put'/>
          <input type='password' placeholder='Password' required className='font-normal put'/>
          <input type='password' placeholder='Password' required className='font-normal put'/>
          <div className='flex justify-end'>
            <Button type='submit' variant="outlined" className='material-button text-end'>Sign Up</Button>
          </div>
          <Link className='text-sm font-light text-blue-500 flex justify-end'>Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup