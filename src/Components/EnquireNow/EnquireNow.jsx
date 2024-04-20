import React from 'react'
import NavBar from '../MainPage/NavBar'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'
import EnquireNowPage from './EnquireNowPage'

const EnquireNow = () => {
  return (
    <div>
        <NavBar page={"EnquireNow"}/>
        <EnquireNowPage/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default EnquireNow