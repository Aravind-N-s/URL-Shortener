import React from "react";
import { Radar } from "react-chartjs-2";

export const RadarGraph = props => {
  const counts = {};
  console.log(props.data)
  const { city } = props.data;
  city.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  const label = Object.keys(counts);
  const data = Object.values(counts)
  return (
    <Radar
      data={{
        labels: label,
        datasets: [
          {
            label: "# Users per device",
            data: data
          }
        ]
      }}
    />
  );
};
