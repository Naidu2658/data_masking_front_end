import React,{ useState } from 'react';
import { Link } from 'react-router-dom';

import  axios  from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function Gen_config() {

  const [file, setSelectedFile] = React.useState(null);
  const [ xpaths,setxpath] = React.useState([]);
  
  
  const handleSubmit = (event)=>{
      console.log("in handle submit");
      event.preventDefault()
      const formData = new FormData();
      formData.append("file", file);
      console.log(formData);
  
      const headers = { 
        "Content-Type": "multipart/form-data" 
                      };
        

       axios.post('http://localhost:8090/xmlUpload', formData, { headers })
        .then(response => 
          {
            console.log("return post method");
            console.log(response.data.xPaths.length);
            
            for(let i=0;i<response.data.xPaths.length;i++)
             {  console.log(response.data.xPaths[i]);
               setxpath((items)=>
              {
                return items.concat(response.data.xPaths[i]);
              });}
            console.log(xpaths);
          });

        // window.location="/adddeleterows";

       alert("click on set params");
    };
 
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
     
    }
    
    return ( <>

   <form onSubmit={handleSubmit}>
       <label  htmlFor=".xml">choose xml file</label><br/>
      <input type="file" id=".xml" onChange={handleFileSelect} /><br/><br/><br/>
      <button  type = "submit"  className="button1" >Submit</button>
      
      <Link to="/setparams_new" state={{xpaths: xpaths}}>
        <button className="button1" >set params</button>
        </Link>
      <Link to="/applydm"><button className="button1">apply dm</button></Link>

    </form> 
     </>
     )
    }
  
  
  
  
  export default Gen_config
  
  
  
  
  