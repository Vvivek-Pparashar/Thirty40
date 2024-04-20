import { RampRight, Widgets } from "@mui/icons-material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ page }) => {
  const [navBg, setNavBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  console.log(mobileNav)

  const changeNavBg = () => {
    window.scrollY >= 90 ? setNavBg(true) : setNavBg(false);
  };

  window.addEventListener("scroll", changeNavBg);
  return (
    <div>
      <div className="container-fluid border-bottom d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Our Office</h6>
                <span>123 Street, New York, USA</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center border-start border-end py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Email Us</h6>
                <span>info@example.com</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 text-center py-2">
            <div className="d-inline-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
              <div className="text-start">
                <h6 className="text-uppercase mb-1">Call Us</h6>
                <span>+012 345 6789</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0 ${
          navBg ? "sticky-top" : ""
        }`}

       style={ { position : navBg ? "fixed" : "", top:"0", left:"0", right:"0"}}
        // style={{ position :"fixed", top:"0", left:"0"}}
      >
        <Link to="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Thirty40
          </h1>
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          onClick={()=>setMobileNav(!mobileNav)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${mobileNav ? "show" : ""}`} id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className={`${page == "Home" ? "active" : ""} nav-item nav-link`}
            >
              Home
            </Link>
            <Link to="/About"  className={`${page == "AboutUs" ? "active" : ""} nav-item nav-link`}>
              About
            </Link>
            <Link to="/Services" className={`${page == "Services" ? "active" : ""} nav-item nav-link`}>
              Services
            </Link>
            <Link to="/ContactUs" className={`${page == "contact" ? "active" : ""} nav-item nav-link`}>
              Contact
            </Link>

            <Link
              to="/Blog"
              className={`${page == "Blog" ? "active" : ""} nav-item nav-link`}
            >
              Blogs
            </Link>

            <Link
              to="/EnqireNow"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Enqire Now <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
