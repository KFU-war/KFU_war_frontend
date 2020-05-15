import React from "react";
import classes from "./Redactor.module.css";
import CKEditor from 'ckeditor4-react';

let Redactor = (props) => {
    let data = {};
    debugger;
    return(
        <div className={classes.Redactor}>
            <CKEditor
                data={props.article}
                type="classic"
                onChange={evt => {data = evt.editor.getData()}}
            />
            <button onClick={e => {props.save(data)}}>Сохранить</button>
        </div>
    );
}

export default Redactor;