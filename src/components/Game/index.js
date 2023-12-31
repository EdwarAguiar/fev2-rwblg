import React, { useState, useEffect} from 'react'
import { Container, Tile } from './styles'

export const Game = () => {
  const [player,setPlayer] = useState('One')
  const [gameOver,setGameOver] = useState('')
  const [tiles,setTiles] = useState(['','','','','','','','',''])

  const reset = () => {
    setPlayer('One')
    setGameOver('')
    setTiles(['','','','','','','','',''])
  }

  function checkStatus(){
    if(tiles[0] && tiles[0] === tiles[1] && tiles[0] === tiles[2]) return player
    if(tiles[1] && tiles[1] === tiles[4] && tiles[1] === tiles[7]) return player
    if(tiles[2] && tiles[2] === tiles[5] && tiles[2] === tiles[8]) return player

    if(tiles[0] && tiles[0] === tiles[3] && tiles[0] === tiles[6]) return player
    if(tiles[0] && tiles[0] === tiles[4] && tiles[0] === tiles[8]) return player
    if(tiles[3] && tiles[3] === tiles[4] && tiles[3] === tiles[5]) return player

    if(tiles[6] && tiles[6] === tiles[7] && tiles[6] === tiles[8]) return player
    if(tiles[2] && tiles[2] === tiles[4] && tiles[2] === tiles[6]) return player

    let result = tiles.filter(tile => tile === '').length
    return result > 0 ? '' : "There Is Not Winner"

  }

  useEffect(()=>{
    setGameOver(checkStatus())
  })

  const handleClick = (index) => {
    const newTiles = [...tiles]
    if(newTiles[index] !== '') return
    
    newTiles[index] = player
    setTiles(() => newTiles)
    setPlayer(prev => prev === 'One'? 'Two' : "One")
  }

  return (
    <div>
      <h1>La Vieja Game</h1>
      <div>
        {gameOver === '' && <h1>{`It is Player ${player}'s turn.`}</h1>}
        {gameOver === 'No Winner' && <h1>{`Game Over ${gameOver} try again`}</h1>}
        {gameOver === player && <h1>{`Player ${player === 'One' ? "Two" : "One"} Wins!`}</h1>}
      </div>
      <Container>
        {tiles.map((tile,index)=> {
          return <Tile key={'tile'+index} className='tile' onClick={() => handleClick(index)}><p>{tile === 'One'? 'X' : tile === 'Two' ? 'O' : ''}</p></Tile>
        })}
      </Container>
    </div>
  )
}
