import React, {useEffect} from "react";
import { connect } from "react-redux";
import {PresentTeachersAction} from '../../redux/actionCreator/TeacherAction'

function PresentTeachers(props) {
  useEffect(() => {
    console.log('in use Effect')
    props.PresentTeacherActionDispatch();
  }, [])

  return (
    <>
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6">
        <img
          alt="..."
          src={require("assets/img/team-1-800x800.jpg")}
          className="shadow-lg rounded-full mx-auto max-w-120-px"
        />
        <div className="pt-6 text-center">
          <h5 className="text-xl font-bold">Ryan Tompson</h5>
          <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
            Web Developer
                    </p>
          <div className="mt-6">
            <button
              className="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-twitter"></i>
            </button>
            <button
              className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-facebook-f"></i>
            </button>
            <button
              className="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
              type="button"
            >
              <i className="fab fa-dribbble"></i>
            </button>
          </div>
        </div>
      </div>
    </div> 
    </>
  );
}

const mapStateToProps = (state) => {
  const PresentTeacherReducer = state.PresentTeacherReducer;
  return {

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