import React from 'react'

const Input = ({ type, className, value, placeholder }) => {
    return (
        <input type={type} className={className} value={value} placeholder={placeholder} />
    )
}
export default Input