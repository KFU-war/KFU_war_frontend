import {initialState, loginReducer, setLoggedActionCreator, setTokenCreator} from "../../reducers/loginReducer";

const reducer = loginReducer;
let initState = initialState;

it('incorrect action', () => {
    let action = {
        type : "A"
    }
    let expected = {...initState};
    let state = reducer(initState, action);
    expect(expected).toStrictEqual(state);
});

it('correct set login', () => {
    let action = setLoggedActionCreator(true);
    let expected = {...initState};
    expected.isLogged = true;
    let state = reducer(initState, action);
    expect(expected).toStrictEqual(state);
});

it('correct set token', () => {
    let action = setTokenCreator("token");
    let expected = {...initState};
    expected.token = "token";
    let state = reducer(initState, action);
    expect(expected).toStrictEqual(state);
});