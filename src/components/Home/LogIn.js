import React, {useState} from 'react'
import { Link, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signIn } from '../../api/authApi';
import { useToken } from '../../hooks/useToken';
import useUser from '../../hooks/useUser';

const LogIn = () => {
  const [, setToken] = useToken();
  const user = useUser();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSigninData({
      ...signinData,
      [name]: value,
    });
  }

  async function loginUser() {
    setLoading(true);
    const response = await signIn(signinData);
    if (response && response.token) {
      await setToken(response.token);
      window.location.reload();
      setLoading(false);
    } else if(response && response.message) {
      setError(() => response.message);
      setLoading(false);
    } else {
      setError(() => "Check your internet connection and try again.");
      setLoading(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser();
  }

  
   if (user) return <Navigate to="/dashboard"/>;


  return (
    <div className='login h-screen w-full'>
      <Link to='/' className='p-3'><ArrowBackIcon/></Link>
      <form onSubmit={handleSubmit} className='h-5/6 flex flex-column justify-center items-center'>
        <div className='w-5/6 md:w-1/2 h-1/2 flex flex-col justify-around'>
          <h2 font-medium text-2xl>Sign In:</h2>
          <input type='email' name='email' autoComplete='email' onChange={handleChange} value={signinData.email} placeholder='Email' required className='font-normal put'/>
          <Link to='/' className='text-sm font-light text-blue-500 flex justify-end'>Forgot password?</Link>
          <input type='password' name='password' autoComplete='current-password' onChange={handleChange} value={signinData.password} placeholder='Password' required className='font-normal put'/>
          {error ? <p className="orange">{error}</p> : null}
          <div className='flex justify-end'>
            <Button type='submit' variant="outlined" className='material-button text-end'>{loading ? "Processing..." : "Sign In"}</Button>
          </div>
          <Link to='/signup' className='text-sm font-light text-blue-500 flex justify-end'>Sign up for Hatch.</Link>
        </div>
      </form>
    </div>
  )
}

export default LogIn
