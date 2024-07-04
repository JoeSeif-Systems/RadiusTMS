'use client'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import localStorage from 'local-storage'

const UserAccount = () => {
  const [username, setUsername] = useState()
  useEffect(()=>{
    setUsername(localStorage.get('user'));
  },[])
  return (
    <div className='border rounded-2 border-1'>
      <Form className='form mt-3'>
        <Form.Group className='mb-2'>
          <Form.Control type='input' placeholder={`User's full name`}/>
        </Form.Group>
        <Row>
          <Form.Group as={Col} className='mb-2'>
            <Form.Control type='number' placeholder={`Phone no.`}/>
          </Form.Group>
          <Form.Group as={Col} className='mb-2'>
            <Form.Control type='email' placeholder={`E-mail address`}/>
          </Form.Group>
        </Row>
        <Row>
        <Form.Group as={Col} className='mb-2'>
          <Form.Control type='text' placeholder={`Organization name`}/>
        </Form.Group>
        <Form.Group as={Col} className='mb-2'>
          <Form.Control type='text' placeholder={`Role/Position`}/>
        </Form.Group>
        </Row>
        <Form.Group className='mb-2'>
          <Form.Control type='text' placeholder={`Username`}/>
        </Form.Group>
        <Form.Group className='mb-2'>
          <Form.Control type='password' placeholder={`Password`}/>
        </Form.Group>
        <div className='text-center mb-3'>
        <Button variant='secondary' type='submit'>
          Update details
        </Button>
        </div>
      </Form>
    </div>
  )
}

export default UserAccount