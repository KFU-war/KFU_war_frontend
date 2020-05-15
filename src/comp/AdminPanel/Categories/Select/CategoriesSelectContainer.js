import CategorySelect from "./CategorySelect";
import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./CategorySelect.module.css"
import Auth from "../../AuthHOC/Auth";
import {connect} from "react-redux";

let CategoriesSelectContainer = (props) => {
    let categories = props.list.map(elem => {
        return <li><NavLink to={"/select/" + elem.toString()} className={classes.link}>{elem}</NavLink></li>
    });
    return (
        <CategorySelect categories={categories}/>
    )
}

let mapStateToProps = (state) => {
    return {
        list : state.categories.categoryList,
        isFetching : state.categories.isFetching
    };
}

export default Auth(connect(mapStateToProps)(CategoriesSelectContainer));