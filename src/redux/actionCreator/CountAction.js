import {
  requestGetStudentCount,
  receiveGetStudentCount,
  failureGetStudentCount,
  requestGetTeacherCount,
  receiveGetTeacherCount,
  failureGetTeacherCount,
  requestGetAdminCount,
  receiveGetAdminCount,
  failureGetAdminCount,
  requestGetNonteachingCount,
  receiveGetNonteachingCount,
  failureGetNonteachingCount,
  requestLoading,
  receiveLoading,
} from 'redux/Action';
import Count from 'utility/api/Count'

export const GetStudentCountAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetStudentCount())
  return Count.StudentCount()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetStudentCount(response))
    })
    .catch(error => {
      dispatch(failureGetStudentCount(error))
    })
}

export const GetTeacherCountAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetTeacherCount())
  return Count.TeacherCount()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetTeacherCount(response))
    })
    .catch(error => {
      dispatch(failureGetTeacherCount(error))
    })
}

export const GetAdminCountAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetAdminCount())
  return Count.AdminCount()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetAdminCount(response))
    })
    .catch(error => {
      dispatch(failureGetAdminCount(error))
    })
}

export const GetNonteachingCountAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetNonteachingCount())
  return Count.NonteachingCount()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetNonteachingCount(response))
    })
    .catch(error => {
      dispatch(failureGetNonteachingCount(error))
    })
}