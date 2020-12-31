import React from 'react'
import Box from '@material-ui/core/Box'

export default function OpenGame({ openGame }) {
    return(
            <div>
                <Box bgcolor='#f1f1f1' m={1} p={1}>
                    {openGame.name}
                    <br/>
                    {openGame.players}
                    <br/>
                    <button>Play</button>
                </Box>
            </div>
    )

}
