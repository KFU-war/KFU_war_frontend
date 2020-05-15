import React from "react";
import classes from "./CategoryEdit.module.css"

let CategoryEdit = (props) => {
    return (
        <main className={classes.CategoryEdit}>
            {props.name}
        </main>
    )
}

export default CategoryEdit;