import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import Main from "./comp/Main/Main";
import AdminPanelContainer from "./comp/AdminPanel/AdminPanelContainer";
import PageContainer from "./comp/Page/PageContainer";
import Header from "./comp/Header/Header";
import CategoriesSelectContainer from "./comp/AdminPanel/Categories/Select/CategoriesSelectContainer";
import CategoryEditContainer from "./comp/AdminPanel/Categories/Edit/CategoryEditContainer";
import {RedactorContainer} from "./comp/AdminPanel/Redactor/RedactorContainer";

function App() {
    let pages = ["/people", "/time", "/science"].map((link) => {
        return (
            <Route path={link}>
                <Header/>
                <PageContainer/>
            </Route>
        );
    })
  return (
    <div className="App" id={"App"}>
        <BrowserRouter>
            <Provider store={store}>
                <Route path={"/"} exact>
                    <Header/>
                    <Main/>
                </Route>
                <Route path={"/admin"}>
                    <AdminPanelContainer/>
                </Route>
                <Route path={"/select"} exact>
                    <CategoriesSelectContainer/>
                </Route>
                <Route path={"/select/:name"}>
                    <CategoryEditContainer/>
                </Route>
                <Route path={"/redactor"}>
                    <RedactorContainer/>
                </Route>
                {pages}
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
