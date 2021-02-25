import React from 'react'
import { Link } from 'react-router-dom'
export default ({id,name, date, blog, days}) => {
    return (
        <div class="bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-2">
            <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0">
                    <Link to={`/blog/blogs/${blog}`} class="sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline">
                        {`${id})  ${date} ${name} (${days})`}
                    </Link>
                </div>
            </div>
        </div>
    )
}