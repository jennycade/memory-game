import './App.css';
import Game from './Game';

function App() {
  
  console.log('I am a line in App.js. I am being run.');
  return (
    <div className="App">
      <Game numCards={3} />
    </div>
  );
}

export default App;
