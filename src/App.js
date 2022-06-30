import React from "react";
import {Helmet} from "react-helmet";
// import Signup from "./components/Home/Signup";
// import Login from "./components/Home/Login";
import Dashboard from "./components/Hero/Dashboard";

function App() {
 return(
  <div>
  <Helmet>
    <meta charSet="utf-8" />
    <title>HATCH</title>
    <link rel="canonical" href="http://mysite.com/example" />
    <meta name="description" content="Hatch PM" />
  </Helmet>
  {/* <Signup/> */}
  {/* <Login/> */}
  <Dashboard/>
 </div>
 );
}

export default App;
