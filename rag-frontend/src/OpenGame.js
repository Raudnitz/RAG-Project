import React, { Component } from 'react'
import Box from '@material-ui/core/Box'

class OpenGame extends Component {
    render() {
        return (
            <div>
                <Box bgcolor='#f1f1f1' m={1} p={1}>
                    {this.props.openGame.name}
                    <br/>
                    {this.props.openGame.players}
                    <br/>
                    <button>Play</button>
                </Box>
            </div>
        )
    }
}

export default OpenGame;
