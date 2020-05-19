import classes from "./Search.module.css";
import React from "react";

let Search = (props) => {
    let ref = React.createRef();
    return(
        <div className={classes.searchWrapper}>
            <input type={"search"} ref={ref}/>
            <button className={classes.glass} onClick={(e) => props.filter(ref)}>&#x1f50d;</button>
        </div>
    )
}

export default Search;