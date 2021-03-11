import Unilink from "custom/Unilink";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FooterAction } from "redux/actionCreator/KeyvalueAction";
const Footer = ({ FooterActionDispatch, footer }) => {
  useEffect(() => {
    FooterActionDispatch()
  }, [])
  useEffect(() => {
  }, [footer])
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">{footer?.footerTitle?.title}</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                {footer?.footerTitle?.descriptiom}
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                {footer.socialMediaLink && footer.socialMediaLink.map(socialMedia => (<button
                  className={`bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 ${socialMedia.classes}`}
                  type="button"
                >
                  <i className={socialMedia.icon}></i>
                </button>))}

              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    {footer?.footerLinkTitle?.title}
                  </span>
                  <ul className="list-unstyled">
                    {footer.footerLink && footer.footerLink.map(footerlink => (<li>
                      <Link
                        title={footerlink.description}
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        to={footerlink.link}
                      >
                        {footerlink.title}
                      </Link>
                    </li>))}
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    {footer?.footerResourceTitle?.title}
                  </span>
                  <ul className="list-unstyled">
                    {footer.footerResource && footer?.footerResource.map(resource => (<li>
                      <Unilink {...resource}/>
                    </li>))}

                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Notus React by{" "}
                <a
                  href="https://www.creative-tim.com?ref=nr-footer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Creative Tim
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
const mapStateToProps = (state) => {
  const KeyValue = state.KeyValueReducer;
  return {
    footer: KeyValue.footer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FooterActionDispatch: (state) => dispatch(FooterAction(state)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)