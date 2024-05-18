import React from 'react'
import { Pagination } from 'react-bootstrap'

const PaginationSet = ({currentPage, setCurrentPage, totalPages, onLimitChange}) => {

  const numbers = [...Array(totalPages+1).keys()].slice(1)
    let lastPageSize;
    if(currentPage <= totalPages){
        lastPageSize = currentPage
    }
    else if(currentPage >= totalPages){
        setCurrentPage(1)
    }
    else{
        setCurrentPage(totalPages)
        lastPageSize = currentPage
    }

  const firstPage = () =>{
    if(currentPage !== 1){
        setCurrentPage(1)
    }
  }
  const prePage = ()=>{
    if(currentPage !== 1){           
      setCurrentPage(currentPage-1)
    }
  }

  const changeCurrenttPage = (id)=>{
    setCurrentPage(id)
  }

  const nextPage = ()=>{
    if(currentPage !== totalPages ){                
      setCurrentPage(currentPage+1)
    }
  }
  const lastPage = () =>{
    if(currentPage !== totalPages){
        setCurrentPage(totalPages)
    }
  }


  return (
    <div className='d-flex justify-content-end'>
        <select className='me-5' style={{height:'37px'}} onChange={(e)=>onLimitChange(e.target.value)}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
        </select>

        <Pagination className=''>
        <Pagination.First onClick={firstPage} />
        <Pagination.Prev onClick={prePage} />
        {
            numbers.map((n,i)=>{
                return(
                    <Pagination.Item className={`${currentPage === n ? 'active' : ''}`} onClick={()=>{changeCurrenttPage(n)}} key={i}>
                        {n}
                    </Pagination.Item>
                )
            })
        }
        <Pagination.Next onClick={nextPage} />
        <Pagination.Last onClick={lastPage} />
    </Pagination> 
    </div>
    
  )
}

export default PaginationSet