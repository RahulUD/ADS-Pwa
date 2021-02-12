import InputFieldError from 'components/Error/InputFieldError';
import React, { useEffect } from 'react'

const InputWithLevel = ({ width = 'lg:w-12/12', fieldClass=[], bodyClass=[], levelClass=[], children, type, value, placeholder, isFocused, id, changeHandle, errors }) => {
    const inputRef = React.useRef();
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])
    return (
        <div className={`w-full ${bodyClass} ${width}`}>
            <div className="relative w-full mb-3">
                <label
                    className={`block uppercase text-gray-700 text-xs font-bold mb-2 ${levelClass}`}                    htmlFor={id}
                >
                    {children}
                </label>
                <input
                    placeholder={placeholder}
                    id={id}
                    value={value}
                    type={type}
                    onChange={changeHandle}
                    className={`px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150 ${fieldClass}`}
                />
            <InputFieldError error={errors && errors} />
            </div>
        </div>
    )
}
export default InputWithLevel