import ActionButton from 'components/InputType/ActionButton';
import InputWithLevel from 'components/InputType/InputWithLevel';
import SelactWithLevel from 'components/InputType/SelectWithLevel';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetRelationAction } from 'redux/actionCreator/RelationAction';
import { ParentAction } from 'redux/actionCreator/MemberAction'
import { prePareKeyValue } from 'utility/method/FormMethods';
import Validation from 'utility/Validation';
import { AddDocumentAction } from 'redux/actionCreator/MemberAction';
import { AddContactAction } from 'redux/actionCreator/MemberAction';
import { UpdateProgresAction } from 'redux/actionCreator/MemberAction';
const ParentForm = (props) => {
    const { relations, student, user } = props
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
        cardNumber: {
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
        return form.relation.valid & form.name.valid & form.cardNumber.valid & form.contact.valid
    }

    const submitHandle = () => {
        console.log('parent ', form)
        if (student && handleValidation()) {
            props.AddDocumentActionDispatch({
                cardNumber: form.cardNumber.value,
                name: 'Adhar',
                image: '',
                user: user.id
            })

            props.ParentActionDispatch({
                relation: form.relation.value,
                name: form.name.value,
                contact: form.contact.value,
                student: student.id
            })

            props.AddContactActionDispatch({
                name: form.name.value,
                contact: form.contact.value,
                contacttype_id: 1,
                user: user.id
            })
            props.UpdateProgresActionDispatch(3)
        }
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
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.cardNumber.value} placeholder='Adhar Number' isFocused={true} id='cardNumber' changeHandle={handleChange} errors={form.cardNumber.messages}>Adhar Number</InputWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='number' value={form.contact.value} placeholder=' Number' isFocused={true} id='contact' changeHandle={handleChange} errors={form.contact.messages}>Number</InputWithLevel>

            </div>
            <div className="px-4 mt-10">
                <ActionButton handleClick={submitHandle}>Next</ActionButton>
                <ActionButton handleClick={submitHandle}>Reset</ActionButton>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    const Relation = state.RelationReducer;
    const Member = state.MemberReducer;
    return {
        user: Member.user,
        relations: Relation.data,
        student: Member.student
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetRelationActionDispatch: (state) => dispatch(GetRelationAction(state)),
        ParentActionDispatch: (state) => dispatch(ParentAction(state)),
        AddDocumentActionDispatch: (state) => dispatch(AddDocumentAction(state)),
        AddContactActionDispatch: (state) => dispatch(AddContactAction(state)),
        UpdateProgresActionDispatch:(state) =>dispatch(UpdateProgresAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParentForm)