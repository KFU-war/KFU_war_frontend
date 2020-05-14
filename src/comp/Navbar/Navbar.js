import React from "react";
import classes from "./Navbar.module.css";
import $ from "jquery";

let click = (e) => {
    e.preventDefault();
    let id  = e.target.getAttribute("href"),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
}

let Navbar = (props) => {
    return(
        <div className={classes.Navbar}>
            <button className={classes.btn}>
                <a href={"#main"} onClick={click}>Главная</a>
            </button>
            <button className={classes.btn}>
                <a href={"#people"} onClick={click}>Сотрудники и студенты</a>
            </button>
            <button className={classes.btn}>
                <a href={"#time"} onClick={click}>Хронология событий</a>
            </button>
            <button className={classes.btn}>
                <a href={"#science"} onClick={click}>Научная деятельность</a>
            </button>
        </div>
    );
}

export default Navbar;