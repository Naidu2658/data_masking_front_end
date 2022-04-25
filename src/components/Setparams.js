import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import react, { useRef } from 'react';

const Setparams = () => {

  const loc=useLocation();
  const showparam=() =>{    console.log(data);  }

  const [data, setdata] = useState([]);

const submithandl=()=>{
 setdata([]);
// let data={
//   "consent_request_id": "fromlink",
//   "ehr_id": JSON.stringify(props.ehr_id),
//   "dataCustodianId": JSON.stringify(props.dataCustodianId),
//   "selectedRecords": userinfo.languages,
//   "purpose": purpose,
//   "delegateAccess": delegateaccess,
//   "signature": signature
// }
itemsRef.current.map((item,i) => {
  if(item.value!="")
  {
  console.log(item.value,loc.state.xpaths[i],algoRef.current[i].value,"*");
  const obj = {
    "path":loc.state.xpaths[i] ,
      "algo":algoRef.current[i].value,
      "param": item.value
    };
    setdata((items)=>
    {
      return items.concat(JSON.stringify(obj));
    })
  }
});

}
// itemsRef.current.value
const itemsRef = useRef([]);
const algoRef = useRef([]);

  return (
    <div>
      <div>
        <h3>select params to apply masking</h3>
                <br/>
        <div className="accordion">
          <table>
   {loc.state.xpaths.map((item,i) => (
       <tr>
       <td> <text>{item}</text></td>
       <td> <input type="text" name="algo" placeholder="algo"  ref={el => itemsRef.current[i] = el} ></input>
       </td>
       <td> <select name="cars" ref={el => algoRef.current[i] = el} >
      
  <option value="text_masking">Text Masking</option>
  <option value="k-anon">k-anonomity</option>
  <option value="l-diversity">L-Diversity</option>
  <option value="t-closeness">T-Closeness</option>
</select></td>
                </tr>

        
      ))}
      </table>
      <br/>    
      <button  onClick={submithandl}>add param</button>
      <button  onClick={showparam}>show param</button>
        </div>
       
      </div>
    </div>
  )
}

export default Setparams;
