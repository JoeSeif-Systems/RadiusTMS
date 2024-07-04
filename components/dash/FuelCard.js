import React from 'react'
import { LuFuel } from "react-icons/lu";

const FuelCard = ({mtc,fas,fuo,fin}) => {
  return (
    <div className='container m-3 card card-sm mt-3 w-auto'>
      <div className='card-header text-center fw-bolder'>
        Fuel Overview <LuFuel />
      </div>
      <div className='card-body'>
        <p>
          Main Tank: {mtc}
          <br/>
          Fueled Assets : {fas}
          <br/>
          Fuel Out: {fuo}
          <br/>
          Fuel In: {fin}
          <br/>
        </p>
      </div>
      <div className='card-footer text-center' onClick>
        Fuel (Ltrs)
      </div>
    </div>
  )
}

export default FuelCard