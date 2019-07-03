import React from "react";

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
          "This app is amazing! It is better than most log books I have used
          before. Especially having the option to print a signed copy. I would
          100% recommend to all my American Airline friends!" - Real Pilot
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
