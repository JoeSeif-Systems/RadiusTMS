"use client"
import React, { useState, useEffect} from 'react'

import db from '../../../data/db.json'

const AssetsTable = () => {
  const [assetsData, setAssetsData] = useState()
  const [jobData, setJobData] = useState()
  useEffect(()=>{
    setAssetsData(db.assets)
    setJobData(db.jobs)
  },[])
  return (
    <div className='row mb-5'>
      <div className='col-1-lg mx-auto text-center'>
        <div className='fs-2 mb-3'>
          Assets Overview Analysis
        </div>
        <table className='ms-3 table table-stripped mx-auto'>
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>Reg</th>
              <th>Trailer</th>
              <th>Model</th>
              <th>Capacity-L</th>
              <th>Jobs</th>
              <th>Spares</th>
              <th>Milage-KM</th>
              <th>Service</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {assetsData && assetsData.map((asset) => {
                const lis = getJobs(asset.asset_id,db);
                const a = lis[0]
                const b = lis[1]
                const c = lis[2]
                const d = lis[3]
                const e = lis[4]
                console.log(a,b,c,d,e);
                return (
                  <tr key={asset.asset_id}>
                    <td>{asset.asset_id}</td>
                    <td>{asset.registration}</td>
                    <td>{asset.trailer_reg}</td>
                    <td>{asset.model}</td>
                    <td>{asset.fuel_capacity}</td>
                    <td>{a}</td>
                    <td>{b}</td>
                    <td>{c}</td>
                    <td>{d}</td>
                    <td>{e}</td>
                  </tr>
                );
            })}
          </tbody>
        </table>
      </div>
      </div>
  )
}

const getJobs = (id, db) => {
  const jobs = []
  const serv = []
  let totals = 0
  let sparesTotal = 0
  let service = 0
  for (let i = 0; i < db.jobs.length; i++) {
    if(db.jobs[i].asset_id == id){
      totals += db.jobs[i].cost
      jobs.push(1)
      sparesTotal += db.jobs[i].quantity
      for(let i=0; i<db.service.length; i++){
        if(db.service[i].asset_id == id){
          service += db.service[i].odometer
          serv.push(1)
        }
      }
    }
    // if(db.jobs[i].asset_id == )
    if(i == db.jobs.length - 1){
      const nojobs = jobs.length
      const tcost = totals
      return [nojobs,sparesTotal,service,serv.length,tcost]
    }  
  }
}

export default AssetsTable