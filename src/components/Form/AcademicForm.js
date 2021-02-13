import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { GetScholorAction } from 'redux/actionCreator/ScholorAction'
import { AddStudentAction } from 'redux/actionCreator/MemberAction'
import { GetStdAction } from 'redux/actionCreator/StdAction'
import Validation from 'utility/Validation'
import { GetTransportAction } from 'redux/actionCreator/TransportAction'
import RadioWithLevel from '../InputType/RadioWithLevel'
import { prePareKeyValue } from 'utility/method/FormMethods'
import InputWithLevel from '../InputType/InputWithLevel'
import ActionButton from '../InputType/ActionButton'
import SelactWithLevel from 'components/InputType/SelectWithLevel'
const AcademicForm = (props) => {

    const [stdArray, setStdArray] = useState([])
    const [scholorArray, setScholorArray] = useState([])
    const [transortArray, setTransortArray] = useState([])

    const { scholors, transports, stds, user } = props
    const [form, setForm] = useState({
        std: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },

        rollNumber: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },
        tcNumber: {
            value: '',
            validation: {
                required: false,
            },
            messages: null,
            valid: false,
            touched: false
        },
        scholor: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },
        transport: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        }
    })

    const handleChange = event => {
        let identifier = event.target.id
        let element = { ...form[identifier] }
        element.value = event.target.value
        element.touched = true
        const { isValid, messages } = Validation(event.target.value, form[identifier].validation)
        element.valid = isValid
        element.messages = messages
        setForm({ ...form, [identifier]: element })
    }
    const handleValidation = () => {
        return form.transport.valid & form.scholor.valid & form.tcNumber.valid & form.rollNumber.valid & form.std.valid
    }

    const submitHandle = () => {
        handleValidation()
        if (user && handleValidation()) props.AddStudentActionDispatch({
            transport: form.transport.value,
            scholor: form.scholor.value,
            tcNumber: form.tcNumber.value,
            rollNumber: form.rollNumber.value,
            std: form.std.value,
            user: user.id,
        })
        console.log(form)
    }
    useEffect(() => {

    }, [form])
    useEffect(() => {
        props.GetScholorActionDispatch()
        props.GetTransportActionDispatch()
        props.GetStdActionDispatch()
    }, [])
    useEffect(() => {
        setScholorArray(prePareKeyValue('id', scholors, { fields: ['name'] }))
    }, [scholors])
    useEffect(() => {
        setTransortArray(prePareKeyValue('id', transports, { fields: ['name'] }))
    }, [transports])
    useEffect(() => {
        setStdArray(prePareKeyValue('id', stds, { fields: ['name'] }))
    }, [stds])
    return (
        <>
            <form>
                <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                    Academic Information</h6>
                <div className="flex flex-wrap">
                    <SelactWithLevel width='lg:w-6/12' bodyClass={['px-4']} placeholder='Select Std' isFocused={true} id='std' list={stdArray} selectHandle={handleChange} errors={form.std.messages}>Std</SelactWithLevel>
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.rollNumber.value} placeholder='Roll Number' isFocused={true} id='rollNumber' changeHandle={handleChange} errors={form.rollNumber.messages}>Roll Number</InputWithLevel>
                    <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.tcNumber.value} placeholder='TC Number' isFocused={true} id='tcNumber' changeHandle={handleChange} errors={form.tcNumber.messages}>TC Number</InputWithLevel>
                    <RadioWithLevel bodyClass={['px-4']} width='lg:w-12/12' isFocused={true} id='scholor' radioHandle={handleChange} list={scholorArray} errors={form.scholor.messages}>Scholor</RadioWithLevel>
                    <RadioWithLevel bodyClass={['px-4']} width='lg:w-12/12' isFocused={true} id='transport' radioHandle={handleChange} list={transortArray} errors={form.transport.messages}>Transport</RadioWithLevel>
                </div>
                <div className="px-4 mt-10">
                    <ActionButton handleClick={submitHandle} btnClass={['bg-blue-500 active:bg-blue-600']}>Next</ActionButton>
                </div>
            </form>
        </>
    )
}
const mapStateToProps = (state) => {
    const Member = state.MemberReducer;
    const Scholors = state.ScholorReducer;
    const Transports = state.TransportReducer;
    const Stds = state.StdReducer;
    return {
        user : Member.user,
        scholors: Scholors.data,
        transports: Transports.data,
        stds: Stds.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        AddStudentActionDispatch:(state) => dispatch(AddStudentAction(state)),
        GetScholorActionDispatch: (state) => dispatch(GetScholorAction(state)),
        GetStdActionDispatch: (state) => dispatch(GetStdAction(state)),
        GetTransportActionDispatch: (state) => dispatch(GetTransportAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcademicForm)