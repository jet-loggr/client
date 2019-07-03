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

  return lineChartProps && Object.keys(lineChartProps).some(key => lineChartProps[key]) ? (
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
  ) : (
    <div className="pie-message">No flight data available</div>
  );
};

export default DailyFlightCountInCurrentWeekChart;
