import React from "react";
import classes from "./Chronology.module.css";

let Chronology = (props) => {
    return(
        <div className={classes.Chronology}>
            <div className={classes.chronoRow}>
                {props.chronItems}
            </div>
            <div className={classes.desc}>
                <div className={classes.text}>
                    {props.desc}
                </div>
                <div className={classes.link}>
                    <a href={props.link}>
                        Читать больше
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Chronology;