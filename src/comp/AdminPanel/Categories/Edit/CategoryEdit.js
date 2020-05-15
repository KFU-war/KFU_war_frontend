import React from "react";
import classes from "./CategoryEdit.module.css"
import CategoryEditInfo from "./CategoryInfo/CategoryInfoEdit";
import {NavLink, Route} from "react-router-dom";
import ArticleEditContainer from "./ArticleEdit/ArticleEditContainer";
import SourceEditContainer from "./SourceEdit/SourceEditContainer";

let CategoryEdit = (props) => {
    let isSources = props.name === "Источники";
    return (
        <main className={classes.CategoryEdit}>
            <CategoryEditInfo {...props}/>
            <div className={classes.wrapper}>
                <aside className={classes.ArticlesList}>
                    <h3 className={classes.articlesHeader}>
                        {isSources ? props.name : "Статьи раздела"}
                    </h3>
                    <input type={"search"}/>
                    {!isSources
                        ? <button className={classes.addBtn} onClick={props.create}>
                            <NavLink to={"/redactor"}>Создать статью</NavLink>
                          </button>
                        : <></>
                    }
                    <div className={classes.list}>
                        {props.list}
                    </div>
                </aside>
                <div className={classes.articleEditWrapper} id={"wrapper"}>
                    <Route path={"/select/" + props.name + "/:id"} exact>
                        {isSources
                            ? <SourceEditContainer/>
                            : <ArticleEditContainer/>
                        }
                    </Route>
                </div>
            </div>
        </main>
    )
}

export default CategoryEdit;