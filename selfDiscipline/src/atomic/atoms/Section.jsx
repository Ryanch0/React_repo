import React from 'react'
export default props => {
    const {children, title, id} = props

    return (
        <section id={id}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}