import {
    requestStudentList,
    receiveStudentList,
    failureStudentList,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Student from 'utility/api/Student'
  
  export const GetStudentAction = (payload) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestStudentList())
    return Student.StudentList(payload.id)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveStudentList(response))
      })
      .catch(error => {
        dispatch(failureStudentList(error))
      })
  }