import React, {useState} from 'react'
import Button from '@mui/material/Button';

function Tasks() {

  const [task, setTask] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTask(task => !task)
    console.log(task);
  }
  return (
    <div>
      <div className='boarder p-3 mb-3'>
        <h2 className='text-center cal font-bold text-xl'>Projects: <em className='orange'>Project Hatch PM</em></h2>
        <p className='text-sm text-center'>Your one stop shop to manage any basic or complex projects.</p>
        <p className='text-sm text-center cal'>Deadline: 03-06-2022</p>
      </div>
      <form>
        {task && <input type='text' placeholder='Task*' required className='font-normal put w-full'/>}
        <div className='flex justify-end mt-2'>
          <Button type='submit' variant="outlined" className='material-button text-end' onClick={handleAddTask}>Add Task</Button>
        </div>
      </form>
      <div>
        <label htmlFor='task' className='gress text-sm'>
          <input type='checkbox' id='task' className='mr-1'/>
          Figma design
        </label>
      </div>
    </div>
  )
}

export default Tasks