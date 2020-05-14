import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./comp/Main";
import AdminPanelContainer from "./comp/AdminPanel/AdminPanelContainer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Route path={"/"} exact>
                    <Main/>
                </Route>
                <Route path={"/admin"}>
                    <AdminPanelContainer/>
                </Route>
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
