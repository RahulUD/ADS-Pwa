import React from 'react'
import { Link } from 'react-router-dom'
const AvatarNameCard = (props) => {
    return (
        <div className="flex items-center">
            
            <div className="flex-shrink-0 w-10 h-10">
                <img className="w-full h-full rounded-full"
                    src={props.avatar}
                    alt="Avatar" />
            </div>
            <div className="ml-3">
                <Link to={`/admin/student/${props.id}`} className="text-gray-900 whitespace-no-wrap">{props.name}</Link>
            </div>
        </div>
    )
}

export default AvatarNameCard