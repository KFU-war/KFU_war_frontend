import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Header from "./comp/Header/Header";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
