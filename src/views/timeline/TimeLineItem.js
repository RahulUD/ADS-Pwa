import React from 'react'
import styles from './Admission.module.css'
export default ({title, children, orentation}) => {
    return (
        <>
            <div className={`${styles.container} ${styles[orentation]}`}>
                <div className={`${styles.content} shadow-sm`}>
                    <h2>{title}</h2>
                    {children}
                </div>
            </div>
        </>
    )
}