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
  console.log("FLIGHT PROP: ", props.flight);
  console.log("Duration: ", duration);
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
          <Button color="inherit">Update Info</Button>
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
};

export default FlightDetails;
