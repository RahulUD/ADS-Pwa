import InfoCard from 'components/Cards/InfoCard'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetSailentFeaturesAction } from 'redux/actionCreator/KeyvalueAction';

const InfoCardGroup = ({ sailentFeatures, GetSailentFeaturesActionDispatch }) => {
    useEffect(() => {
        GetSailentFeaturesActionDispatch()
    }, [])
    useEffect(() => {
    }, [sailentFeatures])
    return (
        <>
            {sailentFeatures && sailentFeatures.map(sailentFeature => (<div className="w-full md:w-4/12 px-4 text-center">
                <InfoCard title={sailentFeature.title} icon={sailentFeature.icon}>
                    <p className="mt-2 mb-4 text-gray-600">
                        {sailentFeature.description}
                    </p>
                </InfoCard>
            </div>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        sailentFeatures: KeyValue.sailentFeatures
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetSailentFeaturesActionDispatch: (state) => dispatch(GetSailentFeaturesAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoCardGroup)