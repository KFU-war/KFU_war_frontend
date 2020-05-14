import LoginForm from "./LoginForm/LoginForm";
import React from "react";
import classes from "./AdminPanel.module.css"

let AdminPanel = (props) => {
    return(
        <div className={classes.AdminPanel}>
            {props.isLogged
                ? <>
                    Logged
                    <button onClick={props.logout}>Logout</button>
                </>
                : <LoginForm login={props.login} isFetching={props.isFetching} msg={props.error}/>
            }
        </div>
    )
}

export default AdminPanel;