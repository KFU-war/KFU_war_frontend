import React from "react";
import classes from "./CategoryEdit.module.css"
import CategoryEditInfo from "./CategoryInfo/CategoryInfoEdit";
import {Route} from "react-router-dom";
import ArticleEditContainer from "./ArticleEdit/ArticleEditContainer";
import SourceEditContainer from "./SourceEdit/SourceEditContainer";

let CategoryEdit = (props) => {
    return (
        <main className={classes.CategoryEdit}>
            <CategoryEditInfo {...props}/>
            <div className={classes.wrapper}>
                <aside className={classes.ArticlesList}>
                    <h3 className={classes.articlesHeader}>
                        {props.name === "Источники" ? props.name : "Статьи раздела"}
                    </h3>
                    <input type={"search"}/>
                    <button className={classes.addBtn}>
                        Создать {props.name === "Источники" ? "источник" : "статью"}
                    </button>
                    <div className={classes.list}>
                        {props.list}
                    </div>
                </aside>
                <div className={classes.articleEditWrapper} id={"wrapper"}>
                    <Route path={"/select/" + props.name + "/:id"} exact>
                        {props.name === "Источники"
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