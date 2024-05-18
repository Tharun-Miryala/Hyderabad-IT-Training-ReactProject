import axios from 'axios'
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const DeletePage = ({statusId, show, onCancel, name}) => {
    const DeleteEnquiry = (ID) =>{
          axios.delete(`https://hyderabad-it-training-projectdata.onrender.com/${name}/${ID}`)
          .then(()=>{
            toast.success(`Id ${ID} Removed...!`)            
              onCancel()
          })
          .catch(error =>{
            console.log(error);
          })    
      }

  return (
    <div>
        <Modal show={show} onHide={onCancel} backdrop={false}>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold">Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <div className="row mb-3">
                        <p>Are you sure you want to delete: { statusId } ?</p>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"success"}  onClick={()=>DeleteEnquiry(statusId)}>yes</Button>
                <ToastContainer />
                <Button variant={"secondary"} onClick={onCancel}>No</Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default DeletePage