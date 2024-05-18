import React, { useEffect, useState } from 'react'
import './Style.css'
import axios from 'axios'
import BatchesRegistration from './BatchesRegistration'
import { Button } from 'react-bootstrap'
import { Pencil, Trash } from 'react-bootstrap-icons'
import DeletePage from './Admin/DeletePage'
import EditBatches from './Admin/EditBatches'
import PaginationSet from './Admin/PaginationSet'

const Batches = ({batchtitle}) => {
  const[batches, setBatches] = useState([])
  const [currentBatchPageId, setCurrentBatchPageId] = useState(null);
  const [currentCouseName, setCurrentCouseName] = useState();
  const [showRegistrationPage, setShowRegistrationPage] = useState(false);
 
  const [showAdminBatchDelete, setShowAdminBatchDelete] = useState(false);
  const [showAdminBatchEdit, setShowAdminBatchEdit] = useState(false);
  const [currentEditBatchCourse, setCurrentEditBatchCourse] = useState();
  const [currentEditBatchDate, setCurrentEditBatchDate] = useState();
  const [currentEditBatchTimings, setCurrentEditBatchTimings] = useState();
  const [currentEditBatchDuration, setCurrentEditBatchDuration] = useState();
  const [currentEditBatchTrainer, setCurrentEditBatchTrainer] = useState();

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRcordsPerPage] = useState(5);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage
  const records = batches.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(batches.length / recordsPerPage)
  
  const batchRegistration = (ID, courseName) =>{
    setShowRegistrationPage(true)
    setCurrentBatchPageId(ID)
    setCurrentCouseName(courseName)
  }
  const handleClose = () =>{
    setShowRegistrationPage(false)
  }

  const DeleteAdminBatch = (deleteId) =>{
    setShowAdminBatchDelete(true)
    setCurrentBatchPageId(deleteId)
  }
  const onCancel = () =>{
    setShowAdminBatchDelete(false)
  }

  const EditAdminBatch = (editId, editCourse, editDate, editTimings, editDuration, editTrainer) =>{
    setShowAdminBatchEdit(true)
    setCurrentBatchPageId(editId)
    setCurrentEditBatchCourse(editCourse)
    setCurrentEditBatchDate(editDate)
    setCurrentEditBatchTimings(editTimings)
    setCurrentEditBatchDuration(editDuration)
    setCurrentEditBatchTrainer(editTrainer)
  }
  const closeEditHandler = () =>{
    setShowAdminBatchEdit(false)
  }

  useEffect(()=>{
    axios.get("https://hyderabad-it-training-projectdata.onrender.com/batches")
    .then( res =>{
      setBatches(res.data)
    })
    .catch(error =>{
      console.log(error);
    })
  })

  return (
    <div className='container' id='batches'>
      <h2>New <span className='text-danger'>Batches</span></h2>
      <div className='table table-responsive' style={{height: '45vh', overflowY: 'auto'}}>
        <table className="table table-striped table-inverse table-hover table-responsive mb-5">
          <thead className="thead-inverse table-dark" style={{position: "sticky", top: 0}}>
            <tr className="text-white bg-dark">
              <th>Course</th>
              <th>Date</th>
              <th>Timings</th>
              <th>Duration</th>
              <th>Trainer</th>
              <th>{batchtitle}</th>
            </tr>
          </thead>
          <tbody >
            {
              records.map(batch=>{
                return(
                  <tr key={batch.id}>
                    <td>{batch.course}</td>
                    <td>{batch.date}</td>
                    <td>{batch.timings}</td>
                    <td>{batch.duration} Days</td>
                    <td>Mr. {batch.trainer}</td>
                    <td>
                      { batchtitle === "Register" ? 
                            <>
                              <Button title="registration" onClick={() => batchRegistration(batch.id, batch.course)} variant="link" style={{textDecoration: 'none'}}>
                                {batch.register}
                              </Button> 
                              <BatchesRegistration 
                                RegistrationCouseName = {currentCouseName}
                                RegistrationStatusId={currentBatchPageId}
                                show={showRegistrationPage} 
                                handleClose={handleClose}
                              /> 
                            </> 
                            :
                            <>
                              <Button title="Edit" variant="link" style={{textDecoration: 'none'}} onClick={()=>EditAdminBatch(batch.id, batch.course, batch.date, batch.timings, batch.duration, batch.trainer)}>
                                  <Pencil />
                              </Button> 
                              <Button title="remove" className='text-danger' variant="link" style={{textDecoration: 'none'}} onClick={()=>DeleteAdminBatch(batch.id)}>
                                  <Trash />
                              </Button>
                              <EditBatches 
                                  editBatchCourse = {currentEditBatchCourse}
                                  editStatusId={currentBatchPageId}
                                  show={showAdminBatchEdit} 
                                  cancelEditHandler={closeEditHandler}
                                  editBatchDate = {currentEditBatchDate}
                                  editBatchTiming = {currentEditBatchTimings}
                                  editBatchDuration = {currentEditBatchDuration}
                                  editBatchTrainer = {currentEditBatchTrainer}
                                  editBatchRegister = {batch}
                              />
                              <DeletePage 
                                statusId = {currentBatchPageId}
                                show={showAdminBatchDelete} 
                                onCancel={onCancel}
                                name="batches"
                              /> 
                            </>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>  
      </div>
            <PaginationSet 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={totalPages}
              onLimitChange={setRcordsPerPage}
            />
      
    </div>
  )
}

export default Batches
