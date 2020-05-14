import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./comp/Main/Main";
import AdminPanelContainer from "./comp/AdminPanel/AdminPanelContainer";
import PageContainer from "./comp/Page/PageContainer";
import Header from "./comp/Header/Header";

function App() {
    let pages = ["/people", "/time", "/science"].map((link) => {
        return (
            <Route path={link}>
                <PageContainer/>
            </Route>
        );
    })
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <Header/>
                <Route path={"/"} exact>
                    <Main/>
                </Route>
                <Route path={"/admin"}>
                    <AdminPanelContainer/>
                </Route>
                {pages}
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
