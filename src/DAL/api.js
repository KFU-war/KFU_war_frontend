import axios from "axios";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://kfu-war.herokuapp.com/";

const createAPI = (token = window.localStorage.getItem('token')) => {
    if (token == null){
        token = "null"
    }
    return  axios.create({
        baseURL : BASE_URL,
        headers : {
            "Content-Type" : "application/json",
            "token" : token,
        }
    });
}

export default createAPI;