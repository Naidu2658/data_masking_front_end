import React, { useState } from 'react'
import './registration.css';
import {Form ,Button} from 'react-bootstrap';
const DataMasking = ({addTodo}) => {
    const [algo, setalgo] = useState("datamasking");
    const [xpath, setxpath] = useState("");
    const [pattern, setpattern] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!xpath) {
            alert("xpath cannot be blank");
        }
        else {
            addTodo(algo, xpath, pattern,"","","","");
            setxpath("");
            setpattern("");
        }
    }
  return (
    <div className="RegistrationPage">
            <h3>Add param for datamasking</h3>
            <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>xpaths</Form.Label>
                            <Form.Control required type="text"  value={xpath} onChange={(e) => setxpath(e.target.value)} placeholder="xpaths" />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>pattern</Form.Label>
                            <Form.Control required type="text" value={pattern} onChange={(e) => setpattern(e.target.value)}  placeholder="pattern" />
                        </Form.Group>
             

                        <Button size="lg" variant="primary" type="submit">
                        Add masking
                        </Button>
            </Form>
        </div>
  )
}

export default DataMasking;
