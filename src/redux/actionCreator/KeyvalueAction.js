import {
  requestGetFooter,
  receiveGetFooter,
  failureGetFooter,
  requestGetFaqTitle,
  receiveGetFaqTitle,
  failureGetFaqTitle,
  requestGetObjective,
  receiveGetObjective,
  failureGetObjective,
  requestLoading,
  receiveLoading,
} from 'redux/Action';
import Keyvalue from 'utility/api/Keyvalue';

export const ObjectiveAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetObjective())
  return Keyvalue.getObjective()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetObjective(response))
    })
    .catch(error => {
      dispatch(failureGetObjective(error))
    })
}

export const FaqTitleAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetFaqTitle())
  return Keyvalue.getFaqTitle()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetFaqTitle(response))
    })
    .catch(error => {
      dispatch(failureGetFaqTitle(error))
    })
}

export const FooterAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetFooter())
  return Keyvalue.getFooter()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetFooter(response))
    })
    .catch(error => {
      dispatch(failureGetFooter(error))
    })
}