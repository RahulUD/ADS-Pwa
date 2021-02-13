import React, { useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";
import { connect } from "react-redux";
import { GetStudentCountAction, GetTeacherCountAction, GetAdminCountAction, GetNonteachingCountAction } from 'redux/actionCreator/CountAction'

const HeaderStats = (props) => {
  useEffect(() => {
    props.GetStudentCountActionDispatch()
    props.GetTeacherCountActionDispatch()
    props.GetAdminCountActionDispatch()
    props.GetNonteachingCountActionDispatch()
  }, [])
  return (
    <>
      <div className="relative bg-blue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Student"
                  statTitle={props.studentCount}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Teacher"
                  statTitle={props.teacherCount}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Admin"
                  statTitle={props.adminCount}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Non-Teaching"
                  statTitle={props.nonTeachingCount}
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-green-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const Count = state.CountReducer;
  return {
    studentCount: Count.studentCount,
    teacherCount: Count.studentCount,
    adminCount: Count.adminCount,
    nonTeachingCount: Count.nonTeachingCount
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetStudentCountActionDispatch: (state) => dispatch(GetStudentCountAction(state)),
    GetTeacherCountActionDispatch: (state) => dispatch(GetTeacherCountAction(state)),
    GetAdminCountActionDispatch: (state) => dispatch(GetAdminCountAction(state)),
    GetNonteachingCountActionDispatch: (state) => dispatch(GetNonteachingCountAction(state))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderStats)