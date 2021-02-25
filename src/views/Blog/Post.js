import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom'
const Post = ({ blogs, newBlog }) => {
    const { id } = useParams();
    const [blog, setBlog] = useState()
    const history = useHistory();

    useEffect(() => {
        if(newBlog?.id)
            history.push('blog/blogs/all')
    }, [newBlog])

    useEffect(() => {
        blogs.data.forEach(element => {
            if (element.id == id) {
                setBlog(element)
            }
        });
    }, [id, blogs])
    useEffect(() => {

    }, [blog])
    return (
        <div className="mt-6">
            {<div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md px-6 py-8">
                <div className="mt-2">
                    <Link to="/blog/all/1"
                        className="text-2xl text-gray-700 font-bold hover:underline">{blog?.title}</Link>
                    <div className="flex justify-between items-center mt-4"><span className="font-light text-gray-600">mar 4,
                                2019</span>
                        <div>
                            <a href="#/"
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a><a href="#/"
                                    className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                            <a href="#/"
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                            <a href="#/"
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                            <a href="#/"
                                className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                        </div>
                    </div>
                    <div className="flex justify-start mt-3 bg-blue-200 p-2">
                        <div><a href="#/" className="flex items-center"><img
                            src={blog?.user?.avatar}
                            alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                            <h1 className="text-gray-700 font-bold hover:underline">{blog?.user?.name}</h1>
                        </a></div>
                    </div>
                    <p className="mt-2 text-gray-600">{blog?.short_descrition}</p>
                    <hr className='my-4' />
                    <div dangerouslySetInnerHTML={{ __html: blog?.description }}></div>
                </div>
            </div>}
        </div>
    )
}
const mapStateToProps = (state) => {
    const Blog = state.BlogReducer;
    console.log('blogs', Blog)
    return {
        blogs: Blog.blogs,
        newBlog: Blog.blog,
    };
};

export default connect(
    mapStateToProps,
    null
)(Post)