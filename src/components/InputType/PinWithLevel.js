import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetDistrictsAction } from 'redux/actionCreator/PinAction';
import { GetPinsAction } from 'redux/actionCreator/PinAction';
import { GetStatesAction } from 'redux/actionCreator/PinAction';
const PinWithLevel = (props) => {
    const { states, districts, pins, pinHandle } = props
    useEffect(() => {
        props.GetStatesActionDispatch()
    }, [])
    useEffect(() => {

    }, [states, districts])
    const stateChangeHandle = event => {
        props.GetDistrictsActionDispatch(event.target.value)
    }
    const districtChangeHandle = event => {
        props.GetPinsActionDispatch(event.target.value)
    }
    
    return (
        <>
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        State
                  </label>
                    <select onChange={stateChangeHandle} className="w-full border bg-white rounded px-3 py-2 outline-none">
                        <option className="py-1" selected disabled>Select State</option>
                        {states && states.map(state => (<option className="py-1">{state.state}</option>))}
                    </select>
                </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Distric
                  </label>
                    <select onChange={districtChangeHandle} className="w-full border bg-white rounded px-3 py-2 outline-none">
                        <option className="py-1" selected disabled>Select Distric</option>
                        {districts && districts.map(district => (<option  className="py-1">{district.district}</option>))}
                    </select>
                </div>
            </div>
            <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                    <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                    >
                        Postal Code
                  </label>
                    <select onChange={pinHandle} id='pin' className="w-full border bg-white rounded px-3 py-2 outline-none">
                        <option className="py-1" selected disabled>Select Pin code</option>
                        {pins && pins.map(pin => (<option value={pin.id} className="py-1">{pin.pin} ({pin.sub_district})</option>))}
                    </select>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    const States = state.PinReducer;
    return {
        states: States.states,
        districts: States.districts,
        pins: States.pins
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetStatesActionDispatch: (state) => dispatch(GetStatesAction(state)),
        GetDistrictsActionDispatch: (state) => dispatch(GetDistrictsAction(state)),
        GetPinsActionDispatch: (state) => dispatch(GetPinsAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PinWithLevel)