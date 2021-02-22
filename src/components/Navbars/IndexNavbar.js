import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginDropdown from "components/Dropdowns/LoginDropdown.js";
import logo from 'assets/img/logo/ads70X56.png'
import { loginFromSession } from "redux/actionCreator/AuthAction";
import { connect } from "react-redux";
import { isTokenAvilableInLocalStorage } from 'utility/method/LocalStorageMethod'

function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  useEffect(() => {
    if (isTokenAvilableInLocalStorage() && !props.isAuthSuccessful) {
      props.loginFromSessionDispatch()
    }
  }, [])
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 pt-1 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="inline-block mr-4"
            >
              <img src={logo} />
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center" >
                <Link to='/welcome'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  ADS
                  </Link>
              </li>

              <li className="flex items-center">
                <Link to='/welcome/aboutus'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  About us
                  </Link>
              </li>

              <li className="flex items-center">
                <Link to='/welcome/admission'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  Admission
                  </Link>
              </li>

              <li className="flex items-center" >
                <Link to='/blog'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  Blog
                  </Link>
              </li>

              <li className="flex items-center" >
                <Link to='/welcome/contactus'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  Contact Us
                  </Link>
              </li>

              <li className="flex items-center" >
                <Link to='/welcome/faq'
                  className="hover:text-gray-600 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
                  Faq
                  </Link>
              </li>

              <li className="flex items-center">
                <LoginDropdown />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
const mapStateToProps = (state) => {
  const Auth = state.AuthReducer;
  return {
    user: Auth.user,
    isAuthSuccessful: Auth.isAuthSuccessful
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFromSessionDispatch: (state) => dispatch(loginFromSession(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
// 703385676518
// 18001801961