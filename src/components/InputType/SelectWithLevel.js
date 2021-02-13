import InputFieldError from 'components/Error/InputFieldError';
import React, { useEffect } from 'react'

const SelactWithLevel = ({ width = 'lg:w-12/12',fieldClass=[], bodyClass=[], levelClass=[], children, placeholder, isFocused, id, list, selectHandle, errors }) => {
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
                    className={`${levelClass} block uppercase text-gray-700 text-xs font-bold mb-2`}
                    htmlFor={id}
                >
                    {children}
                </label>
                <select onChange={selectHandle} id={id} className={`${fieldClass} w-full border bg-white rounded px-3 py-2 outline-none`}>
                    <option className="py-1" selected disabled>{placeholder}</option>
                    {list && list.map(item => (<option value={item.key} className="py-1" >{item.value}</option>))}
                </select>

            </div>
            <InputFieldError error={errors && errors} />
        </div>
    )
}
export default SelactWithLevel