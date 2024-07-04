"use client"

import React, { useEffect } from 'react'

const BootstrapClient = () => {
    useEffect(()=>{
        require("bootstrap/dist/js/bootstrap.bundle.min.js")
    },[]);
  return null;
}

export default BootstrapClient