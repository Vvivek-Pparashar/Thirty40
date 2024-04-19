import React from 'react'
import NavBar from '../MainPage/NavBar'
import Grid1 from './Grid1'
import Footer from '../Footer/Footer'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import { ScrollRestoration } from 'react-router-dom'

const BlogGrid = () => {
  return (
    <div>
        <NavBar page={"BlogGrid"}/>
        <Grid1/>
        <Footer/>
        <FloatingWhatsApp/>
        <ScrollRestoration/>
    </div>
  )
}

export default BlogGrid