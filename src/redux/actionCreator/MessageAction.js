import {
  requestPostMessage,
  receivePostMessage,
  failurePostMessage,
  requestLoading,
  receiveLoading,
} from 'redux/Action';
import Message from 'utility/api/Message'

export const postMessageAction = (paload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestPostMessage())
  return Message.postMessage(paload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receivePostMessage(response))
    })
    .catch(error => {
      dispatch(failurePostMessage(error))
    })
}