import React from 'react'
import Select from "react-select"
import Form from 'react-bootstrap/Form'

import trucks from '../../data/trucks.json'

const truck = [] 

for (let i = 0; i < trucks.length; i++) {
    const data = trucks[i].TRACTOR;
    truck.push({value:`${data}`, label:`${data}`})
}

const AddFuel = () => {

  return (
    <div>
        <h4 className='ps-3'>
            Issue Fuel
        </h4>
        <div className='mb-3'>
            <input 
            placeholder='Date'
            className='mx-2 border rounded p-2 w-100'
            type='date'
            />
        </div>
        <div className='mb-3'>
            <Select 
            className='ps-2'
            placeholder="Select Truck"
            options={truck}
            />
        </div>
        <div className='mb-3'>
            <input 
            placeholder='Fuel in Ltrs'
            className='mx-2 border rounded p-2 w-100' 
            />
        </div>
        <div className='mb-3'>
            <textarea 
            className='w-100 mx-2 border rounded p-2'
            placeholder='Remarks e.g NAIROBI,JUBA,NAIROBI'
            />
        </div>
        <div className='mb-3'>
            <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            label="Top up fueling?"
        />
        </div>
        <div className='mb-3 text-center'>
        {/* <span className='btn btn-check'></span> */}
        <div className='btn btn-dark'>Issue</div>
        </div>
    </div>
  )
}

export default AddFuel