import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Minimenu({handleDelete}) {

  const handleDeleteProj = e => {
    e.preventDefault()
  }
  

  return (
    <div>
      <div className='absolute bg-white top-10 right-7 p-2 out'>
        <form onSubmit={handleDeleteProj}>
          <Link to='tasks' className='text-sm text-blue-500 hover:text-stone-500'><p>View tasks</p></Link>
          {/* <Link to='tasks' className='text-sm text-blue-500 hover:text-stone-500'><p>Edit project</p></Link> */}
          <label htmlFor='progress' className='text-sm'>
            Pregress:
            <select id='progress' className='ml-2 settle'>
              <option value='In progress'>In progress</option>
              <option value='Complete'>Complete</option>
            </select>
          </label>
          <div className='flex justify-between mt-2'>
            <Button onClick={handleDelete} variant="outlined" className='mater-button text-end'>Delete</Button>
            <Button type='submit' variant="outlined" className='mater-button text-end'>Set</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Minimenu