import LoginForm from "./LoginForm/LoginForm";
import React from "react";
import classes from "./AdminPanel.module.css"
import Auth from "./AuthHOC/Auth";
import AuthHeader from "./AuthHeader/AuthHeader";
import AuthFooter from "./AuthFooter/AuthFooter";
import CategoriesSelectContainer from "./Categories/Select/CategoriesSelectContainer";
import {Redirect} from "react-router-dom";

let AdminPanel = (props) => {
    return(
        <div className={classes.AdminPanel}>
            <AuthHeader/>
            {props.isLogged
                ? <Redirect to={"/select"}/>
                : <LoginForm login={props.login} isFetching={props.isFetching} msg={props.error}/>
            }
            <AuthFooter/>
        </div>
    )
}

export default AdminPanel;