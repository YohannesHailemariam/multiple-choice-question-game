import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom";

const ProtectedRoute = ({auth, component:Component, ...rest}) => {
    return (
        <Route {...rest} render={(props) => {
            if (auth) return <Component {...props} />;
            return <Redirect to='/' />
        }}/>
    );
};

export default ProtectedRoute;