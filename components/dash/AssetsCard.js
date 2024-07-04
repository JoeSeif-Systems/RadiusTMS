import React from 'react'
import { FaTruckLoading } from "react-icons/fa";

const AssetsCard = ({actv,locs,rprs,bdwn,srvc}) => {
  return (
    <div className='container m-3 card card-sm mt-3 w-auto'>
      <div className='card-header text-center  fw-bolder'>
        Assets Overview <FaTruckLoading />
      </div>
      <div className='card-body'>
        <p>
          Trucks Active : {actv}
          <br/>
          Locations : {locs}
          <br/>
          Under Repair : {rprs}
          <br/>
          Breakdowns : {bdwn}
          <br/>
          Pending Service : {srvc}
          <br/>
          Mission Ready Score : 91%
        </p>
      </div>
      <div className='card-footer text-center'>
        Assets
      </div>
    </div>
  )
}

export default AssetsCard