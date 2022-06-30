import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: mine`)
  }

  return (
    <div className='login h-screen w-full'>
      <Link className='p-3'><ArrowBackIcon/></Link>
      <form onSubmit={handleSubmit} className='h-5/6 flex flex-column justify-center items-center'>
        <div className='w-5/6 md:w-1/2 h-1/2 flex flex-col justify-around'>
          <h2 font-medium text-2xl>Sign In:</h2>
          <input type='email' placeholder='Email' required className='font-normal put'/>
          <Link className='text-sm font-light text-blue-500 flex justify-end'>Forgot password?</Link>
          <input type='password' placeholder='Password' required className='font-normal put'/>
          <div className='flex justify-end'>
            <Button type='submit' variant="outlined" className='material-button text-end'>Sign In</Button>
          </div>
          <Link className='text-sm font-light text-blue-500 flex justify-end'>Sign up for Hatch.</Link>
        </div>
      </form>
    </div>
  )
}

export default Login
