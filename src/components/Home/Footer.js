import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Heeds from './Heeds';

function Footer() {
  return (
    <div className='grid grid-cols-10 md:grid-cols-12'>
      <div className='hidden md:contents'><div></div></div>
      <div className='col-span-5 md:col-span-2 p-2 md:p-0'>
        <h2 className='orange font-bold text-2xl'>Hatch.</h2>
        <p className='gress text-l'>Your one stop shop to manage any basic or<br></br> complex projects.</p>
      </div>
      <div className='col-span-5 md:col-span-2 p-2 md:p-0'>
        <Heeds head='About' p1='About us' p2='Features' p3='News' p4='Careers'/>
      </div>
      <div className='col-span-5 md:col-span-2 p-2 md:p-0'>
        <Heeds head='Company' p1='Partner with us' p2='FAQ' p3='Blog' p4='Privacy Policy'/>
      </div>
      <div className='col-span-5 md:col-span-2 p-2 md:p-0'>
        <Heeds head='Support' p1='Support Center' p2='Feedback' p3='Contact Us' p4='Accessibility'/>
      </div>
      <div className='col-span-5 md:col-span-2 p-2 md:p-0'>
        <h3 className='font-bold cal'>Follow Us</h3>
        <div className='flex md:flex-col'>
          <Link to='#'><FacebookIcon className='text-sky-700'/></Link>
          <Link to='#'><InstagramIcon className='text-blue-800'/></Link>
          <Link to='#'><TwitterIcon className='text-sky-500'/></Link>
          <Link to='#'><LinkedInIcon className='text-sky-700'/></Link>
        </div>
      </div>
      <div className='hidden md:contents'><div></div></div>
    </div>
  )
}

export default Footer