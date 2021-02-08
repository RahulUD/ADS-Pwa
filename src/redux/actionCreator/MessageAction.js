import {
  requestPostMessage,
  receivePostMessage,
  failurePostMessage,
  requestLoading,
  receiveLoading,
  requestBalance,
  receiveBalance,
  failureBalance
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
export const MessageGroupAction = (paload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestPostMessage())
  return Message.postGroupMessage(paload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receivePostMessage(response))
    })
    .catch(error => {
      dispatch(failurePostMessage(error))
    })
}
export const SmsBalanceAction = (paload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestBalance())
  return Message.smsBalance(paload)
    .then(response => {
      console.log('.............',response)
      dispatch(receiveLoading())
      dispatch(receiveBalance(response))
    })
    .catch(error => {
      dispatch(failureBalance(error))
    })
}