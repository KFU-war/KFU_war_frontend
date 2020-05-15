import React from "react";
import classes from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

let Header = (props) => {
    return (
        <>
            <header className={classes.Header}>
                <Navbar/>
            </header>
            <div className={classes.spacing}/>
        </>
    );
}

export default Header;