import React from "react";
import classes from "./Page.module.css"
import Banner from "./Banner/Banner";

let Page = (props) => {
    return (
        <div className={classes.Page}>
            <Banner heading={props.heading} src={props.src}/>
            <main className={classes.content} id={"desc"}>
                MAIN
            </main>
        </div>
    )
}

export default Page;