import AvatarNameCard from "components/Cards/AvatarNameCard";
import ActionButton from "components/InputType/ActionButton";
import MessageBox from "components/Models/MessageBox";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { GetTeacherAction } from 'redux/actionCreator/TeacherAction'

const TeacherTable = ({Teachers, GetTeacherActionDispatch}) => {
  const [show, setShow] = useState(false)
  const [teacher, setTeacher] = useState()
  const showModel = (data) => {
    setShow(true)
    setTeacher(data)
  }
  const hideModel = () => {
    setShow(false)
  }
  useEffect(() => {
    GetTeacherActionDispatch();
  }, [])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
        <div className="bg-white pb-4 px-4 rounded-md w-full">
          <div className="flex justify-between w-full pt-6 ">
            <p className="ml-3"> Teacher Table</p><Link to='/admin/teacher/new'>Add Teacher</Link>
          </div>
          <div className="overflow-x-auto mt-6">

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: '0.9674rem' }}>
                  <th className="px-4 py-2 bg-gray-200" style={{ backgroundColor: '#f8f8f8' }}>S.no</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Name</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>DOB</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Gender</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>DOJ</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Action</th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {Teachers.map((Teacher, index) => (
                  <>
                    <tr className="hover:bg-gray-100  border-gray-200">
                      <td className="px-4 py-4">{index + 1}</td>
                      <td className="px-4 py-4">
                        <AvatarNameCard name={Teacher.user.name} id={Teacher.user.id} avatar={Teacher.user.avatar} />
                      </td>
                      <td className="px-4 py-4">{Teacher.user.date_of_birth}</td>
                      <td className="px-4 py-4">{Teacher.user.gender.name}</td>
                      <td className="px-4 py-4">{Teacher.created_at}</td>
                      <td className="px-4 py-4" onClick={() =>showModel(Teacher)}>
                        <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Message
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <MessageBox show={show} data={teacher} hideModel={hideModel} />
          </div>
          <div id="pagination" className="w-full flex justify-center border-t border-gray-100 pt-4 items-center">
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const Teacher = state.PresentTeachersReducer;
  return {
    Teachers: Teacher.allTeacher,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetTeacherActionDispatch: (state) => dispatch(GetTeacherAction(state)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherTable)