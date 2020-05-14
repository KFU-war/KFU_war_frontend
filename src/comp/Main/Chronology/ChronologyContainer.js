import React, {useState} from "react";
import Chronology from "./Chronology,js";
import ChronologyItem from "./ChronologyItem/ChronologyItem";

let ChronologyContainer = (props) => {
    let [selectedItem, setSelectedItem] = useState({
        desc : "",
        link : "/"
    });
    let chronProps = props.arr.map((elem) => {
        return <ChronologyItem {...elem} select={setSelectedItem}/>
    })
    return(
        <Chronology chronItems={chronProps} {...selectedItem}/>
    )
}

export default ChronologyContainer;