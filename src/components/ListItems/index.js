import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <div>
    <NavLink to="/dashboard" style={{ textDecoration: "none", color: "unset" }}>
      <ListItem button>
        <ListItemIcon>
          <img
            src={require("../../assets/tachometer-alt-fastest-light.svg")}
            alt="dashboard"
            style={{ width: "25px", height: "25px" }}
          />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </NavLink>
    <NavLink
      to="/dashboard/logbook"
      style={{ textDecoration: "none", color: "unset" }}
    >
      <ListItem button>
        <ListItemIcon>
          <img
            src={require("../../assets/books-light.svg")}
            alt="logbook"
            style={{ width: "25px", height: "25px" }}
          />
        </ListItemIcon>
        <ListItemText primary="Logbook" />
      </ListItem>
    </NavLink>
    <NavLink
      to="/dashboard/profile"
      style={{ textDecoration: "none", color: "unset" }}
    >
      <ListItem button>
        <ListItemIcon>
          <img
            src={require("../../assets/user-cog-light.svg")}
            alt="logbook"
            style={{ width: "25px", height: "25px" }}
          />
        </ListItemIcon>
        <ListItemText primary="Profile Settings" />
      </ListItem>
    </NavLink>
    {/* <NavLink
      to="/dashboard/settings"
      style={{ textDecoration: "none", color: "unset" }}
    >
      <ListItem button>
        <ListItemIcon>
          <img
            src={require("../../assets/cog-light.svg")}
            alt="logbook"
            style={{ width: "25px", height: "25px" }}
          />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </NavLink> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <img
          src={require("../../assets/clipboard-list-light.svg")}
          alt="logbook"
          style={{ width: "25px", height: "25px" }}
        />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img
          src={require("../../assets/clipboard-list-light.svg")}
          alt="logbook"
          style={{ width: "25px", height: "25px" }}
        />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <img
          src={require("../../assets/clipboard-list-light.svg")}
          alt="logbook"
          style={{ width: "25px", height: "25px" }}
        />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
