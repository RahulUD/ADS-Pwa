import React, { useState } from 'react';
import Validation from "../../utility/Validation";
import InputFieldError from 'components/Error/InputFieldError';
import { connect } from 'react-redux';
import { ContactUsPostAction } from "redux/actionCreator/ContactUsAction"
const ContactUs = (props) => {
    const [formContact, setFormContact] = useState({
        name: {
            value: '',
            validation: {
                required: true,
                minLength: 4,
                name: true
            },
            messages: null,
            valid: false,
            touched: false
        },

        email: {
            value: '',
            validation: {
                required: true,
                email: true
            },
            messages: null,
            valid: false,
            touched: false
        },
        number: {
            value: '',
            validation: {
                required: true,
                minLength: 10,
                maxLength: 10
            },
            messages: null,
            valid: false,
            touched: false
        },
        message: {
            value: '',
            validation: {
                required: true,

                minLength: 50,
                maxLength: 250

            },
            messages: null,
            valid: false,
            touched: false
        }
    })
    
    const [formValidity, setFormValidity] = useState(false)
    const handleChange = event => {
        let identifier = event.target.id
        let element = { ...formContact[identifier] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, formContact[identifier].validation)
        element.valid = isValid
        element.messages = messages
        setFormContact({ ...formContact, [identifier]: element })
        setFormValidity(handleValidation())
    }

    const handleValidation = () => {
        return formContact.email.valid & formContact.name.valid & formContact.number.valid
    }

    const handleSubmit = () => {
        if (formValidity) {
            let contact = { email: formContact.email.value, name: formContact.name.value, phone: formContact.number.value, message: formContact.message.value }
            props.ContactUsActionDispatch(contact);
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
                                            id="name"
                                            type="text"
                                            onChange={handleChange}
                                            value={formContact.name.value}

                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Full Name"
                                        />
                                        <InputFieldError error={formContact?.name?.messages} />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                      </label>
                                        <input
                                            id="email"
                                            onChange={handleChange}
                                            value={formContact.email.value}

                                            type="email"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Email"
                                        />
                                        <InputFieldError error={formContact?.email?.messages} />

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
                                            id="number"
                                            type="text"
                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                                            placeholder="Number"
                                        />
                                        <InputFieldError error={formContact?.number?.messages} />                   </div>


                                    <div className="relative w-full mb-3">
                                        <label
                                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            Message
                      </label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            cols="80"
                                            onChange={handleChange}

                                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                            placeholder="Type a message..."
                                        >
                                        </textarea>
                                        <InputFieldError error={formContact?.message?.messages} />                </div>


                                    <div className="text-center mt-6">
                                        {/* <p>{props.message}</p> */}
                                        <button
                                            className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={handleSubmit}
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

const mapStateToProps = (state) => {
    const ContactUs = state.ContactUsReducer;
    return {
        message: ContactUs

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        ContactUsActionDispatch: (state) => dispatch(ContactUsPostAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContactUs)
