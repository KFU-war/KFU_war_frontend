import CategoryEdit from "./CategoryEdit";
import React from "react";
import Auth from "../../AuthHOC/Auth";
import {withRouter} from "react-router-dom";
import SourcesEdit from "./SourcesEdit/SourcesEdit";
import categorySelector from "../../../../selectors/categorySelector";
import {connect} from "react-redux";

let CategoryEditContainer = (props) => {
    let name = props.match.params.name;
    return(
        <>
            {
                !props.isFetching ? (name === "Источники" ? <SourcesEdit/> : <CategoryEdit name={name} {...props.category}/>)
                : <></>
            }
        </>
    )
}

let mapStateToProps = (state) => {
    return{
        isFetching : categorySelector.getFetching(state),
        category : categorySelector.getCurrentCategory(state)
    }
}

export default Auth(withRouter(connect(mapStateToProps)(CategoryEditContainer)));