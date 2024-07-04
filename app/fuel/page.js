'use client'
import React, {useState, useEffect} from 'react'
import AddFuel from '@/components/fuel/AddFuel';
import { Button } from 'react-bootstrap';
import Select from "react-select"
import Form from 'react-bootstrap/Form'

import trucks from '../../data/trucks.json'
import { DateTime } from 'luxon';

const truck = [] 
const fuelList = []
for (let i = 0; i < trucks.length; i++) {
    const data = trucks[i].TRACTOR;
    truck.push({value:`${data}`, label:`${data}`})
}

const Fuel =  () => {
  const [issues, setIssues] = useState([])
  const [date, setDate] = useState()
  const [asset, setAsset] = useState()
  const [fuel, setFuel] = useState()
  const [remarks, setRemarks] = useState()
  const [topup, setTopup] = useState("NO")
  const [err, setErr] = useState()
  
  function updateDateChange(){
    setDate(event.target.value)
  }
  function updateAssetChange(){
    setAsset(event.target.value)
  }
  function updateFuelChange(){
    setFuel(event.target.value)
  }
  function updateRemarksChange(){
    setRemarks(event.target.value)
  }
  function updateTopupChange(){
    setTopup(event.target.value)
  }
  const handleFuelIssue = ()=>{
    if(!date || !asset || !fuel || !remarks){
      setErr(`All fields are required by this system to process a fuel Issue`)
    }
    if(!err){
      setIssues([{
        'date':date,
        asset,
        fuel,
        remarks,
        topup
      }])

      // sessionStorage.setItem("fuelDate", date)
      // sessionStorage.setItem("fuelAsset", asset)
      // sessionStorage.setItem("fuelFuel", fuel)
      // sessionStorage.setItem("fuelRemarks", remarks)
      // sessionStorage.setItem("fuelTopup", topup)
      // sessionStorage.setItem("fuelData", true)
      function updatePage(){
        // code
      }

    }
    function  postFuelIssue(){
      fuelList.push({
        date,
        asset,
        fuel,
        remarks,
        topup
      })
      console.log(fuel.fuelList);
    }

  }
// fuel order
const [fuelType, setFuelType] = useState("Diesel")
const [volume, setVolume] = useState()
const [distributer, setDistributer] = useState()
const [deliveryDate, setDeliveryDate] = useState()
const [notes, setNotes] = useState()
const [urgent, setUrgent] = useState()
const [reqErr, setReqErr] = useState()
const [requestFuel, setRequestFuel] = useState(false)

function updateFuelType(){
  setFuelType(event.target.innerText)
}
function updateVolume(){
  setVolume(event.target.value)
}
function updateDistributer(){
  setDistributer(event.target.value)
}
function updateDeliveryDate(){
  setDeliveryDate(event.target.value)
}
function updateNotes(){
  setNotes(event.target.value)
}
function updateUrgent(){
  setUrgent(event.target.value)
}

function validateFuelRequest(){
  if(!fuelType || !volume || !distributer || deliveryDate || !notes){
    setReqErr("Fill nessesary details to submit fuel order.")
  }
}

// Fetch fuel data
const [fuelData, setFuelData] = useState([])
const [searchDate, setSearchDate] = useState()

function updateSearch(){
  setSearchDate(event.target.value)
}
function showFuelData(){
  if(searchDate){
    console.log(searchDate);
  }
}

// Tanks Calibration 
const [type, setType] = useState()
const [tank, setTank] = useState()
const [read, setRead] = useState()
const [alert, setAlert] = useState()
const [service, setService] = useState("off")
const [maintenance, setMaintenance] = useState(Date.now)
const [calbErr, setCalbErr] = useState()
const [update, setUpdate] = useState()

function updateCalbErr() {
  setCalbErr(event.target.value)
}
function updateMaintenance() {
  setMaintenance(event.target.value)
}
function updateService() {
  setService(event.target.value)
}
function updateAlert() {
  setAlert(event.target.value)
}
function updateType() {
  setType(event.target.value)
}
function updateTank() {
  setTank(event.target.value)
}
function updateRead() {
  setRead(event.target.value)
}
function updateUpdate() {
  if(!type||!tank||!read||!alert){ setCalbErr("Fill requred details to update system changes") }

  console.log(type,tank,read,alert,maintenance,service);
}

  // useEffect(()=>{
  //   // code
  //   // if(sessionStorage.getItem("fuelData") == true){
  //   //   const date = sessionStorage.getItem("fuelDate")
  //   //   const asset = sessionStorage.getItem("fuelAsset")
  //   //   const fuel = sessionStorage.getItem("fuelFuel")
  //   //   const remarks = sessionStorage.getItem("fuelRemarks")
  //   //   const topup = sessionStorage.getItem("fuelTopup")
  //   }
  // },[])
  return (
    <div className=''>
      <h4 className='text-center my-3'>Main tank 25000 <span>L</span></h4>
      <hr />
        <div className='container'>
          <div className='row mb-3'>
            {/* <AddFuel /> */}
            <div>
              <h4 className='ps-3'>
                  Issue Fuel
              </h4>
              {
                err?<div className='my-3 py-3 bg-danger rounded text-center text-white'> All fields are required by this system to process a fuel Issue </div>:<></>
              }
              <div className='mb-3'>
                  <input 
                  placeholder='Date'
                  className='mx-2 border rounded p-2 w-100'
                  type='date' required
                  id='inputDate'
                  onChange={updateDateChange}
                  />
              </div>
              <div className='mb-3'>
                  {/* <Select 
                  className='ps-2'
                  placeholder="Select Truck"
                  options={truck}
                  // onChange={updateAssetChange}
                  onInputChange={updateAssetChange}
                  /> */}
                  <input 
                  placeholder='Truck Reg e.g. KBC 123D'
                  className='mx-2 border rounded p-2 w-100' 
                  type='text'
                  onChange={updateAssetChange}
                  />
              </div>
              <div className='mb-3'>
                  <input 
                  placeholder='Fuel in Ltrs'
                  className='mx-2 border rounded p-2 w-100' 
                  type='number'
                  onChange={updateFuelChange}
                  />
              </div>
              <div className='mb-3'>
                  <textarea 
                  className='w-100 mx-2 border rounded p-2'
                  placeholder='Remarks e.g NAIROBI,JUBA,NAIROBI'
                  onChange={updateRemarksChange}
                  />
              </div>
              <div className='mb-3'>
                  <Form.Check // prettier-ignore
                  type="switch"
                  id="custom-switch"
                  label= {"Top up fueling? NOTE: if toggled, this issue will be charged to the Driver!"}
                  onChange={updateTopupChange}
              />
              </div>
              <div className='mb-3 text-center'>
              {/* <span className='btn btn-check'></span> */}
              <Button className='btn btn-dark'onClick={handleFuelIssue} >Issue</Button>
              </div>
          </div>
          </div>
        </div>
      <hr />
      <div className='container'>
      <div className='row'>
        <div className='d-flex'>
          <div className='btn btn-dark mx-auto my-1' data-bs-toggle="modal" data-bs-target="#orderFuel" >Request Fuel</div>
          <div className='btn btn-dark mx-auto my-1' data-bs-toggle="modal" data-bs-target="#calibrateTank" >Calibrate Storage Tanks Fuel</div>
          {/* <!-- Modal Order Fuel --> */}
          <div class="modal fade" id="orderFuel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="orderFuelLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="orderFuelLabel">Order Fuel From Distributers</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className='container w-auto'>
                  {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
                  <form className='form'>
                    {
                      reqErr? <div className='text-white bg-danger rounded my-2 py-2 text-center'>{reqErr}</div>:<></>
                    }
                  <div className="mb-3">
                    <label for="fueltype" className="form-label">Fuel Type</label>
                    <select onChange={updateFuelType} id="fueltype" className="form-select" required>
                        <option>Diesel Pure</option>
                        <option>Petrol Pure</option>
                        <option>Petrol Super</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                      <label for="volume" className="form-label">Amount Volume - Ltrs</label>
                      <input onChange={updateVolume} type="number" className="form-control" id="volume" aria-describedby="volumeHelp" required/>
                  </div>
                  <div className="mb-3">
                    <label for="distributers" className="form-label">Select distrbuter</label>
                    <select onChange={updateDistributer} id="distributers" className="form-select">
                        <option>Total HQ</option>
                        <option>OLA HQ</option>
                        <option>Reserve Tank</option>
                        <option>Other</option>
                    </select>
                  </div>
                  <div className="mb-3">
                      <label for="lastservice" className="form-label">Delivery date</label>
                      <input onChange={updateDeliveryDate} type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" required/>
                  </div>
                  <div className="mb-3">
                      <label for="Notes" className="form-label">Comments</label>
                      <input onChange={updateNotes} type="text" className="form-control" id="Notes" aria-describedby="NotesHelp"/>
                  </div>
                  <div className="mb-3 form-check">
                      <input onChange={updateUrgent} type="checkbox" className="form-check-input" id="urgent" />
                      <label className="form-check-label" for="urgent">
                          Urgent order
                      </label>
                  </div>
                  {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                  </form>
                  {
                    reqErr? <div className='text-white bg-danger rounded my-2 py-2 text-center'>{reqErr}</div>:<></>
                  }
              </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button onClick={validateFuelRequest} type="submit" class="btn btn-primary">Request Order</button>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Modal cabrate Tank --> */}
          <div class="modal fade" id="calibrateTank" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="calibrateTankLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="calibrateTankLabel">Calibrate Main Tank</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div className='container w-auto'>
                  {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
                  <form className='form'>
                  <div className="mb-3">
                    <label for="fueltype" className="form-label">Fuel Type</label>
                    <select onChange={updateType} id="fueltype" className="form-select">
                      <option>Select option</option>
                      <option>Diesel Pure</option>
                      <option>Petrol Pure</option>
                      <option>Petrol Super</option>
                    </select>
                  </div>
                  
                  <div className="mb-3">
                      <label for="tank_name" className="form-label">Storage Name </label>
                      <input onChange={updateTank} type="text" className="form-control" id="tank_name" aria-describedby="tank_nameHelp" placeholder='Main Tank' required/>
                  </div>
                  <div className="mb-3">
                      <label for="volume" className="form-label">Dip Stick Reading - Ltrs</label>
                      <input onChange={updateRead} type="number" className="form-control" id="volume" aria-describedby="volumeHelp" required/>
                  </div>
                  <div className="mb-3">
                    <label for="ServiceMaintenance" className="form-label">Critical Alert Level</label>
                    <select onChange={updateAlert} id="ServiceMaintenance" className="form-select">
                      <option>Select option</option>
                        <option>50 %</option>
                        <option>25 %</option>
                        <option>10 %</option>
                        <option>5%</option>
                    </select>
                  </div>
                  <div className="mb-3">
                      <label for="lastservice" className="form-label">Service/Maintenance</label>
                      <input onChange={updateMaintenance} type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" />
                  </div>
                  <div className="mb-3 form-check">
                      <input onChange={updateService} type="checkbox" className="form-check-input" id="reqService" />
                      <label className="form-check-label" for="reqService">
                          Request tank service
                      </label>
                  </div>
                  {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                  {
                    calbErr?<div className='my2 py2 text-white bg-danger rounded text-center'>{calbErr}</div>:<></>
                  }
                  </form>
              </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button onClick={updateUpdate} type="submit" class="btn btn-primary">Update</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <hr />
      <div className='container'>
        <p className='text-center'>
            Select a day to view specific fuel issue
        </p>
        <div className='mb-3 container'>
            <input type='date'className='p-1 rounded border-1 ps-2' onChange={updateSearch}/>
            <Button title='Search' name='Search'
            type='button'
            className='btn ms-3'>
                Search
            </Button>
        </div>
        <div className='row'>
            <p className='text-center'>
                Results 
                {
                  searchDate?<div> for date : {searchDate}</div>:<></>
                }
            </p>
            <div>
                <table className='table table-dark table-stripped sm mb-5'>
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Reg No.</td>
                            <td>Driver</td>
                            <td>Volume</td>
                            <td>Remarks</td>
                            <td>Top up</td>
                        </tr>
                    </thead>
                    <tbody>
                      <tr>
                    {
                      issues.map((d)=>{
                        {{<td>`d.date`</td>}}
                      })
                    }
                      </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Fuel