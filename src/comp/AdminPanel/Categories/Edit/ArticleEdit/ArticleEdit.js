import React from "react";
import classes from "./ArticleEdit.module.css";

let ArticleEdit = (props) => {
    return(
        <>
            <div className={classes.articleWrapper}>
                {props.article}
            </div>
            <div className={classes.articleToolbar}>
                <button className={classes.editBtn} onClick={props.edit}>
                    Редактировать
                </button>
                <button className={classes.articleToolbar} onClick={props.archive}>
                    Архивировать
                </button>
            </div>
        </>
    );
}

export default ArticleEdit;