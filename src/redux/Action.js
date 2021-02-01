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
  RECEIVE_LOGIN_FROM_SESSION,
  REQUEST_BLOGS,
  RECEIVE_BLOGS,
  FAILURE_BLOGS,
  REQUEST_LOGOUT,
  RECEIVE_LOGOUT,
  FAILURE_LOGOUT,
} from './ActionType'

// LOGOUT
export const requestLogout = () => ({
  type: REQUEST_LOGOUT
})
export const receiveLogout = payload => ({
  type: RECEIVE_LOGOUT,
  payload
})
export const failureLogout = payload => ({
  type: FAILURE_LOGOUT,
  payload
})

// blogs
export const requestBlogs = () => ({
  type: REQUEST_BLOGS
})
export const receiveBlogs = payload => ({
  type: RECEIVE_BLOGS,
  payload
})
export const failureBlogs = payload => ({
  type: FAILURE_BLOGS,
  payload
})

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
export const receiveLoginFromSession = payload => ({
  type: RECEIVE_LOGIN_FROM_SESSION,
  payload
})