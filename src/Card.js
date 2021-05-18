import { useState, useEffect } from 'react';


const Card = (props) => {
  const [numClicks, setNumClicks] = useState(0);

  const clickCard = () => {
    setNumClicks(numClicks + 1);
    props.shuffleCards(); // this only assigns new order number for THIS card.
  }

  return (
    <div className="Card" onClick={ clickCard }>
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName } - #{ props.getCardOrder() } - Clicked {numClicks} times</p>
    </div>
  );
}

export default Card;