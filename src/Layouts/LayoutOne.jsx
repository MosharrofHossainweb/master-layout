import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'

const LayoutOne = () => {
  return (
    <>
    <div className='flex'>
      <Navbar/>
      <Outlet/>

    </div>
    <Footer/>
    </>
  )
}

export default LayoutOne
