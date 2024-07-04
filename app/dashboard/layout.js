import Navigation from '@/components/Navigation';
import React from 'react';
; // Adjust the import path as necessary

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default Layout;