import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import useUser from '../../hooks/useUser';

function Top() {

  // const user = useUser();
  let navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate ("/", {replace: true});
    window.location.reload();
  }

  // if (!user) return <Navigate to="/1/dashboard"/>;


  return (
    <div>
      <div className='grid grid-cols-12'>
        <div className='hidden md:contents'><div></div></div>
        <div className='col-span-12 md:col-span-10'>
          <div className='flex justify-between py-1'>
            <h1 className='orange font-bold text-2xl'>Hatch.</h1>
            <Button onClick={handleLogOut} variant='outlined' className='material-button text-end'>Log Out</Button>
          </div>
        </div>
        <div className='hidden md:contents'><div></div></div>
      </div>
    </div>
  )
}

export default Top