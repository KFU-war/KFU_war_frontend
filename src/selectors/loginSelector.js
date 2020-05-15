class loginSelector {
    static getToken = (state) => {
        return state.login.token;
    }
    static getLogged = (state) => {
        return state.login.isLogged;
    }
    static getFetching = (state) => {
        return state.login.isFetching;
    }
    static getErrorMessage = (state) => {
        return state.login.errorMessage;
    }
}

export default loginSelector;