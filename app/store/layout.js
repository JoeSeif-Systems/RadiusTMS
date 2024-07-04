import Navigation from '@/components/Navigation'
import React from 'react'

const Layout = ({children}) => {
  return (
    <>
        <Navigation />
        <> {children} </>
    </>
  )
}

export default Layout