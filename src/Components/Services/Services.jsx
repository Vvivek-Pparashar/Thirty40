import React from "react";
import NavBar from "../MainPage/NavBar";
import Service from "../MainPage/Services";
import Footer from "../Footer/Footer";
import Consultancy from "./Consultancy";

const Services = () => {
  return (
    <div>
      <NavBar page={"Services"} />
      <Service />
      <Consultancy />
      <Footer />
    </div>
  );
};

export default Services;
