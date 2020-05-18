import classes from "./Banner.module.css"
import React from "react";
import Arrow from "../../Main/Arrow/Arrow";
let Banner = (props) => {
    return(
        <div className={classes.Banner}>
            <img className={classes.img} src={props.src} alt={"banner"}/>
            <div className={classes.content}>
                <h1 className={classes.heading}>
                    {props.heading}
                </h1>
                <Arrow link={"#desc"} class={classes.arrow}/>
            </div>
        </div>
    )
}

export default Banner;