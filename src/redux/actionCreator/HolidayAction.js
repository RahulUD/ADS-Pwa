import {
    requestGetHolidays,
    receiveGetHolidays,
    failureGetHolidays,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
  import Holiday from 'utility/api/Holiday'
  
  export const GetHolidayAction = () => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetHolidays())
    return Holiday.HolidayList()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetHolidays(response))
      })
      .catch(error => {
        dispatch(failureGetHolidays(error))
      })
  }