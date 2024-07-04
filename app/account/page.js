import React from 'react'
import UserAccount from '@/components/account'
import Settings from './settings/page'

const Account = () => {
  return (
    <div>
        <div className='mt-3 bg-color-teriary text-center fs-6 text-bold'>
            <h4>
            My Account Settings &amp; Organization Configurations
            </h4>
        </div>
        <div className='container mb-3'>
          <div className='row'>
            <p className='text-center'>
              Account details
            </p>
            <UserAccount />
          </div>
        </div>
        <hr />
    </div>
  )
}

export default Account