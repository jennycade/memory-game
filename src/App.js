import { useState } from 'react';
import './App.css';
import Game from './Game';

function App() {
  const [display, setDisplay] = useState('game');
  const [numCards, setNumCards] = useState(3);
  const [userInput, setUserInput] = useState(numCards);
  const [message, setMessage] = useState('');

  const chooseDifficulty = (event) => {
    setUserInput(event.target.value);
    const newNumber = parseInt(event.target.value);
    if (newNumber > 0 && newNumber <= 30) {
      setNumCards(event.target.value);
      setMessage('');
    }
    else {
      setMessage('Choose a number between 1 and 30.');
    }
  }

  if (display === 'game') {
    return (
      <div className="App">
        <button onClick={() => {setDisplay('settings')}}>Settings</button>
        <Game numCards={numCards} />
      </div>
    );
  }

  if (display === 'settings') {
    return (
      <div className="App">
        <label>Number of cards</label>
        <input value={userInput} onChange={chooseDifficulty} />
        { message !== '' ? message : '' }
        <button onClick={() => {setDisplay('game')}}>Play game with {numCards} cards</button>
      </div>
    );
  }
  
}

export default App;
