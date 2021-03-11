import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { AboutusDescAction } from 'redux/actionCreator/KeyvalueAction';
const AboutusDesc = ({ AboutusDescActionDispatch, aboutusDesc }) => {
    useEffect(() => {
        AboutusDescActionDispatch()
    }, [])
    useEffect(() => {
        console.log('desk message ********', aboutusDesc)
    }, [aboutusDesc])

    return (
        <>
            <div className="lg:w-12/12 m-4">
                <p style={{ fontSize: '3em' }} className="mb-6 bold ">{aboutusDesc?.title}</p>
                <p style={{ fontSize: '1.2em' }}>{aboutusDesc?.description}</p>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        aboutusDesc: KeyValue.aboutusDesc
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AboutusDescActionDispatch: (state) => dispatch(AboutusDescAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutusDesc)