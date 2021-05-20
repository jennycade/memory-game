import { useState } from 'react';


const Card = (props) => {
  console.log('I am a line in Card.js. I am being run.');

  return (
    <div style={{order: props.order}} className="Card">
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName } - Clicked {0} times</p>
    </div>
  );
}

export default Card;