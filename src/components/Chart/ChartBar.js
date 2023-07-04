import React from "react";

import { Tooltip } from "@mui/material";

import classes from "./ChartBar.module.css";

const ChartBar = (props) => {
  let height = "";

  const calculateHeight = () => {
    return (height =
      ((props.dayPrice / props.overallPrice) * 100).toString() + "%");
  };

  return (
    <div className={classes["chartbar"]}>
      <div className={classes["chartbar__bar-container"]}>
        <Tooltip title={'$'+ props.dayPrice} placement="right">
          <div
            className={classes["chartbar__bar"]}
            style={{ height: calculateHeight() }}
          ></div>
        </Tooltip>
      </div>
      <div className={classes["chartbar__day"]}>
        <p>{props.day}</p>
      </div>
    </div>
  );
};

export default ChartBar;
