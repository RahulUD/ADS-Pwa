import React from 'react'
import { Link } from 'react-router-dom';
import { BASE_URL } from 'utility/constant/EndPoints';
const BlogCard = ({ id, user, title, short_descrition, description, created_at, updated_at }) => {
    return (
        <>
            <div className="max-w-4xl mt-4 py-6 bg-white rounded-lg shadow-xl border px-6">

                <div className="flex justify-between items-center"><span className="font-light text-gray-600">{updated_at}</span><a href="#/"
                    className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                </div>
                <div className="mt-2"><Link to={`/blog/blogs/${id}`}
                    className="text-2xl text-gray-700 font-bold hover:underline">{title}</Link>
                    <p className="mt-2 text-gray-600">{short_descrition}</p>
                </div>
                <div className="flex justify-between items-center mt-4"><a href="#/"
                    className="text-blue-500 hover:underline"><Link to={`/blog/blogs/${id}`}>Read more</Link></a>
                    <div><a href="#/" className="flex items-center"><img
                        src={`${BASE_URL}${user?.avatar}`}
                        alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                        <h1 className="text-gray-700 font-bold hover:underline">{user?.name}</h1>
                    </a></div>
                </div>
            </div>
        </>
    );
}

export default BlogCard