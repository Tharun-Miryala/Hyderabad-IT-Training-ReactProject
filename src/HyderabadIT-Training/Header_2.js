import React from 'react'
import { NavLink } from 'react-router-dom'

const Header_2 = (p) => {
  return (
    <div className="container-fluid mb-5">
        <div className=" navbar navbar-expand-sm navbar-light bg-warning p-3">
            <div className='container'>
                <h3 className='text-start '>{p.title}</h3>
                <ul className='navbar-nav mr-auto mt-lg-0 '>
                  <li><NavLink className=" text-white pe-1 " to="/" style={{textDecoration:'none'}}>Home <span></span></NavLink></li>
                  <li><span className=" text-white pe-1 ">/ </span></li>
                  <li><span className='text-danger'>{p.title}</span></li>
                </ul>
            </div>
        </div>      
    </div>
  )
}

export default Header_2