from flask import Flask
import json


api = Flask(__name__)

GAMES_MOCK = """
[
    {
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

    }
]
"""

PLAYERS_MOCK = """
[
    {
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

    }
]
"""


@api.route('/get_games')
def get_games():
    return json.dumps(GAMES_MOCK)


@api.route('/get_players')
def get_players():
    return PLAYERS_MOCK


if __name__ == '__main__':
    api.run(debug=True, port=4000, host='0.0.0.0')
