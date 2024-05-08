import React, { useState } from 'react';
import logo from "../../Images/Logos/zoomin-logo.gif";
import { MegaMenu } from "./MegaMenu";
import HealthMedicine from "./HealthMedicine"
import BabyChild from "./BabyChild"


export const Navbar = () => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMegaMenu(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light bg-light py-3">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src={logo}
            alt=""
            className="hover-img"
            style={{ width: "100px", height: "auto" }}
          />
        </span>
        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"custom-nav-link

        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavDropdown"
          onMouseLeave={handleMouseLeave}
        >
          <ul className="navbar-nav">
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
            >
              <a href="#" className="nav-link custom-nav-link">
                Home
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
            >
              <a href="#" className="nav-link custom-nav-link">
                Search Drug
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
            >
              <a href="#" className="nav-link custom-nav-link">
                Contact Us
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
            >
              <a href="#" className="nav-link">
                <HealthMedicine/>
              </a>
            </li>
            <li
              className="nav-item"
              onMouseEnter={handleMouseEnter}
            >
              <a href="#" className="nav-link">
                <BabyChild/>
              </a>
            </li>
            {/* Add more nav items here */}
          </ul>
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item m-1 ">
              <a type="button" className="btn btn-outline-light custom-nav-link" href="#">
                Sign in
              </a>
            </li>
          </ul>
        </div>
      </div>
      {showMegaMenu && <MegaMenu />}
    </nav>
  );
};