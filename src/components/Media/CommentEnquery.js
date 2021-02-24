import React from "react"
import { BASE_URL } from "utility/constant/EndPoints"

const CommentEnquery = (props) => {
    const comment = props.data
    const user = comment.user
    return (
        <div className="flex py-2 bg-gray-100 p-5 mb-1">
            <img src={`${BASE_URL}${user?.avatar}`} alt="avatar" className="w-10 h-10" />
            <div className="flex-1 px-3">
                <div className="font-small text-sm text-gray-900 mb-1">{user?.name}</div>
                <span className="text-gray-800 text-sm">
                    {comment.comment}
                </span>
            </div>
        </div>
    )
}
export default CommentEnquery