let initialState = {
    categoryList : ["Сотрудники", "Хронология", "Научная деятельность", "Источники"],
    isFetching : false
}

const SET_LIST = "Category/SET_LIST";
const TOGGLE_FETCH = "Categoty/FETCH";

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

export default categoryReducer;