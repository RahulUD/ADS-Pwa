import AvatarNameCard from 'components/Cards/AvatarNameCard'
import React,{useState} from 'react'
import { connect } from 'react-redux'
import { postMessageAction } from 'redux/actionCreator/MessageAction'

const MessageBox = (props) => {
    const [message, setMessage] = useState()
    const hideModel = () => {
        props.hideModel()
    }
    const sendMessage = () => {
        props.postMessageActionDispatch({message : message, user_id : props.data?.user?.id});
        hideModel();
    }
    return (
        <div className={`modal h-screen flex w-full fixed z-50 left-0 top-0 flex justify-center items-center ${props.show ? '' : 'hidden'}`} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="bg-white rounded shadow-lg w-1/2 md:w-full">
                <div className="border-b px-4 py-2 flex justify-between items-center">
                    <AvatarNameCard name={props.data?.user?.name} avatar={props.data?.user?.avatar} />
                </div>
                <div className="p-3">
                    <textarea
                        id="message"
                        rows="4"
                        cols="80"
                        value={message}
                        onChange={(event) =>setMessage(event.target.value)}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                    >
                    </textarea>
                </div>
                <div className="flex justify-end items-center w-100 border-t p-3">
                    <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={hideModel}>Cancel</button>
                    <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white" onClick={sendMessage}>Send Message</button>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const Message = state.MessageReducer;
    console.log('Message ***', Message)
    return {
        Message
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      postMessageActionDispatch: (state) => dispatch(postMessageAction(state))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(MessageBox) 