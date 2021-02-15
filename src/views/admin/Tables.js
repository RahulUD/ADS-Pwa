import React from "react";

// components

import HeaderStatsEmpty from "components/Headers/HeaderStatsEmpty";
import EnqueryTable from "components/Table/EnqueryTable";
import StudentTable from "components/Table/StudentTable";
import { Redirect, Switch } from "react-router";
import PrivateRoute from "utility/PrivateRoute";
import Fulloverlay from "components/Overlay/Fulloverlay";
import TeacherTable from "components/Table/TeacherTable";

export default function Tables() {
  return (
    <>
      <HeaderStatsEmpty />
      <div className="px-4 md:px-10 mx-auto w-full -m-24">
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <Switch>
              <PrivateRoute path="/admin/tables/enquery" exact component={EnqueryTable} />
              <PrivateRoute path="/admin/tables/studentlist" exact component={StudentTable} />
              <PrivateRoute path="/admin/tables/Teacherlist" exact component={TeacherTable} />
              <Redirect from="/admin/tables" to="/admin/dashboard" />
            </Switch>
          </div>
        </div>
      </div>
      <Fulloverlay message="Loading student data..."/>
    </>
  );
}