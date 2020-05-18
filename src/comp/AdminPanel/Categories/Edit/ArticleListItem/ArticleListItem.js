import {NavLink} from "react-router-dom";
import React from "react";
import classes from "./ArticleListItem.module.css"

let ArticleListItem = (props) => {
    return(
      <NavLink className={classes.ArticleListItem + " " + props.classes} to={props.url + "/" + props.id}>
          {props.heading}
      </NavLink>
    );
}

export default ArticleListItem;