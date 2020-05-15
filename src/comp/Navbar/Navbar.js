import React, {useEffect} from "react";
import classes from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

let Navbar = (props) => {
    let currPage = props.name;
    return(
        <div className={classes.Navbar}>
            {currPage !== "/" ? <NavLink to={"/"} exact className={classes.link}>Главная</NavLink> :<></>}
            {currPage !== "/people" ? <NavLink to={"/people"} className={classes.link}>Сотрудники и студенты</NavLink>:<></>}
            {currPage !== "/time" ? <NavLink to={"/time"} className={classes.link}>Хронология событий</NavLink>:<></>}
            {currPage !== "/science" ? <NavLink to={"/science"} className={classes.link}>Научная деятельность</NavLink>:<></>}
        </div>
    );
}

export default Navbar;