import React from "react";
import NavBar from "../MainPage/NavBar";
import Service from "../MainPage/Services";
import Footer from "../Footer/Footer";
import Consultancy from "./Consultancy";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { ScrollRestoration } from "react-router-dom";

const Services = () => {
  return (
    <div>
      <NavBar page={"Services"} />
      <Service />
      <Consultancy />
      <Footer />
      <FloatingWhatsApp/>
      <ScrollRestoration/>
    </div>
  );
};

export default Services;
