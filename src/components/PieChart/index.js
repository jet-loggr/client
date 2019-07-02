import React from "react";
import axios from "axios";
import { PieChart } from "react-chartkick";
import "chart.js";

const FrequentAircraftChart = props => {
  const [pieChartProps, setPieChartProps] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/flights/pie-chart")
      .then(res => setPieChartProps(res.data.map(row => [`${row.make} ${row.model}`, row.count])))
      .catch(err => console.error(err));
  }, []);

  return <PieChart data={pieChartProps} />;
};

export default FrequentAircraftChart;
