import { useEffect, useState } from 'react';
import Card from './Card';


const Gameboard = (props) => {

  const [cards, setCards] = useState(props.cards);

  let cardOrder = [];
  for (let i=0; i<props.numCards; i++) {
    cardOrder.push(i);
  }

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

    cardOrder = newOrder; // no, this makes THIS component re-render.
    console.log('Set new card order');
    console.log(newOrder);

  }

  const getCardOrder = (key) => {
    console.log(`Card with key ${key} should be in spot #${cardOrder[key]}`);
    return cardOrder[key];
  }

  // useEffect(() => {pickCards(props.numCards)}, [props.numCards]);

  return (
    <div className="Gameboard">
      { cards.map(card => <Card key={card.key} getCardOrder={ () => getCardOrder(card.key) } shuffleCards={ () => shuffleCards() } photo={ card.image } veggieName={ card.name } />) }
    </div>
  );
}

export default Gameboard;