import signIn from "../DAL/loginAPI/loginAPI";

let token =  window.localStorage.getItem("token");

let initialState = {
    token : token,
    isLogged : token != null,
    isFetching : false,
    errorMessage : ""
}

const SET_LOGGED = "LOGIN/SET_LOGGED";
const SET_TOKEN = "LOGIN/SET_TOKEN";
const TOGGLE_FETCH = "LOGIN/FETCH";
const SET_ERROR = "LOGIN/ERROR"

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
        case TOGGLE_FETCH : {
            stateCopy.isFetching = !stateCopy.isFetching;
            break;
        }
        case SET_ERROR : {
            stateCopy.errorMessage = action.error;
            break;
        }
    }
    return stateCopy;
}

const setLoggedCreator = (isLogged) => {
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

const setErrorCreator = (error) => {
    return {
        type : SET_ERROR,
        error : error
    }
}

const toggleFetchingCreator = () => {
    return {
        type : TOGGLE_FETCH
    }
}

const loginThunk = (login, password) => {
    return (dispatch) => {
        dispatch(toggleFetchingCreator());
        signIn(login, password).then(resp => {
            let data = resp.data;
            let token = data.value;
            window.localStorage.setItem("token", token);
            dispatch(setLoggedCreator(true));
            dispatch(setTokenCreator(token));
            dispatch(toggleFetchingCreator());
        }).catch(err => {
            let response = err.response;
            let msg = response.data.message;
            dispatch(setErrorCreator(msg));
            dispatch(toggleFetchingCreator());
        });
    }
}

const logoutThunk = () => {
    return (dispatch) => {
        window.localStorage.clear();
        dispatch(setTokenCreator(null));
        dispatch(setLoggedCreator(false));
    }
}

export {loginReducer, loginThunk, initialState, setLoggedCreator, setTokenCreator, logoutThunk, setErrorCreator}