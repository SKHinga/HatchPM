import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Top from './Top';
import Dash from './Dash';
import Calender from './Calender';
import Filter from './Filter';
import NewProject from './NewProject';
import Tasks from './Tasks';

function Dashboard() {
  
  let activeStyle = {
    color: "#EA5829",
  }
  return (
    <div className='login h-screen'>
      <Top/>
      <div className='grid grid-cols-12'>
        <div></div>
        <div className='col-span-12 md:col-span-2 mx-2 md:mx-0 flex md:flex-col justify-between haba'>
          <div className=' flex md:flex-col'>
            <div className='md:flex h-0 md:h-24 items-end'><NavLink to='' style={({ isActive }) =>isActive ? activeStyle : undefined}><DashboardIcon/><p className='hidden md:contents'>Dashboard</p></NavLink></div>
            <div className='md:flex mt-0 md:mt-2'><NavLink to='calendar' style={({ isActive }) =>isActive ? activeStyle : undefined} ><CalendarMonthIcon/><p className='hidden md:contents'>Calender</p></NavLink></div>
          </div>
          <div className='flex cal'><PersonIcon/><p>Samuel</p></div>
        </div>
        <div className='col-span-12 md:col-span-6 mt-3 md:mt-0'>
          <div className='grid grid-cols-4 items-center'>
            <div className='col-span-2 md:col-span-3'>
              <div className='cave flex md:justify-between items-center'>
                <input type='text' placeholder='Search' className='font-normal put w-24'/>
                <SearchIcon/>
              </div>
            </div>
            <div>
              <NavLink to='../new-project'><Button variant="outlined" className='material-button w-24'>New Project</Button></NavLink>
            </div>
          </div>

        {/* Center piece */}
          <Routes>
            <Route path='' element={<Dash/>}/>
            <Route path='calendar' element={<Calender/>}/>
            <Route path='/dashboard/new-project' element={<NewProject/>}/>
            <Route path='/dashboard/tasks' element={<Tasks/>}/>
          </Routes>
        </div>
        <div className='hidden md:flex col-span-2'>
          <Filter/>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Dashboard
