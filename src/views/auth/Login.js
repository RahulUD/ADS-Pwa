import React, { useState, useEffect} from 'react'
import { Link, useHistory } from "react-router-dom";
import Validation from 'utility/Validation'
import { LoginAction } from 'redux/actionCreator/AuthAction'
import { connect } from "react-redux";
import { isTokenAvilableInLocalStorage } from 'utility/method/LocalStorageMethod';
import Fulloverlay from 'components/Overlay/Fulloverlay';

function Login(props) {
  const [formData, setFormData] = useState({
    email: {
      value: '',
      validation: {
        required: true,
        email: true
      },
      messages : null,
      valid: false,
      touched: false
    },
    password: {
      value: '',
      validation: {
        required: true,
        minLength : 8
      },
      messages : null,
      valid: false,
      touched: false
    }
  })
  useEffect(() => {
   if(isTokenAvilableInLocalStorage()){
     history.push('/')
   }
  }, [])
  useEffect(() => {
    setFormValidity(handleValidation())
  }, [formData])

  const history = useHistory()
  const [formValidity, setFormValidity] = useState(false)
  const handleChange = event => {
    let identifier = event.target.id
    let element = { ...formData[identifier] }
    element.value = event.target.value
    element.touched = true
    const {isValid, messages}  = Validation(event.target.value, formData[identifier].validation)
    element.valid = isValid
    element.messages = messages
    setFormData({ ...formData, [identifier]: element })
  }

  const handleValidation = ()=>{
      return formData.password.valid && formData.email.valid
  }

  const handleSubmit = () => {
    if(formValidity){
      let credential = {email : formData.email.value, password : formData.password.value}
      props.LoginActionDispatch(credential);
    }
  }

  useEffect(() => {
    if(props.isAuthSuccessful)
    history.push('/admin')
  }, [props.isAuthSuccessful])
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">

              <div className="flex-auto px-6 lg:px-10 py-10 pt-0">
                <div className="text-gray-500 text-center mb-3 mt-6 font-bold">
                  <h1>Sign in with credentials</h1>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      onChange={handleChange}
                      value={formData.email.value}
                      type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                    <p className='text-red-500'>{formData.email.messages && formData.email.messages[0]}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      onChange={handleChange}
                      value={formData.password.value}
                      type="password"
                      className={`px-3 py-3 placeholder-gray-400 text-gray-700  rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 bg-white`}
                      placeholder="Password"
                    />
                    <p className='text-red-500'>{formData.password.messages && formData.password.messages[0]}</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-gray-700">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      disabled={!formValidity}
                      onClick={handleSubmit}
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-gray-300"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-gray-300">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Fulloverlay message="Authenticating..."/>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  const Auth = state.AuthReducer;
  return {
    user : Auth.user,
    isAuthSuccessful : Auth.isAuthSuccessful
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    LoginActionDispatch: (state) => dispatch(LoginAction(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)