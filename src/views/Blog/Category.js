import React from 'react'
export default () => {
    return (
        <>
            <h1 class="mb-4 text-xl font-bold text-gray-700">Categories</h1>
            <div class="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                <ul>
                    <li><a href="#/" class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                    AWS</a></li>
                    <li class="mt-2"><a href="#/"
                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                    Laravel</a></li>
                    <li class="mt-2"><a href="#/"
                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- Vue</a>
                    </li>
                    <li class="mt-2"><a href="#/"
                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                    Design</a></li>
                    <li class="flex items-center mt-2"><a href="#/"
                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                    Django</a></li>
                    <li class="flex items-center mt-2"><a href="#/"
                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">- PHP</a>
                    </li>
                </ul>
            </div>
        </>
    )
}