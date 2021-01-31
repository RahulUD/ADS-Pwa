import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isTokenAvilableInLocalStorage } from './method/LocalStorageMethod'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isTokenAvilableInLocalStorage() ?
        <Component {...props} />
        : <Redirect to="/signin" />
    )} />
  );
};
export default PrivateRoute;