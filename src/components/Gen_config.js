import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import Displaypm from './Displaypm'; 
import  axios  from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function Gen_config() {

  const [selectedFile, setSelectedFile] = React.useState(null);

    const handleSubmit = async (event)=>{

      event.preventDefault()
      const formData = new FormData();
      formData.append("selectedFile", selectedFile);

      const headers = { 
        "Content-Type": "multipart/form-data" 
                      };

      const res=await axios.post('http://localhost:8090/xmlUpload', formData, { headers })
        .then(response => 
          {
             console.log(response);
          });
  
    };
 
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
    }

    return ( <>

   <form onSubmit={handleSubmit}>
       <label  htmlFor=".xml">choose xml file</label><br/>
      <input type="file" id=".xml" onChange={handleFileSelect} /><br/><br/><br/>
      <button type = "submit"  className="button1" value="Upload File">Submit</button>
    </form>
     </>
     )
    }
  
  
  
  
  export default Gen_config
  
  
  
  
  