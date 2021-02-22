import React from 'react'
import { Link } from 'react-router-dom'
export default () => {
    return (
        <div className="mt-6">
            <div className="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md px-6 py-8">
                <div className="flex justify-between items-center"><span className="font-light text-gray-600">mar 4,
                                2019</span><a href="#/"
                        className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Design</a>
                </div>
                <div className="mt-2"><Link to="/blog/all/1"
                    className="text-2xl text-gray-700 font-bold hover:underline">Accessibility tools for
                                designers and developers</Link>
                    <p className="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                </div>
                <div className="flex justify-between items-center mt-4"><a href="#/"
                    className="text-blue-500 hover:underline">Read more</a>
                    <div><a href="#/" className="flex items-center"><img
                        src="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=333&amp;q=80"
                        alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block" />
                        <h1 className="text-gray-700 font-bold hover:underline">Jane Doe</h1>
                    </a></div>
                </div>
            </div>
        </div>
    )
}