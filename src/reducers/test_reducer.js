let initialState = {
    testProp : ""
};

const SET_TEST_PROP = "TEST/SET_TEST_PROP"

const test_reducer = (state = initialState, action) => {
    let stateCopy = {...state};
    switch (action.type) {
        case SET_TEST_PROP: {
            stateCopy.testProp = action.testProp;
            break;
        }

        default : break;
    }
    return stateCopy;
}

const testActionCreator = (testText) => {
    return {
        type : SET_TEST_PROP,
        testProp : testText
    }
}

export {test_reducer, testActionCreator};