import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRouteProf = ({component: Component,...rest}) => {
    let jwtTokenProf  = localStorage.getItem('jwtTokenProf');
    return (
  // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            jwtTokenProf ?
                <Component {...props} />
            : <Redirect to="/Home" />
        )} />
    );
};
