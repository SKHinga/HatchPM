import React, {useState, useContext, useEffect} from 'react'
import Button from '@mui/material/Button';
import { Projects } from '../../Helper/Context';

function Tasks() {

  const {projId, tasked, handleNewTask, taskSelf, handleBoolean, handlePrors} = useContext(Projects);
  const [checking, setChecking] = useState();
  const [isView, setIsView] = useState(false);
  const [dent, setDent] = useState();
  const [proceed, setproceed] = useState();
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

  useEffect(()=>{
    fetch(`https://hatch-pm.herokuapp.com/tasks/${dent}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          check: checking
        })
      }) 
      .then(r=> r.json())
      .then(niceItem => handleBoolean(niceItem))
  }, [dent, checking, handleBoolean])

  // const handleMovement = (e, id)=>{
    
      
  // }

  const handleView = () => {
    setIsView(isView => !isView)
  }

  const handleProgress = (e) => {
    e.preventDefault();
    fetch(`https://hatch-pm.herokuapp.com/projects/${projId}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          progress: proceed
        })
      }) 
      .then(r=> r.json())
      .then(niceItem => handlePrors(niceItem))
      setIsView(false);
  }



  const lists = taskSelf?.map((done) => (
    <div key={done.id}>
      <label htmlFor={done.id} className='gress text-sm'>
        <input type='checkbox' onChange={(e)=>{setChecking(e.target.checked); setDent(done.id)}} id={done.id} className='mr-1' defaultChecked={done.check? true : false}/>
        {done.task_name}
      </label>
    </div>
  ))


  const entry = tasked?.map((thing, index) => (
    <div key={thing.id}>
      <div key={index} className='boarder p-3 mb-3'>
        <h2 className='text-center cal font-bold text-xl'>Project: <em className='orange'>{thing.project_name}</em></h2>
        <p className='text-sm text-center'>{thing.description}</p>
        <p className='text-sm text-center cal'>Deadline: {thing.deadline}</p>
      </div>
      {isView && (
        <div>
          <form onSubmit={handleProgress} className='flex w-full justify-between my-2'>
            <label htmlFor='progress' className='text-sm'>
              Pregress:
              <select onChange={(e)=>setproceed(e.target.value)} id='progress' className='ml-2 settle'>
                <option value=''>Select</option>
                <option value='In progress'>In progress</option>
                <option value='Complete'>Complete</option>
              </select>
            </label>
            <div>
              <Button type='submit' variant="outlined" className='mater-button'>Set</Button>
            </div>
          </form>
          <form key={thing.project_name} onSubmit={newTask}>
            <input onChange={changeDone} id='task_name' value={taskData.task_name} type='text' placeholder='Task*' required className='font-normal put w-full'/>
            <div className='flex justify-start mt-2'>
              <Button type='submit' variant="outlined" className='material-button text-end'>Add Task</Button>
            </div>
          </form>
        </div>
      )}
      <div className='flex justify-end mt-2'>
        <Button onClick={()=>handleView()} variant="outlined" className='material-button text-end'>{isView ? 'Done' : 'More'}</Button>
      </div>
    </div>
  ))
  

  return (
    <div>
      {entry}
      {lists}
    </div>
  )
}

export default Tasks