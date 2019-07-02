import React from "react";
import axios from "axios";
import { LineChart } from "react-chartkick";
import "chart.js";

const DailyFlightCountInCurrentWeekChart = props => {
  const [lineChartProps, setLineChartProps] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/flights/line-graph")
      .then(res => setLineChartProps(res.data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <LineChart
      {...props.options}
      data={lineChartProps}
      messages={{ empty: "No flight data available so far for this week." }}
    />
  );
};

export default DailyFlightCountInCurrentWeekChart;
