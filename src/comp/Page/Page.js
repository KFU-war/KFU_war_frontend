import React from "react";
import classes from "./Page.module.css"
import Banner from "./Banner/Banner";
import {Route} from "react-router-dom";
import ArticleContainer from "./Article/ArticleContainer";

let Page = (props) => {
    return (
        <div className={classes.Page}>
            <Banner heading={props.heading} src={props.src}/>
            <section className={classes.content}>
                <h2 className={classes.desc_wrapper}>
                    {props.decs}
                </h2>
            </section>
            <main className={classes.main}>
                <aside className={classes.aside}>
                    <input type={"search"} onChange={props.filter}/>
                    {props.list}
                    {props.list2}
                </aside>
                <article className={classes.article}>
                    <Route path={props.link + "/:id"}>
                        <ArticleContainer/>
                    </Route>
                </article>
            </main>
        </div>
    )
}

export default Page;