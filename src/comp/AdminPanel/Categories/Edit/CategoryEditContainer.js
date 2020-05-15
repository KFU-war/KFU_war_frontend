import CategoryEdit from "./CategoryEdit";
import React from "react";
import Auth from "../../AuthHOC/Auth";
import {withRouter} from "react-router-dom";

let CategoryEditContainer = (props) => {
    let name = props.match.params.name;
    return(
        <CategoryEdit name={name}/>
    )
}

export default Auth(withRouter(CategoryEditContainer));