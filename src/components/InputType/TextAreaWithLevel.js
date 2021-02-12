import InputFieldError from 'components/Error/InputFieldError';
import React, { useEffect } from 'react'

const TextAreaWithLevel = ({ width = 'lg:w-12/12', children, rows, cols=80, value, placeholder, isFocused, id, changeHandle, errors }) => {
    const inputRef = React.useRef();
    useEffect(() => {
        if (isFocused && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isFocused])
    return (
        <div className={`w-full ${width}`}>
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor={id}
                >
                    {children}
                </label>
                <textarea
                    id={id}
                    rows={rows}
                    cols={cols}
                    onChange={changeHandle}
                    value={value}
                    placeholder={placeholder}
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                ></textarea>
            <InputFieldError error={errors && errors} />
            </div>
        </div>
    )
}
export default TextAreaWithLevel