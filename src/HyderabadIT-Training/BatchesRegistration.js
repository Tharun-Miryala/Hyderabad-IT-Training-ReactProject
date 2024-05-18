import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const BatchesRegistration = ({RegistrationStatusId, RegistrationCouseName, show, handleClose}) => {

    const [data, setData] = useState([])
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[mobile, setMobile] = useState("")
    const[status, setStatus] = useState("")
    const[gender, setGender] = useState("")
    const[course, setCourse] = useState("")
    const[payment, setPayment] = useState("")

    useEffect(()=>{
        axios.get("https://hyderabad-it-training-projectdata.onrender.com/registeredcourse")
        .then(res=> setData(res.data))
        .catch(error=> console.log(error))
    })

    const SaveHandler = (e) =>{
        e.preventDefault();
        if(name === "" || email === "" || mobile === "" || status === "" || gender === "" || course==="" || payment===""){
            alert("Please Enter Full Details")
        }
        else{
            const courseRegisterId = data.length > 0 ? data[data.length - 1].id + 1 : 1
            axios.post("https://hyderabad-it-training-projectdata.onrender.com/registeredcourse", { id: courseRegisterId, name, email, mobile, status, gender, course, payment})
            .then((res) => {
                setName("")
                setEmail("")
                setMobile("")
                setStatus("")
                setGender("")
                setCourse("")
                setPayment("")

                toast.success("Successfully Added....!")
                
                setTimeout(() => {
                    handleClose()
                }, 5000);
            })
            .catch(error=>{
                console.log(error);
            })
        }
    }

  return (                                                 
    <div>                                                       
        <Modal show={show} onHide={handleClose} centered size="lg" backdrop={false}>    
            <Modal.Header closeButton>
                <Modal.Title>Course Registration Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Course ID</Form.Label>
                        <Col sm="10">
                            <Form.Control readOnly defaultValue={RegistrationStatusId} disabled/>  
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Name</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="text" 
                                name="name" 
                                id="name"
                                placeholder="Enter Name" 
                                value={name}
                                onChange={e=>{setName(e.target.value)}}
                                required 
                                autoFocus
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Email</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="email" 
                                placeholder="email123@example.com" 
                                value={email}
                                onChange={e=>{setEmail(e.target.value)}}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="2">Mobile</Form.Label>
                        <Col sm="10">
                            <Form.Control 
                                type="number"  
                                placeholder="000000000" 
                                value={mobile}
                                onChange={e=>{setMobile(e.target.value)}}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" value={status} onChange={e=>{setStatus(e.target.value)}}>
                        <Form.Label column sm="2">Education Status</Form.Label>
                        <Col sm="10">
                            <Form.Select aria-label="Default select example">
                                <option>Select </option>
                                <option value="Student">Student</option>
                                <option value="Employee">Employee</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >
                        <Form.Label column sm="2">Gender</Form.Label>
                        <Col sm="10">
                            <Form.Check
                                inline
                                label="Male"
                                name="Gender"
                                id="Gender-Male"
                                type="radio"
                                aria-label="radio 1"
                                value="Male"
                                onChange={e=>{setGender(e.target.value)}}
                                checked={gender === "Male"}
                            />
                            <Form.Check
                                inline
                                label="Female"
                                name="Gender"
                                id="Gender-Female"
                                type="radio"
                                aria-label="radio 2"
                                value="Female"
                                onChange={e=>{setGender(e.target.value)}}
                                checked={gender === "Female"}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" >  
                        <Form.Label column sm="2">Course</Form.Label>
                        <Col sm="10">
                            <Form.Check
                                inline
                                label={RegistrationCouseName}
                                name="Course"
                                type="checkbox"
                                value={RegistrationCouseName}
                                onChange={e=>{setCourse(e.target.value)}}
                                checked={course === RegistrationCouseName}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3"value={payment} onChange={e=>{setPayment(e.target.value)}}>
                        <Form.Label column sm="2">Payment</Form.Label>
                        <Col sm="10">
                            <Form.Select required aria-label="Default select example">
                                <option>Select Payment Method</option>
                                <option value='Online payment successfull'>Online payment successfull</option>
                                <option value='Cash payment Pending'>Cash payment Pending</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={SaveHandler}>Register</Button>
            </Modal.Footer>
            <ToastContainer />
        </Modal>
    </div>
  )
}

export default BatchesRegistration