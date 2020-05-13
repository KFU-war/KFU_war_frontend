import api from "../DAL/api";

let token =  window.localStorage.getItem("token");

let initialState = {
    token : token,
    isLogged : token != null
}

const SET_LOGGED = "LOGIN/SET_LOGGED";
const SET_TOKEN = "LOGIN/SET_TOKEN";

const loginReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_LOGGED : {
            stateCopy.isLogged = action.isLogged;
            break;
        }
        case SET_TOKEN : {
            stateCopy.token = action.token;
            break;
        }
    }
    return stateCopy;
}

const setLoggedActionCreator = (isLogged) => {
    return {
        type : SET_LOGGED,
        isLogged : isLogged
    }
}

const setTokenCreator = (token) => {
    return {
        type : SET_TOKEN,
        token : token
    }
}

const loginThunk = (login, password) => {
    return (dispatch) => {
        api.post("login", {
            login : login,
            password : password
        }).then(resp => resp.data.value).then(token => {
            window.localStorage.setItem("token", token);
            dispatch(setLoggedActionCreator(true));
            dispatch(setTokenCreator(token));
        });
    }
}

export {loginReducer, loginThunk}