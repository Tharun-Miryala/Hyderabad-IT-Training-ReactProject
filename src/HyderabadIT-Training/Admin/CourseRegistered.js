import React, { useEffect, useState } from 'react'
import PaginationSet from './PaginationSet'
import { Button } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'
import DeletePage from './DeletePage'

const CourseRegistered = () => {
  const [registered, setRegisteres] = useState([])
  const [search, setSearch] = useState("")
  const [currentRegisterdCoursePageId, setCurrentRegisterdCoursePageId] = useState(null);
  const [showAdminRegisterdCourseDelete, setShowAdminRegisterdCourseDelete] = useState(false);

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRcordsPerPage] = useState(5);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage
  const records = registered.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(registered.length / recordsPerPage)

  useEffect(()=>{
    fetch("https://hyderabad-it-training-projectdata.onrender.com/registeredcourse")
    .then(res=>res.json())
    .then(data=>setRegisteres(data))
    .catch((error)=>{
        console.log(error);
    })
  })

  const DeleteAdminRegisterdCourse = (deleteId) =>{
    setShowAdminRegisterdCourseDelete(true)
    setCurrentRegisterdCoursePageId(deleteId)
  }
  const onCancel = () =>{
    setShowAdminRegisterdCourseDelete(false)
  }

  return (
    <div>
        <h3>Course Registered </h3>
        <div>
            <input 
                className="form-control mb-3 w-25" 
                type="text" 
                name="" 
                id="" 
                onChange = {(e)=>{setSearch(e.target.value)}} 
                placeholder="Search contacts....." 
                aria-describedby="helpId" 
            />
        </div>

        <div className='table table-responsive' style={{ height: '38vh', overflowY: 'auto' }}>
            <table className="table">
                <thead className="thead-inverse table-dark" style={{position: "sticky", top: 0}}>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Gender</th>
                        <th>Course</th>
                        <th>Payment</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.filter((item)=>{
                            return search === "" ? item : 
                                        item.name.toLowerCase().toUpperCase().includes(search) || item.email.includes(search) || item.mobile.includes(search) || item.status.includes(search) || item.gender.includes(search) || item.course.includes(search)
                        }).map(registeredPerson =>{
                            return(
                                <tr key={registeredPerson.id}>
                                    <td>{registeredPerson.name}</td>
                                    <td>{registeredPerson.email}</td>
                                    <td>{registeredPerson.mobile}</td>
                                    <td>{registeredPerson.status}</td>
                                    <td>{registeredPerson.gender}</td>
                                    <td>{registeredPerson.course}</td>
                                    {
                                        registeredPerson.payment === "Online payment successfull" ? 
                                                        <td className='text-success'>{registeredPerson.payment}</td>
                                                        :
                                                        <td className='text-warning'>{registeredPerson.payment}</td>
                                    }
                                    <td>
                                        <Button title="remove" className='text-danger' variant="link" style={{textDecoration: 'none'}} onClick={()=>DeleteAdminRegisterdCourse(registeredPerson.id)}>
                                            <Trash />
                                        </Button>
                                        <DeletePage 
                                            statusId = {currentRegisterdCoursePageId}
                                            show={showAdminRegisterdCourseDelete} 
                                            onCancel={onCancel}
                                            name="registeredcourse"
                                        /> 
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

export default CourseRegistered