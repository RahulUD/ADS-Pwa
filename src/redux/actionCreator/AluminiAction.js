import {
    requestGetAluminis,
    receiveGetAluminis,
    failureGetAluminis,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Alumini from 'utility/api/Alumini'
  
  export const GetAluminisAction = (data) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetAluminis())
    return Alumini.AluminiList(data?.page)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetAluminis(response))
      })
      .catch(error => {
        dispatch(failureGetAluminis(error))
      })
  }