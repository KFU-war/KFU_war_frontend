import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import HeaderContainer from "./comp/Header/HeaderContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <HeaderContainer/>
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
