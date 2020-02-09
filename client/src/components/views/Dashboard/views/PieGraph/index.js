import React from "react";
import { Doughnut } from "react-chartjs-2";

export const PieGraph = props => {
  const counts = {};
  const { ipAddress } = props.data;
  ipAddress.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  const label = Object.keys(counts);
  const data = Object.values(counts);
  return (
    <Doughnut
      data={{
        labels: label,
        datasets: [
          {
            label: "# Users by Ip Address",
            data: data
          }
        ]
      }}
    />
  );
};
