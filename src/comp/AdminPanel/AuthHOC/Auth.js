import {connect} from "react-redux";
import React from "react";
import {Redirect} from "react-router-dom";
import AuthHeader from "../AuthHeader/AuthHeader";
import AuthFooter from "../AuthFooter/AuthFooter";

let Auth = (Component) => {
   let auth = (props) => {
       if (props.isLogged){
           return (
               <>
                   <AuthHeader/>
                   <Component/>
                   <AuthFooter/>
               </>
           );
       } else {
           return (
               <Redirect to="/admin"/>
           );
       }
   }

   let mapStateToProps = (state) => {
       return {
           isLogged : state.login.isLogged
       }
   }

   auth = connect(mapStateToProps)(auth);

   return auth;
}

export default Auth;