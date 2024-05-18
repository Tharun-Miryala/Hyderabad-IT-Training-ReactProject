import React, { useState } from 'react'
import './Style.css'

const About = () => {

  const [rName, setRName] = useState("")
  const [rEmail, setRMail] = useState("")
  const [rPhone, setRPhone] = useState("")
  const [rMsg, setRMsg] = useState("")

  const submitFormHandler = () =>{
    if(rName === "" || rEmail === "" || rPhone === "" || rMsg === "") {
    }
    else{
      setRName("")
      setRMail("")
      setRPhone("")
      setRMsg("")
      alert("Your mail has been sent successfully.")
    }
  }
  return (
    <div className='container' id='aboutHIT'>
        <div className='row pt-5'>
            <div className=' col-sm-12 col-md-12 col-lg-6 col-xl-7' >
                <h1 className='pb-3'>Welcome to <span className='text-danger'>Hyderabad IT Trainings</span></h1>
                <p className='pb-2'>
                    Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings in India, 
                    USA and UK, Australia. We are Providing high quality training is our core value. We offer both classroom and online 
                    training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.
                </p>
                <p className='pb-2'>
                    Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more 
                    than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that 
                    enables students to gain realtime exposure.
                </p>
                <p className='pb-2'>
                    Hyderabad IT Trainings is a <strong>one-stop shop for IT courses, Web Development services & Recruitment services</strong>. 
                    Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, 
                    Hyderabad IT Trainings offers Real-time and placement focuses training services.
                </p>
            </div>
            <div className=' col-sm-12 col-md-12 col-lg-6 col-xl-5 d-flex justify-content-center'>
                <form className='rounded w-75'  onClick={submitFormHandler}>
                    <h4 className='bg-success pt-2 pb-2 text-white'>Register Now</h4>
                      <input className=' m-3 p-1 w-75 ' required type="text" name="Name" placeholder="Name" aria-describedby="nameID" value={rName} onChange={e=>{setRName(e.target.value)}}/>
                      <input className=' m-3 p-1 w-75 ' required type="email" name="Email" aria-describedby="emailHelpId" placeholder="Email" value={rEmail} onChange={e=>{setRMail(e.target.value)}} />                    
                      <input className=' m-3 p-1 w-75 ' required type="number" name="Phone" placeholder="Phone" aria-describedby="phone" value={rPhone} onChange={e=>{setRPhone(e.target.value)}} />                
                      <textarea className="w-75 " placeholder="message" name="Text" rows="3" value={rMsg} onChange={e=>{setRMsg(e.target.value)}}></textarea>
                    <input type="submit" className="btn btn-warning m-4 w-50" value="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default About