import React from "react";

import { Link } from "react-router-dom";

import logo from "./logo.svg";

const index = ({ login }) => {
  const submitHandler = () => {
    login();
  };
  return (
    <div className="navigation-container">
      <div className="nav-flex">
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />
        </Link>
        <div className="nav-links">
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/Features" className="links">
            Features
          </Link>
          <Link to="/About" className="links">
            About
          </Link>
          <Link to="/Careers" className="links">
            Careers
          </Link>
          <button className="login-btn">Log In</button>
        </div>
      </div>
    </div>
  );
};

export default index;
