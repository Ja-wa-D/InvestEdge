import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  return (
    <div className="container">
      <div className="p-2 mt-5" style={{ width: '500px', height: '500px' }}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export { DoughnutChart };
