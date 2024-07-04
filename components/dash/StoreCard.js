import React from 'react'
import { GiSpanner } from "react-icons/gi";

const StoreCard = ({inst,rrdr,diss,dpcs,rjct,tcst}) => {
  return (
    <div className='container m-3 card card-sm mt-3 w-auto'>
      <div className='card-header text-center fw-bolder'>
        Store & Spare <GiSpanner />
      </div>
      <div className='card-body'>
        <p>
          In Store : {inst}
          <br/>
          Reorder : {rrdr}
          <br/>
          Today issues : {diss}
          <br/>
          Daily stock purchase : {dpcs}
          <br/>
          Rejected orders : {rjct}
          <br />
          Monthly cost: {tcst}
        </p>
      </div>
      <div className='card-footer text-center'>
        Store
      </div>
    </div>
  )
}

export default StoreCard