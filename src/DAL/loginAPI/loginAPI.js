import createAPI from "../api";

const LOGIN_URL = "login";
let loginAPI = createAPI();

const signIn = (login, password) => {
    loginAPI = createAPI();
    return loginAPI.post(LOGIN_URL, {
        login : login,
        password : password
    });
}

export default signIn;