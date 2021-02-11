import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { GetContactTypeAction } from 'redux/actionCreator/ContactTypeAction';
import { GetRelationAction } from 'redux/actionCreator/RelationAction';
const ParentForm = (props) => {
    const { contactTypes, relations } = props
    useEffect(() => {
        props.GetContactTyeActionDispatch()
        props.GetRelationActionDispatch()
    }, [])
    return (
        <form>
            <hr className="mt-6 border-b-1 border-gray-400" />

            <h6 className="text-gray-500 text-sm mt-3 mb-6 font-bold uppercase">
                Parents / Guardian
            </h6>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Relation
                  </label>
                        <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                            <option className="py-1" selected disabled>Select Relation Type</option>
                            {relations && relations.map(relation => (<option className="py-1">{relation.type}</option>))}
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
                <div className="w-full lg:w-12/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Adhar Number
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
                            Contact Type
                  </label>
                        <select className="w-full border bg-white rounded px-3 py-2 outline-none">
                            <option className="py-1" selected disabled>Select Contact Type</option>
                            {contactTypes && contactTypes.map(contactType => (<option className="py-1">{contactType.type}</option>))}
                        </select>
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="relative w-full mb-3">
                        <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                        >
                            Contact
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
    const ContactType = state.ContactTypeReducer;
    const Relation = state.RelationReducer;
    return {
        contactTypes: ContactType.data,
        relations: Relation.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetContactTyeActionDispatch: (state) => dispatch(GetContactTypeAction(state)),
        GetRelationActionDispatch: (state) => dispatch(GetRelationAction(state))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ParentForm)