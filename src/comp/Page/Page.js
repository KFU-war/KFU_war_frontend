import React from "react";
import classes from "./Page.module.css"
import Header from "../Header/Header";

let Page = (props) => {
    return (
        <div className={classes.Page}>
            <Header/>
            <img className={classes.heading_img} src={props.headingPhoto} alt={props.alt}/>
            <main className={classes.content}>
                <div className={classes.categories}>
                    There will be categories
                </div>
                <article>
                    article
                </article>
            </main>
        </div>
    )
}

export default Page;