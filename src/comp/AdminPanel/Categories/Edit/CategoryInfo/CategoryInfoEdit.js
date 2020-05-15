import classes from "./CategoryInfoEdit.module.css";
import React from "react";
let CategoryEditInfo = (props) => {
    return(
        <div className={classes.categoryInfo}>
            <div className={classes.categoryHeading}>
                <h2>
                    Раздел "{props.name}"
                </h2>
            </div>
            <div className={classes.changeBlock}>
                <div className={classes.categoryPhotoBlock}>
                    <img className={classes.categoryPhoto} src={props.src} alt={"Фото категории" + props.name}/>
                    <input type={"file"} className={classes.changePhotoBtn} onChange={props.changePhoto}/>
                </div>
                <div className={classes.categoryDescBlock}>
                    <textarea className={classes.categoryDesc}>
                        {props.desc}
                    </textarea>
                    <button className={classes.btn} onClick={props.changeDesc}>Изменить текст категории</button>
                </div>
            </div>
        </div>
    );
}

export default CategoryEditInfo;