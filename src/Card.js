// import { useState } from 'react';

import { useEffect, useState } from "react";


const Card = (props) => {
  const [clickEnabled, setClickEnabled] = useState(false);

  const [clicks, setClicks] = useState(0);

  const clickCard = () => {
    if (clickEnabled) {
      if (clicks === 0) {
        // up clicks
        // score point
        setClicks(clicks + 1);
        props.scorePoint();
        props.shuffleCards();
      } else {
        props.newGame(3);
      }
      
    }
  }

  useEffect(() => {
    setClicks(0);
    setClickEnabled(false);
  }, [props.gameNumber]);

  return (
    <div style={{order: props.order}} className="Card" onLoad={() => {setClickEnabled(true)}} onClick={clickCard}>
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName }</p>
      <p>{ clickEnabled ? 'click enabled' : 'click not enabled' }</p>
    </div>
  );
}

export default Card;