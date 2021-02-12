import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { GetGenderAction } from 'redux/actionCreator/GenderAction'
import Validation from 'utility/Validation'
import { AddUserAction } from 'redux/actionCreator/MemberAction'
import RadioWithLevel from '../InputType/RadioWithLevel'
import { prePareKeyValue } from 'utility/method/FormMethods'
import InputWithLevel from '../InputType/InputWithLevel'
import ActionButton from '../InputType/ActionButton'
const UserFormCard = (props) => {
    const { Genders } = props
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
    const [genderArray, setGenderArray] = useState([])
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
        
    }
    const handleValidation = () => {
        return form.email.valid & form.name.valid & form.dob.valid & form.gender.valid & form.adharNumber.valid
    }
    const radioHandle = (event) => {
        console.log('radioHandle', event)
        let element = { ...form['gender'] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, form['gender'].validation)
        element.valid = isValid
        element.messages = messages
        setForm({ ...form, gender: element })
        setFormValidity(handleValidation())
        console.log('radioHandle',event.target.value)
    }

    const submitHandle = () => {
        if (formValidity) props.AddUserActionDispatch({
            name: form.name.value,
            email: form.email.value,
            gender: form.gender.value,
            dob: form.dob.value,
            adharNumber: form.adharNumber.value
        })
    }
    useEffect(() => {
        props.GetGenderActionDispatch()
    }, [])
    useEffect(() => {
        setGenderArray(prePareKeyValue('id', Genders, { fields: ['name'] }))
    }, [Genders])
    return (
        <>
            <form>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    User Information
            </h6>
                <div className="flex flex-wrap">
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.name.value} placeholder='Name of Student' isFocused={true} id='name' changeHandle={handleChange} errors={form.name.messages}>Name of Srudent</InputWithLevel>
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='date' value={form.dob.value} placeholder='Date of Birth' isFocused={true} id='dob' changeHandle={handleChange} errors={form.dob.messages}>Date of Birth</InputWithLevel>
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.email.value} placeholder='Email' isFocused={true} id='email' changeHandle={handleChange} errors={form.email.messages}>Email</InputWithLevel>
                    <RadioWithLevel bodyClass={['px-4']} width='lg:w-12/12' isFocused={true} id='gender' radioHandle={radioHandle} list={genderArray} errors={form.gender.messages}>Gender</RadioWithLevel>
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.adharNumber.value} placeholder='Adhar Number of Student' isFocused={true} id='adharNumber' changeHandle={handleChange} errors={form.adharNumber.messages}>Adhar Number of Srudent</InputWithLevel>
                </div>
                <div className="px-4 mt-10">
                    <ActionButton handleClick={submitHandle} btnClass={['bg-blue-500 active:bg-blue-600']}>Submit</ActionButton>
                </div>
            </form>
        </>
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