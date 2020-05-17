import classes from "./ChronologyItem.module.css"
import React from "react";
import circle from "../../../../assets/img/circle.png"
import ReactTooltip from "react-tooltip";

let ChronologyItem = (props) => {
    return(
        <div className={classes.ChronologyItem} data-tip={props.desc}>
            <img src={circle} alt={"circle"} className={classes.circle}/>
            <div className={classes.time}>
                {props.time}
            </div>
            <ReactTooltip/>
        </div>
    );
}

export default ChronologyItem;