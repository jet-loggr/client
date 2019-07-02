import React from "react";
import { Link } from "react-router-dom";

import "./landingpage.scss";

import heroImg from "./hero_img.png";
import arrow from "./arrow.svg";

const index = props => {
  return (
    <div className="landing-page-container">
      <img src={heroImg} alt="plane" className="hero-image" />
      <div className="hero-content">
        <h1 className="title">JetLogr</h1>
        <h2 className="caption">
          The best app for pilots to log and track their hours.
        </h2>
        <p className="sub-caption">
          We know how crucial and important it is for you to be able to quickly
          log and keep track of your flight hours, aircraft, passengers, and
          more. So we’ve made it easy!
        </p>
      </div>
      <div className="CTA">
        <div className="content">
          <h2>Sign up today and start logging!</h2>
          <img src={arrow} className="arrow" alt="arrow" />
        </div>
        <div className="get-started" onClick={() => props.login()}>
          <h1>Get started</h1>
        </div>
      </div>
    </div>
  );
};

export default index;
