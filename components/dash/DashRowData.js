"use client"
import React, {useState} from 'react'
import { Row, Card, Button, Stack } from 'react-bootstrap'
import { BsFillFuelPumpDieselFill, BsStackOverflow, BsTruckFlatbed } from "react-icons/bs";

const DashRowData = () => {
  const [fuelBtnClicked, setFuelBtnClicked] = useState(false)
  const [storeBtnClicked, setStoreBtnClicked] = useState(false)
  const [jobsBtnClicked, setJobsBtnClicked] = useState(false)
  function handleFuelBtnClick(){
    setFuelBtnClicked(true)
    window.location = `/fuel`
    // if(fuelBtnClicked) {
    // }
  }
  function handleStoreBtnClick(){
    setStoreBtnClicked(true)
    window.location = `/store`
    // if(storeBtnClicked) {
    // }
  }
  function handleJobsBtnClick(){
    setJobsBtnClicked(true)
    window.location = `/jobs`
    // if(jobsBtnClicked) {
    // }
  }
  return (
    <Row className='m-3'>
      <div className='text-center mb-2'>
        RadiTMS &copy; Demo Organization Dashboard
      </div>
      <div className='container d-flex flex-wrap justify-content-evenly'>
        <Card style={{maxWidth : '18rem'}} className='my-2'>
          <Card.Header as="h5" className='text-center'>Fuel Info</Card.Header>
          <Card.Body>
          {/* <Card.Title className='text-center'>Fuel Info</Card.Title> */}
            <Card.Text>
              <Stack direction='horizontal' gap={3}>
                <div className='p-2'>
                  <strong>
                    <p>
                    Main Tank Level : 25,000 Ltrs
                    </p>
                    <p>
                    Trucks Fueled Today : 18
                    </p>
                    <p>
                    Total Fuel Issed : 4,650 Ltrs
                    </p>
                  </strong>
                </div>
                <div className='p-2 ms-auto'>
                  <BsFillFuelPumpDieselFill size={64} />
                </div>
              </Stack>
            </Card.Text>
            <div className='text-center'>
              <Button onClick={handleFuelBtnClick} variant="primary">Fuel Details</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{maxWidth : '18rem'}} className='my-2'>
          <Card.Header as="h5" className='text-center'>Workshop Info</Card.Header>
          <Card.Body>
          {/* <Card.Title className='text-center'>Fuel Info</Card.Title> */}
            <Card.Text>
              <Stack direction='horizontal' gap={3}>
                <div className='p-2'>
                  <strong>
                    <p>
                    Assets Under Repair : 18 Trucks
                    </p>
                    <p>
                    Jobs Pending Spares : 2
                    </p>
                    <p>
                    Trucks Pending Service : 6
                    </p>
                  </strong>
                </div>
                <div className='p-2 ms-auto'>
                  <BsTruckFlatbed size={64} />
                </div>
              </Stack>
            </Card.Text>
            <div className='text-center'>
              <Button onClick={handleJobsBtnClick} variant="primary">Workshop Details</Button>
            </div>
          </Card.Body>
        </Card>
        <Card style={{maxWidth : '18rem'}} className='my-2'>
          <Card.Header as="h5" className='text-center'>Store Info</Card.Header>
          <Card.Body>
          {/* <Card.Title className='text-center'>Fuel Info</Card.Title> */}
            <Card.Text>
              <Stack direction='horizontal' gap={3}>
                <div className='p-2'>
                  <strong>
                    <p>
                    Total Issed Today : 2,845 Spares
                    </p>
                    <p>
                    Purchase Oders : 6
                    </p>
                    <p>
                    Total Instock : 404,058 Spares
                    </p>
                  </strong>
                </div>
                <div className='p-2 ms-auto'>
                  <BsStackOverflow size={64} />
                </div>
              </Stack>
            </Card.Text>
            <div className='text-center'>
              <Button onClick={handleStoreBtnClick} variant="primary">Store Details</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </Row>
  )
}

export default DashRowData