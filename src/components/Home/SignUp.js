import React, {useState} from 'react'
import { Link, Navigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { signUp } from '../../api/authApi';
import { useToken } from '../../hooks/useToken';
import useUser from '../../hooks/useUser';

function Signup() {
  const [, setToken] = useToken();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useUser();
  const [signupData, setSignpData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignpData({
      ...signupData,
      [name]: value,
    });
  }

  async function createUser() {
    setLoading(true);
    const response = await signUp(signupData);
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
    createUser();
  }

  if (user) return <Navigate to="/signin"/>;

  // const handleGo = (e) => {
  //   e.preventDefault()
  //   navigate("/signin")
  // }

  return (
    <div className='login h-screen w-full'>
      <Link to='/' className='p-3'><ArrowBackIcon/></Link>
      <form onSubmit={handleSubmit} className='h flex flex-column justify-center items-center'>
        <div className='w-5/6 md:w-1/2 h-5/6 md:h-1/2 flex flex-col justify-around'>
          <h2 font-medium text-2xl>Sign Up:</h2>
          <div className='md:flex md:justify-between'>
            <input type='text' name='first_name' value={signupData.first_name} onChange={handleChange} placeholder='First Name*' required className='font-normal put w-full md:w-5/12 my-5 md:my-0'/>
            <input type='text' name='last_name' value={signupData.last_name} onChange={handleChange} placeholder='Last Name*' required className='font-normal put w-full md:w-5/12'/>
          </div>
          <select className='font-normal put' name='gender' value={signupData.gender} onChange={handleChange}>
            <option value="null">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input type='email' name='email' value={signupData.email} autoComplete='email' onChange={handleChange} placeholder='Email' required className='font-normal put'/>
          <input type='password' name='password' value={signupData.password} autoComplete='current-password' onChange={handleChange} placeholder='Password' required className='font-normal put'/>
          {error ? <p className="orange">{error}</p> : null}
          <div className='flex justify-end'>
            <Button type='submit' variant="outlined" className='material-button text-end'>{loading ? "Processing..." : "Sign Up"}</Button>
          </div>
          <Link to='/signin' className='text-sm font-light text-blue-500 flex justify-end'>Already have an account?</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup