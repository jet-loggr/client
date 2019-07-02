import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import MaterialDatatable from "material-datatable";
import FlightDetails from "./FlightDetails";
import Slide from "@material-ui/core/Slide";

import DeleteFlightConfirmation from "./DeleteFlightConfirmation";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LogBook = props => {
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
    rowCursorHand: true
  };
  const viewDetails = id => {
    axios
      .get(`/api/flights/${id}`)
      .then(res => {
        setSingleFlight(res.data);
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
    console.log("delete function firing");
    axios
      .delete(`/api/flights/${id}`)
      .then(res => {
        toast.info("Flight successfully deleted.");
        getReq();
      })
      .catch(err => console.error(err));
  };
  const [flights, setFlights] = useState([]);
  const [open, setOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [singleFlight, setSingleFlight] = useState({});
  useEffect(() => {
    getReq();
  }, []);
  return (
    <React.Fragment>
      <MaterialDatatable
        title={"Flight Log Book"}
        data={flights}
        columns={columns}
        options={options}
      />
      <FlightDetails
        fullScreen
        open={open}
        handleClose={() => setOpen(false)}
        handleClickOpen={() => setOpen(true)}
        deleteFlight={() => setDeleteConfirmation(true)}
        flight={singleFlight}
        TransitionComponent={Transition}
      />
      <DeleteFlightConfirmation
        open={deleteConfirmation}
        handleClose={() => setDeleteConfirmation(false)}
        handleClickOpen={() => setDeleteConfirmation(true)}
        deleteFlight={() => deleteFlight(singleFlight.id)}
        flight={singleFlight}
      />
    </React.Fragment>
  );
};

export default LogBook;
