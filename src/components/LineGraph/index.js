import React from "react";
import axios from "axios";
import { LineChart } from "react-chartkick";
import "chart.js";

const DailyFlightCountInCurrentWeekChart = props => {
  const [lineChartProps, setLineChartProps] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("/api/flights/line-graph")
      .then(res => 
        setLineChartProps({
          "": null,
          ...res.data,
          " ": null
        }))
      .catch(err => console.error(err));
  }, []);

  if (
    lineChartProps.length <= 2 ||
    lineChartProps === null ||
    lineChartProps === undefined
  ) {
    return <div className="pie-message">No flight data available</div>;
  }

  return (
    <LineChart
      data={lineChartProps}
      title="Your Flight Hours in the Past Week"
      suffix=" hour(s)"
      download={"flight-hours-chart"}
      library={{
        title: {
          lineHeight: 2.5
        }
      }}
    />
  );
};

export default DailyFlightCountInCurrentWeekChart;
