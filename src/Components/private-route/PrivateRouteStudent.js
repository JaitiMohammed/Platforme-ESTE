import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouteStudent = ({component: Component,...rest}) => {
    let jwtTokenStudent  = localStorage.getItem('jwtTokenStudent');
    return (
  // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            jwtTokenStudent ?
                <Component {...props} />
            : <Redirect to="/Home" />
        )} />
    );
};
