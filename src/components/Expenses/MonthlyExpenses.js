import React from 'react';

import classes from './MonthlyExpenses.module.css';

const MonthlyExpenses = () => {
  return (
    <div className={classes["monthlyexpenses__container"]}>
        <p>Total this week</p>
        <h1>$478.33</h1>
    </div>
  )
}

export default MonthlyExpenses;