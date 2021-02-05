import {
    
    requestCommentPost,
    receiveCommentPost,
    failureCommentPost,
    requestLoading,
    receiveLoading
  } from "redux/Action";

import Comment from "utility/api/Comment";

  export const CommentPostAction = (payload) => (dispatch) => {
    dispatch(requestLoading());
    dispatch(requestCommentPost());
    return Comment.commentPost(payload)
      .then(() => {
        dispatch(receiveLoading());
        dispatch(receiveCommentPost());
      })
      .catch((error) => {
        dispatch(failureCommentPost(error));
      });
  };
  