import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetStdAction, UpdateStdIdAction } from 'redux/actionCreator/StdAction'

const StdListCard = (props) => {
    let stds = props.stds?.data
    useEffect(() => {
        props.GetStdActionDispatch()
    }, [])
    const clickHandle = (id) => {
        props.UpdateStdIdActionDispatch(id)
    }
    return (
        <>
            {stds && stds.map(std => (<span key={std.id} className={`cursor-pointer text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 uppercase last:mr-0 mr-1 bg-blue-200`} onClick={() => clickHandle(std.id)}>
                {std.name} - {std.section}
            </span>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const Std = state.StdReducer;
    return {
        stds: Std
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetStdActionDispatch: (state) => dispatch(GetStdAction(state)),
        UpdateStdIdActionDispatch: (state) => dispatch(UpdateStdIdAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StdListCard)