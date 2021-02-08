import React from 'react'

const AllListCard = (props) => {
    return (
        <>
            <span className="cursor-pointer text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                All
            </span>
            <span className="cursor-pointer text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                Teaching Staff
            </span>
            <span className="cursor-pointer text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                Admin
            </span>
            <span className="cursor-pointer text-xs font-semibold my-2 inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 uppercase last:mr-0 mr-1">
                Non-Teaching
            </span>

        </>
    )
}
export default AllListCard