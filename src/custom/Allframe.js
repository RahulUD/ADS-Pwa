import React from 'react'
export default ({url}) => {
    return (
        <>
            <iframe src={url} sandbox='' title='if' allow-scripts={true} allow-same-origin={true}/>
        </>
    )
}