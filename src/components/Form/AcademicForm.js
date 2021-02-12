import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetStdAction } from 'redux/actionCreator/StdAction';
const AcademicForm = (props) => {
    useEffect(() => {
        props.GetStdActionDispatch()
    }, [])
    return (
        <form>
            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Academic Information
            </h6>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Std
                  </label>
                        <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                            <option className="py-1" selected disabled>Select Std</option>
                            {props.stds && props.stds.map(std => (<option className="py-1">{std.name}</option>))}
                        </select>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Roll Number
                  </label>
                        <input
                            type="email"
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
                            TC Number
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
                            Type
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input id='gender' name="gender" type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Hosteler</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input id='gender' name="gender" type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">Day Cum</span>
                        </label>
                    </div>
                </div>

                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            School Transport
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input id='gender' name="gender" type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">UP65DJ6717</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input id='gender' name="gender" type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">BR34DJ6717</span>
                        </label>
                        <label className="inline-flex items-center mr-4">
                            <input id='gender' name="gender" type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">None</span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-10">
                <button

                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                >
                    Next
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
    const Std = state.StdReducer;
    console.log('stds', Std.data)
    return {
        stds: Std.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetStdActionDispatch: (state) => dispatch(GetStdAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AcademicForm)