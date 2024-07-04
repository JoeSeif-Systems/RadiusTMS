'use client'
import AllJobs from '@/components/jobs/AllJobs'
import NewJob from '@/components/jobs/NewJob'
import Queue from '@/components/jobs/Queue'
import React, { useState } from 'react'

import Select from 'react-select'
import trucks from '../../data/trucks.json'
import mechanics from '../../data/mechanics.json'
import spares from '../../data/spares.json'
import { Button } from 'react-bootstrap'

const options = []
const mechs = []
const spare = []
const ids = []

for (let i=0; i<trucks.length;i++){
    let data = trucks[i].TRACTOR
    // console.log(data);
    options.push({value:`${data}`, label:`${data}`})
}
for (let i=0; i<mechanics.length;i++){
  let data = mechanics[i].name
  // console.log(data);
  mechs.push({value:`${data}`, label:`${data}`})
}
for (let i=0; i<spares.length;i++){
  let data = spares[i].spare_name
  // console.log(data);
  spare.push({value:`${data}`, label:`${data}`})
}
for (let i=0; i<spares.length;i++){
  let data = spares[i].id
  // console.log(data);
  ids.push({value:`${data}`, label:`${data}`})
}



const Jobs = () => {
  const[openJobs,setOpenJobs] = useState(0)
  const[completedJobs,setCompletedJobs] = useState(0)
  const[pendingJobs,setPendingJobs] = useState(0)

  const frame = Document.innerWidth
  const mainList = []
  const [truck, setTruck] = useState()
  const [jobcardno, setJobcardno] = useState()
  const [jobStatus, setJobStatus] = useState()
  const [jobDescription, setJobDescription] = useState()
  const [jobMechs, setJobMechs] = useState()
  const [jobSpares, setJobSpares] = useState()
  const [spareQuantity, setSpareQuantity] = useState(0)

  const [saveMsg, setSaveMsg] = useState("System is not ready to save this, fill all fields")

  const [jobErr, setJobErr] = useState()
  const [activeSpares, setActiveSpares] = useState({
    "truck":'',
    "jobNo":'',
    "jobStatus":'',
    "jobDescripion":'',
    "jobMech":'',
    "JobSpare":'',
    "spareQuantity":''
  })

  function updateTruckSelection(){
    setTruck(event.target.innerText)
  }
  function updateJobCardNo(){
    setJobcardno(event.target.value)
  }
  function updateJobStatus(){
    setJobStatus(event.target.value)
  }
  function updateJobDescription(){
    setJobDescription(event.target.value)
  }
  function updateJobMechs(){
    setJobMechs(event.target.innerText)
  }
  function updateJobSpares(){
    setJobSpares(event.target.innerText)
  }
  function updateSpareQuantity(){
    setSpareQuantity(event.target.innerText)
  }
  const handleOpenJob = ()=> {
    if(!truck || !jobStatus || !jobDescription || !jobMechs){ setJobErr("Fill atleast Truck, Job Status, Description & assign one mechanic to open this Job") }
    console.log(truck);
    console.log(jobcardno);
    console.log(jobStatus);
    console.log(jobDescription);
    console.log(jobMechs);
    console.log(jobSpares);
    console.log(spareQuantity);

    mainList.push(truck)
  }
  function handleClearSpareClick(){
    // code @todo clear UI //DONE
    if(!truck || !jobStatus || !jobDescription || jobMechs == 0 || !jobMechs || jobSpares == 0 || !jobSpares || spareQuantity == 0 || !spareQuantity){
      setJobErr("Please assign mechanic, spare & quantity issued before proceding to add new spares on the same Job")
    }else{
      setActiveSpares({ 
        truck: truck,
        jobNo: jobcardno,
         jobStatus, 
         jobDescription, 
         jobMech: jobMechs, 
         jobSpares, 
         spareQuantity})
      console.log(activeSpares);
    }
    // setJobMechs(0)
    // setJobSpares(0)
    // setSpareQuantity(0)

    // console.log(truck);
    // console.log(jobcardno);
    // console.log(jobStatus);
    // console.log(jobDescription);
    // console.log(jobMechs);
    // console.log(jobSpares);
    // console.log(spareQuantity);
  }
  function handleSaveJob () {
    setSaveMsg("Job Saved")
    console.log(saveMsg);
  }

  return (
    <div>
      <div className='row'>
        <div className='col text-center my-3'>
          <h4>Open Jobs</h4>
          <p>{openJobs}</p>
        </div>
        <div className='col text-center my-3'>
          <h4>Completed Jobs</h4>
          <p>{completedJobs}</p>
        </div>
        <div className='col text-center my-3'>
          <h4>Pending Jobs</h4>
          <p>{pendingJobs}</p>
        </div>
      </div>
      <hr />
      <div className='row'>
      <div className='mx-auto mb-5 border rounded-5 w-75'>
        <h5 className='text-center my-3'> Add New Job</h5>
        <div className='mx-5'>
            <div className='mb-3'>
            <Select 
            className='rounded mb-3'
            placeholder="Select Truck" 
            options={options}
            onChange={updateTruckSelection}
            />
            </div>
            <div className='mb-3'>
                <input 
                className='p-2 rounded-2 border-1'
                onChange={updateJobCardNo}
                placeholder='Job Card No.' 
                name='jcn' />
            </div>
            <div className="mb-3">
            <label for="jobStatus" className="form-label">Job Status</label>
            <select id="jobStatus" className="form-select" onChange={updateJobStatus}>
                <option>Open</option>
                <option>Closed</option>
                <option>Pending</option>
                <option>Waiting for Aproval</option>
            </select>
        </div>
            <div className='mb-3'>
              <label className='p-2 d-block'>
                Job Description
              </label>
                <textarea
                className='p-2 rounded-2 border-1 text-auto'
                onChange={updateJobDescription}
                placeholder="Job Description e.g. check presure system "
                name='Descrption'
                cols={frame < 700 ? 30 : 36}
                rows={5}
                required
                >
                  {/* No Code */}
                </textarea>
            </div>
            <Select 
            className='rounded mb-3'
            onChange={updateJobMechs}
            placeholder="Assign Mechanic" 
            options={mechs} />
            <Select 
            isMulti
            className='rounded mb-3'
            onChange={updateJobSpares}
            placeholder="Request Spare" 
            options={spare} />
            <Select 
            className='rounded mb-3'
            onChange={updateSpareQuantity}
            placeholder="Quanitity" 
            options={ids} />
            {/* <hr /> */}
            <div className='my2 text-center'>
              {
                jobErr ? <div className='p-2 rounded text-white bg-danger'>{jobErr}</div> : <></>
              }
            </div>
            <div className='mb-3 text-center'>
              <Button onClick={handleOpenJob} className='btn btn-dark mx-2 my-1'>Open Job</Button>
              <Button onClick={handleClearSpareClick} className='btn btn-dark mx-2 my-1'>Clear Spare</Button>
              <Button onClick={handleSaveJob} className='btn btn-dark mx-2 my-1'>Save Job</Button>
            </div>

        </div>
    </div>
      </div>
      <hr />
      <div className='row'>
        <h4 className='text-center mx-3'>Jobs Queue</h4>
        {/* <Queue /> */}
        <>
        <div className='box'>
            <div className='item btn m-3 p-2 border text-left'>
                <h6>KBW 555W</h6>
                <text>Open</text>
                <p>No. 1</p>
            </div>
        </div>
        <div className='footer text-center'>
            <p>Total {1}, Open 1</p>
        </div>
        </>
      </div>
      <hr />
      <div className='row'>
        <h4 className='text-center mx-3'>All Jobs</h4>
        <AllJobs />
      </div>
    </div>
  )
}

export default Jobs