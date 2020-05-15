import React from "react";
import classes from "./CategoryEdit.module.css"
import CategoryEditInfo from "./CategoryInfo/CategoryInfoEdit";

let CategoryEdit = (props) => {
    return (
        <main className={classes.CategoryEdit}>
            <CategoryEditInfo {...props}/>
        </main>
    )
}

export default CategoryEdit;