import React from "react";
import classes from "./Feedback.module.css";

let Feedback = (props) => {
    return (
        <div className={classes.Feedback}>
            <div className={classes.headingBlock}>
                <h2 className={classes.headingText}>
                    У Вас есть интересные истории об университете в годы войны?
                </h2>
                <h2 className={classes.writeBack}>
                    Напишите нам!
                </h2>
            </div>
            <form onSubmit={props.submit} className={classes.form}>
                <div className={classes.contacts}>
                    <label>
                        Имя:
                        <input name={"name"} type={"text"} className={classes.input} placeholder={"Иван"}/>
                    </label>
                    <label>
                        Контакт:
                        <input name={"phone"} type={"phone"} className={classes.input} placeholder={"+7"}/>
                    </label>
                </div>
                <div className={classes.textAreaWrapper}>
                    <label className={classes.label}>
                        История:
                        <textarea placeholder={"Расскажите Вашу историю..."} className={classes.input + " " + classes.textArea}/>
                    </label>
                </div>
                <div className={classes.btnWrapper}>
                    <button type={"submit"} className={classes.submitBtn}>Отправить</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback;