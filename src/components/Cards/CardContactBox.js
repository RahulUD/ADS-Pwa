import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { PageSetupAction } from "redux/actionCreator/PageAction";
import { GetStudentAction } from "redux/actionCreator/StudentAction";
import AllListCard from "./AllCardList";
import AvatarNameCardBox from "./AvatarNameCardBox";
import StdCardList from "./StdCardList";


const CardContactBox = (props) => {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState()
  const [admin, setAdmin] = useState()
  const [nonTeaching, setNonTeaching] = useState()


  useEffect(() => {
    props.GetStudentActionDispatch({ id: props.std.stdId });
  }, [props.std.stdId])
  useEffect(() => {
    let allStudent = [...students, ...props.students];
    let ids = allStudent.map(o => o.id)
    let filtered = allStudent.filter(({ id }, index) => !ids.includes(id, index + 1))
    setStudents([...filtered])
  }, [props.students])




  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex-1 justify-start">
            <AllListCard />
            <StdCardList multi={true}/>
          </div>
          <input
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-gray-200 rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
            placeholder="Search ... .i.e. VI Rahul"
          />
        </div>
        <div className="flex flex-wrap">
          {students?.map(student => (<AvatarNameCardBox name={`${student.id}) ${student.user.name} (${student.std.name} ${student.std.section})`} icon="fa-window-close" avatar={student.user.avatar} />))}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const Student = state.StudentReducer;
  const std = state.StdReducer;
  return {
    students: Student.data,
    std
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    GetStudentActionDispatch: (state) => dispatch(GetStudentAction(state)),
    PageSetupActionDispatch: (state) => dispatch(PageSetupAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardContactBox)