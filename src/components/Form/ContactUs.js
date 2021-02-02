import React,{useState,useEffect} from 'react';
import Validation from "../../utility/Validation";
import {useHistory } from "react-router-dom";
import { isTokenAvilableInLocalStorage } from 'utility/method/LocalStorageMethod';

 const ContactUs = (props) => {
  const [formContact, setFormContact] = useState({
    name: {
      value: '',
      validation: {
        required: true,
        name: true
      },
      messages : null,
      valid: false,
      touched: false
    },
   
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
    number: {
      value: '',
      validation: {
        required: true,
        minLength : 10
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
  }, []);
  const history = useHistory()
  const [formValidity, setFormValidity] = useState(false)
  const handleChange = event => {
    let identifier = event.target.id
    let element = { ...formContact[identifier] }
    element.value = event.target.value
    element.touched = true
    const {isValid, messages}  = Validation(event.target.value, formContact[identifier].validation)
    element.valid = isValid
    element.messages = messages
    setFormContact({ ...formContact, [identifier]: element })
    setFormValidity(handleValidation())
  }

  const handleValidation = ()=>{
    return formContact.email.valid & formContact.name.valid & formContact.number.valid
  }

  const handleSubmit = () => {
    if(formValidity){
      let credential = {email : formContact.email.value, name : formContact.name.value, number: formContact.number.value}
      props.LoginActionDispatch(credential);
    }
  }


    return (
        <div>
                   <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        onChange={handleChange}
                        value={formContact.name.value}
                       
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                       onChange={handleChange}
                       value={formContact.email.value}
                      
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="number"
                      >
                        Number
                      </label>
                      <input
                       onChange={handleChange}
                       value={formContact.number.value}
                      
                        type="number"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Number"
                      />
                    </div>


                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick ={handleSubmit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
        </div>
    )
}
export default ContactUs;