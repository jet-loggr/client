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
      .catch(err => console.error(err));
  }, []);

  if (
    lineChartProps.length === 0 ||
    lineChartProps === null ||
    lineChartProps === undefined
  ) {
    return <div className="pie-message">No flight data available</div>;
  }

  return (
    <LineChart
      {...props.options}
      data={lineChartProps}
    />
  );
};

export default DailyFlightCountInCurrentWeekChart;
