import React, { useEffect, useState } from 'react'
import logo_Img from './logo.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import { BoxArrowLeft, BoxArrowRight, PersonCircle } from 'react-bootstrap-icons'

const Header = () => {
    const [userN, setUserN] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        let username = sessionStorage.getItem('username')
        if (username === '' || username === null) {
            // navigate('/login')
        }
        else {
            setUserN(username)
        }
    }, [])

    return (
        <div className='container-fluid sticky-top p-0'> 
            <nav className="navbar navbar-expand-lg navbar-light bg-light "  style={{backgroundColor: '#e3f2fd'}} >
                <div className='container-fluid'>
                    <NavLink className="navbar-brand me-auto " to="/" id="image">
                        <img src={logo_Img} alt='logo' className='col-8 col-sm-8 col-md-9 col-lg-10 col-xl-12'></img>
                    </NavLink>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className='offcanvas-header'>
                            <img src={logo_Img} alt='logo' className='col-6'></img>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body " id="collapsibleNavbar">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to="/aboutus">About US</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/course">Courses</NavLink>
                                </li>
                                {userN === "user" ?
                                        <>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to="/batches">Batches</NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to="/contact">Contact Us</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to="/batches">Batches</NavLink>
                                            </li>
                                            <li className='nav-item'>
                                                <NavLink className='nav-link' to="/contact">Contact Us</NavLink>
                                            </li>
                                        </>
                                }
                                {userN === "tharun" && <li className='nav-item'>
                                    <NavLink className='nav-link' to="/admin">DashBoard</NavLink>
                                </li>
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='d-flex '>
                        {
                            userN && <button className="btn btn-default btn-md text-warning"><strong><PersonCircle /> {userN}</strong></button>
                        }
                        {
                            userN === "user" || userN === "tharun" ?
                                <button type="button" className='btn btn-danger btn-md rounded-pill'><NavLink className='nav-link' to="/login"><BoxArrowLeft /> Log Out</NavLink></button>
                                :
                                <button type="button" className='btn btn-danger btn-md rounded-pill'><NavLink className='nav-link' to="/login"><BoxArrowRight /> Log In</NavLink></button>
                        }
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Header
