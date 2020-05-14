import React from "react";
import classes from "./Page.module.css"

let Page = (props) => {
    return (
        <div className={classes.Page}>
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