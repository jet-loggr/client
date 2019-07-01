import React from "react";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div>
      <NavLink to="/dashboard/">Dashboard</NavLink>
      <NavLink to="/dashboard/logbook">Logbook</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
    </div>
  );
};

export default index;
