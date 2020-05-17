import React from "react";
import "./Section.css";
import {NavLink} from "react-router-dom";

let Section = (props) => {
    let sectionRef = React.createRef();
    let setHeight = (e) => {

    }
    return(
        <section className={"Section"} id={props.id} ref={sectionRef}>
            <img src={props.src} alt={props.alt} className={"img"} onLoad={setHeight}/>
            <div className={"sectionContent"}>
                <h2 className={"sectionContentheading"}>{props.heading}</h2>
                <span className={"sectionContentdesc"}>{props.desc}</span>
                <NavLink to={props.link} className={"sectionContentlink"}>{props.linkDesc}</NavLink>
            </div>
        </section>
    )
}

export default Section;