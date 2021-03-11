import { requestRegistrationForm } from 'redux/Action';
import { failureRegistrationForm } from 'redux/Action';
import { receiveRegistrationForm } from 'redux/Action';
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
  requestGetDeskMessage,
  receiveGetDeskMessage,
  failureGetDeskMessage,
  requestLoading,
  receiveLoading,
  requestGetAboutusDesc,
  receiveGetAboutusDesc,
  failureGetAboutusDesc,
  requestGetSailentFeature,
  receiveGetSailentFeature,
  failureGetSailentFeature,
  requestGetAboutTeacher,
  receiveGetAboutTeacher,
  failureGetAboutTeacher,
  requestGetFeature,
  receiveGetFeature,
  failureGetFeature,
  requestGetSport,
  receiveGetSport,
  failureGetSport,
  requestGetActivity,
  receiveGetActivity,
  failureGetActivity,
  requestGetActivityTitle,
  receiveGetActivityTitle,
  failureGetActivityTitle,
  requestEnqueryForm,
  receiveEnqueryForm,
  failureEnqueryForm,
} from 'redux/Action';
import Keyvalue from 'utility/api/Keyvalue';

export const GetRegistrationFormAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestRegistrationForm())
  return Keyvalue.getRegistrationForm()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveRegistrationForm(response))
    })
    .catch(error => {
      dispatch(failureRegistrationForm(error))
    })
}

export const GetEnqueryFormAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestEnqueryForm())
  return Keyvalue.getEnqueryForm()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveEnqueryForm(response))
    })
    .catch(error => {
      dispatch(failureEnqueryForm(error))
    })
}

export const GetActivityAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetActivity())
  return Keyvalue.getActivity()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetActivity(response))
    })
    .catch(error => {
      dispatch(failureGetActivity(error))
    })
}

export const GetActivityTitleAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetActivityTitle())
  return Keyvalue.getActivityTitle()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetActivityTitle(response))
    })
    .catch(error => {
      dispatch(failureGetActivityTitle(error))
    })
}

export const GetAboutTeacherAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetAboutTeacher())
  return Keyvalue.getAboutTeacher()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetAboutTeacher(response))
    })
    .catch(error => {
      dispatch(failureGetAboutTeacher(error))
    })
}

export const GetFeaturesAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetFeature())
  return Keyvalue.getFeature()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetFeature(response))
    })
    .catch(error => {
      dispatch(failureGetFeature(error))
    })
}

export const GetSportsAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetSport())
  return Keyvalue.getSport()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetSport(response))
    })
    .catch(error => {
      dispatch(failureGetSport(error))
    })
}

export const GetSailentFeaturesAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetSailentFeature())
  return Keyvalue.getSailentFeature()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetSailentFeature(response))
    })
    .catch(error => {
      dispatch(failureGetSailentFeature(error))
    })
}


export const AboutusDescAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetAboutusDesc())
  return Keyvalue.getAboutusDesc()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetAboutusDesc(response))
    })
    .catch(error => {
      dispatch(failureGetAboutusDesc(error))
    })
}


export const DeskMessageAction = () => dispatch => {
  dispatch(requestLoading())
  dispatch(requestGetDeskMessage())
  return Keyvalue.getDeskMessage()
    .then(response => {
      dispatch(receiveLoading())
      dispatch(receiveGetDeskMessage(response))
    })
    .catch(error => {
      dispatch(failureGetDeskMessage(error))
    })
}

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