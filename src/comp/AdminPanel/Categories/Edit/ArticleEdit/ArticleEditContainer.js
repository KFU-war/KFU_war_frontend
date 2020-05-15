import {withRouter} from "react-router-dom";
import React from "react";
import ArticleEdit from "./ArticleEdit";

let ArticleEditContainer = (props) => {
    let id = props.match.params.id;
    return(
        <>
            {id ? <ArticleEdit {...props}/> : <></>}
        </>
    );
}

export default withRouter(ArticleEditContainer);