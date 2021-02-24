import React from 'react'
export default ({ title, children, icon, iconColor = 'bg-blue-400' }) => {
    return (
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
            <div className="px-4 py-5 flex-auto">
                {icon && <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${iconColor}`}>
                    <i className={`${icon}`}></i>
                </div>}
                <h6 className="text-xl font-semibold">{title}</h6>
                {children}
            </div>
        </div>
    )
}