import React from "react";
import classes from "./Chronology.module.css";
import {NavLink} from "react-router-dom";

let Chronology = (props) => {
    return(
        <section className={classes.Chronology}>
            <h2 className={classes.heading}>
                Хронология событий
            </h2>
            <div className={classes.chronoRow}>
                {props.chronItems}
            </div>
            <NavLink to={"/time"} className={classes.link}>
                Читать подробнее...
            </NavLink>
        </section>
    )
}

export default Chronology;