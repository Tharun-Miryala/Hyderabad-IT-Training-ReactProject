import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About.js'
import Slide from './Slide.js'
import Courses from './Courses.js'
import Batches from './Batches.js'
import ContactUs from './ContactUs.js'
import Header_2 from './Header_2.js'
import AboutUs from './AboutUs.js'
import NoPage from './NoPage.js'
import LoginPage from './Admin/LoginPage.js'
import AdminDashBoard from './Admin/AdminDashBoard.js'
import Header from './Header.js'
import Footer from './Footer.js'

const Routing = () => {
  return (
    <div className=''>
        <Routes>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/admin' element={
                                            <>
                                                <Header />
                                                <AdminDashBoard />
                                                <Footer />
                                            </>
                                        }
            
            >
            </Route>
            <Route path='/' element={
                                <>
                                    <Header />
                                    <Slide />
                                    <About />
                                    <Courses />
                                    <Batches />
                                    <Footer />
                                </>
                            }
            >
            
            </Route>
            <Route path='/aboutus' element={
                                        <>
                                            <Header />
                                            <Header_2 title="About Us"/> 
                                            <AboutUs />
                                            <Footer />
                                        </>
                                    }
            >
            </Route>
            <Route path='/course' element={
                                        <>
                                            <Header />
                                            <Header_2 title="Courses"/>
                                            <Courses />
                                            <Footer />
                                        </>
                                    }
            >
            </Route>
            <Route path='/batches' element={
                                        <>
                                            <Header />
                                            <Header_2 title="New Batches"/>
                                            <Batches batchtitle="Register"/>
                                            <Footer />
                                        </>
                                    }
            >
            </Route>
            <Route path='/contact' element={
                                        <>
                                            <Header />
                                            <Header_2 title="Contact Us"/>
                                            <ContactUs />
                                            <Footer />
                                        </>
                                    }
            >    
            </Route>
            <Route path='*' element={<NoPage />}></Route>
        </Routes>
    </div>
  )
}

export default Routing