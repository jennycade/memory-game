import { useState } from 'react';


const Card = (props) => {
  const [numClicks, setNumClicks] = useState(props.numClicks);
  const [photo, setPhoto] = useState(props.photo);
  const [veggieName, setVeggieName] = useState(props.veggieName);

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
  console.log('I am a line in Card.js. I am being run.');

  return (
    <div style={{order: props.order}} className="Card" onClick={ clickCard }>
      <img src={ photo } alt={ veggieName } />
      <p>{ veggieName } - Clicked {numClicks} times</p>
    </div>
  );
}

export default Card;