import Section from "./Section/Section";
import React from "react";
import Feedback from "./Feedback/Feedback";

import science from '../../assets/img/science.png';
import people from '../../assets/img/people.png';
import sources_back from "../../assets/img/sources_background.png";

import classes from "./Main.module.css"
import FirstSection from "./FirstSection/FirstSection";
import DescSection from "./DescSection/DescSection";
import VideoSection from "./VideoSection/VideoSection";
import InfographicsContainer from "./Infographics/InfographicsContainer";

let Main = () => {
    let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return(
        <>
            <FirstSection/>
            <DescSection/>
            <VideoSection/>
            <InfographicsContainer/>
            <Section
                id={"people"}
                src={people}
                alt={"main picture"}
                heading={"Сотрудники и студенты участники ВОВ"}
                desc={lorem}
                link={"/people"}
                linkDesc={"Читать подробнее"}
            />
            <Section
                id={"science"}
                src={science}
                alt={"main picture"}
                heading={"Научная  деятельность в казанском университете в годы войны"}
                desc={lorem}
                link={"/science"}
                linkDesc={"Читать подробнее..."}
            />
            <Section
                id={"sources"}
                src={sources_back}
                alt={"main picture"}
                heading={"Исторические источники"}
                desc={lorem}
                link={"/sources"}
                linkDesc={"Подробнее"}
            />
            <Feedback submit={console.log}/>
        </>
    );
};

export default Main;