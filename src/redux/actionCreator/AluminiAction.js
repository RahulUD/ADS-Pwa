import {
    requestGetAluminis,
    receiveGetAluminis,
    failureGetAluminis,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Alumini from 'utility/api/Alumini'
  
  export const GetAluminisAction = () => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetAluminis())
    return Alumini.AluminiList()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetAluminis(response))
      })
      .catch(error => {
        dispatch(failureGetAluminis(error))
      })
  }