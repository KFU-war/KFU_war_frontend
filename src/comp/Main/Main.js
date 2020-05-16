import Section from "./Section/Section";
import React from "react";
import Feedback from "./Feedback/Feedback";

import science from '../../assets/img/science.png';
import people from '../../assets/img/people.png';
import main from "../../assets/img/main.png";
import leftPart from "../../assets/img/arrow_left.png";
import rightPart from "../../assets/img/arrow_right.png";

import classes from "./Main.module.css"

let Main = () => {
    let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return(
        <>
            <section className={classes.MainSection} id={"#main"}>
                <img src={main} alt={"КФУ"}/>
                <div className={classes.sectionContent}>
                    <span className={classes.years}>1941-1945</span>
                    <h2 className={classes.heading}>Казанский университет в годы войны</h2>
                    <div>
                        <a href={"#video"}className={classes.arrow}>
                            <img src={leftPart} className={classes.arrow_part} alt={"Стрелка"}/>
                            <img src={rightPart} className={classes.arrow_part + " " + classes.rigth_part} alt={"Стрелка"}/>
                        </a>
                    </div>
                </div>
            </section>
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
            <Feedback submit={console.log}/>
        </>
    );
};

export default Main;