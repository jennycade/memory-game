import { useState } from 'react';
import Card from './Card';


const Gameboard = (props) => {

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

  return (
    <div className="Gameboard">
      { cards.map(card => <Card key={card.key} order={cardOrder[card.key]} shuffleCards={ () => shuffleCards() } photo={ card.image } veggieName={ card.name } />) }
    </div>
  );
}

export default Gameboard;