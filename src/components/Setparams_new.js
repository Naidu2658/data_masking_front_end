import React,{ useEffect,useState,useRef} from 'react'
import { useLocation } from 'react-router-dom';
import DataMasking from './DataMasking';
import Kanon from './Kanon';
import Ldiversity from './Ldiversity';
import Tcloseness from './Tcloseness';
import  axios  from 'axios';
const Setparams_new = () => {
  const loc=useLocation();
  const [file, setSelectedFile] = React.useState(null);
  let xPaths = useRef([]);
  let xPaths_sa=useRef([]);
    //console.log("hiii" + loc.state.xpaths);
   
    const handleFileSelect = (event) => {
      setSelectedFile(event.target.files[0])
     
    }

    let initTodo;
    if (localStorage.getItem("todos") === null) {
      initTodo = [];
    }
    else {
      initTodo = JSON.parse(localStorage.getItem("todos"));
    }

    const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


    const addTodo = (algo, xpath, pattern, xpath_sa, k_value,l_value, t_value) => {
      console.log("I am adding this todo", xpath, pattern)
      let sno;
      if (todos.length === 0) {
        sno = 0;
      }
      else {
        sno = todos[todos.length - 1].sno + 1;
      }
      let xpaths_temp=xpath.split(",");
      let xpaths_sa_temp=xpath_sa.split(",");
      const myTodo = {
        sno: sno,
        algo: algo,
        xPaths: xpaths_temp ,
        sensitive_attributes : xpaths_sa_temp,
        k: k_value,
        l: l_value,
        t: t_value,
        pattern: pattern,
      }
      setTodos([...todos, myTodo]);
      console.log("hell");
      console.log(todos);
    }
    
    const onDeletedm = (todo) => {
      console.log("I am ondelete of todo", todo);
      // Deleting this way in react does not work
      // let index = todos.indexOf(todo);
      // todos.splice(index, 1);
  
      setTodos(todos.filter((e) => {
        return e !== todo;
      }));
      console.log("deleted", todos)
      localStorage.setItem("todos", JSON.stringify(todos));
    }

    const show = () => {
      const formData = new FormData();
      formData.append("file", file);
      // formData.append("algorithms", todos);
      console.log(file);
      console.log(todos);
      console.log("naidu");
     /// console.log(formData.get("algorithms"));
     const headers = { 
      "Content-Type": "multipart/form-data" 
                    };
      

     axios.post('http://localhost:8090/uploaddata', formData, { headers })
      .then(response => 
        {
          console.log("return post method");
        
        });

     
  
    }
    const show1 = () => {

     const headers={
        "Content-Type": "application/json"
      };
      
    const obj={
      algorithms : todos
    }
    console.log(obj.algorithms);
       axios.post('http://localhost:8090/applyMultiMasking', obj, { headers })
        .then(response => 
          {
            console.log(response);
            
          });
    }


  return (
    <div>
        <div>
          
          {
          
            loc.state.xpaths.map((item)=>
            {
              console.log(item);
              console.log("hii");
              return <><text>{item}</text><br></br></>
            })
            
            }
           
          
        </div >
       <div><DataMasking addTodo={addTodo}/> <br></br>
        <Kanon addTodo={addTodo}/> <br></br>
        <Ldiversity addTodo={addTodo}/> <br></br>
        <Tcloseness addTodo={addTodo}/> <br></br></div> 
      
     { todos.map((todo)=>{
                //console.log(todo.sno);
                return (<><textarea value={todo.sno}></textarea>
                <br></br>
                <button  onClick={()=>{onDeletedm(todo)}}>delete</button>  <br></br>
                </>  
                )
            })}

      <input type="file" id=".xml" onChange={handleFileSelect} /><br/><br/><br/>
      <button  type = "submit" onClick={show} className="button1" >Submit</button>
      <button  type = "submit" onClick={show1}  className="button1" >download</button>
    </div>
  )
}

export default Setparams_new;
