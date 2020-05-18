import classes from "./Arrow.module.css";
import leftPart from "../../../assets/img/arrow_left.png";
import rightPart from "../../../assets/img/arrow_right.png";
import React from "react";
import $ from "jquery";

let Arrow = (props) => {
    let click = (e) => {
        e.preventDefault();
        let id  = e.currentTarget.getAttribute('href');
        let top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 160}, 750);
    }
    return(
        <div className={props.class}>
            <a href={props.link} className={classes.arrow} onClick={click}>
                <img src={leftPart} className={classes.arrow_part} alt={"Стрелка"}/>
                <img src={rightPart} className={classes.arrow_part + " " + classes.right_part} alt={"Стрелка"}/>
            </a>
        </div>
    );
}

export default Arrow;