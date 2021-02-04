import React, {useEffect} from "react";
import PropTypes from "prop-types";
import 'commonCss/Blog.css'
import { Pagination } from 'react-laravel-paginex'
import { ContactUsAction } from 'redux/actionCreator/ContactUsAction'

import { connect } from "react-redux";

const EnqueryTable = (props) => {
  useEffect(() => {
    props.ContactUsActionDispatch()
  }, [])
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (props.color === "light" ? "bg-white" : "bg-blue-900 text-white")
        }
      >

        { props.Contactus?.data.map(element => (<div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div className="flex">
            <div>
              <p className="font-bold">{element.name}</p>
              <p className="font-bold">{element.email}, {element.phone}</p>
              <p className="text-sm mt-3">{element.message}</p>
            </div>
          </div>
          <div className="mt-5">
            <input type="text" className="bg-gray-300 " style={{padding : '5px', width : '80%'}}/><button className="bg-blue-500 text-white ml-8 rounded-b" style={{padding : '5px'}}>Acknowledge</button>
        </div>
        </div>))}


        <div id="pagination" style={{ margin: '25px' }}>
          <Pagination changePage={(data) => props.ContactusActionDispatch(data)} data={props.Contactus} />
        </div>
      </div>
    </>
  );
}

EnqueryTable.defaultProps = {
  color: "light",
};

EnqueryTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
const mapStateToProps = (state) => {
  const Contactus = state.ContactusReducer;
  console.log('blogs', Contactus.data)
  return {
    Contactus: Contactus.data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ContactUsActionDispatch: (state) => dispatch(ContactUsAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EnqueryTable)