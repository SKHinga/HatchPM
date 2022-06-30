import React from 'react'
import Button from '@mui/material/Button';

function NewProject() {
  return (
    <div className='h-5/6 mt-5'>
      <form className='flex flex-col justify-between h-full'>
        <input type='text' placeholder='Project name*' required className='font-normal put w-full'/>
        <input type='text' placeholder='Project scope*' required className='font-normal put w-full'/>
        <div className='flex flex-col'>
          <label htmlFor='deadline' className='gress'>Description:</label>
          <input type='date' placeholder='' required className='font-normal put'/>
        </div>
        <textarea className='w-full h-36 textarea' placeholder='Description*'></textarea>
        <div className='flex justify-end'>
          <Button type='submit' variant="outlined" className='material-button text-end'>Add project</Button>
        </div>
      </form>
    </div>
  )
}

export default NewProject