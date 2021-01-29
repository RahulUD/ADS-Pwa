import {
  REQUEST_PRESENT_TEACHER,
  RECEIVE_PRESENT_TEACHER,
  FAILURE_PRESENT_TEACHER,
  REQUEST_FOOTER,
  RECEIVE_FOOTER,
  FAILURE_FOOTER,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  FAILURE_LOGIN,
} from './ActionType'

// present teacher
export const requestPresentTeacher = () => ({
  type: REQUEST_PRESENT_TEACHER
})
export const receivePresentTeacher = payload => ({
  type: RECEIVE_PRESENT_TEACHER,
  payload
})
export const failurePresentTeacher = payload => ({
  type: FAILURE_PRESENT_TEACHER,
  payload
})

// footer
export const requestFooter = () => ({
  type: REQUEST_FOOTER
})
export const receiveFooter = payload => ({
  type: RECEIVE_FOOTER,
  payload
})
export const failureFooter = payload => ({
  type: FAILURE_FOOTER,
  payload
})

// LOGIN
export const requestLogin = () => ({
  type: REQUEST_LOGIN
})
export const receiveLogin = payload => ({
  type: RECEIVE_LOGIN,
  payload
})
export const failureLogin = payload => ({
  type: FAILURE_LOGIN,
  payload
})