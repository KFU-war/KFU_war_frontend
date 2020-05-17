import React, {useState} from "react";
import Chronology from "./Chronology,js";
import ChronologyItem from "./ChronologyItem/ChronologyItem";
import classes from "./ChronologyItem/ChronologyItem.module.css";
import spacing from "../../../assets/img/separator.png"

let ChronologyContainer = (props) => {
    let items = [
        {
            time : "1941",
            desc : "fsafasfa"
        },
        {
            time : "1942",
            desc : "fsafasfa 2"
        },
        {
            time : "1943",
            desc : "fsafasfa 3"
        },
        {
            time : "1944",
            desc : "fsafasfa 4"
        },
        {
            time : "1945",
            desc : "fsafasfa 5"
        }
    ];
    let chronProps = items.map((elem, index) => {
        if (index !== items.length - 1){
            return(
                <div className={classes.chronologyItemWrapper}>
                    <ChronologyItem {...elem}/>
                    <img src={spacing} alt={"separator"} className={classes.spacing}/>
                </div>
            )
        } else {
            return (
                <div className={classes.chronologyItemWrapper}>
                    <ChronologyItem {...elem}/>
                </div>
                );
        }
    })
    return(
        <Chronology chronItems={chronProps}/>
    )
}

export default ChronologyContainer;