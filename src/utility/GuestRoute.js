import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isTokenAvilableInLocalStorage } from 'utility/method/LocalStorageMethod'

const GuestRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route {...rest} render={props => (
      isTokenAvilableInLocalStorage() ?<Redirect to="/admin/dashboard" /> :
      <Component {...props} />
    )} />
  );
};
export default GuestRoute;