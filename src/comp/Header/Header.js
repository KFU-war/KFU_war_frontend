import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import classes from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

let Header = (props) => {
    return (
        <header className={classes.Header}>
            {props.isLogged
                ? <>
                    Logged
                    <button onClick={props.logout}>Logout</button>
                  </>
                : <LoginForm login={props.login} isFetching={props.isFetching}/>
            }
            <Navbar/>
        </header>
    );
}

export default Header;