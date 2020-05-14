import classes from "./ChronologyItem.module.css"
import React from "react";

let ChronologyItem = (props) => {
    return(
        <div className={classes.ChronologyItem}>
            <img src={props.src} alt={props.alt} onClick={(e) => {
                e.preventDefault();
                props.select({
                   desc : props.desc,
                   link : props.link
                });
            }}/>
        </div>
    );
}

export default ChronologyItem;