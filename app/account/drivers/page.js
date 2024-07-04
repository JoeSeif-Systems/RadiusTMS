"use client"
import React from 'react'
import { Button, Form, Row, Table } from 'react-bootstrap'

const Drivers = () => {
  return (
    <div>
        <div className='container border border-1 rounded-3'>
          <div className='m-1'>
          <p className='text-center'>
            Drivers configurations
          </p>
          <Row className='mb-1 m-3'>
            <div className='text-center'>
              Current Drivers
            </div>
            <Table className='table-sm stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Contacts</th>
                <th>E-mail</th>
                <th>Age</th>
                <th>Truck</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Demo Driver</td>
                <td>0712 345678</td>
                <td>demodriver@radi.sys</td>
                <td>42</td>
                <td>KBC 123D</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className='text-center mb-2'>
          Update driver details
        </div>
        <Row className='mb-3'>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Driver`s name' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='number' placeholder='Driver`s contact' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Driver`s email' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Driver`s age' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Truck reg.' />
            </Form.Group>
            <div className='text-center'>
              <Button variant='secondary' type='submit'>
                Update details
              </Button>
            </div>
          </Form>
        </Row>
      </div>
          </div>
      <hr />
    </div>
  )
}

export default Drivers