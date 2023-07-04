import React from "react";

import classes from './ExpensesOverview.module.css';

import ExpensesChart from "../Chart/ExpensesChart";
import WeeklyExpenses from "./WeeklyExpenses";

export const ExpensesOverview = () => {
  return <div className={classes["overviewexpenses__container"]}>
    <h1>Spending - Last 7 days</h1>
    <ExpensesChart/>
    <WeeklyExpenses/>
  </div>;
};

export default ExpensesOverview;
