import React from "react";
import classes from "./Section.modules.css";
import {NavLink} from "react-router-dom";

let Section = (props) => {
    let sectionRef = React.createRef();
    let setHeight = (e) => {

    }
    return(
        <section className={classes.Section} id={props.id} ref={sectionRef}>
            <img src={props.src} alt={props.alt} onLoad={setHeight}/>
            <div className={classes.sectionContent}>
                <h2 className={classes.heading}>{props.heading}</h2>
                <span className={classes.desc}>{props.desc}</span>
                <NavLink to={props.link} className={classes.link}>{props.linkDesc}</NavLink>
            </div>
        </section>
    )
}

export default Section;