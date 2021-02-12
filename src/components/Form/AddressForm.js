import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GetAddressTypeAction } from 'redux/actionCreator/AddressTypeAction';
import { GetDistrictsAction } from 'redux/actionCreator/PinAction';
import { GetPinsAction } from 'redux/actionCreator/PinAction';
import { GetStatesAction } from 'redux/actionCreator/PinAction';
import { prePareKeyValue } from 'utility/method/FormMethods';
import InputWithLevel from '../InputType/InputWithLevel';
import SelactWithLevel from '../InputType/SelectWithLevel';
import SubmitResetButton from '../InputType/ActionButton';
import ActionButton from '../InputType/ActionButton';

const AddressForm = (props) => {
    const [input, setinput] = useState('')
    const [stateArray, setStateArray] = useState([])
    const [addresstypeArray, setAddresstypeArray] = useState([])
    const { AddressTypes, states, districts, pins } = props
    let districtArray = []
    useEffect(() => {
        props.GetAddressTyeActionDispatch()
        props.GetStatesActionDispatch()
    }, [])
    useEffect(() => {
        setStateArray(prePareKeyValue('id', states, { fields: ['state'] }))
    }, [states])
    useEffect(() => {
        setAddresstypeArray(prePareKeyValue('id', AddressTypes, { fields: ['type'] }))
    }, [AddressTypes])
    const stateChangeHandle = event => {
        props.GetDistrictsActionDispatch(event.target.value)
    }
    const districtChangeHandle = event => {
        props.GetPinsActionDispatch(event.target.value)
    }
    const pinChangeHandle = (event) => {

    }
    const changeHandle = event => {
        setinput(event.target.value)
    }
    const handleSubmit = event => {
        setinput(event.target.value)
    }
    const handleReset = event => {
        setinput(event.target.value)
    }
    
    return (
        <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Address Information
            </h6>
            <div className="flex flex-wrap">
                <InputWithLevel width='lg:w-12/12' bodyClass={['px-4']} type='text' value={input} placeholder='Address Line 1' isFocused={true} id='address_line_1' changeHandle={changeHandle} errors={null}>Address Line 1</InputWithLevel>
                <InputWithLevel width='lg:w-12/12' bodyClass={['px-4']} type='text' value={input} placeholder='Address Line 2' isFocused={true} id='address_line_2' changeHandle={changeHandle} errors={null}>Address Line 2</InputWithLevel>
                <SelactWithLevel width='lg:w-4/12' bodyClass={['px-4']} placeholder='Select State' isFocused={true} id='state' list={stateArray} selectHandle={stateChangeHandle} errors={null}>State</SelactWithLevel>
                <SelactWithLevel width='lg:w-4/12' bodyClass={['px-4']} placeholder='Select State' isFocused={true} id='state' list={stateArray} selectHandle={stateChangeHandle} errors={null}>State</SelactWithLevel>
                <SelactWithLevel width='lg:w-4/12' bodyClass={['px-4']} placeholder='Select State' isFocused={true} id='state' list={stateArray} selectHandle={stateChangeHandle} errors={null}>State</SelactWithLevel>
                <SelactWithLevel width='lg:w-6/12' bodyClass={['px-4']} placeholder='Select Address Type' isFocused={true} id='address_type' list={addresstypeArray} selectHandle={stateChangeHandle} errors={null}>Address Type</SelactWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={input} placeholder='Name of addressee' isFocused={true} id='address_name' changeHandle={changeHandle} errors={null}>Name of Addresee</InputWithLevel>
                <InputWithLevel width='lg:w-6/12' bodyClass={['px-4']} type='text' value={input} placeholder='Number of addressee' isFocused={true} id='address_number' changeHandle={changeHandle} errors={null}>Number of Addresee</InputWithLevel>
            </div> <div className="px-4 mt-10">
            <ActionButton handleClick={handleSubmit} btnClass={['bg-blue-500 active:bg-blue-600']}>Submit</ActionButton> 
            <ActionButton handleClick={handleReset} btnClass={['bg-red-500 active:bg-red-600']}>Reset</ActionButton> 
            </div>
        </form>
    )
}
const mapStateToProps = (state) => {
    const AddressType = state.AddressTypeReducer;
    const States = state.PinReducer;
    return {
        AddressTypes: AddressType.data,
        states: States.states,
        districts: States.districts,
        pins: States.pins
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetAddressTyeActionDispatch: (state) => dispatch(GetAddressTypeAction(state)),
        GetStatesActionDispatch: (state) => dispatch(GetStatesAction(state)),
        GetDistrictsActionDispatch: (state) => dispatch(GetDistrictsAction(state)),
        GetPinsActionDispatch: (state) => dispatch(GetPinsAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressForm)