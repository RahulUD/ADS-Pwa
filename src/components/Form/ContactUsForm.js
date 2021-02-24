import React, { useState } from 'react';
import Validation from "../../utility/Validation";
import { connect } from 'react-redux';
import { ContactUsPostAction } from "redux/actionCreator/ContactUsAction"
import InputWithLevel from '../InputType/InputWithLevel';
import TextAreaWithLevel from '../InputType/TextAreaWithLevel';
import ActionButton from 'components/InputType/ActionButton';
import { validateAllField } from 'utility/method/FormMethods';
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
        setFormContact(validateAllField(formContact))
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
                                    <h4 className="text-2xl font-semibold"> to work with us?</h4>
                                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                        Complete this form and we will get back to you in 24
                                        hours.
                                    </p>
                                    <InputWithLevel width='lg:w-12/12' type='text' value={formContact.name.value} placeholder='Enter Name' isFocused={true} id='name' changeHandle={handleChange} errors={formContact.name.messages}>Name</InputWithLevel>
                                    <InputWithLevel width='lg:w-12/12' type='text' value={formContact.email.value} placeholder='Enter Email' isFocused={true} id='email' changeHandle={handleChange} errors={formContact.email.messages}>Email</InputWithLevel>
                                    <InputWithLevel width='lg:w-12/12' type='text' value={formContact.number.value} placeholder='Enter mobile Number' isFocused={true} id='number' changeHandle={handleChange} errors={formContact.number.messages}>Number</InputWithLevel>
                                    <TextAreaWithLevel width='lg:w-12/12' rows='4' cols='80' value={formContact.message.value} placeholder='Please enter message' isFocused={true} id='message' changeHandle={handleChange} errors={formContact.message.messages}>Message</TextAreaWithLevel>
                                    <div className="text-center mt-6">
                                        <ActionButton handleClick={handleSubmit}>Submit</ActionButton>
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