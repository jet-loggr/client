import React from "react";
import { Route } from "react-router-dom";
import LandingHome from "../../components/LandingHome";
import LandingAbout from "../../components/LandingAbout";
import LandingNav from "../../components/LandingNav";

const LandingPage = ({ auth }) => {
  const login = () => {
    auth.login();
  };

  return (
    <>
      <LandingNav login={login} />
      <div>
        <Route exact path="/" render={props => <LandingHome {...props} />} />
        <Route path="/about-us" render={props => <LandingAbout {...props} />} />
      </div>
    </>
  );
};

export default LandingPage;
