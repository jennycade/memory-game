import { useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';


const Gameboard = (props) => {
  const [score, setScore] = useState(0);
  const scorePoint = () => {
    setScore(score + 1);
    // score += 1;
  }

  // const [cards, setCards] = useState(props.cards);
  const cards = props.cards;

  let initCardOrder = [];
  for (let i=0; i<props.cards.length; i++) {
    initCardOrder.push(i);
  }

  const [cardOrder, setCardOrder] = useState(initCardOrder);

  const shuffleCards = () => {
    let newOrder = [];
    for (let i=0; i<cards.length; i++) {
      newOrder.push(i);
    }
    // Fisher-Yates shuffle
    let m = newOrder.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = newOrder[m];
      newOrder[m] = newOrder[i];
      newOrder[i] = t;
    }

    console.log(newOrder);
    setCardOrder(newOrder);
  }
  console.log('I am a line in Gameboard.js. I am being run.');

  return (
    <div className="Gameboard">
      <Scoreboard score={ score } />
      <div className="Cards">
        { cards.map(card => <Card key={card.key} order={cardOrder[card.key]} shuffleCards={ () => shuffleCards() } photo={ card.image } veggieName={ card.name } scorePoint ={ scorePoint } loseGame={props.loseGame} numClicks={0} />) }
      </div>
    </div>
  );
}

export default Gameboard;