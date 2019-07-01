import React from "react";
import MaterialDatatable from "material-datatable";
import DetailsButton from "./DetailsButton";
function createData(id, date, flightNo, tripNo, duration, aircraft) {
  return {
    id,
    date,
    flightNo,
    tripNo,
    duration,
    aircraft,
    button: <DetailsButton />
  };
}

const columns = [
  { name: "Id", field: "id" },
  { name: "Date", field: "date" },
  { name: "Flight No.", field: "flightNo" },
  { name: "Trip No.", field: "tripNo" },
  { name: "Duration", field: "duration" },
  { name: "Aircraft", field: "aircraft" },
  { name: "Flight details", field: "button" }
];

const data = [
  createData(1, 305, 3.7, 67, 4.3, "Boeing"),
  createData(2, 452, 25.0, 51, 4.9, "Boeing"),
  createData(3, 262, 16.0, 24, 6.0, "Boeing"),
  createData(4, 159, 6.0, 24, 4.0, "Boeing"),
  createData(5, 356, 16.0, 49, 3.9, "Boeing"),
  createData(6, 408, 3.2, 87, 6.5, "Boeing"),
  createData(7, 237, 9.0, 37, 4.3, "Boeing"),
  createData(8, 375, 0.0, 94, 0.0, "Boeing"),
  createData(9, 518, 26.0, 65, 7.0, "Boeing"),
  createData(10, 392, 0.2, 98, 0.0, "Boeing"),
  createData(11, 318, 0, 81, 2.0, "Boeing"),
  createData(12, 360, 19.0, 9, 37.0, "Boeing"),
  createData(13, 437, 18.0, 63, 4.0, "Boeing")
];

const options = {
  filterType: "dropdown",
  responsive: "scroll"
};
const LogBook = () => {
  return (
    <MaterialDatatable
      title={"Flight Log Book"}
      data={data}
      columns={columns}
      options={options}
    />
  );
};

export default LogBook;
