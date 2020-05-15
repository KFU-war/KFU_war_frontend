import React, {useEffect} from "react";
import classes from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

let Header = (props) => {
    let ref = React.createRef();
    const handleScroll = () => {
        let scroll = window.scrollY;
        let style = ref.current.style;
        if (scroll > 10){
            style.backgroundColor = "#333333";
        } else {
            style.backgroundColor = "transparent";
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    })
    return (
        <>
            <header className={classes.Header} ref={ref}>
                <Navbar name={props.name}/>
            </header>

        </>
    );
}

export default Header;