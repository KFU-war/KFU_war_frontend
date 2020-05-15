let initialState = {
    id : null,
    type : "",
    article : "",
    returnUrl : ""
}

const SET_ID = "REDACTOR/SET_ID";
const SET_ARTICLE = "REDACTOR/SET_ARTICLE";
const SET_TYPE = "REDACTOR/SET_TYPE";
const SET_URL = "REDACTOR/SET_URL";

let redactorReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_ID : {
            stateCopy.id = action.id;
            break;
        }

        case SET_ARTICLE : {
            stateCopy.article = action.article;
            break;
        }

        case SET_TYPE : {
            stateCopy.type = action.redator_type;
            break;
        }

        case SET_URL : {
            stateCopy.returnUrl = action.url;
            break;
        }
    }
    return stateCopy;
}

let setIDCreator = (id) => {
    return {
        type : SET_ID,
        id : id
    }
}

let setArticleCreator = (article) => {
    return {
        type : SET_ARTICLE,
        article : article
    }
}

let setTypeCreator = (type) => {
    return {
        type : SET_TYPE,
        redator_type : type
    }
}

let setUrlCreator = (url) => {
    return {
        type : SET_URL,
        url : url
    }
}

export {redactorReducer, setArticleCreator, setIDCreator, setTypeCreator, setUrlCreator}