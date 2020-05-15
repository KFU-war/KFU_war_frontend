import React from "react";
import Auth from "../AuthHOC/Auth";
import {Redirect} from "react-router-dom";
import Redactor from "./Redactor";
import redactorSelector from "../../../selectors/redactorSelector";
import {connect} from "react-redux";
import {setArticleCreator} from "../../../reducers/redactorReducer";

const CREATE_TYPE = "REDACTOR_CREATE";
const EDIT_TYPE = "REDACTOR_EDIT";

let RedactorContainer = (props) => {
    let save = (data) => {
        console.log(data);
        props.setArticle(data);
    }
    return (
        <>
            {(props.type === EDIT_TYPE && id) || (props.type === CREATE_TYPE)
                ? <Redactor article={props.article} save={save}/>
                : <Redirect to={"/admin"}/>
            }
        </>
    );
}

let mapStateToProps = (state) => {
    return {
        id : redactorSelector.getID(state),
        type : redactorSelector.getType(state),
        article : redactorSelector.getArticle(state),
        url : redactorSelector.getURL(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setArticle : (article) => {
            dispatch(setArticleCreator(article))
        }
    }
}

RedactorContainer = Auth(connect(mapStateToProps, mapDispatchToProps)(RedactorContainer));
export {CREATE_TYPE, EDIT_TYPE, RedactorContainer};