import {
    requestGetThought,
    receiveGetThought,
    failureGetThought,
    requestLoading,
    receiveLoading,
  } from 'redux/Action';
import Thought from 'utility/api/Thought';

  export const GetThoughtAction = () => dispatch => {
    dispatch(requestLoading())
    dispatch(requestGetThought())
    return Thought.ThoughtOfTheDay()
      .then(response => {
        dispatch(receiveLoading())
        dispatch(receiveGetThought(response))
      })
      .catch(error => {
        dispatch(failureGetThought(error))
      })
  }