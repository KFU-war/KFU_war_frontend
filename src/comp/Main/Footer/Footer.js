import classes from "./Footer.module.css";
import React from "react";

import facebook from "../../../assets/img/facebook_icon.png";
import insta from "../../../assets/img/insta_icon.png";
import globe from "../../../assets/img/globe_icon.png";
import itis_logo from "../../../assets/img/itis_logo.png";
import kfu_logo from "../../../assets/img/kfu_icon.png";
import museums from "../../../assets/img/museum.png";

let Footer = (props) => {
    return(
        <footer className={classes.Footer}>
            <div className={classes.authorsWrapper}>
                <div className={classes.authors}>
                    <h3 className={classes.authors_heading}>
                        Над проетом работали:
                    </h3>
                    <span className={classes.author}>
                        Lorem Ipsum
                    </span>
                    <span className={classes.author}>
                        Lorem Ipsum
                    </span>
                    <span className={classes.author}>
                        Lorem Ipsum
                    </span>
                </div>
                <div className={classes.logos}>
                    <div className={classes.kfu_logo}>
                        <img src={kfu_logo} className={classes.logo} alt={"kfu"}/>
                        <img src={museums} className={classes.logo} alt={"museums"}/>
                    </div>
                    <img src={itis_logo} className={classes.logo} alt={"itis logo"}/>
                </div>
            </div>
            <div className={classes.links}>
                <a href={"#facebook"} className={classes.link_a}>
                    <img src={facebook} className={classes.link_logo} alt={"facebook icon"}/>
                </a>
                <a href={"#insta"} className={classes.link_a}>
                    <img src={insta} className={classes.link_logo} alt={"insta icon"}/>
                </a>
                <a href={"#site"} className={classes.link_a}>
                    <img src={globe} className={classes.link_logo} alt={"globe icon"}/>
                </a>
            </div>
            <div className={classes.lastText}>
                &copy; Казанский Федеральный Университет, 2020
            </div>
        </footer>
    )
}

export default Footer;