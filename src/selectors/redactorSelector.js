class redactorSelector {
    static getID = (state) => {
        return state.redactor.id;
    }

    static getType = (state) => {
        return state.redactor.type;
    }

    static getArticle = (state) => {
        return state.redactor.article;
    }

    static getURL = (state) => {
        return state.redactor.returnUrl;
    }
}

export default redactorSelector;