import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./reducers/loginReducer";
import categoryReducer from "./reducers/categoryReducer";

const reducers = combineReducers({
    login : loginReducer,
    categories : categoryReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;