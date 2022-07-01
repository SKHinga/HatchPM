import React from "react";
import {Helmet} from "react-helmet";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Hero/Dashboard";
import Hero from "./components/Home/Hero";
import LogIn from "./components/Home/LogIn";
import Signup from "./components/Home/SignUp";


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
    <Route path="signin/dashboard" element={<Dashboard/>}/>
    <Route path="signin" element={<LogIn/>}/>
    <Route path="signin/signup" element={<Signup/>}/>
    <Route path="/*" element={<Hero/>}/>
  </Routes>
 

 </div>
 );
}

export default App;
