import React from 'react'
const AvatarNameCardBox = (props) => {
    return (
        <div className="flex-1 ">
            <div className="flex items-center bg-white m-2 p-2 rounded">
                <div className="flex-shrink-0 w-10 h-10">
                    <img className="w-full h-full rounded-full"
                        src={props.avatar}
                        alt="Avatar" />
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap">{props.name}</p>
                </div>
                {props?.icon && <i className={`fas ${props.icon}`} style={{marginLeft : '15px'}}></i>}
            </div>
        </div>
    )
}
export default AvatarNameCardBox