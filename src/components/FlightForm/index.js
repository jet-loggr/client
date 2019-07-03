import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";
import { Checkbox } from "@material-ui/core";
import { toast } from "react-toastify";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./flight.css";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  select: {
    fontSize: "1.2rem"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  number: {
    width: "200px"
  }
}));

function getSteps() {
  return [
    "Choose aircraft",
    "Add flight",
    "Add flight details",
    "Add trip details"
  ];
}

function getStepContent(
  step,
  data,
  formState,
  handleChange,
  handleOpen,
  open,
  handleClose,
  classes,
  addAircraft,
  addAircraftHandleChanges,
  addNewAircraft,
  handleCheckbox
) {
  switch (step) {
    case 0:
      return (
        <>
          <FormControl>
            <InputLabel htmlFor="aircraft-simple">Aircraft</InputLabel>
            <Select
              className={classes.select}
              value={formState.aircraft_id}
              onChange={handleChange}
              inputProps={{
                name: "aircraft_id",
                id: "aircraft-simple"
              }}
              name="aircraft_id"
            >
              {data.map(item => (
                <MenuItem value={item.id} key={item.id}>{`${item.make}-${
                  item.model
                } ${item.ident}`}</MenuItem>
              ))}
            </Select>
            <Button
              variant="contained"
              color="primary"
              onClick={handleOpen}
              style={{ margin: "25px 0" }}
            >
              Add new aircraft
            </Button>
          </FormControl>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={open}
            onClose={handleClose}
          >
            <div
              style={{
                top: `50%`,
                left: `50%`,
                transform: `translate(-50%, -50%)`
              }}
              className={classes.paper}
            >
              <Typography variant="h6" id="modal-title">
                Aircraft Form
              </Typography>
              <div>
                <TextField
                  id="make"
                  label="Make"
                  className={classes.textField}
                  value={addAircraft.make}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="make"
                />
                <TextField
                  id="model"
                  label="Model"
                  className={classes.textField}
                  value={addAircraft.model}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="model"
                />
                <TextField
                  id="ident"
                  label="Identification"
                  className={classes.textField}
                  value={addAircraft.ident}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="ident"
                />
                <TextField
                  id="engine_count"
                  label="Engine Count"
                  className={classes.textField}
                  value={addAircraft.engine_count}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="engine_count"
                />
                <TextField
                  id="engine_type"
                  label="Engine Type"
                  className={classes.textField}
                  value={addAircraft.engine_type}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="engine_type"
                />
                <TextField
                  id="remarks"
                  label="Remarks"
                  className={classes.textField}
                  value={addAircraft.remarks}
                  onChange={addAircraftHandleChanges}
                  margin="normal"
                  name="remarks"
                  multiline
                  rows="4"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                onClick={addNewAircraft}
              >
                Add new aircraft
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClose}
              >
                Cancel
              </Button>
            </div>
          </Modal>
        </>
      );
    case 1:
      return (
        <>
          <FormControl>
            <TextField
              id="flight-number"
              label="flight-number"
              className={classes.textField}
              value={formState.flight_number}
              onChange={handleChange}
              margin="normal"
              name="flight_number"
            />
            <label htmlFor="date">Flight Date</label>
            <TextField
              id="date"
              className={classes.textField}
              value={formState.date}
              onChange={handleChange}
              margin="normal"
              type="date"
              name="date"
            />
            <div>
              {" "}
              <TextField
                id="route_start"
                className={classes.textField}
                value={formState.route_start}
                onChange={handleChange}
                margin="normal"
                name="route_start"
                label="Route Start"
              />
              <TextField
                id="route_end"
                className={classes.textField}
                value={formState.route_end}
                onChange={handleChange}
                margin="normal"
                name="route_end"
                label="Route End"
              />
            </div>

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="pending"
                  checked={formState.pending}
                  onChange={e => handleCheckbox(e, "pending")}
                  value={formState.pending}
                />
              }
              label="Pending"
            />
          </FormControl>
        </>
      );
    case 2:
      return (
        <>
          <FormControl>
            <TextField
              id="approaches"
              label="approaches"
              className={classes.number}
              type="number"
              value={formState.approaches}
              onChange={handleChange}
              margin="normal"
              name="approaches"
            />
            <TextField
              id="legs"
              label="legs"
              type="number"
              className={classes.number}
              value={formState.legs}
              onChange={handleChange}
              margin="normal"
              name="legs"
            />

            <TextField
              id="day_landings"
              label="day_landings"
              type="number"
              className={classes.number}
              value={formState.day_landings}
              onChange={handleChange}
              margin="normal"
              name="day_landings"
            />

            <TextField
              id="night_landings"
              label="night_landings"
              type="number"
              className={classes.number}
              value={formState.night_landings}
              onChange={handleChange}
              margin="normal"
              name="night_landings"
            />

            <TextField
              id="duration"
              label="Duration in hours"
              type="number"
              className={classes.number}
              value={formState.duration}
              onChange={handleChange}
              margin="normal"
              name="duration"
            />
            <TextField
              id="remarks"
              label="Remarks"
              className={classes.textField}
              value={formState.remarks}
              onChange={handleChange}
              margin="normal"
              name="remarks"
              multiline
              rows="4"
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  name="deadhead"
                  checked={formState.deadhead}
                  onChange={e => handleCheckbox(e, "deadhead")}
                  value={formState.pending}
                />
              }
              label="Deadhead"
            />
          </FormControl>
        </>
      );
    case 3:
      return (
        <>
          <FormControl>
            {/*
    duty_time: ""
             */}
            <TextField
              id="trip_number"
              label="trip_number"
              className={classes.number}
              type="number"
              value={formState.trip_number}
              onChange={handleChange}
              margin="normal"
              name="trip_number"
            />
            <label htmlFor="duty_on">Duty On</label>
            <TextField
              id="duty_on"
              className={classes.textField}
              value={formState.duty_on}
              onChange={handleChange}
              type="datetime-local"
              margin="normal"
              name="duty_on"
            />

            <label htmlFor="duty_off">Duty Off</label>
            <TextField
              id="duty_off"
              className={classes.textField}
              value={formState.duty_off}
              onChange={handleChange}
              type="datetime-local"
              margin="normal"
              name="duty_off"
            />
            <TextField
              id="duty_time"
              label="Duty time in hours"
              type="number"
              className={classes.number}
              value={formState.duty_time}
              onChange={handleChange}
              margin="normal"
              name="duty_time"
            />

            <TextField
              id="hotel"
              className={classes.textField}
              value={formState.hotel}
              onChange={handleChange}
              margin="normal"
              name="hotel"
              label="Hotel"
            />

            <TextField
              id="remarks"
              label="Remarks"
              className={classes.textField}
              value={formState.remarks}
              onChange={handleChange}
              margin="normal"
              name="remarks"
              multiline
              rows="4"
            />
          </FormControl>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [data, setData] = React.useState([]);
  const [formState, setFormState] = React.useState({
    //step 1 - aircraft -
    aircraft_id: "",
    //step 2 - add flight -
    flight_number: "",
    pending: true,
    date: "",
    route_start: "",
    route_end: "",

    //step 3 - add flight details
    approaches: undefined,
    legs: undefined,
    day_landings: undefined,
    night_landings: undefined,
    duration: undefined,
    remarks: "",
    deadhead: false,

    // step 4 - add trip details
    trip_number: undefined,
    duty_on: "",
    duty_off: "",
    hotel: "",
    duty_time: undefined
  });

  const [addAircraft, setAddAircraft] = React.useState({
    make: "",
    model: "",
    ident: "",
    engine_count: undefined,
    engine_type: "",
    remarks: ""
  });
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    axios
      .get("/api/aircrafts")
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const addAircraftHandleChanges = e => {
    setAddAircraft({
      ...addAircraft,
      [e.target.name]: e.target.value
    });
  };

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckbox = (e, name) => {
    setFormState({
      ...formState,
      [name]: e.target.checked
    });
  };

  const addNewAircraft = e => {
    e.preventDefault();
    axios
      .post("/api/aircrafts", addAircraft)
      .then(() => {
        axios.get("/api/aircrafts").then(res => {
          setData(res.data);
          handleClose();
          setAddAircraft({
            make: "",
            model: "",
            ident: "",
            engine_count: undefined,
            engine_type: "",
            remarks: ""
          });
        });
      })
      .catch(err => {
        toast.error("Aircraft Already Exists");
        console.error(err);
      });
  };

  const submitFlight = e => {
    e.preventDefault();
    axios
      .post("/api/flights", formState)
      .then(() => {
        setFormState({
          //step 1 - aircraft -
          aircraft_id: "",
          //step 2 - add flight -
          flight_number: "",
          pending: true,
          date: "",
          route_start: "",
          route_end: "",

          //step 3 - add flight details
          approaches: undefined,
          legs: undefined,
          day_landings: undefined,
          night_landings: undefined,
          duration: undefined,
          remarks: "",
          deadhead: false,

          // step 4 - add trip details
          trip_number: undefined,
          duty_on: "",
          duty_off: "",
          hotel: "",
          duty_time: undefined
        });
        props.history.push("/dashboard/logbook");
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className={classes.root}>
      <Stepper
        className="stepContent"
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>
                {getStepContent(
                  index,
                  data,
                  formState,
                  handleChange,
                  handleOpen,
                  open,
                  handleClose,
                  classes,
                  addAircraft,
                  addAircraftHandleChanges,
                  addNewAircraft,
                  handleCheckbox
                )}
              </Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    disabled={!formState.aircraft_id}
                    variant="contained"
                    color="primary"
                    onClick={
                      activeStep === steps.length - 1
                        ? submitFlight
                        : handleNext
                    }
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
