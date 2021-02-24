import ActionButton from 'components/InputType/ActionButton'
import InputWithLevel from 'components/InputType/InputWithLevel'
import TextAreaWithLevel from 'components/InputType/TextAreaWithLevel'
import React, { useState, useEffect} from 'react'
import { connect } from 'react-redux'
import Validation from 'utility/Validation'
import {PostBlogAction} from 'redux/actionCreator/BlogAction'
import RichEditor from './RichEditor'
import { useHistory } from 'react-router'
const Createpost = ({PostBlogActionDispatch, newBlog}) => {
    const history=useHistory()
    const [form, setForm] = useState({
        title: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },

        shortDescription: {
            value: '',
            validation: {
                required: true,
            },
            messages: null,
            valid: false,
            touched: false
        },
        description: {
            value: '',
            validation: {
                required: false,
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
    const tichHandleChange = event => {
        let element = form.description
        element.value = event
        element.touched = true
        const { isValid, messages } = Validation(event, form.description.validation)
        element.valid = isValid
        element.messages = messages
        setForm({ ...form, description: element })
    }
    const handleSubmit = () =>{
        PostBlogActionDispatch({title : form.title.value, description: form.description.value, short_descrition : form.shortDescription.value})
        history.push('blog/blogs/all')
    }

    return (
        <div className="mt-4 p-4 shadow-lg border">
            <InputWithLevel type='text' value={form.title.value} placeholder='Blog title' isFocused={true} id='title' changeHandle={handleChange} errors={form.title.messages}>Create Post </InputWithLevel>
            <TextAreaWithLevel value={form.shortDescription.value} placeholder='Short Description' isFocused={true} id='shortDescription' changeHandle={handleChange} errors={form.shortDescription.messages}></TextAreaWithLevel>
            <RichEditor value={form.description.value} placeholder='Blog Description' isFocused={true} changeHandle={tichHandleChange} errors={form.description.messages}/>
            <div className="mt-4">
                <ActionButton handleClick={handleSubmit}>Post</ActionButton>
                <ActionButton>Reset</ActionButton>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    const Blog = state.BlogReducer;
    console.log('blogs', Blog)
    return {
      blogs : Blog.blogs,
      newBlog : Blog.blog,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
        PostBlogActionDispatch:(state) => dispatch(PostBlogAction(state)),
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Createpost)