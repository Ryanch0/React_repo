import React, { useState } from 'react'
export default props => {
    const { name, symbol, isActive, onChangeName } = props
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)

    const handleEditClick = () => {
        setIsEditing(editing => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing
                    ?
                    <span className="player-name">{
                        playerName
                    }</span>
                    :
                    <input
                        value={playerName}
                        required
                        onChange={(event) => {
                            setPlayerName(event.target.value)
                        }}
                    />
                }
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}