import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { GetAddressTypeAction } from 'redux/actionCreator/AddressTypeAction';
import { GetPinsAction } from 'redux/actionCreator/PinAction';
const AddressForm = (props) => {
    const { AddressTypes, states} = props
    useEffect(() => {
        props.GetAddressTyeActionDispatch()
        props.GetPinsActionDispatch()
    }, [])
    return (
        <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Address Information
            </h6>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Address line 1
                  </label>
                        <input
                            type="text"
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
                            Address line 2
                  </label>
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                        />
                    </div>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            State
                  </label>
                  <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                            <option className="py-1" selected disabled>Select Address Type</option>
                            {AddressTypes && AddressTypes.map(AddressType => (<option className="py-1">{AddressType.type}</option>))}
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
                        <input
                            type="text"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                        />
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
                        <input
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
                            Type
                  </label>
                        <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                            <option className="py-1" selected disabled>Select Address Type</option>
                            {states && states.map(state => (<option className="py-1">{state}</option>))}
                        </select>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Name
                  </label>
                        <input
                            type="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"

                        />
                    </div>
                </div>
            </div>
            <div className="px-4 mt-10">
                <button
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
    const AddressType = state.AddressTypeReducer;
    const States = state.PinReducer;
    return {
        AddressTypes: AddressType.data,
        States: States.states
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetAddressTyeActionDispatch: (state) => dispatch(GetAddressTypeAction(state)),
        GetPinsActionDispatch: (state) => dispatch(GetPinsAction(state)),

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddressForm)