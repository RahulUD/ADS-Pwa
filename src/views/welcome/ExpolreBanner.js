import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetActivityTitleAction } from 'redux/actionCreator/KeyvalueAction'
import { GetActivityAction } from 'redux/actionCreator/KeyvalueAction'
const ExpolreBanner = ({ activities, activityTitle, children, GetActivityActionDispatch, GetActivityTitleActionDispatch }) => {
  useEffect(() => {
    GetActivityActionDispatch()
    GetActivityTitleActionDispatch()
  }, [])
  useEffect(() => {
  }, [activities, activityTitle])
  return (
    <section className="pb-20 relative block bg-gray-900">
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
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 mb-8">
        <div className="flex flex-wrap text-center justify-center">
          {activityTitle && <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-white">
              {activityTitle.title}
            </h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
              {activityTitle.description}
            </p>
          </div>}
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
          {activities && activities.map(activity => (<div className="px-4 text-center">
            <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
              <i className={activity.icon}></i>
            </div>
            <h6 className="text-xl mt-5 font-semibold text-white">
              {activity.title}
            </h6>
            <p className="mt-2 mb-4 text-gray-500">
              {activity.description}
            </p>
          </div>))}
        </div>
      </div>
      {children}
    </section>
  )
}

const mapStateToProps = (state) => {
  const KeyValue = state.KeyValueReducer;
  return {
    activities: KeyValue.activities,
    activityTitle: KeyValue.activityTitle
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetActivityActionDispatch: (state) => dispatch(GetActivityAction(state)),
    GetActivityTitleActionDispatch: (state) => dispatch(GetActivityTitleAction(state)),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpolreBanner)