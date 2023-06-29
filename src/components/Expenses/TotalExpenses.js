import React from "react";

import classes from './TotalExpenses.module.css';

const TotalExpenses = () => {
  return (
    <div className={classes["totalexpenses__container"]}>
      <p>My balance</p>
      <h1>$921.48</h1>
    </div>
  );
};

export default TotalExpenses;
