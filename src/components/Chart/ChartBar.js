import React from 'react';

import classes from './ChartBar.module.css';

const ChartBar = (props) => {

  const calculateHeight = () => {
    let height = (props.dayPrice / props.overallPrice) * 100;
    return height;
  }

  return (
    <div className={classes["chartbar"]}>
      <div className={classes["chartbar__bar"]}>
      </div>
      <p>{props.day}</p>
    </div>
  )
}

export default ChartBar