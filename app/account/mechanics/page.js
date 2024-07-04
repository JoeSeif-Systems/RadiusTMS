"use client"
import React from 'react'
import { Button, Form, Row, Table } from 'react-bootstrap'

const Mechanics = () => {
  return (
    <div>
            <div className='container border border-1 rounded-3'>
          <div className='m-1'>
          <p className='text-center'>
            Mechanics configurations
          </p>
          <Row className='mb-1 m-3'>
            <div className='text-center'>
              Current Mechanics
            </div>
            <Table className='table-sm stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
                <th>Level</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Demo Mechanic</td>
                <td>32</td>
                <td>0712 343456</td>
                <td>Senior</td>
                <td>Wiring</td>
                <td>Edit | Del</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className='text-center mb-2'>
          Update mechanics details
        </div>
        <Row className='mb-3'>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Mechanic`s name' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='number' placeholder='Mechanic`s age' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Phone' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Level' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Department' />
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

export default Mechanics