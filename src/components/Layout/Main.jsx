import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import Hero from '../Hero/Hero'

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Outlet></Outlet>
      <Footer/>
    </div>
  )
}

export default Main