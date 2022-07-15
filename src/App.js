import React from "react";
import {Helmet} from "react-helmet";
import { Routes, Route, Navigate} from "react-router-dom";
import Dashboard from "./components/Hero/Dashboard";
import Hero from "./components/Home/Hero";
import LogIn from "./components/Home/LogIn";
import Signup from "./components/Home/SignUp";
import Dash from "./components/Hero/Dash"
import Calender from './components/Hero/Calender';
import NewProject from './components/Hero/NewProject';
import Tasks from './components/Hero/Tasks';


function App() {
 return(
  <div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>HATCH</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="Hatch PM" />
  </Helmet>

  <Routes>
    <Route path="dashboard/*" element={<Dashboard/>}>
      <Route index element={<Navigate to="projects" replace />} />
      <Route path='calendar' element={<Calender/>}/>
      <Route path='new-project/*' element={<NewProject/>}/>
      <Route path='tasks' element={<Tasks/>}/>
      <Route index path='projects' element={<Dash/>}/>
    </Route>
    <Route path="signin" element={<LogIn/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route index path="/" element={<Hero/>}/>
  </Routes>
 

 </div>
 );
}

export default App;
