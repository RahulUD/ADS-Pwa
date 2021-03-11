import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetSportsAction } from 'redux/actionCreator/KeyvalueAction'
import ImageDescriptionBanner from 'views/welcome/ImageDescriptionBanner'
const Sport = ({ sports, GetSportsActionDispatch }) => {
    useEffect(() => {
        GetSportsActionDispatch()
    }, [])
    useEffect(() => {
        console.log('desk message ********', sports)
    }, [sports])
    return (
        <>
            {sports && sports.map(sport =>(<ImageDescriptionBanner {...sport}>{sport.title}</ImageDescriptionBanner>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        sports: KeyValue.sports
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetSportsActionDispatch: (state) => dispatch(GetSportsAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sport)