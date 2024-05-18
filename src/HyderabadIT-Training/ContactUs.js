import React, { useEffect, useState } from 'react'
import './Style.css'
import Axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const ContactUs = () => {

  const [enquiryDataID, setEnquiryDataID] = useState([])
  const [enquiryData, setEnquiryData] = useState({
    id: null,
    name:'',
    email:'',
    course:'',
    mobile:'',
    message:''
  })

  useEffect(()=>{
    Axios.get("https://hyderabad-it-training-projectdata.onrender.com/enquiries")
    .then(res=> setEnquiryDataID(res.data))
    .catch(error=> console.log(error))
  })

  const submitHandlerEnquiry = (e) =>{
    e.preventDefault();
    if(enquiryData.name === "" || enquiryData.email === "" || enquiryData.course === "" || enquiryData.mobile === "" || enquiryData.message === ""){
      toast.warning("Enter your details and problem")
    }
    else{      
      const enquiryId = enquiryDataID.length > 0 ? enquiryDataID[enquiryDataID.length - 1].id + 1 : 1
      Axios.post("https://hyderabad-it-training-projectdata.onrender.com/enquiries", {id: enquiryId, name: enquiryData.name, email: enquiryData.email, course: enquiryData.course, mobile: enquiryData.mobile, message: enquiryData.message})
      .then(resp=>{
        document.getElementById("enquirystatus").innerHTML="Successfully Enquiry sent....!"
        setEnquiryData({...enquiryData, name: "", email: "", course: "", mobile: "", message: ""})
        toast.success("Successfully Enquiry sent....!")
        setTimeout(() => {
          document.getElementById("enquirystatus").innerHTML=""
        }, 6000);
      })
      .catch(error =>{
        console.log(error);
      })
    }
  }

  return (
    <>
      <div className='container-fluid'>
          <div className='row p-5'>
            <div className='col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8' id='contactUsNavline'>
                <form className='p-4' onSubmit={submitHandlerEnquiry}>
                  <h4>Quick Enquiry</h4>
                  <div className="form-group d-flex m-4">
                    <input 
                      type="text" 
                      className="w-50 me-2 p-2 "
                      name="name" 
                      id="name"
                      placeholder="Your name"
                      value={enquiryData.name}
                      onChange={(e)=>{setEnquiryData({...enquiryData, name: e.target.value})}}
                    />
                    <input 
                      type="email" 
                      className="w-50 me-2 p-2"
                      name="email" 
                      id="email" 
                      placeholder="Email"
                      value={enquiryData.email}
                      onChange={(e)=>{setEnquiryData({...enquiryData, email: e.target.value})}}
                    />
                  </div>
                  <div className="form-group d-flex m-4">
                    <input 
                      type="number" 
                      className="w-50 me-2 p-2 " 
                      name="mobile" 
                      id="mobile" 
                      placeholder="Phone"
                      value={enquiryData.mobile}
                      onChange={(e)=>{setEnquiryData({...enquiryData, mobile: e.target.value})}}
                    />
                    <select className='w-50 me-2 p-2' value={enquiryData.course} onChange={(e)=>{setEnquiryData({...enquiryData, course: e.target.value})}}>
                      <option value=''>Select your Course</option>
                      <option value='UI/UX Designing'>UI/UX Designing</option>
                      <option value='UI Development'>UI Development</option>
                      <option value='MERN Full Stack'>MERN Full Stack</option>
                    </select>
                  </div>
                  <div className="form-group m-4">
                    <textarea 
                      className="form-control" 
                      name="msg" 
                      id="msg" 
                      rows="3" 
                      placeholder="Message"
                      value={enquiryData.message}
                      onChange={(e)=>{setEnquiryData({...enquiryData, message: e.target.value})}}
                    ></textarea>
                  </div>
                  <input type="submit" className='btn btn-primary w-25' value="Send"/>
                  <ToastContainer />

                  <p id='enquirystatus' className='text-success'></p>
                </form>
            </div>
            <div className='col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 '>
              <div className='ms-5 ps-5' >
                <h4 className='p-3 text-start'>Address</h4>
                <p className='w-75'>House No 40, Third Floor, Vittalrao Nagar, Madhapur, Hitech City Main Road, Hyderabad, Telangana- 081</p>
                <p>+91 81439 56849</p>
                <p>info@hyderabadittrainings.com</p>
                <p>hr@hyderabadittrainings.com</p>
              </div>
            </div>
          </div>  
      </div>
      <div className=''>
        <iframe 
          title='Map Navigation'
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15225.298421846957!2d78.3846863!3d17.4441709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91065c1d3e53%3A0x2d84d6e311a69e21!2sHyderabad%20IT%20Trainings%20-%20Python%20Java%20MERN%20Full%20Stack%20Web%20Development%20React%20JS%20PHP%20UI%20UX%20Design%20Training%20Institute%20Hyderabad!5e0!3m2!1sen!2sin!4v1706867948189!5m2!1sen!2sin"
          width="100%" 
          height="500" 
          style={{border:0}}
          allowFullScreen
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
      </div>
    </>
  )
}

export default ContactUs