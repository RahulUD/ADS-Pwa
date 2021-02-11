import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { GetGenderAction } from 'redux/actionCreator/GenderAction'
import Validation from 'utility/Validation'
import {AddUserAction} from 'redux/actionCreator/MemberAction'
const UserFormCard = (props) => {
    const [form, setForm] = useState({
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
        dob: {
            value: '',
            validation: {
                required: true,
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
        adharNumber: {
            value: '',
            validation: {
                required: false,
            },
            messages: null,
            valid: false,
            touched: false
        }
    })

    const [formValidity, setFormValidity] = useState(false)
    const handleChange = event => {
        let identifier = event.target.id
        let element = { ...form[identifier] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, form[identifier].validation)
        element.valid = isValid
        element.messages = messages
        setForm({ ...form, [identifier]: element })
        setFormValidity(handleValidation())
        console.log(form)
    }
    const handleValidation = () => {
        return form.email.valid & form.name.valid & form.dob.valid & form.gender.valid & form.adharNumber.valid
    }
    const radioHandle = (event) =>{
        let element = { ...form['gender'] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, form['gender'].validation)
        element.valid = isValid
        element.messages = messages
        setForm({ ...form, gender: element })
        setFormValidity(handleValidation())
        console.log(form)
    }

    const submitHandle = () => {
        if (formValidity) props.AddUserActionDispatch({
            name : form.name.value,
            email : form.email.value,
            gender : form.gender.value,
            dob: form.dob.value,
            adharNumber: form.adharNumber.value
        })
    }
    useEffect(() => {
        props.GetGenderActionDispatch()
    }, [])
    return (
        <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                User Information
            </h6>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                            value={form.name.value}
                        >
                            Name
                  </label>
                        <input id='name'
                            onChange={handleChange}
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Date Of Birth
                  </label>
                        <input id='dob'
                            onChange={handleChange}
                            type="date"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Email
                  </label>
                        <input id='email'
                            onChange={handleChange}
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                    </div>
                </div>

                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Gender
                        </label>
                        {props?.Genders && props?.Genders.map(gender => (<label className="inline-flex items-center mr-4">
                            <input onClick={radioHandle} id='gender' name="gender" value={gender.id} type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">{gender.name}</span>
                        </label>))}
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Adhar Number
                  </label>
                        <input id='adharNumber'
                            onChange={handleChange}
                            type="number"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 mt-10">
                <button
                    onClick={submitHandle}
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Submit
            </button>
                <button
                    className="bg-red-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Reset
            </button>
            </div>
        </form>

    )
}
const mapStateToProps = (state) => {
    const Genders = state.GenderReducer;
    console.log('genders ****', Genders)
    return {
        Genders: Genders.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetGenderActionDispatch: (state) => dispatch(GetGenderAction(state)),
        AddUserActionDispatch: (state) => dispatch(AddUserAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserFormCard)