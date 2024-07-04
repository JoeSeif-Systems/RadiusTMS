import React from 'react'

const AddAsset = () => {
  return (
    <div className='container w-auto'>
        <div className='fw-bold fs-3'>Add New Asset</div>
        <form className='form'>
        <div className="mb-3">
            <label for="vehicleReg" className="form-label">Vehical Reg No.</label>
            <input type="text" className="form-control" id="vehicleReg" aria-describedby="vehicleRegHelp" />
        </div>
        <div className="mb-3">
            <label for="vehicleMake" className="form-label">Make and Model</label>
            <select id="vehicleMake" className="form-select">
                <option>Mercedes Benz - Actors</option>
                <option>Mercedes Benz - Axor</option>
                <option>Workshop Location</option>
                <option>Other</option>
            </select>
        </div>
        <div className="mb-3">
            <label for="fuelTankCapacity" className="form-label">Fuel tank capacity - ltrs</label>
            <input type="number" className="form-control" id="fuelTankCapacity" aria-describedby="fuelTankCapacityHelp" />
        </div>
        <div className="mb-3">
            <label for="trailerReg" className="form-label">Trailer No.</label>
            <input type="text" className="form-control" id="trailerReg" aria-describedby="trailerRegHelp" />
        </div>
        <div className="mb-3">
            <label for="driverName" className="form-label">Drivers Name</label>
            <input type="text" className="form-control" id="driverName" aria-describedby="driverNameHelp" />
        </div>
        <div className="mb-3">
            <label for="driversContacts" className="form-label">Drivers contacts</label>
            <input type="number" className="form-control" id="driversContacts" aria-describedby="driversContactsHelp" placeholder='.e.g. 0712568934'/>
        </div>
        <div className="mb-3">
            <label for="diverID" className="form-label">Drivers ID</label>
            <input type="email" className="form-control" id="driverID" aria-describedby="driverIDHelp" />

        </div>
        {/* <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
        </div> */}
        <div className="mb-3">
            <label for="lastservice" className="form-label">Last Service</label>
            <input type="date" className="form-control" id="lastservice" aria-describedby="lastserviceHelp" />
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="fullyMissionCapable" />
            <label className="form-check-label" for="fullyMissionCapable">
                Is fully mission capable?
            </label>
        </div>
        <button type="submit" className="btn btn-primary mb-5">Submit</button>
        </form>
    </div>
  )
}

export default AddAsset