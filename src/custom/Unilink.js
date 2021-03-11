import React from 'react'
import { Link } from 'react-router-dom'
export default ({link, title, description, className='text-gray-700'}) => {
    return (
        <>
            {link?.includes('http') ? <a className={`hover:text-gray-900 font-semibold block pb-2 text-sm ${className}`} href={link} target='_blank' rel="noopener noreferrer" alt={description}>{title}</a> : <Link
                className={`hover:text-gray-900 font-semibold block pb-2 text-sm ${className}`}
                to={link}>
                {title}
            </Link>}
        </>
    )
}