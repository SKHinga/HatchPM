import React, {useState, useContext} from 'react'
import Button from '@mui/material/Button';
import { Projects } from '../../Helper/Context';

function Tasks() {

  const {projId, tasked, handleNewTask, taskSelf} = useContext(Projects);
  const [taskData, setTaskData] = useState({
    task_name: "",
    project_id: projId,
    check: "0"
  });


  const changeDone = (event) => {
    setTaskData({
      ...taskData,
      [event.target.id]: event.target.value,
    })
  }

  const newTask = (event) => {
    event.preventDefault();
      fetch("https://hatch-pm.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
    .then((r)=>r.json())
    .then((newProji) => handleNewTask(newProji));
    setTaskData({
      task_name: "",
      project_id: projId,
      check: "0"
    });
  }

  const lists = taskSelf?.map((done) => (
    <div key={done.id} >
      <label htmlFor={done.id} className='gress text-sm'>
        <input type='checkbox' id={done.id} className='mr-1' defaultChecked={done.check? true : false}/>
        {done.task_name}
      </label>
  </div>
  ))


  const entry = tasked?.map((thing) => (
    <div key={thing.id}>
      <div className='boarder p-3 mb-3'>
        <h2 className='text-center cal font-bold text-xl'>Projects: <em className='orange'>{thing.project_name}</em></h2>
        <p className='text-sm text-center'>{thing.description}</p>
        <p className='text-sm text-center cal'>Deadline: {thing.deadline}</p>
      </div>
      <form onSubmit={newTask}>
        <input onChange={changeDone} id='task_name' value={taskData.task_name} type='text' placeholder='Task*' required className='font-normal put w-full'/>
        <div className='flex justify-end mt-2'>
          <Button type='submit' variant="outlined" className='material-button text-end'>Add Task</Button>
        </div>
      </form>
      {lists}
    </div>
  ))
  

  return (
    <div>
      {entry}
    </div>
  )
}

export default Tasks