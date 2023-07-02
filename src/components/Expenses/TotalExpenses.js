import React from "react";

import {useSelector} from 'react-redux';

import classes from './TotalExpenses.module.css';

const TotalExpenses = () => {

  const balance = useSelector(state => state.expenses.balance);

  return (
    <div className={classes["totalexpenses__container"]}>
      <p>My balance</p>
      <h1>${balance}</h1>
    </div>
  );
};

export default TotalExpenses;
