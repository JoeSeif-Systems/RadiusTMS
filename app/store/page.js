"use client"
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select'
import truck from '../../data/trucks.json'
import spare from '../../data/spares.json'
import mechanics from '../../data/mechanics.json'

const currentDay = new Date().toDateString()

const trucks = []
const spares = []
const mechs = []
const quantity = []

for (let i = 0; i < truck.length; i++) {
  const data = truck[i].TRACTOR;
  const qty = truck[i].NO
  trucks.push({value:`${data}`, label: `${data}`})
  quantity.push({value:`${qty}`, label: `${qty}`})
}
for (let i = 0; i < spare.length; i++) {
  const data = spare[i].spare_name;
  spares.push({value:`${data}`, label: `${data}`})
}
for (let i = 0; i < mechanics.length; i++) {
  const data = mechanics[i].name;
  mechs.push({value:`${data}`, label: `${data}`})
}

const Store = () => {
  const [truck, setTruck] = useState()
  const [jobCard, setJobCard] = useState()
  const [jobSpare, setJobSpare] = useState()
  const [spareQuantity, setSpareQuantity] = useState()
  const [requestor, setRequestor] = useState()
  const [formData, setFormData] = useState({
    'truck':'',
    'jobCard':'',
    'jobSpare':'',
    'spareQuantity':'',
    'requestor':''
  })
  const [errMsg, setErrMsg] = useState()
  const [searchDate, setSearchDate] = useState(currentDay)

  function handleTruckUpdate(e){
    setTruck(e.target.value)
  }
  function handleJobCardUpdate(e){
    setJobCard(e.target.value)
  }
  function handleJobSpareUpdate(e){
    setJobSpare(e.target.value)
  }
  function handleSpareQuantityUpdate(e){
    setSpareQuantity(e.target.value)
  }
  function handleRequestorUpdate(e){
    setRequestor(e.target.value)
  }
  function handleFormChange(e){
    setFormData({
      truck: e.target.value
    })
  }
  function handleSubmit(){
    if(!truck || !jobSpare || !spareQuantity || !requestor){
      setErrMsg("All fields are required by this system to process spare issue")
    }
  }
  function handleSearchUpdate(e){
    setSearchDate(e.target.value)
  }
  return (
    <div className='container'>
      <div className='row'>
        <h4 className='text-center my-3 mt-4'>Spare Issue Form</h4>
        <div>
          <form className='form'>
            <div>
              <Select
              placeholder='Select Truck'
              className='mb-2'
              options={trucks}
              required
              onChange={handleTruckUpdate}
              />
              <Select
              placeholder='Select from Job card'
              className='mb-3'
              onChange={handleJobCardUpdate}
              />
            </div>
            <div className='mb-3'>
            <Select
              placeholder='Search & Select Spare'
              isMulti
              options={spares}
              onChange={handleJobSpareUpdate}
              />
            </div>
            <div className='mb-3'>
            <Select
              placeholder='Quantity Issued'
              options={quantity}
              onChange={handleSpareQuantityUpdate}
              />
            </div>
            <div className='mb-3'>
            <Select
              placeholder='Requestor'
              options={mechs}
              onChange={handleRequestorUpdate}
              />
            </div>
            <div className='mb-3 text-center text-white'>
              {
                errMsg?<div className='p2 rounded bg-danger'>{errMsg}</div>:<></>
              }
            </div>
            <div className='mb-3 text-center'>
              <Button 
                placeholder='Add Spare'
                type='button'
                className='btn'>
                  Add More Spares
              </Button>
              <Button 
                onClick={handleSubmit}
                placeholder='Issue Spare'
                type='button'
                className='btn ms-5'>
                  Issue Spare
              </Button>
            </div>
          </form>
        </div>
      </div>
      <hr />
      <div className='row'>
        <h4 className='text-center my-2 mb-5'>Purchase Orders</h4>
        <div>
        <div className='mb-3'>
          <div className='mb-3 text-center'>
            <Button
                type='button'
                className='btn m-1'
                data-bs-toggle="modal" data-bs-target="#orderStock">
                  Place Order
              </Button>
              <Button 
                placeholder='Issue Spare'
                type='button'
                className='btn ms-3 m-1'
                data-bs-toggle="modal" data-bs-target="#orderService">
                  Order Service
              </Button>
              <Button 
                placeholder='Issue Spare'
                type='button'
                className='btn ms-3 m-1'
                data-bs-toggle="modal" data-bs-target="#acceptStock">
                  Accept Stock Issue
              </Button>
          </div>
              {/* <!-- Modal purchase order --> */}
              <div class="modal fade" id="orderStock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="orderStockLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="orderStockLabel">Order Store Items</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="modal-body">
                  <div className='container w-auto'>
                    {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
                    <form className='form'>
                      <div className="mb-3">
                        <label for="Supplier" className="form-label">Select Supplier</label>
                        <select id="Supplier" className="form-select">
                            <option>Falcon Radiators</option>
                            <option>Sign Auto Spares</option>
                            <option>Benz Auto Spares</option>
                        </select>
                      </div>
                      <div className="mb-3">
                      <div className='mb-3'>
                      <Select
                        placeholder='Search & Select Spare'
                        isMulti
                        options={spares}
                        />
                      </div>
                      <div className='mb-3'>
                      <Select
                        placeholder='Quantity Issued'
                        options={quantity}
                        />
                      </div>
                      </div>
                      <div className="mb-3">
                          <label for="lastservice" className="form-label">Delivery date</label>
                          <input type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" />
                      </div>
                      <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="urgent" />
                          <label className="form-check-label" for="urgent">
                              Urgent order
                          </label>
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                      </form>
                  </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Add More</button>
                      <button type="button" class="btn btn-primary">Request Order</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal fade" id="acceptStock" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="acceptStockLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="acceptStockLabel">Accept Purchase Order</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="modal-body">
                  <div className='container w-auto'>
                    {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
                    <form className='form'>
                      <div className="mb-3">
                        <label for="Supplier" className="form-label">Select Supplier</label>
                        <select id="Supplier" className="form-select">
                            <option>Falcon Radiators</option>
                            <option>Sign Auto Spares</option>
                            <option>Benz Auto Spares</option>
                        </select>
                      </div>
                      <div className="mb-3">
                      <div className='mb-3'>
                      <Select
                        placeholder='Search & Select Spare'
                        isMulti
                        options={spares}
                        />
                      </div>
                      <div className='mb-3'>
                      <Select
                        placeholder='Quantity Issued'
                        options={quantity}
                        />
                      </div>
                      </div>
                      <div className="mb-3">
                          <label for="lastservice" className="form-label">Delivery date</label>
                          <input type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" />
                      </div>
                      <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="urgent" />
                          <label className="form-check-label" for="urgent">
                              Urgent order
                          </label>
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                      </form>
                  </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Add More</button>
                      <button type="button" class="btn btn-primary">Request Order</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Modal purchase order --> */}
              <div class="modal fade" id="orderService" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="orderServiceLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="orderServiceLabel">Store Service Purchase Order</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                  <div class="modal-body">
                  <div className='container w-auto'>
                    {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
                    <form className='form'>
                      <div className="mb-3">
                        <label for="Supplier" className="form-label">Select Supplier</label>
                        <select id="Supplier" className="form-select">
                            <option>Falcon Radiators</option>
                            <option>Sign Auto Spares</option>
                            <option>Benz Auto Spares</option>
                        </select>
                      </div>
                      <div className="mb-3">
                      <div className='mb-3'>
                      <Select
                        placeholder='Search & Select Spare'
                        isMulti
                        options={spares}
                        />
                      </div>
                      <div className='mb-3'>
                      <Select
                        placeholder='Quantity Issued'
                        options={quantity}
                        />
                      </div>
                      </div>
                      <div className="mb-3">
                          <label for="lastservice" className="form-label">Delivery date</label>
                          <input type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" />
                      </div>
                      <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="urgent" />
                          <label className="form-check-label" for="urgent">
                              Urgent order
                          </label>
                      </div>
                      {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                      </form>
                  </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Add More</button>
                      <button type="button" class="btn btn-primary">Request Order</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className='mb-3'>
            <div className='container'>
                <p className='text-center'>
                    Filter with day to view specific issues
                </p>
                <div className='mb-3 container text-center'>
                    <input type='date'
                    className='p-1 rounded border-1 ps-2'
                    onChange={handleSearchUpdate}
                    />
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
                          searchDate?<div>{searchDate}</div>:<></>
                        }
                    </p>
                    <div>
                        <table className='table table-dark table-stripped sm mb-3'>
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Description</td>
                                    <td>Total Items</td>
                                    <td>Quantity</td>
                                    <td>Status</td>
                                    <td>Cost</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Store