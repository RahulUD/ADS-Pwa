import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import IndexDropdown from "./IndexDropdown";


const Dropdown = (props) => {

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex align-middle w-full">
            {props.isAuthSuccessful ?
              (<IndexDropdown />
              ) : (<Link to="/auth/login"
                className="text-white font-bold uppercase text-sm py-2 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 ease-linear transition-all duration-150"
              >Login</Link>)
            }
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const Auth = state.AuthReducer;
  return {
    user: Auth.user,
    isAuthSuccessful: Auth.isAuthSuccessful
  };
};


export default connect(
  mapStateToProps,
  null
)(Dropdown)