"use client"
import React from 'react'
import { Button, Form, Row, Table } from 'react-bootstrap'

const Stores = () => {
  return (
    <div>
            <div className='container border border-1 rounded-3'>
          <div className='m-1'>
          <p className='text-center'>
            Suppliers configurations
          </p>
          <Row className='mb-1 m-3'>
            <div className='text-center'>
              Current Suppliers
            </div>
            <Table className='table-sm stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Contacts</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Demo Supplier</td>
                <td>Fuel</td>
                <td>Demo diesel supplier</td>
                <td>0712 345656</td>
                <td>diesel.supplier@radi.sys</td>
                <td>Edit | Del</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Test Supplier</td>
                <td>Spare</td>
                <td>Demo spare supplier</td>
                <td>0712 345677</td>
                <td>spare.supplier@radi.sys</td>
                <td>Edit | Del</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className='text-center mb-2'>
          Update Suppliers details
        </div>
        <Row className='mb-3'>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Supplier`s name' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Product type' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Description' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='number' placeholder='Phone contact' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Email' />
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
      <div className='container border border-1 rounded-3'>
          <div className='m-1'>
          <p className='text-center'>
            Spares configurations
          </p>
          <Row className='mb-1 m-3'>
            <div className='text-center'>
              Current Spares
            </div>
            <Table className='table-sm stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>PID</th>
                <th>Quantity</th>
                <th>Units</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Demo Spare</td>
                <td>This is just a testing spare for demo only</td>
                <td>01892</td>
                <td>1000</td>
                <td>Pcs</td>
                <td>10,850.00</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className='text-center mb-2'>
          Update spares details
        </div>
        <Row className='mb-3'>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Spare name' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='number' placeholder='Spare description' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='PID' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Instock quantity' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Units' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Price' />
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

export default Stores