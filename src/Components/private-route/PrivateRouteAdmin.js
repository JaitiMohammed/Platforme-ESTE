import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouteAdmin = ({component: Component,...rest}) => {
    let jwtTokenAdmin  = localStorage.getItem('jwtTokenAdmin');
    return (
  // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            jwtTokenAdmin ?
                <Component {...props} />
            : <Redirect to="/Home" />
        )} />
    );
};
