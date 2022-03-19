import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Displaypm from './Displaypm'; 
import  Axios  from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function Gen_config() {
    const getparam =()=>{
      Axios.get('https://cors-anywhere.herokuapp.com/http://localhost:8090/xmlUpload').then(response=>
      {
         console.log(response);
      });
    };
    return ( <>
    <label  htmlFor=".xml">choose xml file</label><br/>
  
    <input type="file" id=".xml" /><br/><br/><br/>
    <button type = "submit" onClick={getparam } className="button1">Submit</button>
    <button type = "submit"  className="button1">Continue</button>
   
     </>)
    }
  
  
  
  
  export default Gen_config
  
  
  
  
  