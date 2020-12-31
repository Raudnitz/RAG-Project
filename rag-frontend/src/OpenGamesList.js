import React, { Component } from 'react'
import OpenGame from './OpenGame.js'

export class OpenGamesList extends Component {
    render() {
        return (
            this.props.openGames.map(game =>
                {
                    return <OpenGame key={game.id} openGame={game}/>
                }
            )
        )
    }
}

export default OpenGamesList
