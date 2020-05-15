import classes from "./AuthHeader.module.css"
import React from "react";

let AuthHeader = (props) => {
    return(
        <header className={classes.AuthHeader}>
            <h1 className={classes.heading}>
                Казанский Университет в годы войны
            </h1>
        </header>
    );
}

export default AuthHeader;