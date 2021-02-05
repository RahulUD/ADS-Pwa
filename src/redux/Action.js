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
  REQUEST_LOADING,
  RECEIVE_LOADING,
  REQUEST_BIRTHDAY,
  RECEIVE_BIRTHDAY,
  FAILURE_BIRTHDAY,
  REQUEST_CONTACT_US,
  RECEIVE_CONTACT_US,
  FAILURE_CONTACT_US,
  REQUEST_CONTACT_US_POST,
  RECEIVE_CONTACT_US_POST,
  FAILURE_CONTACT_US_POST,
  REQUEST_STUDENT_LIST,
  RECEIVE_STUDENT_LIST,
  FAILURE_STUDENT_LIST,
  REQUEST_STD_LIST,
  RECEIVE_STD_LIST,
  FAILURE_STD_LIST,
  REQUEST_UPDATE_STD_ID,
  RECEIVE_UPDATE_STD_ID,
} from 'redux/ActionType'

// update std id
export const requestStdIdUpdate = () => ({
  type: REQUEST_UPDATE_STD_ID
})
export const receiveStdIdUpdate = payload => ({
  type: RECEIVE_UPDATE_STD_ID,
  payload
})

// get std list
export const requestStdList = () => ({
  type: REQUEST_STD_LIST
})
export const receiveStdList = payload => ({
  type: RECEIVE_STD_LIST,
  payload
})
export const failureStdList = payload => ({
  type: FAILURE_STD_LIST,
  payload
})


// get student list
export const requestStudentList = () => ({
  type: REQUEST_STUDENT_LIST
})
export const receiveStudentList = payload => ({
  type: RECEIVE_STUDENT_LIST,
  payload
})
export const failureStudentList = payload => ({
  type: FAILURE_STUDENT_LIST,
  payload
})

// contactus
export const requestContactUs = () => ({
  type: REQUEST_CONTACT_US
})
export const receiveContactUs = payload => ({
  type: RECEIVE_CONTACT_US,
  payload
})
export const failureContactUs = payload => ({
  type: FAILURE_CONTACT_US,
  payload
})

// contactuspost
export const requestContactUsPost = () => ({
  type: REQUEST_CONTACT_US_POST
})
export const receiveContactUsPost = payload => ({
  type: RECEIVE_CONTACT_US_POST,
  payload
})
export const failureContactUsPost = payload => ({
  type: FAILURE_CONTACT_US_POST,
  payload
})

// BIRTHDAY
export const requestBirthday = () => ({
  type: REQUEST_BIRTHDAY
})
export const receiveBirthday = payload => ({
  type: RECEIVE_BIRTHDAY,
  payload
})
export const failureBirthday = payload => ({
  type: FAILURE_BIRTHDAY,
  payload
})

// LOGOUT
export const requestLoading = () => ({
  type: REQUEST_LOADING
})
export const receiveLoading = () => ({
  type: RECEIVE_LOADING
})

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