import ActionButton from 'components/InputType/ActionButton';
import InputWithLevel from 'components/InputType/InputWithLevel';
import SelactWithLevel from 'components/InputType/SelectWithLevel';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetRelationAction } from 'redux/actionCreator/RelationAction';
import {ParentAction} from 'redux/actionCreator/MemberAction'
import { prePareKeyValue } from 'utility/method/FormMethods';
import Validation from 'utility/Validation';
const ParentForm = (props) => {
    const { relations, student } = props
    const [relationArray, setRelationArray] = useState([])
    const [form, setForm] = useState({
        relation: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },

        name: {
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
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },

        contact: {
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
        return form.relation.valid & form.name.valid & form.adharNumber.valid & form.contact.valid
    }

    const submitHandle = () => {
        if (student && handleValidation())
            props.ParentActionDispatch({
                relation: form.relation.value,
                name: form.name.value,
                adharNumber: form.adharNumber.value,
                contact: form.contact.value,
                student : student.id
            })
    }
    useEffect(() => {
        setRelationArray(prePareKeyValue('id', relations, { fields: ['type'] }))
    }, [relations])

    useEffect(() => {
        props.GetRelationActionDispatch()
    }, [])
    return (
        <form>
            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Parents / Guardian
            </h6>
            <div className="flex flex-wrap">
                <SelactWithLevel width='lg:w-4/12' bodyClass={['px-4']} placeholder='Select Relation' isFocused={true} id='relation' list={relationArray} selectHandle={handleChange} errors={form.relation.messages}>Relation</SelactWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.name.value} placeholder='Name' isFocused={true} id='name' changeHandle={handleChange} errors={form.name.messages}>Name</InputWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.adharNumber.value} placeholder='Adhar Number' isFocused={true} id='adharNumber' changeHandle={handleChange} errors={form.adharNumber.messages}>Adhar Number</InputWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.contact.value} placeholder=' Number' isFocused={true} id='contact' changeHandle={handleChange} errors={form.contact.messages}>Number</InputWithLevel>

            </div>
            <div className="px-4 mt-10">
                <ActionButton onClick={submitHandle}>Next</ActionButton>
                <ActionButton onClick={submitHandle}>Reset</ActionButton>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    const Relation = state.RelationReducer;
    const Student = state.MemberReducer;
    return {
        relations: Relation.data,
        student: Student.student
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetRelationActionDispatch: (state) => dispatch(GetRelationAction(state)),
        ParentActionDispatch: (state) => dispatch(ParentAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParentForm)