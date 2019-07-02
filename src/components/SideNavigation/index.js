import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div className="side-nav">
      <NavLink exact to="/dashboard/">
        <img src={require("./tachometer-alt-fastest-solid.svg")} alt="" />
      </NavLink>
      <NavLink to="/dashboard/logbook">
        <img src={require("./book-solid.svg")} alt="" />
      </NavLink>
      <NavLink to="/dashboard/profile">
        <img src={require("./user-solid.svg")} alt="" />
      </NavLink>
      <NavLink to="/dashboard/settings">
        <img src={require("./cog-solid.svg")} alt="" />
      </NavLink>
    </div>
  );
};

export default index;
