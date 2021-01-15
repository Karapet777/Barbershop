import React from 'react'

const Button = ({ title, className, check }) => {
    return (
        <button className={className} onClick={check}>{title}</button>
    )
}
export default Button