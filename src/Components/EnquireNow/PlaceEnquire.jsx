import React from "react";
import { ScrollRestoration, useLocation } from "react-router-dom";
import NavBar from "../MainPage/NavBar";
import Footer from "../Footer/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import EnquirePageForm from "./EnquirePageForm";

const PlaceEnquire = () => {
  const location = useLocation();
  const currentUrl = location.pathname;
  const place = currentUrl.split("/");

//   place = place[2].toLowerCase()

  return (
    <div>
      <NavBar />
      <EnquirePageForm place={place[2].toLowerCase()}/>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  );
};

export default PlaceEnquire;
