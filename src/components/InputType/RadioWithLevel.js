import InputFieldError from 'components/Error/InputFieldError';
import React, { useEffect } from 'react'

const RadioWithLevel = ({ width = 'lg:w-12/12', fieldClass = [], bodyClass = [], levelClass = [], children, isFocused, id, radioHandle, list, errors }) => {
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
                    className={`block uppercase text-gray-700 text-xs font-bold mb-2 ${levelClass}`}
                    htmlFor={id}>
                    {children}
                </label>
                {list && list.map(item => (<label key={item.key} className="inline-flex items-center mr-4">
                    <input onClick={radioHandle} id={id} name={id} value={item.key} type="radio" className="form-radio h-5 w-5 text-gray-600" /><span className="ml-2 text-gray-700">{item.value}</span>
                </label>))}
                <InputFieldError error={errors && errors} />
            </div>
        </div>
    )
}
export default RadioWithLevel