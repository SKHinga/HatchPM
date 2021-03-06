import React, {useRef} from 'react'
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';

function Contact() {

  const form = useRef();


  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_ax4z37d', 'template_qw873w5', form.current, 'WDfCNftL1kLXWam8S')
      .then((result) => {
          console.log(result.text);
          alert('Your message has been sent!');
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  }


  return (
    <div id='contact'>
      <h2 className='font-bold cal text-xl text-center'>Contact Us</h2>
      <div id='contact' className='grid grid-cols-10 md:grid-cols-12 mb-2'>
        <div className='hidden md:contents'><div></div></div>
        <div className='col-span-10 md:col-span-10 flex justify-center bg-white rounded-xl mx1 md:mx-0'>
          <form className='w-5/6 py-4' onSubmit={handleSubmit} ref={form}>
            <div className='md:flex md:justify-between'>
              <input type='text' name='user_name' placeholder='Name*' required className='font-normal put w-full md:w-5/12 my-5 md:my-0'/>
              <input type='email' name='user_email' placeholder='Email*' required className='font-normal put w-full md:w-5/12'/>
            </div>
            <textarea
            className='w-full h-36 textarea mt-3'
            name='message'
            id='description' 
            placeholder='Message*'/>
            <div className='flex justify-end mt-3'>
              <Button type='submit' variant='outlined' className='material-button text-end'>Send</Button>
            </div>
          </form>
        </div>
        <div className='hidden md:contents'><div></div></div>
    </div>
    </div>
  )
}

export default Contact