import React, { useState }  from 'react';
import './registration.css';
import {Form ,Button} from 'react-bootstrap';
const Kanon = ({addTodo}) => {

    const [xpath, setxpath] = useState("");
    const [kvalue, setkvalue] = useState("");
    const [algo, setalgo] = useState("kanonymity");

    const submit = (e) => {
        e.preventDefault();
        if (!xpath) {
            alert("xpath cannot be blank");
        }
        else {
            addTodo(algo, xpath,"","", kvalue,"","");
            setxpath("");
            setkvalue("");
        }
    }
  return (
    <div className="RegistrationPage">
      <h3>Add param for kanonomity</h3>
      <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>xpaths</Form.Label>
                            <Form.Control required type="text"  value={xpath} onChange={(e) => setxpath(e.target.value)} placeholder="xpaths" />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>kvalue</Form.Label>
                            <Form.Control required type="text" value={kvalue} onChange={(e) => setkvalue(e.target.value)}  placeholder="kvalue" />
                        </Form.Group>
             

                        <Button size="lg" variant="primary" type="submit">
                        Add Kanon
                        </Button>
            </Form>
    </div>
  )
};

export default Kanon
