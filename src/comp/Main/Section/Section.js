import React from "react";
import classes from "./Section.modules.css";
import {NavLink} from "react-router-dom";

let Section = (props) => {
    return(
        <section className={classes.Section} id={props.id} style={{
            height : props.height
        }}>
            <img src={props.src} alt={props.alt}/>
            <div className={classes.sectionContent}>
                <h2 className={classes.heading}>{props.heading}</h2>
                <span className={classes.desc}>{props.desc}</span>
                <NavLink to={props.link} className={classes.link}>{props.linkDesc}</NavLink>
            </div>
        </section>
    )
}

export default Section;