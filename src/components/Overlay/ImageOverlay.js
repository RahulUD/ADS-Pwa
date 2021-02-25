import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { NotificationAction } from 'redux/actionCreator/NotificationAction';
const ImageOverlay = ({NotificationActionDispatch, notification}) => {
    const [show, setShow] = useState(false)
    let history = useHistory()
    useEffect(() => {
        NotificationActionDispatch()
    }, [])
    useEffect(()=>{
        if(notification){
            setShow(true)
        }
    },[notification])
    return (
        <>
          {show && <div 
           onClick={()=>setShow(false)}
          style={{
                position: "fixed",
                display: "block",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: "51",
                cursor: "pointer"
            }}>
             <div 
             style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "50px",
                    color: "white",
                    transform: "translate(-50%,-50%)",
                }}>
                    <div onClick={()=>history.push(notification?.link)}>
                    <div dangerouslySetInnerHTML={{ __html: notification?.description }}></div>
                    </div>
                    </div>

            </div>}
        </>
    );
}
const mapStateToProps = (state) => {
    const Notification = state.NotificationReducer;
    return {
        notification : Notification.data,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        NotificationActionDispatch:(state) => dispatch(NotificationAction(state)),
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ImageOverlay)