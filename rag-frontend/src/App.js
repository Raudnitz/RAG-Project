import React, { useState } from 'react';
import OpenGamesList from './OpenGamesList.js';

function App() {
    const [openGames, setOpenGames] = useState([
        {
            id: 'g1',
            name: 'game1',
            players: ['p1', 'p2'],

        },
        {
            id: 'g2',
            name: 'game1',
            players: ['p1', 'p2'],

        }
    ])
    const [players, setPlayers] = useState([
        {
            id: 'p1',
            name: 'player1',
            score: 10
        },
        {
            id: 'p2',
            name: 'player2',
            score: 10
        }
    ])

    return (
        <OpenGamesList key={openGames} openGames={openGames} />
    )
}

export default App;
