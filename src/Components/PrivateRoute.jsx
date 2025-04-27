import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) => {
    if (isLoggedIn) {

        // children means dashboard
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute

// The <Navigate to="/login" /> component in React is used to programmatically
//  redirect the user to a different route (in this case, to the "/login" page). 
//  It is a part of React Router, which is a library for handling navigation in React applications.

// When will this trigger?
// Page redirection: When you render <Navigate to="/login" />,
//  React Router will automatically redirect the user to the /login route, 
//  effectively changing the URL in the browser and rendering the components associated with that route.