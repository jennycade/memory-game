import './App.css';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <Gameboard numCards={30} />
    </div>
  );
}

export default App;
