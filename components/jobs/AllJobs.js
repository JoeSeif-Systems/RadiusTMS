'use client'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const AllJobs = () => {
    const [searchDate, setSearchDate] = useState(new Date().toDateString())

    function handleDateChange(e){
        setSearchDate(e.target.value)
        console.log(searchDate);
    }
  return (
    <div className='container'>
        <p className='text-center'>
            Select day to view specific jobs
        </p>
        <div className='mb-3 container'>
            <input type='date'
            className='p-1 rounded border-1 ps-2'
            onChange={handleDateChange}
            />
            <Button title='Search' 
            name='Search'
            type='button'
            className='btn ms-3'>
                Search
            </Button>
        </div>
        <div className='row'>
            <p className='text-center'>
                Results
                {
                    searchDate?<div>{searchDate}</div>:<></>
                }
            </p>
            <div>
                <table className='table table-dark table-stripped sm mb-5'>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Reg No.</td>
                            <td>Driver</td>
                            <td>Contact</td>
                            <td>Status</td>
                            <td>Supervisor</td>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AllJobs