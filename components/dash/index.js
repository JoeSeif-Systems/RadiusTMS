'use client'
import React, {useState, useEffect} from 'react'
import JobCard from './JobCard'
import FuelCard from './FuelCard'
import AssetsCard from './AssetsCard'
import StoreCard from './StoreCard'

import db from "../../data/db.json"


const Dash = () => {
  const [mainTankCapacity, setMainTankCapacity] = useState(0)
  const [fueledAssets, setFueledAssets] = useState(0)
  const [fuelOut, setFuelOut] = useState(0)
  const [fuelIn, setFuelIn] = useState(0)
  const [mechanics, setMechanics] = useState(0)
  const [completed, setComplited] = useState(0)
  const [inprogress, setInprogress] = useState(0)
  const [pending, setPending] = useState(0)
  const [active, setActive] = useState(0)
  const [locations, setlocations] = useState(0)
  const [breakdown, setBreakdown] = useState(0)
  const [service, setService] = useState(0)
  const [repairs, setRepairs] = useState(0)
  const [store, setStore] = useState(0)
  const [reorder, setReorder] = useState(0)
  const [issues, setIssues] = useState(0)
  const [purchase, setPurchase] = useState(0)
  const [rejected, setRejected] = useState(0)
  const [monthly, setMonthly] = useState(0)

  useEffect(()=>{
    // tms
    setMainTankCapacity(db.fuel_tanks[0].capacity)
    
    setFueledAssets(db.fuel.length)
    let sum = 0
    for (let i=0; i < db.fuel.length; i++){
      sum += parseInt(db.fuel[i].volume_issued)
    }
    setFuelOut(sum)
    let sum1 = 0
    for (let i=0; i < db.fuel_order.length; i++){
      sum1 += parseInt(db.fuel_order[i].volume_ordered)
    }
    setFuelIn(sum1)


    const mechs = []
    for (let i=0; i < db.users.length; i++){
      if(db.users[i].position_id == "P001"){
        mechs.push(1)
      }
    }
    setMechanics(mechs.length)

    const comp = []
    for (let i=0; i < db.jobs.length; i++){
      if(db.jobs[i].status == "completed"){
        comp.push(1)
      }
    }
    setComplited(comp.length)

    const prog = []
    for (let i=0; i < db.jobs.length; i++){
      if(db.jobs[i].status == "inprogress" || db.jobs[i].status == "open"){
        prog.push(1)
      }
    }
    setInprogress(prog.length)

    const pend = []
    for (let i=0; i < db.jobs.length; i++){
      if(db.jobs[i].status == "pending" | db.jobs[i].status == "pending_aproval"){
        pend.push(1)
      }
    }
    setPending(pend.length)


    setActive(db.assets.length)
    setlocations(db.locations.length)
    setRepairs(pend.length + prog.length)
    setBreakdown(0)
    setService(db.assets.length)

    setStore(db.spare.length)
    const reord = []
    for(let i=0; i<db.spare.length;i++){
      if(db.spare[i].quantity <= db.spare[i].reorder){
        reord.push(1)
      }
    }
    setReorder(reord.length)
    setIssues(db.store_issue.length)
    setPurchase(db.purchase_order.length)
    const rej = []
    for(let i=0; i<db.purchase_order.length;i++){
      if(db.purchase_order[i].status == "rejected"){
        rej.push(1)
      }
    }
    setRejected(rej.length)
    let totals = 0
    const sp = []
    for (let i = 0; i < db.store_issue.length; i++) {
      let e = db.store_issue[i].spare_id;
      sp.push(e)
    }
    for (let j = 0; j < sp.length; j++) {
      for (let h = 0; h < db.spare.length; h++) {
        if(db.spare[h].spare_id == sp[j]){
          totals += db.spare[h].price
        }
      }
    }
    setMonthly(totals)
  },[])
  return (
    <>
        <div className='d-flex flex-wrap justify-content-evenly mt-5' id='overview'>
          <FuelCard mtc={mainTankCapacity} fas={fueledAssets} fuo={fuelOut} fin={fuelIn} />
          <JobCard nom={mechanics} cmp={completed} inp={inprogress} pnd={pending} />
          <AssetsCard actv={active} locs={locations} rprs={repairs} bdwn={breakdown} srvc={service}/>
          <StoreCard inst={store} rrdr={reorder} diss={issues} dpcs={purchase} rjct={rejected} tcst={monthly}/>
        </div>
    </>
  )
}

export default Dash