import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function Navbar() {
    
    return (
      <>      
       <Link to="/genconfig"><button className="button1">gen config</button></Link>
      
      <Link to="/applydm"><button className="button1">apply dm</button></Link>
     </>
  
    )
    }
  
  
  
  
  export default Navbar