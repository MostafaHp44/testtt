import "./App.css";
import React from "react";
import GetAddress from "./compo/profile/address";
import GetFullName from "./compo/profile/fullname";
import Profilephoto from "./compo/profile/Profilephoto";

// import gettpic from './compo/profile/Profilephoto';

function App() {
  
  return (
    <div className="mainbtn">
      <Profilephoto />
      <GetFullName/>
      <GetAddress/>
      </div>

  )
}


     
export default App;
