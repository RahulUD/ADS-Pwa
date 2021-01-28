import {
  requestPresentTeacher,
  receivePresentTeacher,
  failurePresentTeacher
} from '../Action';
import Teacher from '../../utility/api/Teacher'

export const PresentTeachersAction = () => dispatch => {
  dispatch(requestPresentTeacher())
  return Teacher.presentTeacher()
    .then(response => {
      dispatch(receivePresentTeacher(response))
    })
    .catch(error => {
      dispatch(failurePresentTeacher(error))
    })
}