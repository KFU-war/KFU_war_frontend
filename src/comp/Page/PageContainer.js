import Page from "./Page";
import React from "react";

import people from "../../assets/img/original/people_orig.png";
import time from "../../assets/img/main.png"
import science from "../../assets/img/original/science_orig.jpeg";

let PageContainer = (props) => {
    let link = props.link;

    let prop = {};
    switch (link) {
        case "/people" : {
            prop.src = people;
            prop.heading = "Сотрудники и студенты участники ВОВ";
            break;
        }

        case "/time" : {
            prop.src = time;
            prop.heading = "Хронология событий";
            break;
        }

        case "/science" : {
            prop.src = science;
            prop.heading = "Научная деятельность в годы войны";
            break;
        }
    }

    return(
        <Page {...prop}/>
    )
}

export default PageContainer;