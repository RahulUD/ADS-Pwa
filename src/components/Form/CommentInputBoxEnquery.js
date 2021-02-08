import React, { useState } from "react";
import { connect } from "react-redux";
import { CommentAction } from "redux/actionCreator/CommentAction";
import Validation from "../../utility/Validation";

const CommentInputBoxEnquery = (props) => {
  const [comment, setComment] = useState({
    value: "",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 250
    },
    message: null,
    valid: false,
    touched: false
  });
  const submitHandle = () => {
    props.CommentActionDispatch({
      comment: comment.value,
      id: props.id,
      type: props.type
    });
  };
  const changeHandle = (event) => {
    const { isValid, messages } = Validation(
      event.target.value,
      comment.validation
    );

    setComment({
      ...comment,
      value: event.target.value,
      touched: true,
      valid: isValid,
      message: messages
    });
  };
  return (
    <>
      <input
        id="comment"
        value={comment.value}
        onChange={changeHandle}
        type="text"
        className="bg-gray-300 "
        style={{ padding: "5px", width: "80%" }}
      />
      <button
        onClick={submitHandle}
        className="bg-blue-500 text-white ml-8 rounded-b"
        style={{ padding: "5px", width: "20%" }}
      >
        <i class="fas fa-paper-plane"></i>
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  const CommentPost = state.CommentReducer;
  return {
    message: CommentPost
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    CommentActionDispatch: (state) => dispatch(CommentAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentInputBoxEnquery);