// import { useState } from 'react';
import Card from './Card';
import Scoreboard from './Scoreboard';


const Gameboard = (props) => {

  console.log('I am a line in Gameboard.js. I am being run.');

  return (
    <div className="Gameboard">
      <Scoreboard score={ 0 } />
      <div className="Cards">
        { props.cards.map(card => <Card key={card.key} photo={ card.image } veggieName={ card.name } />) }
      </div>
    </div>
  );
}

export default Gameboard;