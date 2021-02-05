import {
    requestStdList,
    receiveStdList,
    failureStdList,
    requestStdIdUpdate,
    receiveStdIdUpdate,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Std from 'utility/api/Std'
  
  export const GetStdAction = (payload) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestStdList())
    return Std.StdList(payload)
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveStdList(response))
      })
      .catch(error => {
        dispatch(failureStdList(error))
      })
  }
  export const UpdateStdIdAction = (payload) => dispatch => {
    dispatch(requestLoading())
    dispatch(requestStdIdUpdate())
    dispatch(receiveLoading())
    dispatch(receiveStdIdUpdate(payload))
    
  }