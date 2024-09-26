import React from 'react'


export default props => {
    const {
        children,
        isSelected
    } = props
    return (
        <li>
            <button
                className={isSelected ? 'active' : undefined}
                {...props}>
                {children}
            </button>
        </li>
    )
}