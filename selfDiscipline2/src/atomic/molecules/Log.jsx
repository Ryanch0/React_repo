import React from 'react'

export default props => {
    const {turns} = props

    return (
        <ol id='log'>
            {turns.map(item => {
                const {square, player} = item
                const {row, col} = square
                return (
                    <li key={`${row},${col}`}>{player} selected {row},{col}</li>
                )
            })}
        </ol>
    )
}