import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faClock,
  faPlaneArrival,
  faTasks
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  },
  cardContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  card: {
    height: "100px",
    margin: "20px 0",
    width: "100%",
    background: "#ffffff",
    borderRadius: "4px",
    "&:not(:last-child)": {
      marginRight: "20px"
    },
    overflowY: "hidden"
  },
  cardHolder: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  icon: {
    opacity: 0.5
  },
  cardText: {
    fontSize: "1.2rem"
  },
  landings: {
    display: "flex",
    flexDirection: "column"
  },
  cardTextLandings: {
    fontSize: "1.2rem"
  }
}));

const StatsCards = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.card
  );

  return (
    <div className={classes.cardContainer}>
      <Paper className={fixedHeightPaper}>
        <div className={classes.cardHolder}>
          <div className={classes.icon}>
            <img
              src={require("../../assets/plane-departure-light.svg")}
              alt="plane-departure"
              style={{ height: "45px", width: "45px" }}
            />
          </div>
          <span className={classes.cardText}>2,100 Flights</span>
        </div>
      </Paper>
      <Paper className={fixedHeightPaper}>
        <div className={classes.cardHolder}>
          <div className={classes.icon}>
            <img
              src={require("../../assets/stopwatch-light.svg")}
              alt="plane-departure"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <span className={classes.cardText}>11,000 Hrs</span>
        </div>
      </Paper>
      <Paper className={fixedHeightPaper}>
        <div className={classes.cardHolder}>
          <div className={classes.icon}>
            <img
              src={require("../../assets/plane-arrival-light.svg")}
              alt="plane-departure"
              style={{ height: "45px", width: "45px" }}
            />
          </div>
          <div className={classes.landings}>
            <span className={classes.cardTextLandings}>500 Day </span>
            <span className={classes.cardTextLandings}>500 Night </span>
          </div>
        </div>
      </Paper>
      <Paper className={fixedHeightPaper}>
        <div className={classes.cardHolder}>
          <div className={classes.icon}>
            <img
              src={require("../../assets/tasks-light.svg")}
              alt="plane-departure"
              style={{ height: "40px", width: "40px" }}
            />
          </div>
          <span className={classes.cardText}>2 Pending</span>
        </div>
      </Paper>
    </div>
  );
};

export default StatsCards;
