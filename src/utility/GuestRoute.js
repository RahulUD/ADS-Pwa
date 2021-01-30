import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import {isTokenAvilableInLocalStorage} from './method/LocalStorageMethod'

function GuestRoute({ children }) {
    const isAuthSucessful = isTokenAvilableInLocalStorage()
  return (
    <Route
      render={({ location }) =>
      isAuthSucessful ? (children) :
        (<Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />)
      }
    />
  )
}

export default GuestRoute