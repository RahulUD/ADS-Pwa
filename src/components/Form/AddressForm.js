import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { prePareKeyValue } from 'utility/method/FormMethods';
import { AddAddressAction, AddContactAction } from 'redux/actionCreator/MemberAction'
import InputWithLevel from '../InputType/InputWithLevel';
import SelactWithLevel from '../InputType/SelectWithLevel';
import ActionButton from '../InputType/ActionButton';
import Validation from 'utility/Validation';
import PinWithLevel from 'components/InputType/PinWithLevel';
import { GetAddressTypeAction } from 'redux/actionCreator/AddressTypeAction';
import { UpdateProgresAction } from 'redux/actionCreator/MemberAction';

const AddressForm = (props) => {
    const { AddressTypes, user } = props
    const [addresstypeArray, setAddresstypeArray] = useState([])
    const [form, setForm] = useState({
        address1: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },

        address2: {
            value: '',
            validation: {
                required: false,
            },
            messages: null,
            valid: false,
            touched: false
        },
        pin: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },
        addressType: {
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
        number: {
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
        return form.address1.valid & form.address2.valid & form.pin.valid & form.addressType.valid & form.name.valid & form.number.valid
    }

    const submitHandle = () => {
        if (user && handleValidation)
            props.AddAddressActionDispatch({
                address1: form.address1.value,
                address2: form.address2.value,
                pin: form.pin.value,
                addressType: form.addressType.value,
                name: form.name.value,
                user: user.id
            })
        props.AddContactActionDispatch({
            name: form.name.value,
            contact: form.number.value,
            contacttype_id: 1,
            user: user.id
        })
        props.UpdateProgresActionDispatch(4)
    }
    useEffect(() => {
        setAddresstypeArray(prePareKeyValue('id', AddressTypes, { fields: ['type'] }))
    }, [AddressTypes])
    useEffect(() => {
        props.GetAddressTypeActionDispatch()
    }, [])


    return (
        <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Address Information
            </h6>
            <div className="flex flex-wrap">
                <InputWithLevel width='lg:w-12/12' bodyClass={['px-4']} type='text' value={form.address1.value} placeholder='Address Line 1' isFocused={true} id='address1' changeHandle={handleChange} errors={form.address1.messages}>Address Line 1</InputWithLevel>
                <InputWithLevel width='lg:w-12/12' bodyClass={['px-4']} type='text' value={form.address2.value} placeholder='Address Line 2' isFocused={true} id='address2' changeHandle={handleChange} errors={form.address2.messages}>Address Line 2</InputWithLevel>
                <PinWithLevel pinHandle={handleChange} />
                <SelactWithLevel width='lg:w-6/12' bodyClass={['px-4']} placeholder='Select Address Type' isFocused={true} id='addressType' list={addresstypeArray} selectHandle={handleChange} errors={form.addressType.messages}>Address Type</SelactWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.name.value} placeholder='Name' isFocused={true} id='name' changeHandle={handleChange} errors={form.name.messages}>Name of Addresee</InputWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={form.number.value} placeholder='Number' isFocused={true} id='number' changeHandle={handleChange} errors={form.number.messages}>Number of Addresee</InputWithLevel>
            </div>
            <div className="px-4 mt-10">
                <ActionButton handleClick={submitHandle} >Submit</ActionButton>
                <ActionButton handleClick={submitHandle} btnClass={['bg-red-500 active:bg-red-600']}>Reset</ActionButton>
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    const AddressType = state.AddressTypeReducer;
    const Member = state.MemberReducer;
    return {
        AddressTypes: AddressType.data,
        user: Member.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetAddressTypeActionDispatch: (state) => dispatch(GetAddressTypeAction(state)),
        AddAddressActionDispatch: (state) => dispatch(AddAddressAction(state)),
        AddContactActionDispatch: (state) => dispatch(AddContactAction(state)),
        UpdateProgresActionDispatch:(state) =>dispatch(UpdateProgresAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressForm)