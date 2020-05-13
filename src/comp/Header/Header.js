import React from "react";
import LoginForm from "./LoginForm/LoginForm";

let Header = (props) => {
    return (
        <header>
            {props.isLogged
                ? <>Logged</>
                : <LoginForm login={props.login}/>
            }
        </header>
    );
}

export default Header;