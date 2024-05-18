import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-success' id='foot'>
        <div className='container p-4'>
            <div className='row '>
                <div className='col-sm-12 col-md-12 col-lg-3 col-xl-3 text-white '>
                    <h4>Hyderabad IT Trainings</h4>
                    <p>
                        Hyderabad IT Trainings offers an excellent Software courses training with end to end support to the candidates. We 
                        offer MERN Full stack, Python Fullstack, React JS, UI Development, Web/UI Designing & Web Development.
                    </p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-3 col-xl-3 text-white'>
                    <h4>Quick Links</h4>
                    <ul className='list-inline'>
                        <li><span className='text-warning'>- </span><NavLink to=''>Register</NavLink></li>
                        <li><span className='text-warning'>- </span><NavLink to=''>All Courses</NavLink></li>
                        <li><span className='text-warning'>- </span><NavLink to=''>Privacy Policy</NavLink></li>
                        <li><span className='text-warning'>- </span><NavLink to=''>Refund Policy</NavLink></li>
                    </ul>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-3 col-xl-3 text-white '>
                    <h4>Reach Us</h4>
                    <p>House No 40, Third Floor Vittalrao Nagar, Madhapur, Hitech City Main Rd, Hyderabad, Telangana 500081</p>
                </div>
                <div className='col-sm-12 col-md-4 col-lg-3 col-xl-3 text-white '>
                    <h4>Contact Us</h4>
                    <p></p>
                </div>
            </div>
            <div className='d-flex justify-content-center text-white '>
                <p>&copy; 2023, All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer