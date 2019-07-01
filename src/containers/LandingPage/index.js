import React from "react";

const LandingPage = props => {
  const login = () => {
    props.auth.login();
  };

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

export default LandingPage;
