import React from "react";
import { Switch, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
import PrivateRoute from "utility/PrivateRoute";
import MessageBoard from 'views/admin/MessageBoard'
import StudentProfile from 'views/admin/StudentProfile'
import Admission from "views/admin/Admission";
import AddTeacher from "views/admin/AddTeacher";

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
          <PrivateRoute path="/admin/message/board" component={MessageBoard} />
          <PrivateRoute path="/admin/admission/new" component={Admission} />
          <PrivateRoute path="/admin/teacher/new" component={AddTeacher} />
          <PrivateRoute path="/admin/student/:id" component={StudentProfile} />
          <Redirect from="/admin" to="/admin/dashboard" />
        </Switch>
      </div>
    </>
  );
}