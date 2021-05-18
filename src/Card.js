import { useState } from 'react';


const Card = (props) => {
  const [numClicks, setNumClicks] = useState(0);

  const clickCard = () => {
    setNumClicks(numClicks + 1);
    props.shuffleCards();
  }

  return (
    <div className="Card" onClick={ clickCard }>
      <img src={ props.photo } alt={ props.veggieName } />
      {/* <p>{ props.veggieName } - Clicked {numClicks} times</p> */}
      <p>{ props.veggieName } - #{ props.order } - Clicked {numClicks} times</p>
    </div>
  );
}

export default Card;