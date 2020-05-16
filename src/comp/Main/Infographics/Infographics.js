import React from "react";
import classes from "./Infographics.module.css";

let Infographics = (props) => {
    return(
        <div className={classes.Infographics}>
            <span className={classes.heading}>
                Война для университета в цифрах
            </span>
            <div className={classes.infoList}>
                {props.items}
            </div>
        </div>
    )
};

export default Infographics;