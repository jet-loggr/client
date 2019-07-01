import React from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Modal from "@material-ui/core/Modal";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
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
  addNewAircraft
) {
  switch (step) {
    case 0:
      return (
        <>
          <FormControl>
            <InputLabel htmlFor="aircraft-simple">Aircraft</InputLabel>
            <Select
              value={formState.aircraft}
              onChange={handleChange}
              inputProps={{
                name: "aircraft",
                id: "aircraft-simple"
              }}
              name="aircraft"
            >
              {data.map(item => (
                <MenuItem value={item.id} key={item.id}>{`${item.make}-${
                  item.model
                } ${item.ident}`}</MenuItem>
              ))}
            </Select>
            <Button variant="contained" color="primary" onClick={handleOpen}>
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
            </div>
          </Modal>
        </>
      );
    case 1:
      return "An ad group contains one or more ads which target a shared set of keywords.";
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    case 3:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return "Unknown step";
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const [data, setData] = React.useState([]);
  const [formState, setFormState] = React.useState({
    aircraft: ""
  });

  const [addAircraft, setAddAircraft] = React.useState({
    make: "",
    model: "",
    ident: "",
    engine_count: "",
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

  function handleReset() {
    setActiveStep(0);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  console.log("HELLOOOOO", data);
  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
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
            engine_count: "",
            engine_type: "",
            remarks: ""
          });
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
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
                  addNewAircraft
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
                    disabled={!formState.aircraft}
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
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
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
