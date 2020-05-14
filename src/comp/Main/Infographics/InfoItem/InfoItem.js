import React from "react";
import classes from "./InfoItem.module.css";

let InfoItem = (props) => {
    return(
      <div className={classes.InfoItem}>
          <img src={props.src} alt={props.alt}/>
          <span>
              {props.text}
          </span>
      </div>
    );
}

export default InfoItem;