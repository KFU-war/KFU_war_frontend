import React from "react";
import LoginForm from "./LoginForm/LoginForm";

let Header = (props) => {
    return (
        <header>
            {props.isLogged
                ? <>
                    Logged
                    <button onClick={props.logout}>LOG OUT</button>
                  </>
                : <LoginForm login={props.login} isFetching={props.isFetching}/>
            }
        </header>
    );
}

export default Header;