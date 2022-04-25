
import './App.css';
import Gen_config from './components/Gen_config'
import Setparams from './components/Setparams'
import Applydm from './components/Applydm'
import NoPage from './components/NoPage'
import React from 'react';
import Setparams_new from './components/Setparams_new'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar';


function App() {
  return (

   <Router>
       <Navbar/>
   <div className="App">
 

    
    
   <Routes>
     {/* <Route exact path="/" element={<App/>}>  </Route> */}
     <Route exact path="/applydm" element={<Applydm/>}></Route>
     <Route exact path="/setparams_new" element={<Setparams_new/>}></Route>
     <Route exact path="/genconfig" element={<Gen_config/>}></Route>
     {/* <Route path="*" element={<NoPage />} /> */}
   </Routes>
 </div>
 </Router>
   
  );
}
export default App;