import React from 'react'
import path404 from './error_404.jpg'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const NoPage = () => {

  const navigate = useNavigate()
  
  const goHome = () =>{
      navigate("/")
  }
  return (
    <div className='container-fluid  mb-5'>
        <img className='w-25' src={path404} alt='' />
        <h5>The page you are trying to access doesn’t exist or has been moved.</h5>
        <h5>Try going back to our homepage.</h5>
        <Button onClick={goHome}>Go To Home</Button>
    </div>
  )
}

export default NoPage