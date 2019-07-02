import React from "react";

const index = ({ login }) => {
  const submitHandler = () => {
    login();
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={require("./plane-departure-solid.svg")} alt="" />
        <h1>Jet Logr</h1>
      </div>
      <div className="menu">
        <h3>Features</h3>
        <h3>About</h3>
        <h3>Careers</h3>
        <button onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
};

export default index;
