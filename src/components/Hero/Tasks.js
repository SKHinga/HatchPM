import React, {useState, useContext} from 'react'
import Button from '@mui/material/Button';
import { Projects } from '../../Helper/Context';

function Tasks() {

  const [task, setTask] = useState(false);
  const {projId, tasked} = useContext(Projects);

  const handleAddTask = (e) => {
    e.preventDefault();
    setTask(task => !task)
    console.log(projId);
  }

  let checker = "checked"

  const entry = tasked?.map((thing) => (
    <div key={thing.id}>
      <div className='boarder p-3 mb-3'>
        <h2 className='text-center cal font-bold text-xl'>Projects: <em className='orange'>{thing.project_name}</em></h2>
        <p className='text-sm text-center'>{thing.description}</p>
        <p className='text-sm text-center cal'>Deadline: {thing.deadline}</p>
      </div>
      <form>
        {task && <input type='text' placeholder='Task*' required className='font-normal put w-full'/>}
        <div className='flex justify-end mt-2'>
          <Button type='submit' variant="outlined" className='material-button text-end' onClick={handleAddTask}>{task? "Add" : "Add Task"}</Button>
        </div>
      </form>
      {thing.tasks?.map((done) => (
        <div>
          <label key={done.id} htmlFor={done.id} className='gress text-sm'>
            <input type='checkbox' id={done.id} className='mr-1' {...done.check?checker:null}/>
            {done.task_name}
          </label>
      </div>
      ))}
    </div>
  ))
  

  return (
    <div>
      {entry}
      {console.log(tasked)}
    </div>
  )
}

export default Tasks