import {
  REQUEST_PAGE_SETUP,
} from 'redux/ActionType'
import {pageState} from 'redux/InitialState'

export default (state = pageState, action) => {
  const { type, payload } = action
  switch (type) {
    case REQUEST_PAGE_SETUP:
      return {
        ...state,
        currentPage : payload.currentPage,
      }
    default:
      return {
        ...state
      }
  }
}