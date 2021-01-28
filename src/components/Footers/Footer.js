import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {FooterAction} from '../../redux/actionCreator/FooterAction'

const Footer= props => {
  const [footer, setFooter] = useState({
    'footer_contact_title' : '',
    'footer_contact_description' : '',
    'footer_contact_twitter' : '',
    'footer_contact_facebook' : '',
    'footer_contact_github' : '',
    'footer_contact_gmail' : '',
    'footer_link_title' : '',
    'footer_link_1' : '',
    'footer_link_2' : '',
    'footer_link_3' : '',
    'footer_link_4' : '',
    'footer_resources_title' : '',
    'footer_resources_1' : '',
    'footer_resources_2' : '',
    'footer_resources_3' : '',
    'footer_resources_4' : '',
  })
  useEffect(() => {
    props.FooterActionDispatch();
  }, [])
  useEffect(() => {
    if(props.footerData){
    let footerCopy = {...footer}
    props.footerData.forEach(element => {
      footerCopy[element.key] = element.value
      setFooter({...footerCopy})
    });
  }
  }, [props.footerData])
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
              <h4 className="text-3xl font-semibold">{footer.footer_contact_title}</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
              {footer.footer_contact_description}
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  {footer.footer_link_title}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=nr-footer"
                      >
                        {footer.footer_link_1}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=nr-footer"
                      >
                        {footer.footer_link_2}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=nr-footer"
                      >
                        {footer.footer_link_3}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=nr-footer"
                      >
                        {footer.footer_link_4}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    {footer.footer_resources_title}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-react/blob/master/LICENSE.md?ref=nr-footer"
                      >
                        {footer.footer_resources_1}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=nr-footer"
                      >
                        {footer.footer_resources_2}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=nr-footer"
                      >
                        {footer.footer_resources_3}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=nr-footer"
                      >
                        {footer.footer_resources_4}
                      </a>
                    </li>
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
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

const mapStateToProps = (state) => {
  const Footer = state.FooterReducer;
  console.log('footer **********',Footer.data)
  return {
    footerData : Footer.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    FooterActionDispatch: (state) => dispatch(FooterAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)