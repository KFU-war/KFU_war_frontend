import classes from "./SourcePage.module.css"
import React from "react";
let SourcePage = (props) => {
    return(
        <div className={classes.Sources}>
            {props.sourcesList}
        </div>
    );
}

export default SourcePage;