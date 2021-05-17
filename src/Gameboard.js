import { useState } from 'react';
import Card from './Card';

const Gameboard = (props) => {
  let initialCards = [];
  for (let i=0; i<props.numCards; i++) {
    initialCards.push(<Card />);
  }

  const [cards, setCards] = useState(initialCards);

  return (
    <div className="Gameboard">
      { cards }
    </div>
  );
}

export default Gameboard;