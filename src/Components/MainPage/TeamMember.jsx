import React from "react";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamMember = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxWidth: 600 + "px" }}
          >
            <h6 className="text-primary text-uppercase">Team Members</h6>
            <h1 className="display-5 text-uppercase mb-0">
              Qualified Pets Care Professionals
            </h1>
          </div>

          <OwlCarousel
            className="owl-carousel team-carousel position-relative"
            style={{ paddingRight: 25 + "px" }}
          >
            <div className="team-item">
              <div className="position-relative overflow-hidden">
                <img className="img-fluid w-100" src="img/team-1.jpg" alt="" />
                <div className="team-overlay">
                  <div className="d-flex align-items-center justify-content-start">
                    <Link className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-twitter"></i>
                    </Link>
                    <Link className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-facebook"></i>
                    </Link>
                    <Link className="btn btn-light btn-square mx-1" href="#">
                      <i className="bi bi-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-light text-center p-4">
                <h5 className="text-uppercase">ARNAV ALOK GOEL</h5>
                <p className="m-0">
                  Coached various ATP & WTA players Hitting partner of World No.
                  1 - Karolina Pliskova <br />
                  Highest ATP Rank 2188 <br />
                  Highest ITF Rank 1377 <br />
                  AITA Rank 42 <br />
                  German Rank 449 <br />
                  French Rank 1/6
                </p>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
