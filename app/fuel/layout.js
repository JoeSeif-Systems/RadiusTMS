import Navigation from '@/components/Navigation'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
    <Navigation />
     <div> {children} </div>
    </>
  )
}

export default Layout