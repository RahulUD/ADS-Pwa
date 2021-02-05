import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { GetStdAction, UpdateStdIdAction } from 'redux/actionCreator/StdAction'

const StdListCard = (props) => {
    useEffect(() => {
        props.GetStdActionDispatch()
    }, [])
    return (
        <>
            {props.stds?.data && props.stds.data.map(std => (<span className="text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1" onClick={() => props.UpdateStdIdActionDispatch(std.id)}>
                {std.name} - {std.section}
            </span>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const Std = state.StdReducer;
    console.log('Enquery ***', Std)
    return {
        stds: Std
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetStdActionDispatch: (state) => dispatch(GetStdAction(state)),
        UpdateStdIdActionDispatch : (state) => dispatch(UpdateStdIdAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StdListCard)