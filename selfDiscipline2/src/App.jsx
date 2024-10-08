import { useState } from "react"
import GameBoard from "./atomic/molecules/GameBoard"
import Player from "./atomic/molecules/Player"
import Log from "./atomic/molecules/Log"
import { WINNING_COMBINATIONS } from "./winning-combinations"
import GameOver from "./atomic/molecules/GameOver"

const PLAYERS = {
  X : 'Player 1',
  O : 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X'
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

const deriveWinner = (gameBoard, players) => {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if(firstSquareSymbol && 
      firstSquareSymbol === secondSquareSymbol && 
      firstSquareSymbol === thirdSquareSymbol){
        winner = players[firstSquareSymbol];
      }
  }

  return winner
}

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map(arr => [...arr])]

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player
  }
return gameBoard
}


function App() {
  const [players, setPlayers] = useState(PLAYERS)
  const [gameTurns, setGameTurns] = useState([])
  const activePlayer = deriveActivePlayer(gameTurns)

  const gameBoard = deriveGameBoard(gameTurns)
  const winner = deriveWinner(gameBoard, players)

  const hasDraw = gameTurns.length === 9 && !winner

  const handleSelectSquare = (rowIndex, colIndex) => {
    // state가 이전 상태값에 의존하는경우 콜백함수로 업데이트시킨다
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]

      return updatedTurns
    })
  }

  const handleRematch = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol] : newName
      }
    })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={PLAYERS.X} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlePlayerNameChange}/>
          <Player name={PLAYERS.O} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} handleRematch={handleRematch}/>}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
