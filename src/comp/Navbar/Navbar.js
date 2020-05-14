import React from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <button className={classes.btn}>
                <NavLink to={"/"} exact className={classes.link} activeClassName={classes.active}>Главная</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/people"} className={classes.link} activeClassName={classes.active}>Сотрудники и студенты</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/time"} className={classes.link} activeClassName={classes.active}>Хронология событий</NavLink>
            </button>
            <button className={classes.btn}>
                <NavLink to={"/science"}className={classes.link} activeClassName={classes.active}>Научная деятельность</NavLink>
            </button>
        </div>
    );
}

export default Navbar;