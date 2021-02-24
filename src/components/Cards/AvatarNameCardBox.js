import React from 'react'
import { connect } from 'react-redux';
import { NotifiAddUserAction } from 'redux/actionCreator/NotifiAction';
import { BASE_URL } from 'utility/constant/EndPoints';
const AvatarNameCardBox = (props) => {
    const deleteHandle = (id) =>{
        let list =props.users.filter(data => data.id !== id);
        props.NotifiAddUserActionDispatch(list)
    }
    return (
        <div className="flex-1 ">
            <div className="flex items-center bg-white m-2 p-2 rounded">
                <div className="flex-shrink-0 w-8 h-8">
                    <img className="w-full h-full rounded-full transition duration-500 ease-in-out transform hover:-translate-y-2 hover:scale-110"
                        src={`${BASE_URL}${props.avatar}`}
                        alt="Avatar" />
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{props.name}</p>
                </div>
                {props?.icon && <i className={`fas ${props.icon}`} style={{marginLeft : '15px'}} onClick={() => deleteHandle(props.id)}></i>}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const Notifi = state.NotifiReducer;
    return {
      users : Notifi.users
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      NotifiAddUserActionDispatch:(state) => dispatch(NotifiAddUserAction(state))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AvatarNameCardBox)