import React from "react";

const index = ({ login }) => {
  const submitHandler = () => {
    login();
  };
  return (
    <div>
      <div className="logo-container">
        <img src="" alt="" />
        <h1>Jet-Loggr</h1>
      </div>
      <div className="menu">
        <h3>Features</h3>
        <h3>About</h3>
        <h3>Careers</h3>
      </div>
      <button onClick={submitHandler}>Login</button>
    </div>
  );
};

export default index;
