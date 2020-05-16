import React from "react";
import classes from "./InfoItem.module.css";

let InfoItem = (props) => {
    return(
      <div className={classes.InfoItem}>
          <h2 className={classes.number}>
              <span className={classes.additionalText}>
                 {props.additionalText}
              </span>
              {props.number}
          </h2>
          <span className={classes.text}>
              {props.text}
          </span>
      </div>
    );
}

export default InfoItem;