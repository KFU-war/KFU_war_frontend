import {test_reducer, testActionCreator} from "../../reducers/test_reducer";

const testReducerTest = test_reducer;
const testAC = testActionCreator;

test('correct action', () => {
    let oldState = {
        testProp : ""
    };

    let newState = testReducerTest(oldState, testAC("A"))

    let expected = {
        testProp : "A"
    };


    expect(newState).toStrictEqual(expected);
});

test('incorrect action', () => {
    let oldState = {
        testProp : ""
    };

    let action = {
        type : "ERROR",
        testProp : "A"
    }

    let newState = testReducerTest(oldState, action);

    let expected = {
        testProp : ""
    };


    expect(newState).toStrictEqual(expected);
});