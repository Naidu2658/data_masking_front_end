import React from 'react';


function details() {
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was:`)
      }
    return (
      <div className="wrapper">
  <form onSubmit={handleSubmit}  method="post">
  
  <label  htmlFor="algorithm">ALGORITHM</label>
  <select name="algorithm" id="algorithm">
      <option value="select">Select an algorithm</option>
      <option value="algorithm_1">algorithm_1</option>
      <option value="algorithm_2">algorithm_2</option>
      <option value="algorithm_3">algorithm_3</option>
  </select>
  <br/>
  <label  htmlFor="schemaPath">Schema Path:</label><br/>
  <input type="text" id="schemaPath" name="schemaPath" value=""/><br/>
  <label  htmlFor="datasetPath">DataSet Path:</label><br/>
  <input type="text" id="datasetPath" name="datasetPath" value=""/><br/><br/>
  <p><i/> ENTER PARAMETERS </p>
  
  <label  htmlFor="parameter">parameters</label>
  <select multiple name="element" id="parameter">
      <option value="select">Select an element</option>
      <option value="element_1">element_1</option>
      <option value="element_2">element_2</option>
      <option value="element_3">element_3</option>
  </select>
  <br/>  <br/>
  <label  htmlFor="value">VALUE</label>
  <select name="value" id="value">
      <option value="select">Select a value</option>
      <option value="value_1">value_1</option>
      <option value="value_2">value_2</option>
      <option value="value_3">value_3</option>
  </select>
  <br/><br/>
  <label  htmlFor="configurationName">CONFIGURATION NAME:</label><br/>
  <input type="text" id="configurationName" name="configurationName" value=""/><br/>
  <label  htmlFor="outputFileName">OUTPUT FILE NAME:</label><br/>
  <input type="text" id="outputFileName" name="outputFileName" value=""/><br/>
  <br/>
  <label  htmlFor=".xml">choose xml file</label><br/>
  
      <input type="file" id=".xml" /><br/><br/><br/>
      <label  htmlFor=".xsd">choose xsd file</label><br/>
      <input type="file" id=".xsd" /><br/><br/>
      <input type="submit" value="Submit" />
     
   
  </form>
 
    </div>
    )
  }
export default details




