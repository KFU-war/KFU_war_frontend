import React from "react";
import classes from "./Infographics.module.css";

let Infographics = (props) => {
    return(
        <div className={classes.Infographics}>
            {props.items}
        </div>
    )
};

export default Infographics;