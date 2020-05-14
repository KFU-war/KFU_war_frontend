import React from "react";
import classes from "./Page.module.css"
import Header from "../Header/Header";

let Page = (props) => {
    return (
        <div className={classes.Page}>
            <Header/>
            Page
        </div>
    )
}

export default Page;