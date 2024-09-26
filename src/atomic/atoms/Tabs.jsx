import React, { Children } from 'react'


export default props => {
    const {children, buttons, buttonsContainer = 'menu'} = props

    const ButtonsContainer = buttonsContainer
    return (
        <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
        </>
    )
}