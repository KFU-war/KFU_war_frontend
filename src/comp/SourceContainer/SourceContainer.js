import React from "react";
import SourcePage from "./SourcePage";
import SourcesItem from "./SourcesItem";
import img from "../../assets/img/kfu_icon.png";

let SourceContainer = (props) => {
    let list = [
        {
            src : img,
            alt : "",
            link : "#",
            heading : "heading 1",
            desc : "desc 1"
        },
        {
            src : img,
            alt : "",
            link : "#",
            heading : "heading 2",
            desc : "desc 2"
        },
        {
            src : img,
            alt : "",
            link : "#",
            heading : "heading 3",
            desc : "desc 3"
        },
        {
            src : img,
            alt : "",
            link : "#",
            heading : "heading 4",
            desc : "desc 4"
        },
        {
            src : img,
            alt : "",
            link : "#",
            heading : "heading 5",
            desc : "desc 5"
        }
    ];
    let renderList = (list) => {
        return list.map((elem) => {
           return (
               <SourcesItem {...elem}/>
           );
        });
    }
    return(
        <SourcePage sourcesList={renderList(list)}/>
    )
}

export default SourceContainer;