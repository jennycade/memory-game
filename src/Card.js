// import { useState } from 'react';

import { useEffect, useState } from "react";


const Card = (props) => {
  console.log('I am a line in Card.js. I am being run.');

  const [clicks, setClicks] = useState(0);

  const clickCard = () => {
    if (clicks === 0) {
      // up clicks
      // score point
      setClicks(clicks + 1);
      props.scorePoint();
    } else {
      props.newGame(3);
    }
  }

  useEffect(() => {
    setClicks(0);
  }, [props.gameNumber]);

  return (
    <div style={{order: props.order}} className="Card" onClick={clickCard}>
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName } - Clicked { clicks } times</p>
    </div>
  );
}

export default Card;