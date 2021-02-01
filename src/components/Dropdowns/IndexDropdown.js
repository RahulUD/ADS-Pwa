import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
import { connect } from "react-redux";
import { LogoutAction } from "redux/actionCreator/AuthAction";
import Logout from "components/Button/Logout";

const IndexDropdown = (props) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <button
        className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 whitespace-no-wrap flex items-center text-xs uppercase font-bold"
        ref={btnDropdownRef}
        onMouseEnter={() => openDropdownPopover()}
        onMouseLeave={() => closeDropdownPopover()}
      >
        {props.User}
      </button>
      <div
      onMouseEnter={() => openDropdownPopover()}
      onMouseLeave={() => closeDropdownPopover()}
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm py-2 px-4 font-bold block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
        >
          Auth Layout
        </span>
        <Link
          to="/auth/login"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Profile
        </Link>
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
        >
          Dashboard
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-gray-200" />
       <Logout />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  const Auth = state.AuthReducer;
  console.log('Auth', Auth.user)
    return {
      User : Auth.user
    };
};
const mapDispatchToProps = (dispatch) => {
  return {
    LogoutActionDispatch: (state) => dispatch(LogoutAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexDropdown)
