import React from 'react'
import AddAsset from './AddAsset'
import BasicTable from '../data/BasicTable'


const AssetComp = () => {
  return (
    <div>
        <div className=''>
            <h3 className='mt-3 fw-bold text-center'>
            All assets configurations.
            </h3>
            <div>
            <p className='ms-3'>
            {/* <text>Asset settings</text> */}
            {/* <button className='ms-2 btn-sm rounded'>Add asset</button> */}
            {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn btn-dark ms-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Add new asset
              </button>

              {/* <!-- Modal --> */}
              <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">Add New Asset</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <div className='container w-auto'>
                      {/* <div className='fw-bold fs-3'>Add New Asset</div> */}
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
                      {/* <button type="submit" className="btn btn-primary mb-5">Submit</button> */}
                      </form>
                  </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Add Asset</button>
                    </div>
                  </div>
                </div>
              </div>

          </p>
            </div>
          <div className='container'>
            <BasicTable />
          </div>
        </div>
    </div>
  )
}

export default AssetComp