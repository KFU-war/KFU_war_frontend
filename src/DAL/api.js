import axios from "axios";

const CORS = "https://cors-anywhere.herokuapp.com/";
const BASE_URL = "https://kfu-war.herokuapp.com/";

const createAPI = (token = window.localStorage.getItem('token')) => {
    if (token == null){
        token = "null"
    }
    return axios.create({
        baseURL : BASE_URL,
        headers : {
            "AUTH" : token,
            "Content-Type" : "application/json",
        }
    });
}

export default createAPI;