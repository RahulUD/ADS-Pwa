import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetThoughtAction } from 'redux/actionCreator/ThoughtAction';
const Thought = ({ GetThoughtActionDispatch, thought }) => {
    useEffect(() => {
        GetThoughtActionDispatch()
    }, [])
    useEffect(() => {
    }, [thought])
    return (
        <>
       {thought && <address className="mt-16 text-right text-lg text-gray-300">
            {thought?.thought}
            <br /><author>- {thought.by}</author>
        </address>}
    
    </>
    )
}
const mapStateToProps = (state) => {
    const Thought = state.ThoughtReducer;
    return {
        thought: Thought.thought
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetThoughtActionDispatch: (state) => dispatch(GetThoughtAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Thought)