import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { connect } from "react-redux";

function Navbar(props) {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            {props.currentPage}
          </a>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
const mapStateToProps = (state) => {
  const PageState = state.PageReducer;
  return {
    currentPage: PageState.currentPage
  };
};

export default connect(
  mapStateToProps,
  null
)(Navbar)