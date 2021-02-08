import React from "react";
import { createPopper } from "@popperjs/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "components/Button/Logout";
import AvatarNameCard from "components/Cards/AvatarNameCard";
import AvatarNameCardBox from "components/Cards/AvatarNameCardBox";


const UserDropdown = (props) => {
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
      <a
        className="text-gray-600 block"
        href="#pablo"
        ref={btnDropdownRef}
        onMouseEnter={() => openDropdownPopover()}
        onMouseLeave={() => closeDropdownPopover()}
      >
        <div className="items-center flex">
          {/* <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
            <img
              alt="..."
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={require("assets/img/team-1-800x800.jpg")}
            />
          </span> */}
          <AvatarNameCardBox name={props.name} avatar={props.avatar}/>
        </div>
      </a>
      <div
      onMouseEnter={() => openDropdownPopover()}
      onMouseLeave={() => closeDropdownPopover()}
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <Link
          to="/admin/dashboard"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
          }
        >
          Dashboard
        </Link>
        <div className="h-0 my-2 border border-solid border-gray-200" />
        <Logout />
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  const Auth = state.AuthReducer;
  console.log('Auth', Auth.user)
    return {
      name : Auth.user?.name,
      avatar : Auth.user?.avatar
    };
};

export default connect(
  mapStateToProps,
  null
)(UserDropdown)
