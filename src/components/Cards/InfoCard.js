import React from 'react'
export default ({title, children}) => {
    return (
        
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    <h6 className="text-xl font-semibold">{title}</h6>
                    {children}
                </div>
            </div>
    )
}