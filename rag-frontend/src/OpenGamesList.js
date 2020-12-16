import React from 'react'
import OpenGame from './OpenGame.js'

export default function OpenGamesList({openGames}) {
    return(
         openGames.map(game =>
            {
                return <OpenGame openGame={game}/>
            }
        )
    )

}