import {
  requestUserSearch,
  receiveUserSearch,
  failureUserSearch,
  requestLoading,
  receiveLoading,
} from 'redux/Action';
import Search from 'utility/api/Search'

export const UserSearchAction = (payload) => dispatch => {
  dispatch(requestLoading())
  dispatch(requestUserSearch())
  return Search.SearchUser(payload)
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveUserSearch(response))
    })
    .catch(error => {
      dispatch(failureUserSearch(error))
    })
}

export const UserSearchSelectAction = (payload) => dispatch => {
  dispatch(receiveUserSearch(payload))
}