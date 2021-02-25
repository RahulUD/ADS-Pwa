import React, { useState, useEffect } from 'react';
import Validation from "../../utility/Validation";
import { connect } from 'react-redux';
import { RegisterAction } from "redux/actionCreator/RegisterAction"
import { GetGenderAction } from 'redux/actionCreator/GenderAction'
import { prePareKeyValue } from 'utility/method/FormMethods'
import RadioWithLevel from '../InputType/RadioWithLevel'
import { validateAllField } from 'utility/method/FormMethods';
import { resetAllField } from 'utility/method/FormMethods';

import InputWithLevel from '../InputType/InputWithLevel';
import ActionButton from 'components/InputType/ActionButton';
import TextAreaWithLevel from 'components/InputType/TextAreaWithLevel';
const RegistrationForm = (props) => {
    const { Genders } = props

    const [formRegister, setFormRegister] = useState({
        name: {
            value: '',
            validation: {
                required: true,
                minLength: 2,
                maxLength: 50,
                name: true
            },
            messages: null,
            valid: false,
            touched: false
        },
        mother: {
            value: '',
            validation: {
                required: false,
                minLength: 2,
                maxLength: 50,
            },
            messages: null,
            valid: false,
            touched: false
        },
        father: {
            value: '',
            validation: {
                required: false,
                minLength: 2,
                maxLength: 50,
            },
            messages: null,
            valid: false,
            touched: false
        },
        address: {
            value: '',
            validation: {
                required: true,
                minLength: 20,

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
        gender: {
            value: '',
            validation: {
                required: true,

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
        adhar: {
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
        dob: {
            value: '',
            validation: {
                required: true,


            },
            messages: null,
            valid: false,
            touched: false
        },


    })

    const [formValidity, setFormValidity] = useState(false)
    const [genderArray, setGenderArray] = useState([])
    const handleChange = event => {
        let identifier = event.target.id
        let element = { ...formRegister[identifier] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, formRegister[identifier].validation)
        element.valid = isValid
        element.messages = messages
        setFormRegister({ ...formRegister, [identifier]: element })
        setFormValidity(handleValidation())
    }

    const handleValidation = () => {
        return formRegister.email.valid & formRegister.name.valid & formRegister.number.valid & formRegister.mother.valid &
            formRegister.father.valid & formRegister.address.valid & formRegister.adhar.valid & formRegister.gender.valid
            & formRegister.dob.valid
    }
    const radioHandle = (event) => {
        let element = { ...formRegister['gender'] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, formRegister['gender'].validation)
        element.valid = isValid
        element.messages = messages
        setFormRegister({ ...formRegister, gender: element })
        setFormValidity(handleValidation())
    }
    useEffect(() => {
        props.GetGenderActionDispatch()
    }, [])

    useEffect(() => {
        setGenderArray(prePareKeyValue('id', Genders, { fields: ['name'] }))
    }, [Genders])


    const handleSubmit = () => {
        setFormRegister(resetAllField(formRegister))
        setFormRegister(validateAllField(formRegister))
        if (formValidity) {
            debugger
            setFormRegister(resetAllField(formRegister))
            let register = {
                email: formRegister.email.value, name: formRegister.name.value,
                phone: formRegister.number.value, mother: formRegister.number.value,
                father: formRegister.number.value,
                address: formRegister.number.value,
                gender: formRegister.gender.value,
                adhar: formRegister.adhar.value,
                dob: formRegister.dob.value
            }
            props.RegisterActionDispatch(register);
        }
    }

    return (
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 sm:-mt-64">
                    <div className="w-full lg:w-8/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                            <div className="p-5 lg:p-10">
                                <h4 className="text-2xl font-semibold"> to work with us?</h4>
                                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                    Complete this form and we will get back to you in 24
                                    hours.
                                    </p>
                                <div className='lg:flex'>
                                    <InputWithLevel width='lg:w-6/12 md:w-12/12 px-2' type='text' value={formRegister.name.value} placeholder='Enter Name' isFocused={true} id='name' changeHandle={handleChange} errors={formRegister.name.messages}>Name</InputWithLevel>
                                    <InputWithLevel width='lg:w-6/12   md:w-12/12 px-2' type='number' value={formRegister.number.value} placeholder='Enter mobile Number' isFocused={true} id='number' changeHandle={handleChange} errors={formRegister.number.messages}>Number</InputWithLevel>
                                </div>
                                <InputWithLevel width='lg:w-12/12 px-2' type='text' value={formRegister.email.value} placeholder='Enter Email' isFocused={true} id='email' changeHandle={handleChange} errors={formRegister.email.messages}>Email</InputWithLevel>
                                <div className='lg:flex'>
                                    <InputWithLevel width='lg:w-6/12 md:w-12/12 px-2' type='text' value={formRegister.father.value} placeholder='Enter Father Name' isFocused={true} id='father' changeHandle={handleChange} errors={formRegister.father.messages}>Father</InputWithLevel>
                                    <InputWithLevel width='lg:w-6/12 md:w-12/12 px-2' type='text' value={formRegister.mother.value} placeholder='Enter Mother Name' isFocused={true} id='mother' changeHandle={handleChange} errors={formRegister.mother.messages}>Mother</InputWithLevel>
                                </div>
                                <div className='lg:flex'>
                                    <InputWithLevel width='lg:w-6/12 md:w-12/12 px-2' type='date' value={formRegister.dob.value} placeholder='Enter Date Of Birth' isFocused={true} id='dob' changeHandle={handleChange} errors={formRegister.adhar.messages}>Date Of Birth</InputWithLevel>
                                    <InputWithLevel width='lg:w-6/12   md:w-12/12 px-2' type='number' value={formRegister.adhar.value} placeholder='Enter Adhar Number' isFocused={true} id='adhar' changeHandle={handleChange} errors={formRegister.adhar.messages}>Adhar</InputWithLevel>


                                </div>
                                <RadioWithLevel width='lg:w-12/12 px-2' isFocused={true} id='gender' radioHandle={radioHandle} list={genderArray} errors={formRegister.gender.messages}>Gender</RadioWithLevel>

                                <TextAreaWithLevel width='lg:w-12/12 px-2' type='text' value={formRegister.address.value} placeholder='Enter Address' isFocused={true} id='address' changeHandle={handleChange} errors={formRegister.address.messages}>Address</TextAreaWithLevel>

                                <div className="text-center mt-6">
                                    <ActionButton handleClick={handleSubmit}>Submit</ActionButton>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    const Genders = state.GenderReducer;
    return {
        Genders: Genders.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetGenderActionDispatch: (state) => dispatch(GetGenderAction(state)),

        RegisterActionDispatch: (state) => dispatch(RegisterAction(state))
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm)