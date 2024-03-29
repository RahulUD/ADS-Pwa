import React from 'react'
export default () => {
    return (
        <>
            <h1 class="mb-4 text-xl font-bold text-gray-700">Recent Post</h1>
            <div class="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                <div class="flex justify-center items-center"><a href="#/"
                    class="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500">Laravel</a>
                </div>
                <div class="mt-4"><a href="#/" class="text-lg text-gray-700 font-medium hover:underline">Build
                                Your New Idea with Laravel Freamwork.</a></div>
                <div class="flex justify-between items-center mt-4">
                    <div class="flex items-center"><img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                        alt="avatar" class="w-8 h-8 object-cover rounded-full" /><a href="#/"
                            class="text-gray-700 text-sm mx-3 hover:underline">Alex John</a></div><span
                                class="font-light text-sm text-gray-600">Jun 1, 2020</span>
                </div>
            </div>
        </>
    )
}