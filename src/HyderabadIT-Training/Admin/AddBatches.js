import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


const AddBatches = () => {

    const [batchIdData, setBatchIdData] = useState([])
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [timings, setTimings] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")
    const [register, setregister] = useState("")

    useEffect(()=>{
        Axios.get("https://hyderabad-it-training-projectdata.onrender.com/batches")
        .then(res=> setBatchIdData(res.data))
        .catch(error=> console.log(error))
    })

    const BatchSubmitHandler = (e) =>{
        e.preventDefault();
        const batchId = batchIdData.length > 0 ? batchIdData[batchIdData.length - 1].id + 1 : 1
        if(course === "" || date === "" || timings === "" || duration === "" || trainer === "" || register === ""){
            toast.warning("Please Enter Data")
        }
        else (
            Axios.post("https://hyderabad-it-training-projectdata.onrender.com/batches", {id: batchId, course, date, timings, duration, trainer, register})
            .then(()=>{
                document.getElementById("batchstatus").innerHTML="Successfully Added....!";
                
                setCourse("")
                setDate("")
                setTimings("")
                setDuration("")
                setTrainer("")
                setregister("")
    
                toast.success("Successfully Added....!")
                setTimeout(() => {
                    document.getElementById("batchstatus").innerHTML=" "
                }, 1000);
            })
            .catch(error =>{
                console.log(error);
            })
        )
    }

  return (
    <div className='continer-fluid'>
        <form className='' onSubmit={BatchSubmitHandler}>
            <h3>New Batch</h3>
            <div className="form-group d-flex ">
                <input 
                    type="text" 
                    className=" p-2 m-2 w-75" 
                    name="course" 
                    id="course" 
                    aria-describedby="helpId" 
                    placeholder="Course" 
                    value={course}
                    onChange={e=>{setCourse(e.target.value)}}
                />
            </div>
            <div className="form-group d-flex">
                <input 
                    type="date"
                    className=" p-2 m-2 w-50" 
                    name="date" 
                    id="date" 
                    aria-describedby="helpId" 
                    placeholder="Start Date"
                    value={date} 
                    onChange={e=>{setDate(e.target.value)}}
                />
                <input 
                    type="text"
                    className=" p-2 m-2 w-50" 
                    name="timings" 
                    id="timings" 
                    aria-describedby="helpId" 
                    placeholder="Batch Timings"
                    value={timings} 
                    onChange={e=>{setTimings(e.target.value)}}
                />
            </div>
            <div className="form-group d-flex">
                <input 
                    type="number"
                    className=" p-2 m-2 w-50" 
                    name="duration" 
                    id="duration" 
                    aria-describedby="helpId" 
                    placeholder="Duration" 
                    value={duration}
                    onChange={e=>{setDuration(e.target.value)}}
                />
                <select className='p-2 m-2 w-50' value={trainer} onChange={e=>{setTrainer(e.target.value)}}>
                    <option value=''>---- Select Trainer ----</option>
                    <option value='Sudheer'>Sudheer</option>
                    <option value='chandrashekar'>chandrashekar</option>
                    <option value='Sakthivel'>Sakthivel</option>
                    <option value='Bhanu Prasad'>Bhanu Prasad</option>
                    <option value='Prakash'>Prakash</option>
                </select>
                <select className='p-2 m-2 w-50' value={register} onChange={(e)=>{setregister(e.target.value)}}>
                    <option value=''>Select </option>
                    <option value='Register Now'>Register Now</option>
                </select>
            </div>
            <input type="submit" className='btn btn-primary w-25 mt-3' value="sumbit"/>
            <ToastContainer />
            
            <p id='batchstatus' className='text-success'></p>
        </form>   
    </div>
  )
}

export default AddBatches