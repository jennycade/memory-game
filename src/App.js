import './App.css';
import Game from './Game';
import { useEffect, useState } from 'react';

function App() {
  const [game, setGame] = useState([]);

  const resetGame = () => {
    setGame(<p>Reset game.</p>);
    setGame(<Game numCards={3} loseGame={ resetGame } score={0} />); // doesn't start a new game
  }

  useEffect(() => {
    setGame(<Game numCards={3} loseGame={ resetGame } score={0} />);
  }, []);

  
  console.log('I am a line in App.js. I am being run.');

  // something in the render has to change in order to start a new game.
  // TODO: cards get new images but not new number of times they've been clicked—why?
  return (
    <div className="App">
      { game }
    </div>
  );
}

export default App;
