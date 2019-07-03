import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import PieChart from "../PieChart/index";
import StatsCards from "../StatsCards";
import LineGraph from "../LineGraph";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function Index() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div>
      <StatsCards />
      <Grid container spacing={3}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <LineGraph />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <span style={{ marginBottom: "20px" }}>Aircrafts You've Flown</span>{" "}
            <PieChart />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        {/* <Grid item xs={12}>
          <Paper className={classes.paper}>AND SOMETHING ELSE</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}

export default Index;
