import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Check, Trash } from 'react-bootstrap-icons'
import DeletePage from './DeletePage';
import PaginationSet from './PaginationSet';

const ViewEnquiry = () => {
  const [enquiries, setEnquiries] = useState([])
  const [showEnquiryDeletePage, setShowEnquiryDeletePage] = useState(false);
  const [currentEnquiryId, setCurrentEnquiryId] = useState(null);
  const [search, setSearch] = useState("")

  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage, setRcordsPerPage] = useState(5);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage
  const records = enquiries.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(enquiries.length / recordsPerPage)

  const onCancel = () => setShowEnquiryDeletePage(false);
  
  const deleteEnquiry = (enquiryId) => {
    setShowEnquiryDeletePage(true)
    setCurrentEnquiryId(enquiryId)
  };

  useEffect(()=>{
    Axios.get("https://hyderabad-it-training-projectdata.onrender.com/enquiries")
    .then((response)=>{
      setEnquiries(response.data)
    })
    .catch((error)=>{
      console.log(error);
    })
  })

  return (
    <div>
      <h3>View Enquiry</h3>
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

      <div className='table table-responsive' style={{height: '40vh', overflowY: 'auto'}}>
        <table className='table table-striped table-inverse table-hover'>
          <thead className="thead-inverse table-dark" style={{position: "sticky", top: 0}}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Course</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              records.filter((item)=>{
                          return search === "" ? item : 
                            item.name.toLowerCase().toUpperCase().includes(search) || item.email.includes(search) || item.mobile.includes(search) || item.course.includes(search) || item.message.includes(search)
                      }).map(enquiry =>{
                return(
                  <tr key={enquiry.id}>
                    <td>{enquiry.name}</td>
                    <td>{enquiry.email}</td>
                    <td>{enquiry.mobile}</td>
                    <td>{enquiry.course}</td>
                    <td>{enquiry.message}</td>
                    <td>
                      <Button className='text-primary ' variant="link" style={{textDecoration: 'none'}}>
                        <Check />
                      </Button>
                      <Button title="remove" className='text-danger' onClick={() => deleteEnquiry(enquiry.id)} variant="link" style={{textDecoration: 'none'}}>
                        <Trash />
                      </Button>
                      <DeletePage 
                        statusId = {currentEnquiryId}
                        show={showEnquiryDeletePage} 
                        onCancel={onCancel}
                        name = "enquiries"
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

export default ViewEnquiry