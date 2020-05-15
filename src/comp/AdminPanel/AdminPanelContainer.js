import {connect} from "react-redux";
import React from "react";
import {loginThunk, logoutThunk} from "../../reducers/loginReducer";
import AdminPanel from "./AdminPanel";
import loginSelector from "../../selectors/loginSelector";

let AdminPanelContainer = (props) => {
    let login = (data) => {
        props.login(data.login, data.password);
    }
    return (
        <AdminPanel{...props} login={login}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogged : loginSelector.getLogged(state),
        isFetching : loginSelector.getFetching(state),
        error : loginSelector.getErrorMessage(state)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login : (login, password) => {
            dispatch(loginThunk(login, password))
        },
        logout : () => {
            dispatch(logoutThunk())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelContainer);