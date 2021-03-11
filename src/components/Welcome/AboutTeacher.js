import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { GetAboutTeacherAction } from 'redux/actionCreator/KeyvalueAction'
const AboutTeacher = ({ GetAboutTeacherActionDispatch, aboutTeacher }) => {
    useEffect(() => {
        GetAboutTeacherActionDispatch()
    }, [])
    useEffect(() => {
        console.log('desk message ********', aboutTeacher)
    }, [aboutTeacher])
    return (
        <>
            {aboutTeacher && <div className="w-full lg:w-12 px-4">
                <h2 className="text-4xl font-semibold">{aboutTeacher.title}</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                    {aboutTeacher.description}
                </p>
            </div>}
        </>
    )
}

const mapStateToProps = (state) => {
    const KeyValue = state.KeyValueReducer;
    return {
        aboutTeacher: KeyValue.aboutTeacher
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        GetAboutTeacherActionDispatch: (state) => dispatch(GetAboutTeacherAction(state)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AboutTeacher)