import React from 'react';
import AccountNav from '@/components/account/AccountNav';
import Navigation from '@/components/Navigation';
; // Adjust the import path as necessary

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navigation /> */}
      <hr className='my-1' />
      <AccountNav />
      <div>{children}</div>
    </>
  );
};

export default Layout;