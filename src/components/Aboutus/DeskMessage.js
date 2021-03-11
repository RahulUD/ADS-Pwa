import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { DeskMessageAction } from 'redux/actionCreator/KeyvalueAction';
import ImageDescriptionBanner from 'views/welcome/ImageDescriptionBanner'
const DeskMessage = ({DeskMessageActionDispatch, deskMessages}) =>{
    useEffect(() => {
        DeskMessageActionDispatch()
    }, [])
    useEffect(() => {
        console.log('desk message ********', deskMessages)
    }, [deskMessages])
    
    return(
        <>
            {deskMessages && deskMessages.map(deskMessage=>(<ImageDescriptionBanner {...deskMessage}>{deskMessage.title}</ImageDescriptionBanner>))}
        </>
    )
}
const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        deskMessages: KeyValue.deskMessages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        DeskMessageActionDispatch: (state) => dispatch(DeskMessageAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DeskMessage)