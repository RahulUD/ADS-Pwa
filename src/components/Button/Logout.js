import React, {useEffect} from 'react'

import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { LogoutAction } from "redux/actionCreator/AuthAction";

const Logout = (props) => {
    const history = useHistory()
    useEffect(() => {
        if(!props.isAuthSuccessful){
            history.push('/')
        }
    }, [props.isAuthSuccessful])
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
  const mapStateToProps = (state) => {
    const Auth = state.AuthReducer;
    console.log('Auth', Auth.isAuthSuccessful)
      return {
        isAuthSuccessful : Auth.isAuthSuccessful
      };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Logout)
  