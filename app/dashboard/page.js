import Navigation from '@/components/Navigation'
import Dash from '@/components/dash'
import DashRowData from '@/components/dash/DashRowData'
import UserInfoRow from '@/components/dash/UserInfoRow'
import AssetsTable from '@/components/dash/tables/AssetsTable'
import React from 'react'

function Dashboard() {
  return ( 
  <>
    <hr />
    <UserInfoRow />
    <hr />
    <DashRowData />
    <hr />
    {/* <Dash /> */}
    <hr />
    <AssetsTable />
  </>
  )
}

export default Dashboard