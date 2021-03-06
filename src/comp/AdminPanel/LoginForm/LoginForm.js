import React from "react";
import classes from "./LoginForm.module.css"

let loginRef = React.createRef();
let passRef = React.createRef();
let LoginForm = (props) => {
    let submit = (e) => {
        e.preventDefault();
        let login = loginRef.current.value;
        let password = passRef.current.value;
        props.login({
            login : login,
            password : password
        });
    }
    return (
        <form onSubmit={submit} className={classes.LoginForm}>
            <h3 className={classes.heading}>Вход</h3>
            <label>
                Логин
                <input ref={loginRef} type={"text"} disabled={props.isFetching}/>
            </label>
            <label>
                Пароль
                <input ref={passRef} type={"password"} disabled={props.isFetching}/>
            </label>
            <button type="submit" disabled={props.isFetching}>Войти</button>
            {props.msg === ""
                ? <></>
                : <div className={classes.error}>
                    {props.msg}
                  </div>
            }
        </form>
    );
}

export default LoginForm;