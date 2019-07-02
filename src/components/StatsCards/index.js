import React, { useEffect, useState } from "react";
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
import axios from "axios";

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
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block"
    }
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

  const [statsCards, setStatsCards] = useState([]);

  useEffect(() => {
    axios
      .get("/api/flights/totals")
      .then(res => setStatsCards(res.data))
      .catch(error => console.error(error));
  }, []);

  console.log(statsCards.totaldaylandings);

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
          <span className={classes.cardText}>
            {statsCards.totalflightcount} Flights
          </span>
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
          <span className={classes.cardText}>
            {statsCards.totalduration ? statsCards.totalduration : 0} Hrs
          </span>
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
            <span className={classes.cardTextLandings}>
              {statsCards.totaldaylandings ? statsCards.totaldaylandings : 0}{" "}
              Day{" "}
            </span>
            <span className={classes.cardTextLandings}>
              {statsCards.totalnightlandings
                ? statsCards.totalnightlandings
                : 0}{" "}
              Night{" "}
            </span>
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
          <span className={classes.cardText}>
            {statsCards.totalpendingcount} Pending
          </span>
        </div>
      </Paper>
    </div>
  );
};

export default StatsCards;
