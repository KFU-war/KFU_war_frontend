class categorySelector {
    static getCategoryList = (state) => {
        return state.categories.categoryList;
    }
    static getCurrentCategory = (state) => {
        return state.categories.currentCategory;
    }
    static getFetching = (state) => {
        return state.categories.isFetching;
    }
}

export default categorySelector;