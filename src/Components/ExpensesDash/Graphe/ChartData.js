import React from "react";
import Chart from "./Chart";

const ChartData = ({ filtredExpenses }) => {
  const data = [
    { month: "Jan", value: 0 },
    { month: "Feb", value: 0 },
    { month: "Mar", value: 0 },
    { month: "Apr", value: 0 },
    { month: "May", value: 0 },
    { month: "Jui", value: 0 },
    { month: "Jul", value: 0 },
    { month: "Aug", value: 0 },
    { month: "Sep", value: 0 },
    { month: "Oct", value: 0 },
    { month: "Nov", value: 0 },
    { month: "Dec", value: 0 },
  ];
  for (let i = 0; i < filtredExpenses.length; i++) {
    data[filtredExpenses[i].date.getMonth()].value += filtredExpenses[i].price;
  }
  const values = data.map((item) => item.value);
  const total = values.reduce((x, y) => {
    return x + y;
  });
  const max = Math.max(...values);
  return <Chart data={data} total={total} max={max} />;
};

export default ChartData;
