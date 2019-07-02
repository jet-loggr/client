import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MaterialDatatable from "material-datatable";
import DetailsButton from "./DetailsButton";

const columns = [
  { name: "Date", field: "date" },
  { name: "Flight No.", field: "flight_number" },
  { name: "Trip Origin", field: "route_start" },
  { name: "Trip Destination", field: "route_end" },
  { name: "Duration", field: "duration" },
  { name: "Aircraft", field: "aircraft_id" },
  { name: "Flight details", field: "button" }
];

const options = {
  filterType: "dropdown",
  responsive: "scroll"
};
const LogBook = props => {
  const viewDetails = (e, id) => {
    e.stopPropagation();
    console.log("FIRING");
    props.history.push(`/dashboard/logbook/${id}`);
  };
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    axios
      .get("/api/flights")
      .then(res => {
        console.log("Res.data: ", res.data);
        const flightsWithButton = res.data.map(item => ({
          ...item,
          aircraft_id: `${item.make} ${item.model}`,
          button: (
            <Link to={`/dashboard/logbook/${item.id}`}>
              <DetailsButton onClick={e => viewDetails(e, item.id)} />
            </Link>
          )
        }));
        setFlights(flightsWithButton);
      })
      .catch(err => console.error(err));
  }, []);
  return (
    <MaterialDatatable
      title={"Flight Log Book"}
      data={flights}
      columns={columns}
      options={options}
    />
  );
};

export default LogBook;
