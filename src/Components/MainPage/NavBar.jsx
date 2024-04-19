import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({page}) => {
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

      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
        <Link to="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-dark">
            <i className="bi bi-shop fs-1 text-primary me-3"></i>Thirty40
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link to="/" 
            // className="nav-item nav-link active" 
            className = {`${page == "Home" ? "active" : ""} nav-item nav-link`}
            >
              Home
            </Link>
            <Link to="/About" className="nav-item nav-link">
              About
            </Link>
            <Link to="/Blog" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/" className="nav-item nav-link">
              Product
            </Link>
            <div className="nav-item dropdown">
              <Link
                to="/"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </Link>
              <div className="dropdown-menu m-0">
                <Link to="/" className="dropdown-item">
                  Pricing Plan
                </Link>
                <Link to="/" className="dropdown-item">
                  The Team
                </Link>
                <Link to="/" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/" className="dropdown-item">
                  Blog Grid
                </Link>
                <Link to="/" className="dropdown-item">
                  Blog Detail
                </Link>
              </div>
            </div>
            <Link
              to="/contact"
              className="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5"
            >
              Contact <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;