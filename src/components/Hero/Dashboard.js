import React, {useEffect, useState} from 'react'
import { NavLink, Outlet, useNavigate} from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Top from './Top';
import Filter from './Filter';
import useUser from '../../hooks/useUser';

import { Projects } from '../../Helper/Context';

function Dashboard() {

  const user = useUser();
  let navigate = useNavigate();
  const [search, setFinder] = useState("");
  const [projId, setProjId] = useState();
  const [tasked, setTasked] = useState([]);
  const [onProjects, setOnProjects] = useState();
  const [taskSelf, setTaskSelf] = useState();
  const [isLoading, setisLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(()=>{
    setisLoading(true)
    const collect = async() => {
      const response = await fetch(`https://hatch-pm.herokuapp.com/users/${user.userId}`);
      const users = await response.json();
      setOnProjects(users.projects)
      setisLoading(false)
    }
    collect();
  }, [user])

  const  pickId = (id) => {
    setisLoading(true)
    const toDo = async() => {
      const response = await fetch(`https://hatch-pm.herokuapp.com/projects/${id}`);
      const projectTasks = await response.json();
      setTasked([projectTasks])
      setTaskSelf(projectTasks.tasks)
      setisLoading(false)
    }
    toDo();
    navigate('tasks')
    setProjId(id);
  }

  function handleNewTask (data){
    setTaskSelf([...taskSelf, data])
  }

  function handleBoolean (data){
    const checkMate = taskSelf.map(mate => {
      if (mate.id === data.id){
        return data;
      } else {
        return mate;
      }
    });
    setTaskSelf(checkMate);
  }

  function handlePrors(data){
    const newProcess = onProjects.map(prob => {
      if (prob.id === data.id){
        return data;
      } else {
        return prob;
      }
    });

    setOnProjects(newProcess);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleAdd (data){
    setOnProjects([...onProjects, data])
  }

  function onSearchChange(e){
    setFinder(e.target.value);
    navigate ("../dashboard");
  }

  const deleteProj = id => {
    alert("Please note, you are proceeding to delete this project!")
    fetch(`https://hatch-pm.herokuapp.com/projects/${id}`, {
      method: 'DELETE'
    }).then(()=>{
      const removed = onProjects.filter(did => did.id !== id);
      setOnProjects(removed);
    })
  }

  const itemsToDisplay = onProjects?.filter((proj) => {
    if (selectedCategory === "All") return true;

    return proj.progress === selectedCategory;
  }).filter((proj) => proj.project_name?.includes(search));
  
  let activeStyle = {
    color: "#EA5829",
  }
  return (
    <Projects.Provider value={{handleCategoryChange, itemsToDisplay, deleteProj, handleAdd, projId, pickId, tasked, handleNewTask, taskSelf, handleBoolean, handlePrors}}>
      <div className='login h-screen overflow-hidden'>
        <Top/>
        <div className='grid grid-cols-12'>
          <div></div>
          <div className='col-span-12 md:col-span-2 mx-2 md:mx-0 flex md:flex-col justify-between haba'>
            <div className=' flex md:flex-col'>
              <div className='md:flex h-0 md:h-24 items-end'>
                <NavLink to='projects' style={({ isActive }) =>isActive ? activeStyle : undefined}>
                  <DashboardIcon/>
                  <p className='hidden md:contents'>Dashboard</p>
                </NavLink>
              </div>
              <div className='md:flex mt-0 md:mt-2'>
                <NavLink to='calendar' style={({ isActive }) =>isActive ? activeStyle : undefined} >
                  <CalendarMonthIcon/>
                  <p className='hidden md:contents'>Calender</p>
                </NavLink>
              </div>
            </div>
            <div className='flex cal'><PersonIcon/><p>{user.first_name}</p></div>
          </div>
          <div className='col-span-12 relative md:col-span-6 mt-3 md:mt-0 overflow-y-scroll higher'>
            <div className='grid grid-cols-6 md:grid-cols-4 items-center'>
              <div className='col-span-4 md:col-span-3'>
                <div className='cave flex md:justify-between items-center'>
                  <input value={search} onChange={onSearchChange} type='text' placeholder='Search' className='font-normal put w-full md:24'/>
                  <SearchIcon/>
                </div>
              </div>
              <div>
                <NavLink to='new-project'>
                  <Button variant="outlined" className='material-button w-24 col-span-2'>New Project</Button>
                </NavLink>
              </div>
            </div>

            {/* Center piece */}
            {isLoading ? (
            <div className='absolute w-full h-full flex flex-column justify-center items-center'>
              <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>) : <Outlet/>}
          </div>
          <div className='hidden md:flex col-span-2'>
            <Filter/>
          </div>
          <div></div>
        </div>
      </div>
    </Projects.Provider>
  )
}

export default Dashboard
