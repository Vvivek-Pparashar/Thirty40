import React from 'react'
import NavBar from '../MainPage/NavBar'
import Footer from '../Footer/Footer'
import CC1 from './CC1'
import { ScrollRestoration } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const ContactUs = () => {
  return (
    <div>
        <NavBar page = {"contact"}/>
        <CC1/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default ContactUs