import React from "react";

import {useSelector } from "react-redux/es/hooks/useSelector";

import classes from "./ExpensesChart.module.css";

import ChartBar from "./ChartBar";

const ExpensesChart = () => {
  const expensesList = useSelector((state) => state.expenses.days);
  const overallPrice = useSelector(state => state.expenses.overallPrice);

  return (
    <div className={classes["chartbar__container"]}>
      {expensesList.map((day) => {
        return (
          <ChartBar
            expenses={day.totalPrice}
            day={day.day}
            dayPrice={day.totalPrice}
            overallPrice={overallPrice}
          />
        );
      })}
    </div>
  );
};

export default ExpensesChart;
