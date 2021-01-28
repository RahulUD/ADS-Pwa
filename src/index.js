import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";
import Landing from "layouts/Landing.js";
import Profile from "layouts/Profile.js";
import Index from "views/Index.js";
import { Provider } from 'react-redux'

import store from './redux/reducer/store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Landing} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/index" exact component={Index} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
