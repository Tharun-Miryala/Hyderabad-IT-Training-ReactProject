import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form, Modal, Row, Col } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const EditBatches = ({editStatusId, 
                        show, 
                        cancelEditHandler, 
                        editBatchCourse, 
                        editBatchDate, 
                        editBatchTiming, 
                        editBatchDuration, 
                        editBatchTrainer, 
                        editBatchRegister
                    }) => {


    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [timings, setTimings] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")
    const [register, setRegister] = useState(editBatchRegister.register)

    const UpdateBatchHandler = (ID) =>{
        if(course === "" || date === "" || timings === "" || duration === "" || trainer === ""){
            alert("Please Check Data")
        }
        else{
            axios.put(`https://hyderabad-it-training-projectdata.onrender.com/batches/${ID}`, {course, date, timings, duration, trainer, register})
            .then(()=>{
                toast.success("Successfully Updated....!")
                setCourse("")
                setDate("")
                setTimings("")
                setDuration("")
                setTrainer("")
                setTimeout(() => {
                    cancelEditHandler();
                }, 6000);
                
            })
            .catch(error=>{
                console.log(error);
            })  
        }
    }

  return (
    <div>
        <Modal show={show} onHide={cancelEditHandler} centered backdrop={false}>    
            <Modal.Header closeButton>
                <Modal.Title>Edit Batch {editStatusId}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Course ID</Form.Label>
                        <Col sm="9">
                            <Form.Control readOnly defaultValue={editStatusId} disabled/>   
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Course</Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                type="text" 
                                name="course" 
                                id="course"
                                defaultValue={editBatchCourse}
                                onChange={e=>{setCourse(e.target.value)}}
                                autoFocus
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Date</Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                type="date" 
                                name="date" 
                                id="date"
                                defaultValue={editBatchDate}
                                onChange={e=>{setDate(e.target.value)}}
                                autoFocus
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Timings</Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                type="text"  
                                placeholder="" 
                                name="timing" 
                                id="timing"
                                defaultValue={editBatchTiming}
                                onChange={e=>{setTimings(e.target.value)}}
                                autoFocus
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm="3">Duration</Form.Label>
                        <Col sm="9">
                            <Form.Control 
                                type="number"  
                                placeholder="" 
                                name="duration" 
                                id="duration"
                                defaultValue={editBatchDuration}
                                onChange={e=>{setDuration(e.target.value)}}
                                autoFocus
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" value={editBatchTrainer} onChange={e=>{setTrainer(e.target.value)}}>
                        <Form.Label column sm="3">Trainer</Form.Label>
                        <Col sm="9">
                            <Form.Select required>
                            <option value=''>---- Select Trainer ----</option>
                            <option value='Sudheer'>Sudheer</option>
                            <option value='chandrashekar'>chandrashekar</option>
                            <option value='Sakthivel'>Sakthivel</option>
                            <option value='Bhanu Prasad'>Bhanu Prasad</option>
                            <option value='Prakash'>Prakash</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" onChange={e=>{setRegister(e.target.value)}}>
                        <Form.Label column sm="3">Course</Form.Label>
                        <Col sm="9">
                            <Form.Select required>
                                <option value={register}>{register}</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={cancelEditHandler}>Close</Button>
                <Button variant="primary" onClick={()=>UpdateBatchHandler(editStatusId)}>Update</Button>
                <ToastContainer />
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default EditBatches
