import React from 'react'
import { GrWorkshop } from "react-icons/gr";

const JobCard = ({nom,cmp,inp,pnd}) => {
  return (
    <div className='container m-2 card card-sm mt-3 w-auto'>
      <div className='card-header text-center fw-bolder'>
        Jobs Overview <GrWorkshop />
      </div>
      <div className='card-body'>
        <p>
          Avail. Mechanics : {nom}
          <br/>
          Completed: {cmp}
          <br/>
          Inprogress: {inp}
          <br/>
          Pedding Jobs: {pnd}
        </p>
      </div>
      <div className='card-footer text-center'>
        Jobs
      </div>
    </div>
  )
}

export default JobCard