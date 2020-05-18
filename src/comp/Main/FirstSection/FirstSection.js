import classes from "./FirstSection.module.css"
import main from "../../../assets/img/main.png";
import React from "react";
import Arrow from "../Arrow/Arrow";

let FirstSection = (props) => {
    return(
        <section className={classes.MainSection} id={"#main"}>
            <img src={main} alt={"КФУ"} className={classes.img}/>
            <div className={classes.sectionContent}>
                <span className={classes.years}>1941-1945</span>
                <h2 className={classes.heading}>Казанский университет в годы войны</h2>
                <Arrow link={"#desc"}/>
            </div>
        </section>
    )
}

export default FirstSection;