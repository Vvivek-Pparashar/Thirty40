import React from "react";
import NavBar from "./Components/MainPage/NavBar";
import HeroPage from "./Components/MainPage/HeroPage";
import AboutUs from "./Components/MainPage/AboutUs";
import Services from "./Components/MainPage/Services";
import TeamMember from "./Components/MainPage/TeamMember";
import SpecialOffer from "./Components/MainPage/SpecialOffer";
import LatestBlogs from "./Components/MainPage/LatestBlogs";
import Footer from "./Components/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Testimonial from "./Components/MainPage/Testimonial";

const App = () => {
  return (
    <>
      <NavBar page={"Home"}/>
      <HeroPage />
      <AboutUs />
      <Services />
      <TeamMember />
      <SpecialOffer />
      <Testimonial/>
      <LatestBlogs />
      <Footer />
      <FloatingWhatsApp/>
      <ScrollRestoration/>
    </>
  );
};

export default App;
