import InfoCard from 'components/Cards/InfoCard'
import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { ObjectiveAction } from 'redux/actionCreator/KeyvalueAction';
const Objective = ({ ObjectiveActionDispatch, objectives }) => {
    useEffect(() => {
        ObjectiveActionDispatch()
    }, [])
    useEffect(() => {
    }, [objectives])
    return (
        <>
            {objectives.map(objective => (<div className=" px-3">
                
                <InfoCard title={objective.title} icon={objective.icon} iconColor={objective.classes}><p>{objective.description}</p></InfoCard>
            </div>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        objectives: KeyValue.objectives
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ObjectiveActionDispatch: (state) => dispatch(ObjectiveAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Objective)