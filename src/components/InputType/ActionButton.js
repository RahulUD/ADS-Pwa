import React from 'react'

const ActionButton = (props) => {
    const {handleClick, children, btnClass=[]} = props
    return (
            <button 
                onClick={handleClick}
                className={`text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 ${btnClass}`}
                type="button">
                {children}
            </button>
    )
}
export default ActionButton