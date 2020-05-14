import React from "react";
import classes from "./Section.modules.css";

let Section = (props) => {
    return(
        <section className={classes.Section} id={props.id}>
            <img src={props.src} alt={props.alt}/>
            <div className={classes.sectionContent}>
                <h2 className={classes.heading}>{props.heading}</h2>
                <span className={classes.desc}>{props.desc}</span>
                <a href={props.link}>{props.linkDesc}</a>
            </div>
        </section>
    )
}

export default Section;