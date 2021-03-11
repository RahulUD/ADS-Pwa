import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { GetFeaturesAction } from 'redux/actionCreator/KeyvalueAction'
const Feature = ({ features, GetFeaturesActionDispatch }) => {
    useEffect(() => {
        GetFeaturesActionDispatch()
    }, [])
    useEffect(() => {
        console.log('desk message ********', features)
    }, [features])
    return (
        <>
            {features && features.map(feature => (<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-school text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    {feature.title}
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    {feature.description}
                </p>
                <Link to="/" className="font-bold text-gray-800 mt-8">
                    Check more ...
                </Link>
            </div>))}
        </>
    )
}

const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        features: KeyValue.features
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetFeaturesActionDispatch: (state) => dispatch(GetFeaturesAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Feature)