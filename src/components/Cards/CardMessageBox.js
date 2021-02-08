import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Validation from "utility/Validation";
import MessageTag from "./MessageTag";
import { MessageGroupAction, SmsBalanceAction } from 'redux/actionCreator/MessageAction'

function CardMessageBox(props) {
  useEffect(() => {
    props.SmsBalanceActionDispatch()
  }, [])
  const [message, setMessage] = useState({
    value: "",
    validation: {
      required: true,
      minLength: 10,
      maxLength: 160
    },
    message: null,
    valid: false,
    touched: false
  });
  const submitHandle = () => {
    if (message.valid) {
      props.MessageGroupActionDispatch({
        users: props.users,
        message: message.value
      });
    }
  };
  const changeHandle = (event) => {
    const { isValid, messages } = Validation(
      event.target.value,
      message.validation
    );

    setMessage({
      ...message,
      value: event.target.value,
      touched: true,
      valid: isValid,
      message: messages
    });
  };
  return (
    <>
      <div className="relative text-white flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
        <div className="bg-red-600 text-center py-2 lg:px-4">
          <div className="p-2 bg-indigo-800 items-center leading-none lg:rounded-full flex lg:inline-flex" role="alert">
            <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Balance</span>
            <span className="font-semibold mr-2 text-left flex-auto">{props.balance}</span>
          </div>
        </div>
        <div className="flex">
          <MessageTag />
        </div>
        <div className="rounded-t mb-0">
          <textarea
            onChange={changeHandle}
            type="text"
            className="px-3 py-3 placeholder-gray-400 text-gray-700 rounded text-sm focus:outline-none w-full ease-linear transition-all duration-150 bg-gray-100"
            rows="10"
            placeholder="message here"
          ></textarea>
          <div className="m-2 flex">
            <button onClick={submitHandle} className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Send Message
        </button>
            <button className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Reset
        </button>
          </div>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  const CommentPost = state.CommentReducer;
  const Notifi = state.NotifiReducer;
  return {
    message: CommentPost,
    users: Notifi.users,
    balance : Notifi.balance
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    MessageGroupActionDispatch: (state) => dispatch(MessageGroupAction(state)),
    SmsBalanceActionDispatch: (state) => dispatch(SmsBalanceAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardMessageBox);