import {
  requestPresentTeacher,
  receivePresentTeacher,
  failurePresentTeacher,
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