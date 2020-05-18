import {withRouter} from "react-router-dom";
import React from "react";

let ArticleContainer = (props) => {
    let id = props.match.params.id;
    return(
        <p>Article with id {id}</p>
    );
}

export default withRouter(ArticleContainer);