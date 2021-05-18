import { useState, useEffect } from 'react';


const Card = (props) => {
  // console.log(props.photo);
  return (
    <div className="Card" onClick={ props.shuffleCards }>
      <img src={ props.photo } alt={ props.veggieName } />
      <p>{ props.veggieName }</p>
    </div>
  );
}

export default Card;