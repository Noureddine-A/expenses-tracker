import React from "react";

import classes from './ExpensesChart.module.css';

import ChartBar from './ChartBar';

const ExpensesChart = () => {
  return (
    <div className={classes["chartbar__container"]}>
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
      <ChartBar />
    </div>
  );
};

export default ExpensesChart;
