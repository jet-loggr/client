import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import MaterialDatatable from "material-datatable";
import FlightDetails from "./FlightDetails";
import Slide from "@material-ui/core/Slide";
import ReactToPrint from "react-to-print";
import Button from "@material-ui/core/Button";

import DeleteFlightConfirmation from "./DeleteFlightConfirmation";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LogBook = () => {
  const columns = [
    { name: "Date", field: "date" },
    { name: "Flight No.", field: "flight_number" },
    { name: "Trip Origin", field: "route_start" },
    { name: "Trip Destination", field: "route_end" },
    { name: "Duration", field: "duration" },
    { name: "Aircraft", field: "aircraft_id" },
    { name: "Pending", field: "pending" }
  ];

  const options = {
    filterType: "dropdown",
    responsive: "scroll",
    selectableRows: false,
    onRowClick: (flight, index) => {
      viewDetails(flight.id);
    },
    rowCursorHand: true,
    print: false
  };

  const viewDetails = id => {
    axios
      .get(`/api/flights/${id}`)
      .then(res => {
        setSingleFlight(res.data);
        setUpdatedFlight(res.data);
        setOpen(true);
      })
      .catch(err => console.error(err));
  };

  const getReq = () => {
    axios
      .get("/api/flights")
      .then(res => {
        const flightsWithButton = res.data.map(item => ({
          ...item,
          date: item.date,
          aircraft_id: `${item.make} ${item.model}`,
          pending: <input type="checkbox" checked={item.pending} disabled />
        }));
        setFlights(flightsWithButton);
        setOpen(false);
        setDeleteConfirmation(false);
      })
      .catch(err => console.error(err));
  };

  const deleteFlight = id => {
    axios
      .delete(`/api/flights/${id}`)
      .then(res => {
        toast.info("Flight successfully deleted.");
        getReq();
      })
      .catch(err => console.error(err));
  };

  const submitFlightUpdate = flightId => {
    const {
      aircraft_id,
      approaches,
      date,
      day_landings,
      deadhead,
      duration,
      duty_off,
      duty_on,
      duty_time,
      flight_number,
      hotel,
      legs,
      night_landings,
      pending,
      remarks,
      route_end,
      route_start,
      trip_number
    } = updatedFlight;
    axios
      .put(`/api/flights/${flightId}`, {
        aircraft_id,
        flight_number,
        pending,
        date,
        route_start,
        route_end,
        approaches,
        legs,
        day_landings,
        night_landings,
        duration,
        remarks,
        deadhead,
        trip_number,
        duty_on,
        duty_off,
        hotel,
        duty_time
      })
      .then(res => {
        setUpdating(false);
        toast.info("Flight info updated successfully.");
        getReq();
      })
      .catch(err => console.error(err));
  };

  const submitAircraftUpdate = aircraftId => {
    const { ident, make, model } = updatedFlight;
    axios
      .put(`/api/aircrafts/${aircraftId}`, {
        ident,
        make,
        model
      })
      .then(res => {
        setUpdating(false);
        toast.info("Aircraft info updated successfully.");
        getReq();
      })
      .catch(err => console.error(err));
  };

  const combineUpdates = (flightId, aircraftId) => {
    const { ident, make, model } = updatedFlight;
    submitFlightUpdate(flightId);
    if (
      singleFlight.ident !== ident ||
      singleFlight.make !== make ||
      singleFlight.model !== model
    ) {
      submitAircraftUpdate(aircraftId);
    }
  };

  const [flights, setFlights] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [singleFlight, setSingleFlight] = useState({});
  const [updating, setUpdating] = useState(false);
  const [updatedFlight, setUpdatedFlight] = useState({});
  const [user, setUser] = useState({});

  const handleUpdateChange = e => {
    const { name, value } = e.target;
    setUpdatedFlight({ ...updatedFlight, [name]: value });
  };

  const getUser = () => {
    axios
      .get("/api/users")
      .then(res => setUser(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getReq();
    getUser();
  }, []);

  const printRef = React.useRef();

  return (
    <>
      <ReactToPrint
        trigger={() => (
          <Button variant="contained" color="primary">
            PRINT
          </Button>
        )}
        content={() => printRef.current}
      />
      <div className="logbook__print-area" ref={printRef}>
        <div className="logbook__print-area__container">
          <h1 className="logbook__print-area__container__heading">
            {user.name && `${user.name}'s logbook`}
          </h1>
          <MaterialDatatable
            title={"Flight Log Book"}
            data={flights}
            columns={columns}
            options={options}
          />
          <img
            className="logbook__print-area__container__signature"
            src={user.signature}
          />
          <h6 className="logbook__print-area__container__signature">
            {user.name} {new Date().toISOString().slice(0, 10)}
          </h6>
        </div>
      </div>
      <FlightDetails
        fullScreen
        open={open}
        handleClose={() => setOpen(false)}
        handleClickOpen={() => setOpen(true)}
        deleteFlight={() => setDeleteConfirmation(true)}
        flight={singleFlight}
        TransitionComponent={Transition}
        updating={updating}
        setUpdating={() => setUpdating(true)}
        cancelUpdate={() => setUpdating(false)}
        updatedFlight={updatedFlight}
        handleUpdateChange={handleUpdateChange}
        submitFlightUpdate={() =>
          combineUpdates(updatedFlight.id, updatedFlight.aircraft_id)
        }
      />
      <DeleteFlightConfirmation
        open={deleteConfirmation}
        handleClose={() => setDeleteConfirmation(false)}
        handleClickOpen={() => setDeleteConfirmation(true)}
        deleteFlight={() => deleteFlight(singleFlight.id)}
        flight={singleFlight}
      />
    </>
  );
};

export default LogBook;
