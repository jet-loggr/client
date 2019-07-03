import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
const FlightDetails = props => {
  const useStyles = makeStyles(theme => ({
    appBar: {
      position: "relative"
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1
    }
  }));
  const classes = useStyles();
  const {
    date,
    duration,
    flight_number,
    hotel,
    duty_off,
    duty_on,
    route_start,
    route_end,
    approaches,
    legs,
    make,
    model
  } = props.flight;
  if (props.updating === true) {
    const style = {
      padding: "5px 5px 5px 0px",
      width: "90%",
      margin: "10px auto"
    };
    return (
      <Dialog
        fullScreen
        TransitionComponent={props.TransitionComponent}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              {`Flight ${flight_number} on ${date}.`}
            </Typography>
            <Button color="inherit" onClick={props.cancelUpdate}>
              Cancel Update
            </Button>
            <Button color="inherit" onClick={props.submitFlightUpdate}>
              Submit Update
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          label="Flight Number"
          name="flight_number"
          fullWidth
          value={props.updatedFlight.flight_number}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Flight Origin"
          name="route_start"
          fullWidth
          value={props.updatedFlight.route_start}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Flight Destination"
          name="route_end"
          fullWidth
          value={props.updatedFlight.route_end}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Trip Duration"
          name="duration"
          fullWidth
          value={props.updatedFlight.duration}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Aircraft Make"
          name="make"
          fullWidth
          value={props.updatedFlight.make}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Aircraft Model"
          name="model"
          fullWidth
          value={props.updatedFlight.model}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          type="number"
          label="Number of Approaches"
          name="approaches"
          fullWidth
          value={props.updatedFlight.approaches}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Number of Legs"
          name="legs"
          fullWidth
          value={props.updatedFlight.legs}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          label="Hotel"
          name="hotel"
          fullWidth
          value={props.updatedFlight.hotel}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          type="datetime-local"
          label="Time In"
          name="duty_on"
          fullWidth
          value={props.updatedFlight.duty_on}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
        <TextField
          type="datetime-local"
          label="Time Out"
          name="duty_off"
          fullWidth
          value={props.updatedFlight.duty_off}
          onChange={props.handleUpdateChange}
          required
          style={style}
        />
      </Dialog>
    );
  } else {
    return (
      <Dialog
        fullScreen
        TransitionComponent={props.TransitionComponent}
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={props.handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              {`Flight ${flight_number} on ${date}.`}
            </Typography>
            <Button color="inherit" onClick={props.setUpdating}>
              Update Info
            </Button>
            <Button
              color="secondary"
              variant="contained"
              style={{ marginLeft: "10px" }}
              onClick={props.deleteFlight}
            >
              Delete Flight Log
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <List>
            <ListItem button>
              <ListItemText primary="Duration" secondary={`${duration}`} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Flight Origin"
                secondary={`${route_start}`}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Flight Destination"
                secondary={`${route_end}`}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText
                primary="Number of Approaches"
                secondary={`${approaches}`}
              />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Number of Legs" secondary={`${legs}`} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Aircraft Make" secondary={`${make}`} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Aircraft Model" secondary={`${model}`} />
            </ListItem>
            <Divider />
            {hotel ? (
              <ListItem button>
                <ListItemText primary="Hotel" secondary={`${hotel}`} />
              </ListItem>
            ) : null}
            <Divider />
            <ListItem button>
              <ListItemText primary="Time In" secondary={`${duty_on}`} />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Time Out" secondary={`${duty_off}`} />
            </ListItem>
            <Divider />
          </List>
        </DialogContent>
      </Dialog>
    );
  }
};

export default FlightDetails;
