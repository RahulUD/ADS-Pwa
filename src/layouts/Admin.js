import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import PrivateRoute from "utility/PrivateRoute";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-gray-200">
        <AdminNavbar />
          <Switch>
            <PrivateRoute path="/admin/dashboard" exact component={Dashboard} />
            <PrivateRoute path="/admin/maps" exact component={Maps} />
            <PrivateRoute path="/admin/settings" exact component={Settings} />
            <PrivateRoute path="/admin/tables" component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
        </div>
    </>
  );
}
