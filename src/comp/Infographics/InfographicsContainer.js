import Infographics from "./Infographics";
import React from "react";
import InfoItem from "./InfoItem/InfoItem";

let InfographicsContainer = (props) => {
    let renderInfoItems = props.arr.map((elem) => {
       return <InfoItem {...elem}/>
    });
    return(
        <Infographics items={renderInfoItems()}/>
    )
}

export default InfographicsContainer;