import React,{useState} from 'react'
import './registration.css';
import {Form ,Button} from 'react-bootstrap';

const Tcloseness = ({addTodo}) => {
  const [xpath, setxpath] = useState("");
  const [xpath_sa, setxpath_sa] = useState("");
  const [kvalue, setkvalue] = useState("");
  const [tvalue, settvalue] = useState("");
  const [algo, setalgo] = useState("tcloseness");

  const submit = (e) => {
    e.preventDefault();
    if (!xpath) {
        alert("xpath cannot be blank");
    }
    else {
      setalgo("tcloseness");
        addTodo(algo,xpath,"",xpath_sa, kvalue, "",tvalue);
        setxpath("");
        setxpath_sa("");
        setkvalue("");
        settvalue("");
    }
}
  return (
    <div className="RegistrationPage">
      <h3>Add param for Tcloseness</h3>
            <Form onSubmit={submit}>
            <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>xpaths</Form.Label>
                            <Form.Control required type="text"  value={xpath} onChange={(e) => setxpath(e.target.value)} placeholder="xpaths" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>sensitive attributes</Form.Label>
                            <Form.Control required type="text"  value={xpath_sa} onChange={(e) => setxpath_sa(e.target.value)} placeholder="xpaths_sa" />
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>kvalue</Form.Label>
                            <Form.Control required type="text" value={kvalue} onChange={(e) => setkvalue(e.target.value)}  placeholder="kvalue" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPatientName">
                            <Form.Label>tvalue</Form.Label>
                            <Form.Control required type="text" value={tvalue} onChange={(e) => settvalue(e.target.value)}  placeholder="tvalue" />
                        </Form.Group>
             

                        <Button size="lg" variant="primary" type="submit">
                        Add Ldiversity
                        </Button>

            </Form>
    </div>
  )
}

export default Tcloseness
