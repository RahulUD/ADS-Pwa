import React from 'react'
const AvatarNameCard = (props) => {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10">
                <img className="w-full h-full rounded-full"
                    src={props.avatar}
                    alt="Avatar" />
            </div>
            <div className="ml-3">
                <p className="text-gray-900 whitespace-no-wrap">{props.name}</p>
            </div>
        </div>
    )
}
export default AvatarNameCard