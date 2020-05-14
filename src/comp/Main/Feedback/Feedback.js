import React from "react";
import classes from "./Feedback.module.css";

let Feedback = (props) => {
    return (
        <div className={classes.Feedback}>
            <form onSubmit={props.submit}>
                <div className={classes.col}>
                    <input name={"name"} type={"text"} placeholder={"Имя"}/>
                    <input name={"surname"} type={"text"} placeholder={"Фамилия"}/>
                    <button>Отправить</button>
                </div>
                <div className={classes.col}>
                    <textarea/>
                </div>
            </form>
            <div className={classes.infoBlock}>
                <div className={classes.info}>
                    Текст о создателях
                </div>
                <div className={classes.logos}>
                    <img src={"#"} alt={"Логотип КФУ"}/>
                    <img src={"#"} alt={"Логотип ИТИС"}/>
                    <img src={"#"} alt={"Логотип Музея КФУ"}/>
                </div>
            </div>
        </div>
    )
}

export default Feedback;