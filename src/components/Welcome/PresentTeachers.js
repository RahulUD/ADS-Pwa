import React, {useEffect} from "react";
import { connect } from "react-redux";
import {PresentTeachersAction} from 'redux/actionCreator/TeacherAction'

function PresentTeachers(props) {
  useEffect(() => {
    props.PresentTeacherActionDispatch();
  },[])

  return (
    <>
    {props.users && props.users.map((teacher,id) => (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4" key={id}>
      <div className="px-6">
        <img
          alt="..."
          src={require("assets/img/team-1-800x800.jpg")}
          className="shadow-lg rounded-full mx-auto max-w-120-px"
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">{teacher.user.name}</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Admin
                    </p>
          <div className="mt-6">
            {teacher.user.contacts && teacher.user['contacts'].map((contact,id) => (
            <button key={id} title={`${contact.contacttype.type} : ${contact.contact}`}
              className="w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <a href={contact.contact}>
              <img src={contact.contacttype.avatars[0].avatar}/>
              </a>
            </button>
            ))}
          </div>
        </div>
      </div>
    </div> ))}
    </>
  );
}

const mapStateToProps = (state) => {
  const PresentTeachers = state.PresentTeachersReducer;
  console.log('users', PresentTeachers.users)
  return {
    users : PresentTeachers.users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    PresentTeacherActionDispatch: (state) => dispatch(PresentTeachersAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PresentTeachers)