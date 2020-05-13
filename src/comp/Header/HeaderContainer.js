import {connect} from "react-redux";
import Header from "./Header";
import React from "react";
import {loginThunk} from "../../reducers/loginReducer";

let HeaderContainer = (props) => {
    let login = (data) => {
        props.login(data.login, data.password);
    }
    return (
        <Header {...props} login={login}/>
    )
}

let mapStateToProps = (state) => {
    return {
        isLogged : state.login.isLogged
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        login : (login, password) => {
            dispatch(loginThunk(login, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);