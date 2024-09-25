import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Footer'
function LandingPage() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default LandingPage