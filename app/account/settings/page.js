"use client"
import React from 'react'
import { Button, Form, Row, Table } from 'react-bootstrap'

const Settings = () => {
  return (
      <div>
        <div className='container border border-1 rounded-3'>
          <div className='m-1'>
          <p className='text-center'>
            Location configurations
          </p>
          <Row className='mb-1 m-3'>
            <div className='text-center'>
              Current locations
            </div>
            <Table className='table-sm stripped'>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>capacity</th>
                <th>latitude</th>
                <th>longitude</th>
                <th>description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <div className='text-center mb-2'>
          Update locations
        </div>
        <Row className='mb-3'>
          <Form>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Location name' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='number' placeholder='Location capacity' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Location lat' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='text' placeholder='Location lon' />
            </Form.Group>
            <Form.Group className='mb-2'>
              <Form.Control type='textarea' placeholder='Location description' />
            </Form.Group>
            <div className='text-center'>
              <Button variant='secondary' type='submit'>
                Update location details
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

export default Settings