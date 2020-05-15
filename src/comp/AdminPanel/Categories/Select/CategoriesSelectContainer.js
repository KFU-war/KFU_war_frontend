import CategorySelect from "./CategorySelect";
import React from "react";
import {NavLink} from "react-router-dom";
import classes from "./CategorySelect.module.css"
import Auth from "../../AuthHOC/Auth";
import {connect} from "react-redux";
import categorySelector from "../../../../selectors/categorySelector";

let CategoriesSelectContainer = (props) => {
    let categories = props.list.map(elem => {
        return <li className={classes.item}><NavLink to={"/select/" + elem.toString()} className={classes.link}>{elem}</NavLink></li>
    });
    return (
      <>
          {!props.isFetching ? <CategorySelect categories={categories}/> : <></>}
      </>
    );
}

let mapStateToProps = (state) => {
    return {
        list : categorySelector.getCategoryList(state),
        isFetching : categorySelector.getFetching(state)
    };
}

export default Auth(connect(mapStateToProps)(CategoriesSelectContainer));