import classes from "./FirstSection.module.css"
import main from "../../../assets/img/main.png";
import leftPart from "../../../assets/img/arrow_left.png";
import rightPart from "../../../assets/img/arrow_right.png";
import React from "react";
import $ from "jquery";

let FirstSection = (props) => {
    let click = (e) => {
        e.preventDefault();
        debugger;
        let id  = e.currentTarget.getAttribute('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 160}, 750);
    }
    return(
        <section className={classes.MainSection} id={"#main"}>
            <img src={main} alt={"КФУ"} className={classes.img}/>
            <div className={classes.sectionContent}>
                <span className={classes.years}>1941-1945</span>
                <h2 className={classes.heading}>Казанский университет в годы войны</h2>
                <div>
                    <a href={"#desc"} className={classes.arrow} onClick={click}>
                        <img src={leftPart} className={classes.arrow_part} alt={"Стрелка"}/>
                        <img src={rightPart} className={classes.arrow_part + " " + classes.rigth_part} alt={"Стрелка"}/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FirstSection;