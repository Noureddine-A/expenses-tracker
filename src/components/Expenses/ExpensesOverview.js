import React from "react";

import classes from './ExpensesOverview.module.css';

import ExpensesChart from "../Chart/ExpensesChart";
import MonthlyExpenses from "./MonthlyExpenses";

export const ExpensesOverview = () => {
  return <div className={classes["overviewexpenses__container"]}>
    <h1>Spending - Last 7 days</h1>
    <ExpensesChart/>
    <MonthlyExpenses/>
  </div>;
};

export default ExpensesOverview;
