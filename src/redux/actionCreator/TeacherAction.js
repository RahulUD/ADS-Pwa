import {
  requestPresentTeacher,
  receivePresentTeacher,
  failurePresentTeacher,
  requestGetTeacher,
  receiveGetTeacher,
  failureGetTeacher,
  requestLoading,
  receiveLoading,
} from 'redux/Action';
import Teacher from 'utility/api/Teacher'

export const PresentTeachersAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestPresentTeacher())
  return Teacher.presentTeacher()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receivePresentTeacher(response))
    })
    .catch(error => {
      dispatch(failurePresentTeacher(error))
    })
}
export const GetTeacherAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetTeacher())
  return Teacher.allTeacher()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetTeacher(response))
    })
    .catch(error => {
      dispatch(failureGetTeacher(error))
    })
}
