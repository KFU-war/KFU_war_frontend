import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";
import HeaderContainer from "./comp/Header/HeaderContainer";
import Section from "./comp/Section/Section";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Provider store={store}>
                <HeaderContainer/>
                <Section
                    id={"main"}
                    src={"https://lh3.googleusercontent.com/proxy/115F80GPExKOH_bDH-62mJWOwJGbPlijzDvDOWM6lA1axFwGAhma-O5Ev6m2gysSNMshdt7Wi8G0FfdsJ8dJcV8SWQ"}
                    alt={"main picture"}
                    heading={"Главная"}
                    desc={"Это наша веб-платформа, посвященная 75-летию Победы"}
                    link={"#"}
                    linkDesc={"Читать подробнее"}
                />
                <Section
                    id={"people"}
                    src={"https://lh3.googleusercontent.com/proxy/115F80GPExKOH_bDH-62mJWOwJGbPlijzDvDOWM6lA1axFwGAhma-O5Ev6m2gysSNMshdt7Wi8G0FfdsJ8dJcV8SWQ"}
                    alt={"main picture"}
                    heading={"Люди"}
                    desc={"Это наша веб-платформа, посвященная 75-летию Победы"}
                    link={"#"}
                    linkDesc={"Читать подробнее"}
                />
                <Section
                    id={"time"}
                    src={"https://lh3.googleusercontent.com/proxy/115F80GPExKOH_bDH-62mJWOwJGbPlijzDvDOWM6lA1axFwGAhma-O5Ev6m2gysSNMshdt7Wi8G0FfdsJ8dJcV8SWQ"}
                    alt={"main picture"}
                    heading={"Хронология"}
                    desc={"Это наша веб-платформа, посвященная 75-летию Победы"}
                    link={"#"}
                    linkDesc={"Читать подробнее"}
                />
                <Section
                    id={"science"}
                    src={"https://lh3.googleusercontent.com/proxy/115F80GPExKOH_bDH-62mJWOwJGbPlijzDvDOWM6lA1axFwGAhma-O5Ev6m2gysSNMshdt7Wi8G0FfdsJ8dJcV8SWQ"}
                    alt={"main picture"}
                    heading={"Наука"}
                    desc={"Это наша веб-платформа, посвященная 75-летию Победы"}
                    link={"#"}
                    linkDesc={"Читать подробнее"}
                />
            </Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
