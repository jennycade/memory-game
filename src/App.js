import './App.css';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import CardSubset from './CardSubset';

function App() {
  return (
    <div className="App">
      <Scoreboard />
      <CardSubset numCards={3}/>
    </div>
  );
}

export default App;
