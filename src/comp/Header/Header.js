import {testActionCreator} from "../../reducers/test_reducer";
import {connect} from "react-redux";
import React from "react";
const ref = React.createRef();

let Header = (props) => {
    return (
        <header>
            This is test page {props.testProp}
            <input type={"text"} ref={ref}/>
            <button onClick={(e) => {
                let text = ref.current.value;
                props.setNewProp(text);
            }}/>
        </header>
    );
}

let mapStateToProps = (state) => {
    return {
        testProp : state.test.testProp
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setNewProp : (text) => {
            dispatch(testActionCreator(text));
        }
    }
}

let connected = connect(mapStateToProps, mapDispatchToProps)(Header);

export default connected;