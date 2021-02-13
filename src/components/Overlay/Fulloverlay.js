import React from 'react'
import { connect } from 'react-redux';
const Fulloverlay = (props) => {
    return (
        <>
            {props.Loading && <div style={{
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
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    fontSize: "50px",
                    color: "white",
                    transform: "translate(-50%,-50%)",
                }}>{props.message}</div>
            </div> }
        </>
    );
}

const mapStateToProps = (state) => {
    const Loading = state.LoadingReducer;
      return {
        Loading : Loading.loading
      };
  };
  
  export default connect(
    mapStateToProps,
    null
  )(Fulloverlay)