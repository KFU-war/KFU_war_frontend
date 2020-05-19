import classes from "./SourcePage.module.css";
import React from "react";

let SourcesItem = (props) => {
    return(
        <div className={classes.SourcesItemWrapper}>
            <a href={props.link} className={classes.SourcesItem}>
                <img src={props.src} alt={props.alt} className={classes.SourcesItemImg}/>
                <div className={classes.SourcesItemText}>
                    <h2 className={classes.heading}>
                        {props.heading}
                    </h2>
                    <h4 className={classes.desc}>
                        {props.desc}
                    </h4>
                </div>
            </a>
        </div>
    );
}

export default SourcesItem;