import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <button className={classes.btn}>
                <NavLink to={"/"} active={classes.active}>Главная</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/people"} active={classes.active}>Сотрудники и студенты</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/time"} active={classes.active}>Хронология событий</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/science"}>Научная деятельность</NavLink>
            </button>
        </div>
    );
}

export default Navbar;