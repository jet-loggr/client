import React, { useState, useEffect } from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
const FlightDetails = props => {
  const [flight, setFlight] = useState({});
  const {
    id,
    date,
    duration,
    flight_number,
    hotel,
    duty_off,
    duty_time,
    route_start,
    route_end,
    approaches,
    legs
  } = props.flight;
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`Flight ${flight_number} on ${date}.`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {id}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Back
        </Button>
        <Button color="secondary">Update Info</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FlightDetails;
