import {connect} from "react-redux";
import React from "react";
import {loginThunk, logoutThunk} from "../../reducers/loginReducer";
import AdminPanel from "./AdminPanel";

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
        isLogged : state.login.isLogged,
        isFetching : state.login.isFetching,
        error : state.login.errorMessage
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