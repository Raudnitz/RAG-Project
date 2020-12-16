import React, {useState} from 'react';
import OpenGamesList from './OpenGamesList.js';
function App() {
  const [openGames, setOpenGames] = useState(['game1', 'game2'])
  return (
      <OpenGamesList key={openGames} openGames={openGames} />
  )
}

export default App ;
