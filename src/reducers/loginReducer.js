import createAPI from "../DAL/api";

let token =  window.localStorage.getItem("token");

let initialState = {
    token : token,
    isLogged : token != null,
    isFetching : false
}

const SET_LOGGED = "LOGIN/SET_LOGGED";
const SET_TOKEN = "LOGIN/SET_TOKEN";
const TOGGLE_FETCH = "LOGIN/FETCH";

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

const toggleFetchingCreator = () => {
    return {
        type : TOGGLE_FETCH
    }
}

const loginThunk = (login, password) => {
    return (dispatch) => {
        let api = createAPI();
        dispatch(toggleFetchingCreator());
        api.post("login", {
            login : login,
            password : password
        }).catch(resp => {
            dispatch(toggleFetchingCreator());
        }).then(resp => resp.data.value).then(token => {
            window.localStorage.setItem("token", token);
            dispatch(setLoggedActionCreator(true));
            dispatch(setTokenCreator(token));
            dispatch(toggleFetchingCreator());
        });
    }
}

const logoutThunk = () => {
    return (dispatch) => {
        window.localStorage.clear();
        dispatch(setTokenCreator(null));
        dispatch(setLoggedActionCreator(false));
    }
}

export {loginReducer, loginThunk, initialState, setLoggedActionCreator, setTokenCreator, logoutThunk}