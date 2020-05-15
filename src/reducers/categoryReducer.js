let initialState = {
    categoryList : ["Сотрудники", "Хронология", "Научная деятельность", "Источники"],
    currentCategory : null,
    isFetching : false
}

const SET_LIST = "Category/SET_LIST";
const TOGGLE_FETCH = "Category/FETCH";
const SET_CURRENT_CATEGORY = "Category/SET_CURRENT";

let categoryReducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_LIST : {
            stateCopy.categoryList = action.list;
            break;
        }

        case TOGGLE_FETCH : {
            stateCopy.isFetching = !stateCopy.isFetching;
            break;
        }

        case SET_CURRENT_CATEGORY : {
            stateCopy.currentCategory = action.category;
            break;
        }
    }
    return stateCopy;
}

let toggleFetchCreator = () => {
    return {
        type : TOGGLE_FETCH
    }
};

let setListCreator = (list) => {
    return {
        list : list
    }
}

let setCurrentCategory = (category) => {
    return {
        type : SET_CURRENT_CATEGORY,
        category : category
    }
}

export default categoryReducer;