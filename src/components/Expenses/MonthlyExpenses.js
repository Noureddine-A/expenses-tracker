import React from 'react';

import {useSelector } from 'react-redux/es/hooks/useSelector';

import classes from './MonthlyExpenses.module.css';

const MonthlyExpenses = () => {
  const overallExpenses = useSelector(state => state.expenses.overallPrice)
  return (
    <div className={classes["monthlyexpenses__container"]}>
        <p>Total this week</p>
        <h1>${overallExpenses}</h1>
    </div>
  )
}

export default MonthlyExpenses;