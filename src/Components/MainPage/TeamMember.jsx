import React from "react";
import arnaavProfile from '../../../public/img/owner.jpg'
import './TeamMember.css'

const TeamMember = () => {
  return (
    <div>
      <div>
        <div className="container-fluid py-5">
          <div className="container">
            <div
              className="border-start border-5 border-primary ps-5 mb-5"
              style={{ maxWidth: 600 + "px" }}
            >
              <h6 className="text-primary text-uppercase">The Owner</h6>
              <h1 className="display-5 text-uppercase mb-0">
                The Owner
              </h1>
            </div>

            <div className="try text-center p-4 px-5 d-flex justify-between-center align-items-center">
              <div className="card">
                <div className="img">
                  <img src={arnaavProfile} />
                </div>
                <div className="infos">
                  <div className="name">
                    <h2>ARNAV ALOK GOEL</h2>
                    <h4>@_thirty40</h4>
                  </div>
                  <p className="text">
                    Coached various ATP & WTA players, Hitting partner of World
                    No. 1 - Karolina Pliskova
                  </p>
                  <ul className="stats">
                    <li>
                      <h3>2188</h3>
                      <h4>Highest ATP Rank </h4>
                    </li>
                    <li>
                      <h3>1377</h3>
                      <h4>Highest ITF Rank</h4>
                    </li>
                    <li>
                      <h3>42</h3>
                      <h4>AITA Rank</h4>
                    </li>
                    <li>
                      <h3>1/6</h3>
                      <h4>German Rank 449 French Rank</h4>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="owner-img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
