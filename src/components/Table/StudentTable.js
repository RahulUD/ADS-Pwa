import AvatarNameCard from "components/Cards/AvatarNameCard";
import StdListCard from "components/Cards/StdCardList";
import MessageBox from "components/Models/MessageBox";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { GetStudentAction } from 'redux/actionCreator/StudentAction'
import { PageSetupAction } from 'redux/actionCreator/PageAction'


const StudentTable = (props) => {
  const [show, setShow] = useState(false)
  const [student, setStudent] = useState()
  const showModel = (data) => {
    setShow(true)
    setStudent(data)
  }
  const hideModel = () => {
    setShow(false)
  }
  useEffect(() => {
    props.GetStudentActionDispatch({ id: props.stdId });
  }, [props.stdId])
  useEffect(() => {
    props.GetStudentActionDispatch({ id: props.stdId });
    props.PageSetupActionDispatch({currentPage : 'Student List'})
  }, [])

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
        <div className="bg-white pb-4 px-4 rounded-md w-full">
          <div className="flex justify-between w-full pt-6 ">
            <p className="ml-3"> Users Table</p>
          </div>
          <div className="w-full flex justify-end px-2 mt-2">
            <div className="w-full sm:w-64 inline-block relative ">
              <StdListCard multi={false}/>
            </div>
          </div>
          <div className="overflow-x-auto mt-6">

            <table className="table-auto border-collapse w-full">
              <thead>
                <tr className="rounded-lg text-sm font-medium text-gray-700 text-left" style={{ fontSize: '0.9674rem' }}>
                  <th className="px-4 py-2 bg-gray-200" style={{ backgroundColor: '#f8f8f8' }}>S.no</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Author</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Std</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>DOB</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Gender</th>
                  <th className="px-4 py-2 " style={{ backgroundColor: '#f8f8f8' }}>Action</th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                {props.students.map((student, index) => (
                  <>
                    <tr className="hover:bg-gray-100  border-gray-200">
                      <td className="px-4 py-4">{index + 1}</td>
                      <td className="px-4 py-4">
                        <AvatarNameCard name={student.user.name} avatar={student.user.avatar} />
                      </td>
                      <td className="px-4 py-4">{student.std.name} - {student.std.section}</td>
                      <td className="px-4 py-4">{student.user.date_of_birth}</td>
                      <td className="px-4 py-4">{student.user.gender.name}</td>
                      <td className="px-4 py-4" onClick={() =>showModel(student)}>
                        <button className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
                          Message
                        </button>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <MessageBox show={show} data={student} hideModel={hideModel} />
          </div>
          <div id="pagination" className="w-full flex justify-center border-t border-gray-100 pt-4 items-center">
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const Student = state.StudentReducer;
  const Std = state.StdReducer;
  console.log('Enquery ***', Student)
  return {
    students: Student.data,
    stdId: Std.stdId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetStudentActionDispatch: (state) => dispatch(GetStudentAction(state)),
    PageSetupActionDispatch:(state) =>dispatch(PageSetupAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentTable)