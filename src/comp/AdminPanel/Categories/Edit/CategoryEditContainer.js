import CategoryEdit from "./CategoryEdit";
import React from "react";
import Auth from "../../AuthHOC/Auth";
import {withRouter} from "react-router-dom";
import categorySelector from "../../../../selectors/categorySelector";
import {connect} from "react-redux";
import {setTypeCreator} from "../../../../reducers/redactorReducer";
import {CREATE_TYPE} from "../../Redactor/RedactorContainer";

let CategoryEditContainer = (props) => {
    let name = props.match.params.name;
    let create = () => {
        props.setCreateType();
    }
    return(
        <> {!props.isFetching
            ? <CategoryEdit name={name} {...props.category} create={create}/>
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

let mapDispatchToProps = (dispatch) => {
    return{
        setCreateType : () => {
            dispatch(setTypeCreator(CREATE_TYPE))
        }
    }
}

export default Auth(withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryEditContainer)));