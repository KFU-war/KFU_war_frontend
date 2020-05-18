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
            <NavLink to={"/admin"} className={classes.admin_btn}>
                <svg className={classes.svg} height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><title/><g id="_1"><path d="M27,3V29a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V27H7v1H25V4H7V7H5V3A1,1,0,0,1,6,2H26A1,1,0,0,1,27,3ZM12.29,20.29l1.42,1.42,5-5a1,1,0,0,0,0-1.42l-5-5-1.42,1.42L15.59,15H5v2H15.59Z" id="login_account_enter_door"/></g></svg>
            </NavLink>
        </div>
    );
}

export default Navbar;