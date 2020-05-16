import Infographics from "./Infographics";
import React from "react";
import InfoItem from "./InfoItem/InfoItem";

let InfographicsContainer = (props) => {
    let items = [
        {
            number : 33,
            text : "научных учреждения были эвакуированы в Казань"
        },
        {
            number : 850,
            text : "студентов были призваны на фронт"
        },
        {
            additionalText : "более",
            number: 300,
            text : "научных работ было написано в годы войны"
        }
    ];
    let renderedInfoItems = items.map((elem) => {
       return <InfoItem {...elem}/>
    });
    return(
        <Infographics items={renderedInfoItems}/>
    )
}

export default InfographicsContainer;