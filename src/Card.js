import { useState } from 'react';


const Card = (props) => {
  const [numClicks, setNumClicks] = useState(0);

  const clickCard = () => {
    if (numClicks === 0) {
      // up the score
      props.scorePoint();
      setNumClicks(numClicks + 1);
      props.shuffleCards();
    } else {
      // lose the game!
      props.loseGame();
    }
  }

  return (
    <div style={{order: props.order}} className="Card" onClick={ clickCard }>
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName } - Clicked {numClicks} times</p>
    </div>
  );
}

export default Card;