import Page from "./Page";
import React, {useState} from "react";

import people from "../../assets/img/original/people_orig.png";
import time from "../../assets/img/original/kfu.jpg";
import science from "../../assets/img/original/science_orig.jpeg";
import ArticleListItem from "../AdminPanel/Categories/Edit/ArticleListItem/ArticleListItem";
import ArticleList from "./Article/ArticleList/ArticleList";

import classes from "./Article/ArticleList/ArticleList.module.css"

let PageContainer = (props) => {
    let link = props.link;
    let desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    let prop = {};

    let renderItems = (items) => {
        return items.map((elem) => {
            return(
                <ArticleListItem {...elem} url={link} classes={classes.item}/>
            );
        });
    };

    let renderList = (items, category) => {
        return (<ArticleList category={category} items={renderItems(items)}/>);
    }

    switch (link) {
        case "/people" : {
            prop.src = people;
            prop.heading = "Сотрудники и студенты участники ВОВ";
            prop.items = [
                {
                    heading : "Сотрудник 1",
                    id : 1
                },
                {
                    heading : "Сотрудник 2",
                    id : 2
                },
                {
                    heading : "Сотрудник 3",
                    id : 3
                }
            ]

            prop.items2 = [
                {
                    heading : "Студент 1",
                    id : 11
                },
                {
                    heading : "Студент 2",
                    id : 22
                },
                {
                    heading : "Студент 3",
                    id : 33
                }
            ]

            prop.list = renderList(prop.items, "Cотрудники");

            prop.list2 = renderList(prop.items2, "Cтуденты");
            break;
        }

        case "/time" : {
            prop.src = time;
            prop.heading = "Хронология событий";
            prop.items = [
                {
                    heading : "Событие 1",
                    id : 1
                },
                {
                    heading : "Событие 2",
                    id : 2
                },
                {
                    heading : "Событие 3",
                    id : 3
                }
            ]
            prop.list = renderList(prop.items, "Хронология");
            break;
        }

        case "/science" : {
            prop.src = science;
            prop.heading = "Научная деятельность в годы войны";
            prop.items = [
                {
                    heading : "Научная работа 1",
                    id : 1
                },
                {
                    heading : "Научная работа 2",
                    id : 2
                },
                {
                    heading : "Научная работа 3",
                    id : 3
                }
            ]
            prop.list = renderList(prop.items, "Научные работы");
            break;
        }
    }

    let [list, setList] = useState(prop.list);
    let [list2, setList2] = useState(prop.list2);

    let filter = (e) => {
        let text = e.currentTarget.value;
        debugger;
        setList(renderList(
            prop.items.filter((elem) => elem.heading.toLowerCase().includes(text)),
            "Cотрудники"
        ));
        setList2(renderList(
            prop.items2.filter((elem) => elem.heading.toLowerCase().includes(text)),
            "Студенты"
        ));
    }

    return(
        <Page {...prop} list={list} list2={list2} decs={desc} link={link} filter={filter}/>
    )
}

export default PageContainer;