import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const AddNewFlight = () => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      component={Link}
      to="/dashboard/flight-form"
      color="secondary"
      className={classes.button}
    >
      ADD NEW FLIGHT
    </Button>
  );
};

export default AddNewFlight;
