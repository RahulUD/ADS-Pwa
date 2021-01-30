import React from "react";
import { createPopper } from '@popperjs/core';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Dropdown = (props) => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12">
          <div className="relative inline-flex align-middle w-full">
            {props.isAuthSuccessful ?
              (<Link to="/auth/login"
                className="text-white font-bold uppercase text-sm py-2 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-red-500 active:bg-red-600 ease-linear transition-all duration-150"
              >Logout</Link>) : (<Link to="/auth/login"
                className="text-white font-bold uppercase text-sm py-2 px-6 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-blue-500 active:bg-blue-600 ease-linear transition-all duration-150"
              >Login</Link>)
            }
            <div
              onMouseEnter={() => openDropdownPopover()}
              onMouseLeave={() => closeDropdownPopover()}
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1 min-w-48"
              }
            >
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap"
                onClick={e => e.preventDefault()}
              >
                Action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap"
                onClick={e => e.preventDefault()}
              >
                Another action
              </a>
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap"
                onClick={e => e.preventDefault()}
              >
                Something else here
              </a>
              <div className="h-0 my-2 border border-solid border-t-0 border-gray-900 opacity-25" />
              <a
                href="#pablo"
                className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap"
                onClick={e => e.preventDefault()}
              >
                Seprated link
              </a>
            </div>
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