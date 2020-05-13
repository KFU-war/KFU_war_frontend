import axios from "axios";

const BASE_URL = "https://cors-anywhere.herokuapp.com/https://kfu-war.herokuapp.com/";

const createAPI = (token) => {
    return  axios.create({
        baseURL : BASE_URL,
        headers : {
            "Content-Type" : "application/json",
            "token" : token,
        }
    });
}

let token = window.localStorage.getItem("token");
if (token == null){
    token = "null"
}
let api = createAPI(token);

export default api;