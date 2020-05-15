import React from "react";
import classes from "./CategorySelect.module.css"

let CategorySelect = (props) => {
    return(
        <main className={classes.CategorySelect}>
            <h1 className={classes.heading}>Выберите категорию для редактирования</h1>
            <div className={classes.categoriesWrapper}>
                <ul className={classes.categories}>
                    {props.categories}
                </ul>
            </div>
        </main>
    );
}

export default CategorySelect;