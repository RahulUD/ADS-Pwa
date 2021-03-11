import {
  REQUEST_GET_FOOTER,
  RECEIVE_GET_FOOTER,
  FAILURE_GET_FOOTER,
  REQUEST_GET_FAQ_TITLE,
  RECEIVE_GET_FAQ_TITLE,
  FAILURE_GET_FAQ_TITLE,
  REQUEST_GET_OBJECTIVE,
  RECEIVE_GET_OBJECTIVE,
  FAILURE_GET_OBJECTIVE,
  REQUEST_GET_DESK_MESSAGE,
  RECEIVE_GET_DESK_MESSAGE,
  FAILURE_GET_DESK_MESSAGE,
  REQUEST_GET_ABOUTUS_DESC,
  RECEIVE_GET_ABOUTUS_DESC,
  FAILURE_GET_ABOUTUS_DESC,
  REQUEST_GET_SAILENT_FEATURE,
  RECEIVE_GET_SAILENT_FEATURE,
  FAILURE_GET_SAILENT_FEATURE,
  REQUEST_GET_ABOUT_TEACHER,
  RECEIVE_GET_ABOUT_TEACHER,
  FAILURE_GET_ABOUT_TEACHER,
  REQUEST_GET_FEATURE,
  RECEIVE_GET_FEATURE,
  FAILURE_GET_FEATURE,
  REQUEST_GET_SPORT,
  RECEIVE_GET_SPORT,
  FAILURE_GET_SPORT,
  REQUEST_GET_ACTIVITY,
  RECEIVE_GET_ACTIVITY,
  FAILURE_GET_ACTIVITY,
  REQUEST_GET_ACTIVITY_TITLE,
  RECEIVE_GET_ACTIVITY_TITLE,
  FAILURE_GET_ACTIVITY_TITLE,
  REQUEST_GET_ENQUERY_FORM,
  RECEIVE_GET_ENQUERY_FORM,
  FAILURE_GET_ENQUERY_FORM,
  REQUEST_GET_REGISTRATION_FORM,
  RECEIVE_GET_REGISTRATION_FORM,
  FAILURE_GET_REGISTRATION_FORM,
} from 'redux/ActionType'

const initialState = {
  aboutTeacher: null,
  features: [],
  sports: [],
  activities: [],
  enqueryForm: null,
  registrationForm: null,
  activityTitle: null,
  code: null,
  message: null,
  footer: [],
  objectives: [],
  deskMessages: [],
  aboutusDesc: null,
  sailentFeatures: [],
  faqtitle: null,
  error: null,
}
export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {



    case REQUEST_GET_REGISTRATION_FORM:
      return {
        ...state,
      }
    case RECEIVE_GET_REGISTRATION_FORM:
      return {
        ...state,
        registrationForm: payload.data.data
      }
    case FAILURE_GET_REGISTRATION_FORM:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_ENQUERY_FORM:
      return {
        ...state,
      }
    case RECEIVE_GET_ENQUERY_FORM:
      return {
        ...state,
        enqueryForm: payload.data.data
      }
    case FAILURE_GET_ENQUERY_FORM:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_ACTIVITY:
      return {
        ...state,
      }
    case RECEIVE_GET_ACTIVITY:
      return {
        ...state,
        activities: payload.data.data
      }
    case FAILURE_GET_ACTIVITY:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_ACTIVITY_TITLE:
      return {
        ...state,
      }
    case RECEIVE_GET_ACTIVITY_TITLE:
      return {
        ...state,
        activityTitle: payload.data.data
      }
    case FAILURE_GET_ACTIVITY_TITLE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_ABOUT_TEACHER:
      return {
        ...state,
      }
    case RECEIVE_GET_ABOUT_TEACHER:
      return {
        ...state,
        aboutTeacher: payload.data.data
      }
    case FAILURE_GET_ABOUT_TEACHER:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_FEATURE:
      return {
        ...state,
      }
    case RECEIVE_GET_FEATURE:
      return {
        ...state,
        features: payload.data.data
      }
    case FAILURE_GET_FEATURE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_SPORT:
      return {
        ...state,
      }
    case RECEIVE_GET_SPORT:
      return {
        ...state,
        sports: payload.data.data
      }
    case FAILURE_GET_SPORT:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_SAILENT_FEATURE:
      return {
        ...state,
      }
    case RECEIVE_GET_SAILENT_FEATURE:
      return {
        ...state,
        sailentFeatures: payload.data.data
      }
    case FAILURE_GET_SAILENT_FEATURE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_ABOUTUS_DESC:
      return {
        ...state,
      }
    case RECEIVE_GET_ABOUTUS_DESC:
      return {
        ...state,
        aboutusDesc: payload.data.data
      }
    case FAILURE_GET_ABOUTUS_DESC:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_DESK_MESSAGE:
      return {
        ...state,
      }
    case RECEIVE_GET_DESK_MESSAGE:
      return {
        ...state,
        deskMessages: payload.data.data
      }
    case FAILURE_GET_DESK_MESSAGE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_OBJECTIVE:
      return {
        ...state,
      }
    case RECEIVE_GET_OBJECTIVE:
      return {
        ...state,
        objectives: payload.data.data
      }
    case FAILURE_GET_OBJECTIVE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_FAQ_TITLE:
      return {
        ...state,
      }
    case RECEIVE_GET_FAQ_TITLE:
      return {
        ...state,
        faqtitle: payload.data.data
      }
    case FAILURE_GET_FAQ_TITLE:
      return {
        ...state,
        error: payload.error
      }
    case REQUEST_GET_FOOTER:
      return {
        ...state,
      }
    case RECEIVE_GET_FOOTER:
      return {
        ...state,
        footer: payload.data.data
      }
    case FAILURE_GET_FOOTER:
      return {
        ...state,
        error: payload.error
      }
    default:
      return {
        ...state
      }
  }
}