import React from 'react'
import { connect } from 'react-redux';
import { LogoutAction } from "redux/actionCreator/AuthAction";

const Logout = (props) => {
    return (
        <button
            onClick={props.LogoutActionDispatch}
            className="text-sm py-2 px-4 bg-red-500 text-white font-normal justify-self-auto block w-full whitespace-no-wrap bg-transparent"
        >
            Logout
        </button>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
      LogoutActionDispatch: (state) => dispatch(LogoutAction(state))
    };
  };
  
  export default connect(
    null,
    mapDispatchToProps
  )(Logout)
  