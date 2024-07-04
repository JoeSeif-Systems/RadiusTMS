"use client"
import AssetComp from '@/components/assets'
import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Select from 'react-select'

import db from '../../../data/db.json'

const Assets = () => {
  const [fuelData, setFuelData] = useState()
  useEffect(()=>{
    setFuelData(db.fuel)
    console.log(fuelData)
  },[fuelData])
  const active = []
  return (
    <div>
    <AssetComp props={active} />
    <hr className='mt-5' />
    <div className='container'>
      <h4 className='text-center px-3'>Asset Records</h4>
      <div>
        <p className='text-center'>
          Select assets name to view its records
        </p>
        <div className="mb-3">
          <label for="inDate">Select Day</label>
          <input type='date'
          id='inDate'
          placeholder='Select Day'
          className='w-100 p-1 ps-2'
          />
        </div>
        <div className="mb-3">
          <Select
          placeholder="Registration search" 
          />
        </div>
        <div className='mb-3 text-center'>
          <Button className='btn m-auto' type='button'>
            Search 
          </Button>
          <Button className='btn m-auto ms-5 right' type='button'>
            Update details 
          </Button>
        </div>
      </div>
      <div className='mb-3'>
        <div className='container'>
          <p className='text-center'>
              Select a day to view specific fuel issue
          </p>
          <div className='mb-3 container'>
              <input type='date'
              className='p-1 rounded border-1 ps-2'
              />
              <Button title='Search' name='Search'
              type='button'
              className='btn ms-3'>
                  Search
              </Button>
          </div>
          <hr />
          <div className='row'>
              <p className='text-center'>
                  Fuel Records
              </p>
              <div>
                  <table className='table table-stripped sm mb-3'>
                      <thead className='table-dark'>
                          <tr>
                              <th>ID</th>
                              <th>Reg No.</th>
                              <th>Date</th>
                              <th>Volume</th>
                              <th>Remarks</th>
                              <th>Top up</th>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          db.fuel.map(row=>(
                            <tr key={row.issue_id}>
                              <td>{row.issue_id}</td>
                              <td>{row.asset_id}</td>
                              <td>{row.timestamp}</td>
                              <td>{row.volume_issued}</td>
                              <td>{row.remarks}</td>
                              <td>{row.top_up_fuel}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
          </div>
          <hr />
          <div className='row'>
              <p className='text-center'>
                  Spare Records
              </p>
              <div>
                  <table className='table table-stripped sm mb-3'>
                      <thead className='table-dark'>
                          <tr>
                              <td>ID</td>
                              <td>Reg</td>
                              <td>Jobs</td>
                              <td>Total Spares</td>
                              <td>Cost</td>
                              <td>Status</td>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          db.jobs.map(row=>(
                            <tr key={row.job_id}>
                              <td>{row.job_id}</td>
                              <td>{row.asset_id}</td>
                              <td>{row.description}</td>
                              <td>{row.quantity}</td>
                              <td>{row.cost}</td>
                              <td>{row.status}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
              <div>
                  <table className='table table-stripped sm mb-3'>
                      <thead className='table-dark'>
                          <tr>
                              <td>ID</td>
                              <td>Job</td>
                              <td>Spare</td>
                              <td>Status</td>
                              <td>Requestor</td>
                          </tr>
                      </thead>
                      <tbody>
                        {
                          db.store_issue.map(row=>(
                            <tr key={row.issue_id}>
                              <td>{row.issue_id}</td>
                              <td>{row.job_id}</td>
                              <td>{row.spare_id}</td>
                              <td>{row.status}</td>
                              <td>{row.requester}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                  </table>
              </div>
          </div>
          {/* pause 30 min */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Assets