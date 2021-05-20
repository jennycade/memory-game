import './App.css';
import Game from './Game';
import { useState } from 'react';

function App() {
  const [gameStatus, setGameStatus] = useState('playing');

  const loseGame = () => {
    setGameStatus('lost');
    setTimeout(() => setGameStatus('playing'), 5000); // sort of works? re-renders twice.
    
  }
  console.log('I am a line in App.js. I am being run.');

  // something in the render has to change in order to start a new game.
  // TODO: cards get new images but not new number of times they've been clicked—why?
  return (
    <div className="App">
      <p>{gameStatus}</p> 
      <Game numCards={3} loseGame={loseGame} gameStatus={gameStatus} />
    </div>
  );
}

export default App;
