import React from "react";
import classes from "./ArticleList.module.css";

let ArticleList = (props) => {
    return(
      <div className={classes.list}>
          <h2 className={classes.categoryName}>
              {props.category}
          </h2>
          <div className={classes.items}>
              {props.items}
          </div>
      </div>
    );
}

export default ArticleList;