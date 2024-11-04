import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router-dom';
import {AuthContext} from '../../../context/AuthContext';

function PrivateRoute({children}) {
    const {isAuth} = useContext(AuthContext);

    return (
        isAuth === true ? children : <Navigate to="/inloggen"/>

    );
}
export default PrivateRoute;
