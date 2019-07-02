import React, { useState, useEffect } from "react";
import axios from "axios";
const FlightDetails = props => {
  const [flight, setFlight] = useState({});
  useEffect(() => {
    axios
      .get(`/api/flights/${props.match.params.id}`)
      .then(res => {
        console.log("RESDATA", res.data);
        setFlight(res.data);
      })
      .catch(err => console.error(err));
  }, []);
  const {
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
  } = flight;
  return (
    <div>
      <h2>Flight No: {flight_number}</h2>
      <h2>Flight Date: {date}</h2>
      <h2>Flight duration: {duration}</h2>
      <h2>Number of approaches: {approaches}</h2>
      <h2>Number of legs: {legs}</h2>
      <h2>Hotel: {hotel}</h2>
      <h2>Starting Airport: {legs}</h2>
      <h2>Destination Airport: {legs}</h2>
    </div>
  );
};

export default FlightDetails;
